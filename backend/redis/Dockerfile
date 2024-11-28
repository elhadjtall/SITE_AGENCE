# Utiliser l'image officielle de Redis comme base
FROM redis:latest

# Ajouter un volume pour persister les données
VOLUME /data

# Copier une configuration personnalisée si besoin
# COPY redis.conf /usr/local/etc/redis/redis.conf

# Exposer le port 6379 (port par défaut de Redis)
EXPOSE 6379

# Démarrer Redis avec ou sans une configuration personnalisée
# CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]
CMD ["redis-server"]
