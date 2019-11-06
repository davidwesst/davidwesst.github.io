$ga = if ($env:GOOGLEANALYTICS -ne $null) { $env:GOOGLEANALYTICS } else { 'UA-12345678-9' }

(Get-Content -Path config.base.toml -Raw) -replace '<<google-analytics>>', $ga | Set-Content -Path config.toml