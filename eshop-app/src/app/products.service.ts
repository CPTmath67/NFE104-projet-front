import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

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
  public getProductById(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/Books/${id}`).
      pipe(
        map((data)=>{
          return data;
        },(err) =>{
          console.log('error',err)}
        ));
  }
  public addProduct (value:string): Observable<any> {
  return this.http.post(`${this.baseUrl}/product-add/`,value)
  .pipe(
    map((data)=>{
      return data;
    },(err) =>{
      console.log('error',err) }
    )
  );}

  public updateProduct (value:string, id): Observable<any> {
  return this.http.put(`${this.baseUrl}/product-update/`,value)
  .pipe(
    map((data)=>{
      return data;
    },(err) =>{
      console.log('error',err) }
    )
  );}

  public deleteProduct ( id): Observable<any> {
  return this.http.delete(`${this.baseUrl}/product-delete/`)
  .pipe(
    map((data)=>{
      return data;
    },(err) =>{
      console.log('error',err) }
    )
  );}

  public GetImageProduct ( id): Observable<any> {
    return this.http.get(`http://fakerestapi.azurewebsites.net/books/covers/${id}`)
    .pipe(
      map((data)=>{
        return data;
      },(err) =>{
        console.log('error',err) }
      )
    );}
  

}
