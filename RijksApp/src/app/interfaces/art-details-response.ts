export interface ArtDetailsResponse {
    elapsedMilliseconds: number
    artObject: ArtDetailsObject
    artObjectPage: ArtObjectPage
}
export interface ArtDetailsObject {
    links: Links
    id: string
    priref: string
    objectNumber: string
    language: string
    title: string
    copyrightHolder: any
    webImage: WebImage
    colors: Color[]
    colorsWithNormalization: ColorsWithNormalization[]
    normalizedColors: NormalizedColor[]
    normalized32Colors: Normalized32Color[]
    titles: string[]
    description: string
    labelText: any
    objectTypes: string[]
    objectCollection: string[]
    makers: any[]
    principalMakers: PrincipalMaker[]
    plaqueDescriptionDutch: string
    plaqueDescriptionEnglish: string
    principalMaker: string
    artistRole: any
    associations: any[]
    acquisition: Acquisition
    exhibitions: any[]
    materials: string[]
    techniques: any[]
    productionPlaces: any[]
    dating: Dating
    classification: Classification
    hasImage: boolean
    historicalPersons: any[]
    inscriptions: any[]
    documentation: string[]
    catRefRPK: any[]
    principalOrFirstMaker: string
    dimensions: Dimension[]
    physicalProperties: any[]
    physicalMedium: string
    longTitle: string
    subTitle: string
    scLabelLine: string
    label: Label
    showImage: boolean
    location: string
  }
  
  export interface Links {
    search: string
  }
  
  export interface WebImage {
    guid: string
    offsetPercentageX: number
    offsetPercentageY: number
    width: number
    height: number
    url: string
  }
  
  export interface Color {
    percentage: number
    hex: string
  }
  
  export interface ColorsWithNormalization {
    originalHex: string
    normalizedHex: string
  }
  
  export interface NormalizedColor {
    percentage: number
    hex: string
  }
  
  export interface Normalized32Color {
    percentage: number
    hex: string
  }
  
  export interface PrincipalMaker {
    name: string
    unFixedName: string
    placeOfBirth: any
    dateOfBirth: string
    dateOfBirthPrecision: string
    dateOfDeath: string
    dateOfDeathPrecision: string
    placeOfDeath: any
    occupation: string[]
    roles: string[]
    nationality: any
    biography: any
    productionPlaces: any[]
    qualification: string
  }
  
  export interface Acquisition {
    method: string
    date: string
    creditLine: string
  }
  
  export interface Dating {
    presentingDate: string
    sortingDate: number
    period: number
    yearEarly: number
    yearLate: number
  }
  
  export interface Classification {
    iconClassIdentifier: string[]
    iconClassDescription: string[]
    motifs: any[]
    events: any[]
    periods: any[]
    places: any[]
    people: any[]
    objectNumbers: string[]
  }
  
  export interface Dimension {
    unit: string
    type: string
    part: any
    value: string
  }
  
  export interface Label {
    title: string
    makerLine: string
    description: string
    notes: string
    date: string
  }
  
  export interface ArtObjectPage {
    id: string
    similarPages: any[]
    lang: string
    objectNumber: string
    tags: any[]
    plaqueDescription: string
    audioFile1: any
    audioFileLabel1: any
    audioFileLabel2: any
    createdOn: string
    updatedOn: string
    adlibOverrides: AdlibOverrides
  }
  
  export interface AdlibOverrides {
    titel: any
    maker: any
    etiketText: any
  }