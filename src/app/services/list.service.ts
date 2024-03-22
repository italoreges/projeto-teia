import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../Album';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos/'
   
  constructor(private http: HttpClient) { }

  //remove( animals: Animal[], animal: Animal){
  //  console.log("Ativando service");
  //  return animals.filter((a) => animal.name !== a.name);
 // }

  getAllAlbuns(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Album> {

    return this.http.get<Album>(`${this.apiUrl}/${id}`)
  }
}
