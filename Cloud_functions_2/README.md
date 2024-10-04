

az cosmosdb create --name mycosmosdbaccount1996 --resource-group MyResour
ceGroup --kind GlobalDocumentDB --default-consistency-level Session --tags Department=h3hitema


<h1>RESULTAT DU CODE</h1>

```
{
  "analyticalStorageConfiguration": {
    "schemaType": "WellDefined"
  },
  "apiProperties": null,
  "backupPolicy": {
    "migrationState": null,
    "periodicModeProperties": {
      "backupIntervalInMinutes": 240,
      "backupRetentionIntervalInHours": 8,
      "backupStorageRedundancy": "Geo"
    },
    "type": "Periodic"
  },
  "capabilities": [],
  "capacity": null,
  "connectorOffer": null,
  "consistencyPolicy": {
    "defaultConsistencyLevel": "Session",
    "maxIntervalInSeconds": 5,
    "maxStalenessPrefix": 100
  },
  "cors": [],
  "createMode": null,
  "customerManagedKeyStatus": null,
  "databaseAccountOfferType": "Standard",
  "defaultIdentity": "FirstPartyIdentity",
  "disableKeyBasedMetadataWriteAccess": false,
  "disableLocalAuth": false,
  "documentEndpoint": "https://mycosmosdbaccount1996.documents.azure.com:443/",
  "enableAnalyticalStorage": false,
  "enableAutomaticFailover": false,
  "enableBurstCapacity": false,
  "enableCassandraConnector": null,
  "enableFreeTier": false,
  "enableMultipleWriteLocations": false,
  "enablePartitionMerge": false,
  "failoverPolicies": [
    {
      "failoverPriority": 0,
      "id": "mycosmosdbaccount1996-japaneast",
      "locationName": "Japan East"
    }
  ],
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.DocumentDB/databaseAccounts/mycosmosdbaccount1996",
  "identity": {
    "principalId": null,
    "tenantId": null,
    "type": "None",
    "userAssignedIdentities": null
  },
  "instanceId": "2f85600e-8838-48a7-837a-23cb44ec10b2",
  "ipRules": [],
  "isVirtualNetworkFilterEnabled": false,
  "keyVaultKeyUri": null,
  "keysMetadata": {
    "primaryMasterKey": {
      "generationTime": "2024-10-04T07:58:49.304713+00:00"
    },
    "primaryReadonlyMasterKey": {
      "generationTime": "2024-10-04T07:58:49.304713+00:00"
    },
    "secondaryMasterKey": {
      "generationTime": "2024-10-04T07:58:49.304713+00:00"
    },
    "secondaryReadonlyMasterKey": {
      "generationTime": "2024-10-04T07:58:49.304713+00:00"
    }
  },
  "kind": "GlobalDocumentDB",
  "location": "Japan East",
  "locations": [
    {
      "documentEndpoint": "https://mycosmosdbaccount1996-japaneast.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "mycosmosdbaccount1996-japaneast",
      "isZoneRedundant": false,
      "locationName": "Japan East",
      "provisioningState": "Succeeded"
    }
  ],
  "minimalTlsVersion": "Tls12",
  "name": "mycosmosdbaccount1996",
  "networkAclBypass": "None",
  "networkAclBypassResourceIds": [],
  "privateEndpointConnections": null,
  "provisioningState": "Succeeded",
  "publicNetworkAccess": "Enabled",
  "readLocations": [
    {
      "documentEndpoint": "https://mycosmosdbaccount1996-japaneast.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "mycosmosdbaccount1996-japaneast",
      "isZoneRedundant": false,
      "locationName": "Japan East",
      "provisioningState": "Succeeded"
    }
  ],
  "resourceGroup": "MyResourceGroup",
  "restoreParameters": null,
  "systemData": {
    "createdAt": "2024-10-04T07:58:49.304713+00:00",
    "createdBy": null,
    "createdByType": null,
    "lastModifiedAt": null,
    "lastModifiedBy": null,
    "lastModifiedByType": null
  },
  "tags": {
    "Department": "h3hitema"
  },
  "type": "Microsoft.DocumentDB/databaseAccounts",
  "virtualNetworkRules": [],
  "writeLocations": [
    {
      "documentEndpoint": "https://mycosmosdbaccount1996-japaneast.documents.azure.com:443/",
      "failoverPriority": 0,
      "id": "mycosmosdbaccount1996-japaneast",
      "isZoneRedundant": false,
      "locationName": "Japan East",
      "provisioningState": "Succeeded"
    }
  ]
}
```

<h1>az cosmosdb sql database create --account-name mycosmosdbaccount1996 --re
source-group MyResourceGroup --name teachersdb</h1>

```
{
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.DocumentDB/databaseAccounts/mycosmosdbaccount1996/sqlDatabases/teachersdb",
  "location": null,
  "name": "teachersdb",
  "options": null,
  "resource": {
    "_self": "dbs/kY0ZAA==/",
    "colls": "colls/",
    "createMode": null,
    "etag": "\"0000a100-0000-2300-0000-66ffa2650000\"",
    "id": "teachersdb",
    "restoreParameters": null,
    "rid": "kY0ZAA==",
    "ts": 1728029285.0,
    "users": "users/"
  },
  "resourceGroup": "MyResourceGroup",
  "tags": null,
  "type": "Microsoft.DocumentDB/databaseAccounts/sqlDatabases"
}
```

<h1>az cosmosdb sql container create --account-name mycosmosdbaccount1996 --r
esource-group MyResourceGroup --database-name teachersdb --name teachers --partition-key-path "/id"</h1>

```
{
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.DocumentDB/databaseAccounts/mycosmosdbaccount1996/sqlDatabases/teachersdb/containers/teachers",
  "location": null,
  "name": "teachers",
  "options": null,
  "resource": {
    "_conflicts": "conflicts/",
    "_docs": "docs/",
    "_self": "dbs/kY0ZAA==/colls/kY0ZAJAvcnw=/",
    "_sprocs": "sprocs/",
    "_triggers": "triggers/",
    "_udfs": "udfs/",
    "analyticalStorageTtl": null,
    "clientEncryptionPolicy": null,
    "computedProperties": [],
    "conflictResolutionPolicy": {
      "conflictResolutionPath": "/_ts",
      "conflictResolutionProcedure": "",
      "mode": "LastWriterWins"
    },
    "createMode": null,
    "defaultTtl": null,
    "etag": "\"0000a300-0000-2300-0000-66ffa32f0000\"",
    "geospatialConfig": {
      "type": "Geography"
    },
    "id": "teachers",
    "indexingPolicy": {
      "automatic": true,
      "compositeIndexes": null,
      "excludedPaths": [
        {
          "path": "/\"_etag\"/?"
        }
      ],
      "includedPaths": [
        {
          "indexes": null,
          "path": "/*"
        }
      ],
      "indexingMode": "consistent",
      "spatialIndexes": null
    },
    "partitionKey": {
      "kind": "Hash",
      "paths": [
        "/id"
      ],
      "systemKey": null,
      "version": null
    },
    "restoreParameters": null,
    "rid": "kY0ZAJAvcnw=",
    "statistics": [
      {
        "documentCount": 0,
        "id": "0",
        "partitionKeys": [],
        "sampledDistinctPartitionKeyCount": 0,
        "sizeInKB": 0
      }
    ],
    "ts": 1728029487.0,
    "uniqueKeyPolicy": {
      "uniqueKeys": []
    }
  },
  "resourceGroup": "MyResourceGroup",
  "tags": null,
  "type": "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers"
}
```

<h1>az appservice plan create --name AppServPlan --resource-group MyResourceGroup --sku B1 --is-linux --tags Department=h3hitema</h1>

```
{
  "elasticScaleEnabled": false,
  "extendedLocation": null,
  "freeOfferExpirationTime": "2025-04-04T08:23:47.476666",
  "geoRegion": "Japan East",
  "hostingEnvironmentProfile": null,
  "hyperV": false,
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Web/serverfarms/AppServPlan",
  "isSpot": false,
  "isXenon": false,
  "kind": "linux",
  "kubeEnvironmentProfile": null,
  "location": "japaneast",
  "maximumElasticWorkerCount": 1,
  "maximumNumberOfWorkers": 0,
  "name": "AppServPlan",
  "numberOfSites": 0,
  "numberOfWorkers": 1,
  "perSiteScaling": false,
  "provisioningState": "Succeeded",
  "reserved": true,
  "resourceGroup": "MyResourceGroup",
  "sku": {
    "capabilities": null,
    "capacity": 1,
    "family": "B",
    "locations": null,
    "name": "B1",
    "size": "B1",
    "skuCapacity": null,
    "tier": "Basic"
  },
  "spotExpirationTime": null,
  "status": "Ready",
  "subscription": "6d8941d1-4da0-431b-8ec6-3a0d35e849dc",
  "tags": {
    "Department": "h3hitema"
  },
  "targetWorkerCount": 0,
  "targetWorkerSizeId": 0,
  "type": "Microsoft.Web/serverfarms",
  "workerTierName": null,
  "zoneRedundant": false
}
```

<h1>
az storage account create --name storagesecond9n --resource-group MyResourceGroup --location japaneast --sku Standard_LRS --tags Department=h3hitema 
</h1>

```
{
  "accessTier": "Hot",
  "accountMigrationInProgress": null,
  "allowBlobPublicAccess": false,
  "allowCrossTenantReplication": false,
  "allowSharedKeyAccess": null,
  "allowedCopyScope": null,
  "azureFilesIdentityBasedAuthentication": null,
  "blobRestoreStatus": null,
  "creationTime": "2024-10-04T08:43:48.628545+00:00",
  "customDomain": null,
  "defaultToOAuthAuthentication": null,
  "dnsEndpointType": null,
  "enableExtendedGroups": null,
  "enableHttpsTrafficOnly": true,
  "enableNfsV3": null,
  "encryption": {
    "encryptionIdentity": null,
    "keySource": "Microsoft.Storage",
    "keyVaultProperties": null,
    "requireInfrastructureEncryption": null,
    "services": {
      "blob": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2024-10-04T08:43:48.925426+00:00"
      },
      "file": {
        "enabled": true,
        "keyType": "Account",
        "lastEnabledTime": "2024-10-04T08:43:48.925426+00:00"
      },
      "queue": null,
      "table": null
    }
  },
  "extendedLocation": null,
  "failoverInProgress": null,
  "geoReplicationStats": null,
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Storage/storageAccounts/storagesecond9n",
  "identity": null,
  "immutableStorageWithVersioning": null,
  "isHnsEnabled": null,
  "isLocalUserEnabled": null,
  "isSftpEnabled": null,
  "isSkuConversionBlocked": null,
  "keyCreationTime": {
    "key1": "2024-10-04T08:43:48.706672+00:00",
    "key2": "2024-10-04T08:43:48.706672+00:00"
  },
  "keyPolicy": null,
  "kind": "StorageV2",
  "largeFileSharesState": null,
  "lastGeoFailoverTime": null,
  "location": "japaneast",
  "minimumTlsVersion": "TLS1_0",
  "name": "storagesecond9n",
  "networkRuleSet": {
    "bypass": "AzureServices",
    "defaultAction": "Allow",
    "ipRules": [],
    "ipv6Rules": [],
    "resourceAccessRules": null,
    "virtualNetworkRules": []
  },
  "primaryEndpoints": {
    "blob": "https://storagesecond9n.blob.core.windows.net/",
    "dfs": "https://storagesecond9n.dfs.core.windows.net/",
    "file": "https://storagesecond9n.file.core.windows.net/",
    "internetEndpoints": null,
    "microsoftEndpoints": null,
    "queue": "https://storagesecond9n.queue.core.windows.net/",
    "table": "https://storagesecond9n.table.core.windows.net/",
    "web": "https://storagesecond9n.z11.web.core.windows.net/"
  },
  "primaryLocation": "japaneast",
  "privateEndpointConnections": [],
  "provisioningState": "Succeeded",
  "publicNetworkAccess": null,
  "resourceGroup": "MyResourceGroup",
  "routingPreference": null,
  "sasPolicy": null,
  "secondaryEndpoints": null,
  "secondaryLocation": null,
  "sku": {
    "name": "Standard_LRS",
    "tier": "Standard"
  },
  "statusOfPrimary": "available",
  "statusOfSecondary": null,
  "storageAccountSkuConversionStatus": null,
  "tags": {
    "Department": "h3hitema"
  },
  "type": "Microsoft.Storage/storageAccounts"
}
```
<h1>
az functionapp create --name myfunctionapp1996 --storage-account storagesecond9n --resource-group MyResourceGroup --plan AppServPlan --runtime node --runtime-version 18 --functions-version 4 --os-type Linux --tags Department=h3hitema
</h1>

```
{
  "availabilityState": "Normal",
  "clientAffinityEnabled": false,
  "clientCertEnabled": false,
  "clientCertExclusionPaths": null,
  "clientCertMode": "Required",
  "cloningInfo": null,
  "containerSize": 0,
  "customDomainVerificationId": "2B170D9356A3DD8EEF304C40B7ADDB0BB2B5A6CA4A86C4454945331532E8B45F",
  "dailyMemoryTimeQuota": 0,
  "daprConfig": null,
  "defaultHostName": "myfunctionapp1996.azurewebsites.net",
  "enabled": true,
  "enabledHostNames": [
    "myfunctionapp1996.azurewebsites.net",
    "myfunctionapp1996.scm.azurewebsites.net"
  ],
  "extendedLocation": null,
  "hostNameSslStates": [
    {
      "certificateResourceId": null,
      "hostType": "Standard",
      "ipBasedSslResult": null,
      "ipBasedSslState": "NotConfigured",
      "name": "myfunctionapp1996.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "toUpdateIpBasedSsl": null,
      "virtualIPv6": null,
      "virtualIp": null
    },
    {
      "certificateResourceId": null,
      "hostType": "Repository",
      "ipBasedSslResult": null,
      "ipBasedSslState": "NotConfigured",
      "name": "myfunctionapp1996.scm.azurewebsites.net",
      "sslState": "Disabled",
      "thumbprint": null,
      "toUpdate": null,
      "toUpdateIpBasedSsl": null,
      "virtualIPv6": null,
      "virtualIp": null
    }
  ],
  "hostNames": [
    "myfunctionapp1996.azurewebsites.net"
  ],
  "hostNamesDisabled": false,
  "hostingEnvironmentProfile": null,
  "httpsOnly": false,
  "hyperV": false,
  "id": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Web/sites/myfunctionapp1996",
  "identity": null,
  "inProgressOperationId": null,
  "isDefaultContainer": null,
  "isXenon": false,
  "keyVaultReferenceIdentity": "SystemAssigned",
  "kind": "functionapp,linux",
  "lastModifiedTimeUtc": "2024-10-04T08:49:23.926666",
  "location": "Japan East",
  "managedEnvironmentId": null,
  "maxNumberOfWorkers": null,
  "name": "myfunctionapp1996",
  "outboundIpAddresses": "13.78.114.158,40.115.166.91,52.185.171.44,20.37.98.11,40.79.195.0",
  "possibleOutboundIpAddresses": "13.78.114.158,40.115.166.91,52.185.171.44,20.37.98.11,13.78.117.54,13.78.116.92,13.78.119.6,13.78.117.38,13.78.116.142,20.27.45.254,20.27.46.71,20.27.46.191,20.18.211.120,20.18.211.159,20.18.212.24,20.89.184.82,20.89.184.120,20.89.184.123,20.89.187.134,20.89.187.153,20.89.187.169,40.79.195.0",
  "publicNetworkAccess": null,
  "redundancyMode": "None",
  "repositorySiteName": "myfunctionapp1996",
  "reserved": true,
  "resourceConfig": null,
  "resourceGroup": "MyResourceGroup",
  "scmSiteAlsoStopped": false,
  "serverFarmId": "/subscriptions/6d8941d1-4da0-431b-8ec6-3a0d35e849dc/resourceGroups/MyResourceGroup/providers/Microsoft.Web/serverfarms/AppServPlan",
  "siteConfig": {
    "acrUseManagedIdentityCreds": false,
    "acrUserManagedIdentityId": null,
    "alwaysOn": false,
    "antivirusScanEnabled": null,
    "apiDefinition": null,
    "apiManagementConfig": null,
    "appCommandLine": null,
    "appSettings": null,
    "autoHealEnabled": null,
    "autoHealRules": null,
    "autoSwapSlotName": null,
    "azureMonitorLogCategories": null,
    "azureStorageAccounts": null,
    "clusteringEnabled": false,
    "connectionStrings": null,
    "cors": null,
    "customAppPoolIdentityAdminState": null,
    "customAppPoolIdentityTenantState": null,
    "defaultDocuments": null,
    "detailedErrorLoggingEnabled": null,
    "documentRoot": null,
    "elasticWebAppScaleLimit": null,
    "experiments": null,
    "fileChangeAuditEnabled": null,
    "ftpsState": null,
    "functionAppScaleLimit": 0,
    "functionsRuntimeScaleMonitoringEnabled": null,
    "handlerMappings": null,
    "healthCheckPath": null,
    "http20Enabled": false,
    "http20ProxyFlag": null,
    "httpLoggingEnabled": null,
    "ipSecurityRestrictions": [
      {
        "action": "Allow",
        "description": "Allow all access",
        "headers": null,
        "ipAddress": "Any",
        "name": "Allow all",
        "priority": 2147483647,
        "subnetMask": null,
        "subnetTrafficTag": null,
        "tag": null,
        "vnetSubnetResourceId": null,
        "vnetTrafficTag": null
      }
    ],
    "ipSecurityRestrictionsDefaultAction": null,
    "javaContainer": null,
    "javaContainerVersion": null,
    "javaVersion": null,
    "keyVaultReferenceIdentity": null,
    "limits": null,
    "linuxFxVersion": "",
    "loadBalancing": null,
    "localMySqlEnabled": null,
    "logsDirectorySizeLimit": null,
    "machineKey": null,
    "managedPipelineMode": null,
    "managedServiceIdentityId": null,
    "metadata": null,
    "minTlsCipherSuite": null,
    "minTlsVersion": null,
    "minimumElasticInstanceCount": 0,
    "netFrameworkVersion": null,
    "nodeVersion": null,
    "numberOfWorkers": 1,
    "phpVersion": null,
    "powerShellVersion": null,
    "preWarmedInstanceCount": null,
    "publicNetworkAccess": null,
    "publishingPassword": null,
    "publishingUsername": null,
    "push": null,
    "pythonVersion": null,
    "remoteDebuggingEnabled": null,
    "remoteDebuggingVersion": null,
    "requestTracingEnabled": null,
    "requestTracingExpirationTime": null,
    "routingRules": null,
    "runtimeADUser": null,
    "runtimeADUserPassword": null,
    "scmIpSecurityRestrictions": [
      {
        "action": "Allow",
        "description": "Allow all access",
        "headers": null,
        "ipAddress": "Any",
        "name": "Allow all",
        "priority": 2147483647,
        "subnetMask": null,
        "subnetTrafficTag": null,
        "tag": null,
        "vnetSubnetResourceId": null,
        "vnetTrafficTag": null
      }
    ],
    "scmIpSecurityRestrictionsDefaultAction": null,
    "scmIpSecurityRestrictionsUseMain": null,
    "scmMinTlsCipherSuite": null,
    "scmMinTlsVersion": null,
    "scmSupportedTlsCipherSuites": null,
    "scmType": null,
    "sitePort": null,
    "sitePrivateLinkHostEnabled": null,
    "storageType": null,
    "supportedTlsCipherSuites": null,
    "tracingOptions": null,
    "use32BitWorkerProcess": null,
    "virtualApplications": null,
    "vnetName": null,
    "vnetPrivatePortsCount": null,
    "vnetRouteAllEnabled": null,
    "webSocketsEnabled": null,
    "websiteTimeZone": null,
    "winAuthAdminState": null,
    "winAuthTenantState": null,
    "windowsConfiguredStacks": null,
    "windowsFxVersion": null,
    "xManagedServiceIdentityId": null
  },
  "slotSwapStatus": null,
  "state": "Running",
  "storageAccountRequired": false,
  "suspendedTill": null,
  "tags": {
    "Department": "h3hitema"
  },
  "targetSwapSlot": null,
  "trafficManagerHostNames": null,
  "type": "Microsoft.Web/sites",
  "usageState": "Normal",
  "virtualNetworkSubnetId": null,
  "vnetContentShareEnabled": false,
  "vnetImagePullEnabled": false,
  "vnetRouteAllEnabled": false,
  "workloadProfileName": null
}

```

<h1>func azure functionapp publish myfunctionapp1996</h1>

[publish the function](/Cloud_functions_2/publish.png)


