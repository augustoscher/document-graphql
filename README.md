# document-graphql
Document Domain Graph Service (DGS) corresponding to the products domain from [Jus Edge GraphQL](https://github.com/augustoscher/jus-edge-graphql).
It's builded with [Apollo Federation](https://www.apollographql.com/docs/federation/) v2 which is an open source architecture for building a distributed graph.

## Requirements

It's possible to run application inside docker. But also, it's possible to run in your local machine. In this case, make sure that following apps are installed:

- Node v16
- MongoDB

## Running

To run application, just type:

```
yarn dev
```
or in docker:
```
make dev
```

Products GraphQL subgraph will be running on [localhost:4002/graphql](http://localhost:4002/graphql)
