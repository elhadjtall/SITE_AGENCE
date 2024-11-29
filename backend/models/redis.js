const client = require('../config/redis'); // Assurez-vous que le chemin est correct

const Redis = {

    createIndex: async () => {
        const indexExists = await client.exists({index: 'Redis'});
        if (!indexExists) {
            return client.createIndex({
                index: 'Redis',
                body: {
                    mappings: {
                        properties: {
                            name: { type: 'text' },
                            description: { type: 'text' },
                            image: { type: 'text' },
                            price: { type: 'float' },
                            quantity: { type: 'integer' },
                            category: { type: 'keyword' },
                            id: { type: 'keyword' },

                        },
                    },
                },
            });
        }
        return null;
    },
  // Ajout d'une donnée dans Redis
  add: (data) =>
    client.index({
      index: 'Redis',
      body: data,
    }),
};

module.exports = Redis; // Exporter l'objet Redis
