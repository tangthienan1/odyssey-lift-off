// import fetch from "node-fetch";
import { Resolvers } from "./type";

export const resolvers: Resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        // tracksForHomeFetch: async () => {
        //     const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        //     const res = await fetch(`${baseUrl}/tracks`);
        //     return res.json();
        // },
        track: (_, { id }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },
    Mutation: {
        incrementTrackViews: async (_, { id }, { dataSources }) => {
            try {
                const track = await dataSources.trackAPI.incrementTrackViews(
                    id
                );
                return {
                    code: 200,
                    success: true,
                    message: `Successfully incremented number of views for track ${id}`,
                    track,
                };
            } catch (err) {
                return {
                    code: err.extensions.response.status,
                    success: false,
                    message: err.extensions.response.body,
                    track: null,
                };
            }
        },
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            // const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
            // const res = await fetch(`${baseUrl}/author/${authorId}`);
            // return res.json();

            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
    },
};
