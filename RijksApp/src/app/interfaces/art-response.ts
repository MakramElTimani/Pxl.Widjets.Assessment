import { ArtObject } from "./art-object";
import { CountFacets } from "./count-facets";
import { FacetList } from "./facet-list";

export interface ArtResponse {
    elapsedMilliseconds: number
    count: number
    countFacets: CountFacets
    artObjects: ArtObject[]
    facets: FacetList[]
}
