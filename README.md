# Graphql

## Prerequisite

1. graphql
2. apollo/client
3. @graphql-codegen/cli

    > To share schema to client

4. ```bash
   npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
   ```
    > for server generate type


## Set up codegen: (Codegen on the server)

1. ```bash
   npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
   ```

> @graphql-codegen/typescript is the base plugin needed to generate TypeScript types from our schema.

> @graphql-codegen/typescript-resolvers does something similar - it will review our schema, consider the types and fields we've defined, and output the types we need to accurately describe what data our resolver functions use and return. 2. setup "scripts"

```bash
"generate": "graphql-codegen"
```

3. init codegen.ts in server/src

-   defined schema path
-   defined generates (where output of this type.ts)
-   defined plugin in generates

4. run

```bash
npm run generate
```

> Right now, our resolvers destructure contextValue for the dataSources property, but we can't automatically infer what types of data or methods are available within dataSources - that's because though the Code Generator knows about our types and fields, it has no clue how we're resolving the data with the TrackAPI class! By including this piece of the puzzle, we can round out our Resolvers type definition and empower TypeScript to help us out as we code.

5. setup context.ts
6. attach contextType to codegen.ts
   `contextType: "./context#DataSourceContext"`

7. run `npm ryn generate` to fix resolver Type

## Adding a model type

---

STEP:

1. defined schema and typeDefs
2. register Apollo Server

-   make instance with `new ApolloServer({})`
-

1. Create Schema (S)
2.

##

```

```
