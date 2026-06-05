# Nutrivae Data Generator

A read-only REST API that generates fake commerce data for local development,
prototyping, and frontend testing.

The API is built with Express, TypeScript, and Faker. It generates 50 records
for each resource when the server starts and keeps them in memory until the
server is restarted.

## Features

- Fake users, categories, products, carts, orders, and reviews
- List and detail endpoints for every resource
- Configurable response size with the `limit` query parameter
- Configurable server port through environment variables

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

Create a `.env` file to configure the server port:

```env
PORT=4545
```

Start the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:4545`. If `PORT` is not set,
the server uses port `3000`.

## API Endpoints

| Resource | List endpoint | Detail endpoint |
| --- | --- | --- |
| Users | `GET /api/users` | `GET /api/users/:id` |
| Categories | `GET /api/categories` | `GET /api/categories/:id` |
| Products | `GET /api/products` | `GET /api/products/:id` |
| Carts | `GET /api/carts` | `GET /api/carts/:id` |
| Orders | `GET /api/orders` | `GET /api/orders/:id` |
| Reviews | `GET /api/reviews` | `GET /api/reviews/:id` |

List endpoints accept an optional `limit` query parameter:

```text
GET http://localhost:4545/api/products?limit=10
```

The default limit is `5`, and the maximum is `100`. To retrieve a single
record, use an ID returned by its list endpoint:

```text
GET http://localhost:4545/api/products/<product-id>
```

Unknown IDs return a `404` response.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the API with Nodemon and reloads on TypeScript changes |
| `npm run build` | Runs the TypeScript compiler to validate the source |
| `npm start` | Runs `dist/app.js` when compiled output is available |

The current TypeScript configuration uses `noEmit`, so `npm run build`
validates the project without creating the `dist` directory.

## Project Structure

```text
src/
  app.ts                 Express application entry point
  common/                Shared controller behavior
  types/                 Resource type definitions
  carts/                 Cart routes, controller, and generator
  categories/            Category routes, controller, and generator
  orders/                Order routes, controller, and generator
  products/              Product routes, controller, and generator
  reviews/               Review routes, controller, and generator
  users/                 User routes, controller, and generator
```

Generated records are not persisted and will change each time the server
restarts.
