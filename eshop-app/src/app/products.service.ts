import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `http://localhost:44396/api`;
  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}/Article`).
      pipe(
        map((data) =>{
          return data;
        }, (err) =>{
          console.log('error', err)
        })
      );
  }
  public getProductById(IdArticle:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/Article/${IdArticle}`).
      pipe(
        map((data)=>{
          return data;
        },(err) =>{
          console.log('error',err)}
        ));
  }
  public addProduct (product): Observable<any> {
  return this.http.post(`${this.baseUrl}/Article/`, product)
  .pipe(
    map((data)=>{
      return data;
    },(err) =>{
      console.log('error',err) }
    )
  );}

  public updateProduct (value:string, id): Observable<any> {
  return this.http.put(`${this.baseUrl}/product-update/`,{id})
  .pipe(
    map((data)=>{
      return data;
    },(err) =>{
      console.log('error',err) }
    )
  );}

  public deleteProduct ( idProduct: number): Observable<any> {
  return this.http.delete (`${this.baseUrl}/Article/${idProduct}`)
  .pipe(
    map((data)=>{
      return data;
    },(err) =>{
      console.log('error',err) }
    )
  );}

  public GetImageProduct ( id): Observable<any> {
    return this.http.get(`http://fakerestapi.azurewebsites.net/api/books/covers/${id}`)
    .pipe(
      map((data)=>{
        return data;
      },(err) =>{
        console.log('error',err) }
      )
    );}
  

}
