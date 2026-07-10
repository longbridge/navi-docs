"""
Download candlestick data from Yahoo Finance for the Playground.

Usage:
    pip install yfinance
    python website/scripts/download_security_data.py
"""

import json
from pathlib import Path
import yfinance as yf

TICKERS = {
    "AAPL": "NASDAQ:AAPL",
    "MSFT": "NASDAQ:MSFT",
    "GOOGL": "NASDAQ:GOOGL",
    "AMZN": "NASDAQ:AMZN",
    "TSLA": "NASDAQ:TSLA",
    "META": "NASDAQ:META",
    "NVDA": "NASDAQ:NVDA",
    "JPM":  "NYSE:JPM",
    "V":    "NYSE:V",
    "WMT":  "NYSE:WMT",
    "NFLX": "NASDAQ:NFLX",
}

# (pine_tf, yahoo_interval, yahoo_period)
# Yahoo Finance hard limits:
#   1m  -> 7 days
#   5m  -> 60 days
#   15m -> 60 days
#   30m -> 60 days
#   1h  -> 730 days (~2 years)
#   1d/1wk/1mo -> no limit, use "max"
TIMEFRAMES = [
    ("1",  "1m",  "7d"),
    ("5",  "5m",  "60d"),
    ("15", "15m", "60d"),
    ("30", "30m", "60d"),
    ("60", "1h",  "2y"),
    ("D",  "1d",  "max"),
    ("W",  "1wk", "max"),
    ("M",  "1mo", "max"),
]

OUT_DIR = Path(__file__).parent.parent / "public" / "data" / "security"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Synthetic turnover-rate generation. Yahoo Finance does not provide a turnover
# rate (换手率) or turnover (成交额), so we fabricate plausible values: turnover
# rate is mapped from each file's volume relative to its busiest bar, giving a
# roughly constant implied float (circleShare = amount / turnoverRate). Used by
# the chip-distribution (CYQ) feature; values are approximate, not exact.
TURNOVER_RATE_PEAK = 0.12   # busiest bar ≈ 12% turnover
TURNOVER_RATE_FLOOR = 0.003  # quiet (but non-zero volume) bars still accumulate

for ticker in TICKERS:
    t = yf.Ticker(ticker)
    for tf, interval, period in TIMEFRAMES:
        try:
            hist = t.history(period=period, interval=interval)
            if hist.empty:
                print(f"  EMPTY {ticker}-{tf}")
                continue
            rows = [
                {
                    "time":   int(ts.timestamp() * 1000),
                    "open":   round(float(row["Open"]),  4),
                    "high":   round(float(row["High"]),  4),
                    "low":    round(float(row["Low"]),   4),
                    "close":  round(float(row["Close"]), 4),
                    "volume": float(row["Volume"]),
                }
                for ts, row in hist.iterrows()
            ]
            max_vol = max((r["volume"] for r in rows), default=0.0) or 1.0
            bars = []
            for r in rows:
                vol = r["volume"]
                hlc3 = (r["high"] + r["low"] + r["close"]) / 3.0
                tr = TURNOVER_RATE_PEAK * vol / max_vol
                if vol > 0:
                    tr = max(tr, TURNOVER_RATE_FLOOR)
                tr = round(min(tr, 1.0), 4)
                bars.append({
                    **r,
                    # 成交额 ≈ volume × typical price (Yahoo gives no turnover).
                    "turnover": round(vol * hlc3),
                    # 换手率 (synthetic; see notes above).
                    "turnoverRate": tr,
                })
            out_path = OUT_DIR / f"{ticker}-{tf}.json"
            out_path.write_text(json.dumps(bars, separators=(",", ":")))
            print(f"  OK  {out_path}  ({len(bars)} bars)")
        except Exception as e:
            print(f"  ERR {ticker}-{tf}: {e}")
