import { HeaderImage } from "./header-image";
import { Links } from "./links";
import { WebImage } from "./web-image";

export interface ArtObject {
    links: Links
    id: string
    objectNumber: string
    title: string
    hasImage: boolean
    principalOrFirstMaker: string
    longTitle: string
    showImage: boolean
    permitDownload: boolean
    webImage?: WebImage
    headerImage: HeaderImage
    productionPlaces: string[]
}
