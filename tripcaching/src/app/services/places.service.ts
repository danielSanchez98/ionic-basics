import { Injectable } from '@angular/core';

/* importar modulos encqargados de las peticiones http */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  url ='https://my-json-server.typicode.com/danielsanchez98/ionic-basics/db';

  constructor(private _http : HttpClient) { }

  getPlaces(){
    return this._http.get(this.url).pipe(map(res => res));
  }
}
