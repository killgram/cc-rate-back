# CC Rate Back

## Used tech:
- [Typescript](https://www.typescriptlang.org/)
- [Node-JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Cors](https://github.com/expressjs/cors)
- [Prettier](https://prettier.io/)
- [Axios](https://axios-http.com/)
- [TS-Node](https://github.com/TypeStrong/ts-node)
- [TS-Node-Dev](https://github.com/wclr/ts-node-dev)
- [Mongodb](https://www.mongodb.com/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [Body-parser](https://github.com/expressjs/body-parser)

## API Reference

#### GET

```http
GET /status
```

getting the status of the service

```http
GET /getAboutApp
```

| Parameter        | Type     | Description                        |
|:-----------------|:---------|:-----------------------------------|
| `Authorization`  | `Bearer` | **Required**. Header, access token |

get about app data

```http
GET /support
```

| Parameter        | Type     | Description                        |
|:-----------------|:---------|:-----------------------------------|
| `Authorization`  | `Bearer` | **Required**. Header, access token |

get support data

```http
GET /signIn
```

| Parameter  | Type     | Description                   |
|:-----------|:---------|:------------------------------|
| `login`    | `string` | **Required**. User login      |
| `password` | `string` | **Required**. User password   |

gets user data

```http
GET /getFavorites
```

| Parameter       | Type     | Description                         |
|:----------------|:---------|:------------------------------------|
| `Authorization` | `Bearer` | **Required**. Header, access token  |
| `user`          | `string` | **Required**. Username              |

getting a list of favorite currencies

```http
GET /getCurrencyList
```

| Parameter        | Type     | Description                        |
|:-----------------|:---------|:-----------------------------------|
| `Authorization`  | `Bearer` | **Required**. Header, access token |

getting a list of currencies

```http
GET /getLinks
```

| Parameter        | Type     | Description                        |
|:-----------------|:---------|:-----------------------------------|
| `Authorization`  | `Bearer` | **Required**. Header, access token |

getting a list of links for data

#### POST

```http
POST /signUp
```

| Parameter  | Type     | Description                 |
|:-----------|:---------|:----------------------------|
| `login`    | `string` | **Required**. User login    |
| `password` | `string` | **Required**. User password |

registers a user in the system

```http
POST /addFavorites
```

| Parameter        | Type     | Description                        |
|:-----------------|:---------|:-----------------------------------|
| `Authorization`  | `Bearer` | **Required**. Header, access token |
| `user`           | `string` | **Required**. Username             |
| `name`           | `string` | **Required**. Currency name        |
| `symbol`         | `string` | **Required**. Currency symbol      |
| `id`             | `number` | **Required**. Currency id          |

adding your favorite currency

```http
POST /deleteFavorites
```

| Parameter        | Type     | Description                        |
|:-----------------|:---------|:-----------------------------------|
| `Authorization`  | `Bearer` | **Required**. Header, access token |
| `user`           | `string` | **Required**. Username             |
| `id`             | `number` | **Required**. Currency id          |

deleting favorite currency