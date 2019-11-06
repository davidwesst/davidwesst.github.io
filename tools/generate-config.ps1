# Setup Variables
$ga = $env.GOOGLEANALYTICS
if ($null -eq $ga)
{
    Write-Warning -Message 'No $env.GOOGLEANALYTICS found. Using default value.'
    $ga = 'UA-12345678-9'
}

# Generate Config File
(Get-Content -Path config.base.toml -Raw) -replace '<<google-analytics>>', $ga | Set-Content -Path config.toml