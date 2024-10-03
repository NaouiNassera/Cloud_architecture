<h1>Prerequisites</h1>

<ul>
<li> Azure subscription</li>
<li>Azure CLI</li>
<li>Code editor</li>
<li>ARM extension for ur Code editor</li>
</ul>

<h1>Create the ARM Template Structure</h1>
<h1>Define Parameters for Reusability</h1>
<h1>Define the Resources to Deploy</h1>
<h1>Parameterize and Create Other Resources</h1>
<h1>Deploy the ARM Template Using Azure CLI</h1>
<h1>Validate and Troubleshoot the Deployment</h1>
<h1>Output the Results</h1>


<h5>az group create --name MyResourceGroup --location japaneast </h5>

{
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup",
  "location": "japaneast",
  "managedBy": null,
  "name": "MyResourceGroup",
  "properties": {
    "provisioningState": "Succeeded"
  },
  "tags": null,
  "type": "Microsoft.Resources/resourceGroups"
}

az network vnet create --resource-group MyResourceGroup --name MyVNet --address-prefix 10.0.0.0/16 --subnet-name MySubnet --subnet-prefix 10.0.0.0/24


{
  "newVNet": {
    "addressSpace": {
      "addressPrefixes": [
        "10.0.0.0/16"
      ]
    },
    "enableDdosProtection": false,
    "etag": "W/\"349d0903-1b65-47ab-ab20-5fdbbc616642\"",
    "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/virtualNetworks/MyVNet",
    "location": "japaneast",
    "name": "MyVNet",
    "provisioningState": "Succeeded",
    "resourceGroup": "MyResourceGroup",
    "resourceGuid": "f8b769c7-71d1-439e-acaf-c8d598405c42",
    "subnets": [
      {
        "addressPrefix": "10.0.0.0/24",
        "delegations": [],
        "etag": "W/\"349d0903-1b65-47ab-ab20-5fdbbc616642\"",
        "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/virtualNetworks/MyVNet/subnets/MySubnet",
        "name": "MySubnet",
        "privateEndpointNetworkPolicies": "Disabled",
        "privateLinkServiceNetworkPolicies": "Enabled",
        "provisioningState": "Succeeded",
        "resourceGroup": "MyResourceGroup",
        "type": "Microsoft.Network/virtualNetworks/subnets"
      }
    ],
    "type": "Microsoft.Network/virtualNetworks",
    "virtualNetworkPeerings": []
  }
}

<h5> az network nic create --resource-group MyResourceGroup --name Vnet --vnet-name MyVNet --subnet MySubnet </h5>



{
  "NewNIC": {
    "auxiliaryMode": "None",
    "auxiliarySku": "None",
    "disableTcpStateTracking": false,
    "dnsSettings": {
      "appliedDnsServers": [],
      "dnsServers": [],
      "internalDomainNameSuffix": "y3u1p4grogpehlfpzdkzqqc2ic.lx.internal.cloudapp.net"
    },
    "enableAcceleratedNetworking": false,
    "enableIPForwarding": false,
    "etag": "W/\"c86d4ed2-bb03-4738-927c-5305017510d1\"",
    "hostedWorkloads": [],
    "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/networkInterfaces/Vnet",
    "ipConfigurations": [
      {
        "etag": "W/\"c86d4ed2-bb03-4738-927c-5305017510d1\"",
        "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/networkInterfaces/Vnet/ipConfigurations/ipconfig1",
        "name": "ipconfig1",
        "primary": true,
        "privateIPAddress": "10.0.0.4",
        "privateIPAddressVersion": "IPv4",
        "privateIPAllocationMethod": "Dynamic",
        "provisioningState": "Succeeded",
        "resourceGroup": "MyResourceGroup",
        "subnet": {
          "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/virtualNetworks/MyVNet/subnets/MySubnet",
          "resourceGroup": "MyResourceGroup"
        },
        "type": "Microsoft.Network/networkInterfaces/ipConfigurations"
      }
    ],
    "location": "japaneast",
    "name": "Vnet",
    "nicType": "Standard",
    "provisioningState": "Succeeded",
    "resourceGroup": "MyResourceGroup",
    "resourceGuid": "fd3d060d-a4ca-4682-8042-70612f215f8c",
    "tapConfigurations": [],
    "type": "Microsoft.Network/networkInterfaces",
    "vnetEncryptionSupported": false
  }
}


<h5>az network nic show --name Vnet --resource-group MyResourceGroup</h5>


{
  "auxiliaryMode": "None",
  "auxiliarySku": "None",
  "disableTcpStateTracking": false,
  "dnsSettings": {
    "appliedDnsServers": [],
    "dnsServers": [],
    "internalDomainNameSuffix": "y3u1p4grogpehlfpzdkzqqc2ic.lx.internal.cloudapp.net"
  },
  "enableAcceleratedNetworking": false,
  "enableIPForwarding": false,
  "etag": "W/\"c86d4ed2-bb03-4738-927c-5305017510d1\"",
  "hostedWorkloads": [],
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/networkInterfaces/Vnet",
  "ipConfigurations": [
    {
      "etag": "W/\"c86d4ed2-bb03-4738-927c-5305017510d1\"",
      "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/networkInterfaces/Vnet/ipConfigurations/ipconfig1",
      "name": "ipconfig1",
      "primary": true,
      "privateIPAddress": "10.0.0.4",
      "privateIPAddressVersion": "IPv4",
      "privateIPAllocationMethod": "Dynamic",
      "provisioningState": "Succeeded",
      "resourceGroup": "MyResourceGroup",
      "subnet": {
        "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Network/virtualNetworks/MyVNet/subnets/MySubnet",
        "resourceGroup": "MyResourceGroup"
      },
      "type": "Microsoft.Network/networkInterfaces/ipConfigurations"
    }
  ],
  "location": "japaneast",
  "name": "Vnet",
  "nicType": "Standard",
  "provisioningState": "Succeeded",
  "resourceGroup": "MyResourceGroup",
  "resourceGuid": "fd3d060d-a4ca-4682-8042-70612f215f8c",
  "tapConfigurations": [],
  "type": "Microsoft.Network/networkInterfaces",
  "vnetEncryptionSupported": false
}


<h5>az deployment group create --resource-group MyResourceGroup --template-file azuredeploy.json --parameters storageAccountName=storage1deployement</h5>



{
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Resources/deployments/azuredeploy",
  "location": null,
  "name": "azuredeploy",
  "properties": {
    "correlationId": "f2bfac41-f597-41c8-b015-4e6b8e929687",
    "debugSetting": null,
    "dependencies": [],
    "duration": "PT27.7763532S",
    "error": null,
    "mode": "Incremental",
    "onErrorDeployment": null,
    "outputResources": [
      {
        "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/myWindowsVM",
        "resourceGroup": "MyResourceGroup"
      }
    ],
    "outputs": {
      "storageAccountId": {
        "type": "String",
        "value": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Storage/storageAccounts/storage1deployement"
      }
    },
    "parameters": {
      "location": {
        "type": "String",
        "value": "japaneast"
      },
      "storageAccountName": {
        "type": "String",
        "value": "storage1deployement"
      },
      "vmName": {
        "type": "String",
        "value": "myWindowsVM"
      }
    },
    "parametersLink": null,
    "providers": [
      {
        "id": null,
        "namespace": "Microsoft.Compute",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "japaneast"
            ],
            "properties": null,
            "resourceType": "virtualMachines",
            "zoneMappings": null
          }
        ]
      }
    ],
    "provisioningState": "Succeeded",
    "templateHash": "3189813365274425865",
    "templateLink": null,
    "timestamp": "2024-10-03T22:30:37.274734+00:00",
    "validatedResources": null
  },
  "resourceGroup": "MyResourceGroup",
  "tags": null,
  "type": "Microsoft.Resources/deployments"
}


<h5>az deployment group validate --resource-group MyResourceGroup --template-file azuredeploy.json --parameters storageAccountName=storage1deployement</h5>



{
  "error": null,
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Resources/deployments/azuredeploy",
  "name": "azuredeploy",
  "properties": {
    "correlationId": "641563ad-db61-40b5-a4da-bd6519986f9e",
    "debugSetting": null,
    "dependencies": [],
    "duration": "PT0S",
    "error": null,
    "mode": "Incremental",
    "onErrorDeployment": null,
    "outputResources": null,
    "outputs": null,
    "parameters": {
      "location": {
        "type": "String",
        "value": "japaneast"
      },
      "storageAccountName": {
        "type": "String",
        "value": "storage1deployement"
      },
      "vmName": {
        "type": "String",
        "value": "myWindowsVM"
      }
    },
    "parametersLink": null,
    "providers": [
      {
        "id": null,
        "namespace": "Microsoft.Compute",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "japaneast"
            ],
            "properties": null,
            "resourceType": "virtualMachines",
            "zoneMappings": null
          }
        ]
      }
    ],
    "provisioningState": "Succeeded",
    "templateHash": "3189813365274425865",
    "templateLink": null,
    "timestamp": "0001-01-01T00:00:00+00:00",
    "validatedResources": [
      {
        "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/myWindowsVM",
        "resourceGroup": "MyResourceGroup"
      }
    ]
  },
  "resourceGroup": "MyResourceGroup",
  "type": "Microsoft.Resources/deployments"
}

[azure CLI command](/Lab12/first_cli_command.png)<br/>
[Deploy successfull](/Lab12/Deploy_success.png)