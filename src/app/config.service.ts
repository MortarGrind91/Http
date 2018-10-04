import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Config} from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }
    
 getConfig():Observable<Config>{
  return this.http.get<Config>('assets/config.json')
 }
}

