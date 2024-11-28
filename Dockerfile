# Etap 1: Budowanie aplikacji
FROM node:18-alpine AS build-stage
# Ustawienie katalogu roboczego
WORKDIR /app
# Skopiowanie plików package.json i package-lock.json
COPY package*.json ./
# Instalacja zależności
RUN npm install
# Skopiowanie reszty plików aplikacji
COPY . .
# Budowanie aplikacji
RUN npm run build
# Etap 2: Serwowanie aplikacji
FROM node:18 AS production-stage
# Ustawienie katalogu roboczego
WORKDIR /app
# Skopiowanie tylko niezbędnych plików z pierwszego etapu
COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/.nuxt ./.nuxt
#COPY --from=build-stage /app/static ./static
COPY --from=build-stage /app/nuxt.config.ts ./
COPY --from=build-stage /app/.output ./.output
# Instalacja tylko produkcyjnych zależności
RUN npm install --production
# Otworzenie portu na kontenerze
EXPOSE 3000
# Domyślne polecenie uruchamiające aplikację
CMD ["npm","run", "start"]
