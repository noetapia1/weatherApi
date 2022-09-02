import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Climate } from '../interfaces/Climate';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }

  getClimate() : Observable<Climate>{
    return this.httpClient.get<Climate>(environment.apiEndpoint);
  }
}
