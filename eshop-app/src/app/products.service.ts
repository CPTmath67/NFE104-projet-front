import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `http://fakerestapi.azurewebsites.net/api`;
  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}/Books`).
      pipe(
        map((data) =>{
          return data;
        }, (err) =>{
          console.log('error', err)
        })
      );
  }
  // public getMovieById(id:number): Observable<any>{
  //   return this.http.get(`${this.baseUrl}/Books/${id}`).
  //     pipe(
  //       map((data)=>{
  //         return data.json();
  //       },(err) =>{
  //         console.log('error',err)
  //       }

  //       ));
  // }
}
