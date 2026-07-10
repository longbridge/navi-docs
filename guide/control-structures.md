# Control Structures

All control structures in Navi are **expressions** — they produce a value. The last expression evaluated in the executed branch or iteration is the returned value. This means `if`, `for`, `while`, and `switch` can all appear on the right-hand side of an assignment.

## `if` / `else if` / `else`

```navi
if close > open {
    label.new(bar_index, high, "Bullish");
} else if close < open {
    label.new(bar_index, low, "Bearish");
} else {
    label.new(bar_index, close, "Doji");
}
```

### Returning a value from `if`

The last expression in each branch is the result. All branches must return the same type:

```navi
let x = if close > open {
    close;
} else {
    open;
};

plot(x);
```

With `else if`:

```navi
let x = if open > close {
    5;
} else if high > low {
    close;
} else {
    open;
};
```

When the `else` block is omitted, the result is `na` (or `false` / `""` for bool/String) when the condition is false:

```navi
let x = if close > open {
    close;
};
// x is na when close <= open
```

### Returning tuples from `if`

Each branch must return a tuple of the same structure:

```navi
let (v1, v2) = if close > open {
    (high, close);
} else {
    (close, low);
};
```

## `for` Loop

### Counting Form

```navi
let sum = 0.0;
for i = 0 to 9 {
    sum += close[i];
}
let averageClose = sum / 10;
```

With a step:

```navi
for i = 0 to 20 by 2 {}
// i = 0, 2, 4, 6, ..., 20
```

Reverse loop with negative step:

```navi
for i = 10 to 0 by -1 {
    arr.push(i);
}
// i = 10, 9, 8, ..., 0
```

### Collection Iteration (`for...in`)

Iterate over arrays with value only, or with both index and value:

```navi
var prices = Array.from(100.0, 200.0, 300.0);

// Value only
for value in prices {
    log.info(String.from(value));
}

// Index and value (destructured)
for (index, value) in prices {
    log.info(String.from(index) + ": " + String.from(value));
}
```

### Returning a value from `for`

A `for` loop returns the last expression evaluated in its final iteration. If no iterations execute, it returns `na`:

```navi
// Count how many OHLC values are greater than the SMA
let ohlcValues: Array<float> = Array.from(open, high, low, close);
fn qtyGreaterThan(value, array) {
    let result: int = 0;
    for currentElement in array {
        if currentElement > value {
            result += 1;
        }
        result;
    }
}
plot(qtyGreaterThan(ta.sma(close, 20), ohlcValues));
```

## `while` Loop

```navi
let i = 0;
let sum = 0.0;
while i < 10 {
    sum += close[i];
    i += 1;
}
```

### Returning a value from `while`

Like `for`, a `while` loop returns the last expression evaluated in its final iteration:

```navi
let i: int = 0;
let result: int = while i < 10 {
    i += 1;
    i * 2;
};
// result is 20 (last iteration: i = 10, 10 * 2 = 20)
```

## `break` and `continue`

- `break` exits the loop immediately. The loop returns the value of the last expression evaluated before `break`.
- `continue` skips the rest of the current iteration and proceeds to the next one.

```navi
for i = 0 to 99 {
    if close[i] < 0 {
        break // Exit the loop
    } // Exit the loop
    if na(close[i]) {
        continue // Skip this iteration
    } // Skip this iteration
}
// process close[i]
```

Using `break` and `continue` with loop return values:

```navi
let tempString: String = "";
let finalText: String = for number in randomArray {
    if number == 8 {
        break // exit loop; returns last evaluated expression
    } else if number % 2 == 0 {
        continue // skip even numbers
    } // skip even numbers
    tempString = tempString + String.from(number) + ", ";
};
// finalText holds the returned value after loop termination
```

## `switch`

### With Value

Match against a specific value:

Inline branches end with `,`; a brace-block branch omits the trailing `,`.

```navi
let dayName = switch day_of_week {
    DayOfWeek.Monday => "Mon",
    DayOfWeek.Tuesday => "Tue",
    DayOfWeek.Wednesday => "Wed",
    DayOfWeek.Thursday => "Thu",
    DayOfWeek.Friday => "Fri",
    => "Weekend",
};
```

```navi
let i_maType: String = input.string(
    "EMA",
    "MA type",
    options:  [
        "EMA",
        "SMA",
        "RMA",
        "WMA"
    ]
);

let ma: float = switch i_maType {
    "EMA" => ta.ema(close, 10),
    "SMA" => ta.sma(close, 10),
    "RMA" => ta.rma(close, 10),
    => ta.wma(close, 10),
};
plot(ma);
```

### Without Value (condition-based)

When no key expression is provided, each arm uses a boolean condition. The first matching arm executes:

```navi
let direction = switch {
    close > open => "up",
    close < open => "down",
    => "flat",
};
```

### Multi-statement branch

Use a brace block for multiple statements. No trailing `,` after `}`:

```navi
let label = switch dayOfWeek {
    1 => "Mon",
    2 => {
        let s = "Tue";
        s;
    }
    => "other",
};
```

### Returning tuples from `switch`

```navi
let (v1, v2) = switch {
    close > open => (high, close),
    => (close, low),
};
```

`switch` arms use `=>` to separate the condition from the body. The default arm has no condition before `=>`.

## Next Steps

- [Functions & Methods](/guide/functions-and-methods) — defining custom functions
- [Custom Types & Enums](/guide/custom-types) — user-defined types
