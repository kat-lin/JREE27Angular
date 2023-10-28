import { Injectable } from '@angular/core';
import { IProduct } from 'models/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl=`http://localhost:3000/products`;
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Array<IProduct>>{
    //This gets the JSON with products:  curl -X GET http://localhost:3000/products
    return this.httpClient.get<Array<IProduct>>(this.productsUrl);
  }

  getProductById(id: number): Observable<IProduct> {
    //This gets the JSON with a product:  curl -X GET http://localhost:3000/products/3
    return this.httpClient.get<IProduct> (`${this.productsUrl}/${id}`);
  }
}
