import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, ModuleModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/"; //from RESTDataSource

    getTracksForHome() {
        return this.get<TrackModel[]>("tracks");
    }

    getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${authorId}`);
    }

    getTrack(id: string) {
        return this.get<TrackModel>(`track/${id}`);
    }

    getTrackModules(trackId: string) {
        return this.get<ModuleModel[]>(`track/${trackId}/modules`);
    }

    incrementTrackViews(trackId: string){
        return this.patch<TrackModel>(`track/${trackId}/numberOfViews`)
    }
}
