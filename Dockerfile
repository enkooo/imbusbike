# Etap 1: Budowanie aplikacji
FROM node:20-alpine AS build-stage
# Set build-time variables
ARG NUXT_MAIL_SMTP
ARG NUXT_MAIL_PORT
ARG NUXT_MAIL_USERNAME
ARG NUXT_MAIL_PASSWORD
ARG NUXT_MAIL_TARGET

# Set environment variables
ENV NUXT_MAIL_SMTP=${NUXT_MAIL_SMTP}
ENV NUXT_MAIL_PORT=${NUXT_MAIL_PORT}
ENV NUXT_MAIL_USERNAME=${NUXT_MAIL_USERNAME}
ENV NUXT_MAIL_PASSWORD=${NUXT_MAIL_PASSWORD}
ENV NUXT_MAIL_TARGET=${NUXT_MAIL_TARGET}
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
FROM node:20-alpine AS production-stage
# Re-declare the ARGs
ARG NUXT_MAIL_SMTP
ARG NUXT_MAIL_PORT
ARG NUXT_MAIL_USERNAME
ARG NUXT_MAIL_PASSWORD
ARG NUXT_MAIL_TARGET

# Set the ENV variables again
ENV NUXT_MAIL_SMTP=${NUXT_MAIL_SMTP}
ENV NUXT_MAIL_PORT=${NUXT_MAIL_PORT}
ENV NUXT_MAIL_USERNAME=${NUXT_MAIL_USERNAME}
ENV NUXT_MAIL_PASSWORD=${NUXT_MAIL_PASSWORD}
ENV NUXT_MAIL_TARGET=${NUXT_MAIL_TARGET}
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
