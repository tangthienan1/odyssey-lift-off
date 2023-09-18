import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "./src/schema.ts",
    generates: {
        "./src/type.ts": {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                contextType: "./context#DataSourceContext",
                mappers: {
                    Track: "./models#TrackModel",
                    Author: "./models#AuthorModel",
                    Module: "./models#ModuleModel"
                }
            }

        },
    },
};

export default config;
