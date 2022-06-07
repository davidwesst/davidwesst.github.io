param appName string = 'dw-website'
param projectName string = 'davidwesst.com'
param targetLocation string = resourceGroup().location

@secure()
param repositoryToken string

resource staticWebApp 'Microsoft.Web/staticSites@2021-03-01' = {
  name: appName
  location: targetLocation
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  tags: {
    'Project': projectName
  }
  properties: {
    allowConfigFileUpdates: false
    branch: 'main'
    repositoryUrl: 'https://github.com/davidwesst/website'
    repositoryToken: repositoryToken
    provider: 'GitHub'
    stagingEnvironmentPolicy: 'Enabled'
    buildProperties: {
      apiBuildCommand: 'yarn run build'
      appArtifactLocation: './public'
      appLocation: '.'
      skipGithubActionWorkflowGeneration: true
    }
  }
}

output staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname
output staticWebAppId string = staticWebApp.id
output staticWebAppName string = staticWebApp.name
