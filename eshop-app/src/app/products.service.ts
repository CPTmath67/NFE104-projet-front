import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = `https://localhost:44396/api`;
  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}/article`).
      pipe(
        map((data) =>{
          return data;
        }, (err) =>{
          console.log('error', err)
        })
      );
  }
  public getProductById(idArticle: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/article/${idArticle}`).
      pipe(
        map((data)=>{
          return data;
        },(err) =>{
          console.log('error',err)}
        ));
  }
  public addProduct (product): Observable<any> {
  return this.http.post(`${this.baseUrl}/article/`, product)
  .pipe(
    map((data)=>{
      console.log('error',data)
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
