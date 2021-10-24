import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtResponse } from '../interfaces/art-response';
import { ArtDetailsResponse } from '../interfaces/art-details-response';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  constructor(private http: HttpClient) {}
  getArts(query: string, culture: string | null, format: string | null, pageNumber: number = 0, pageSize: number = 10, 
          involvedMaker: string | null, type: string | null, material: string | null, technique: string | null, 
          datingPeriod: number | null = null, normalized32ColorHex: string | null, imgonly: boolean = false,
          toppieces: boolean = false, sort: string | null): Observable<ArtResponse>{
    //#region setting params

    let baseUrl: string = `https://www.rijksmuseum.nl/api/${culture}/collection?key=ITyUTNgA&format=json&q=${query}`;
    baseUrl += `&p=${pageNumber > 0 ? pageNumber : 0}`
    baseUrl += `&ps=${pageSize > 0 && pageSize <= 100 ? pageSize : 10}`
    if(involvedMaker) baseUrl += `&involvedMaker=${involvedMaker}`
    if(type) baseUrl += `&type=${type}`
    if(material) baseUrl += `&material=${material}`
    if(technique) baseUrl += `&technique=${technique}`
    if(datingPeriod! && datingPeriod! >= 0 && datingPeriod! <= 21) baseUrl += `&datingPeriod=${datingPeriod!}`
    if(normalized32ColorHex /*&& this.isHex(normalized32ColorHex)*/) baseUrl += `&f.normalized32Colors.hex=${normalized32ColorHex.trim()}`
    baseUrl += `&imgonly=${imgonly}`
    baseUrl += `&toppieces=${toppieces}`
    if(sort && this.isValidSortString(sort)) baseUrl += `&s=${sort.toLocaleLowerCase()}`
        

    return this.http.get<ArtResponse>(baseUrl);
  }

  getArtByObjectNumber(objectNumber: string, culture: string | null): Observable<ArtDetailsResponse>{
    culture = culture === 'nl' ? 'nl' : 'en'; 
    let baseUrl: string = `https://www.rijksmuseum.nl/api/${culture}/collection/${objectNumber}?key=ITyUTNgA`;
    return this.http.get<ArtDetailsResponse>(baseUrl);
  }

  private isHex(h: string) {
    var a = parseInt(h,16);
    return (a.toString(16) === h)
  }

  private isValidSortString(s: string){
    switch(s.toLocaleLowerCase()){
      case "relevance":
      case "objecttype":
      case "chronologic":
      case "achronologic":
      case "artist":
      case "artistdesc":
        return true;
      default:
        return false;
    }
  }
}


