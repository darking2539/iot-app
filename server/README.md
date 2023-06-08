# init

```sh
cp .env.default .env
docker-compose up -d
```

## About

Admin functionality:

- authencitate all routes with token
- add/delete user
- get user's todos/contacts/pros and cons (table of qualities)
- add/delete todo/contact/quality

## Technologies

- Node.js
- Express
- typeorm
- PostgreSQL
- Docker
- JWT
- Bcrypt

## Migrations

**Create migration**

```sh
npm run typeorm migration:create ./src/migrations/<migrationName>
```
