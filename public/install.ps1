$ErrorActionPreference = "Stop"

$CdnBase = if ($env:NAVI_CDN_BASE) { $env:NAVI_CDN_BASE } else { "https://assets.lbkrs.com/github/release/navi/stable" }
$InstallDir = if ($env:NAVI_INSTALL_DIR) { $env:NAVI_INSTALL_DIR } else { Join-Path $env:LOCALAPPDATA "Navi\bin" }
$Version = $env:NAVI_VERSION

function Invoke-NaviRestMethod([string]$Url) {
    try {
        Invoke-RestMethod $Url
    } catch {
        Write-Error "Failed to request: $Url"
        throw
    }
}

function Save-NaviDownload([string]$Url, [string]$OutFile) {
    try {
        Invoke-WebRequest $Url -OutFile $OutFile
    } catch {
        Write-Error "Failed to download: $Url"
        throw
    }
}

if (-not $Version) {
    $Metadata = Invoke-NaviRestMethod "$CdnBase/latest.json"
    $Version = $Metadata.version
    if (-not $Version) { throw "Invalid release metadata: latest.json has no version" }
}
$Version = $Version.TrimStart("v")

if ([System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture -ne "X64") {
    throw "Only x86_64 Windows is currently supported."
}

$Asset = "navi-v$Version-x86_64-pc-windows-msvc.zip"
$Temp = Join-Path ([System.IO.Path]::GetTempPath()) ([System.Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $Temp | Out-Null
try {
    Save-NaviDownload "$CdnBase/$Asset" "$Temp\$Asset"
    $Expected = ((Invoke-NaviRestMethod "$CdnBase/$Asset.sha256") -split '\s+')[0]
    $Actual = (Get-FileHash "$Temp\$Asset" -Algorithm SHA256).Hash.ToLowerInvariant()
    if ($Actual -ne $Expected.ToLowerInvariant()) { throw "SHA-256 checksum mismatch." }
    Expand-Archive "$Temp\$Asset" -DestinationPath $Temp
    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
    Copy-Item "$Temp\navi.exe" "$InstallDir\navi.exe" -Force
} finally {
    Remove-Item $Temp -Recurse -Force -ErrorAction SilentlyContinue
}

Write-Host "Installed navi v$Version to $InstallDir\navi.exe"
if (($env:PATH -split ";") -notcontains $InstallDir) {
    Write-Host "Add $InstallDir to PATH to run navi from your shell."
}
