const client = require('./config/redis');

const Redis = {
    createIndex: async () => {
        const indexExists = await client.indices.exists({ index: 'users' });
        if (!indexExists) {
            return client.indices.create({ 
                index: 'users',
                body: {
                    mappings: {
                        properties: {
                            username: { type: 'text' },
                            password: { type: 'text' },
                        },
                    },
                },
            });
        } 
        return null      
    },
    }

    module.exports = redis