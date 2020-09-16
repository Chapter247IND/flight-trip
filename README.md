# Flight Booking

## Setup

Application uses `npm` to install dependencies.
To Start the application, first you'll need to install the dependencies using `npm` by running `npm install` or `npm i`, and then copy `.env.example` to `.env` and change the credentials as per your configuration.

## Available Scripts

### Install dependencies

```
npm install
```

### Migrate database

Since synchronization is used for TypeORM, you don't need to follow this, the database will be synched based on the entities.

```
npm run db:migrate
```

### Seed database

```
npm run db:seed
```

### Create production build

Build will compile typescript code to JavaScript using `ttypescript`

```
npm run build
```

### Start development server

```
npm run dev
```

### Start production server

```
npm start
```
