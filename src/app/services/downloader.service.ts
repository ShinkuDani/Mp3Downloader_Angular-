import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mp3Video } from '../../enviroment';
import { Observable } from 'rxjs';
import { mp3Data } from '../models/mp3Info';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor( private http: HttpClient ) { 
  }

  showInfos(){
    console.log(`BaseUrl: ${Mp3Video.mp3DoanloaderBaseUrl}  /n Host Header Value: ${ Mp3Video.XRapidAPIHostHeaderValue} /n Key Header value: ${ Mp3Video.XRapidAPIKeyHeaderValue}`)
  }

  getMp3music(link: string): Observable<mp3Data> {  
    return this.http.get<mp3Data>(Mp3Video.mp3DoanloaderBaseUrl + link, {
      headers: new HttpHeaders()
      .set(Mp3Video.XRapidAPIHostHeaderName, Mp3Video.XRapidAPIHostHeaderValue)
      .set(Mp3Video.XRapidAPIKeyHeaderName, Mp3Video.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', link)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }

  getMp3musicQuality(link: string, quality: string): Observable<mp3Data> {  
    return this.http.get<mp3Data>(Mp3Video.mp3DoanloaderBaseUrlCustom + link + "&quality=" + quality, {
      headers: new HttpHeaders()
      .set(Mp3Video.XRapidAPIHostHeaderName, Mp3Video.XRapidAPIHostHeaderValue)
      .set(Mp3Video.XRapidAPIKeyHeaderName, Mp3Video.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', link)
      .set('units', 'metric')
      .set('mode', 'json')
    })
  }
}
