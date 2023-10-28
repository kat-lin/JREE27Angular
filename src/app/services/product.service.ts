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
    //
    return this.httpClient.get<Array<IProduct>>(this.productsUrl);
  }
}
