const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://mycosmosdbaccount1996.documents.azure.com:443/";
const key = "6BCLuX6za8ivBkOFNwSGYy52CuoLQRUQbaFyrfBne03KDDcQjTWRbssDuY68UccZnrD0oRPQ5uqMACDbc88Ghg==";
const databaseId = "teachersdb";
const containerId = "teachers";

const client = new CosmosClient({ endpoint, key });

module.exports = async function (context, req) {
    const { name, email } = req.body;
    const userId = context.bindingData.id;

    const container = client.database(databaseId).container(containerId);
    const { resource: createdItem } = await container.items.create({ id: userId, name, email });

    context.res = {
        status: 201,
        body: createdItem
    };
};
