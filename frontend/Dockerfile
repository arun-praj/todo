FROM node:18 as builder

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json /app/

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start"]

#Dev stage
FROM builder as dev

COPY --from=builder /app /app

ENV NODE_ENV=development

RUN npm install

CMD ["npm","run","dev"]