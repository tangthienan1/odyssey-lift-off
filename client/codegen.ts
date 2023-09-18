import { CodegenConfig } from "@graphql-codegen/cli";

// trigger codegen by: " bash ```graphql-codegen```" (Need server live in parallel)
const config: CodegenConfig = {
    //schema: define where server is (codegen will call graphQL to get type from server)
    schema: "http://localhost:4000",
    //documents: which file should be scanned
    documents: ["src/**/*.tsx"],
    //generates: endpoint to expose output
    generates: {
        "./src/__generated__/": {
            //preset to generate, "client": @graphql-codegen/client-preset tell codegen to have preset for react client
            preset: "client",
            presetConfig: {
                // in server side, we use gql from "graphql-tag" to tagged template.
                // we can rename gqlTagname (same function) to "gql" on client side
                gqlTagName: "gql",
            },
        },
    },
    //it would be error if no file scanned in "generates", mark this to true to avoid this
    // ignoreNoDocuments: true
};

export default config;
