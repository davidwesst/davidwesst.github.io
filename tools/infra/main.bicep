param projectName string = 'davidwesst-com'
param rgLocation string = resourceGroup().location

@secure()
param swaRepositoryToken string

targetScope = 'resourceGroup'

module staticWebApp './staticwebapp.bicep' = {
  name: 'staticWebAppDeployment'
  params: {
    targetLocation: rgLocation
    projectName: projectName
    repositoryToken: swaRepositoryToken
  }
}
