import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }
  getProductsList(): Observable<Product[]> {
    return this._httpClient.get<Product[]>("http://localhost:3000/products");
  } 
  deleteProduct(product:Product):Observable<Product[]>{
    return this._httpClient.delete<Product[]>(`http://localhost:3000/todos/${product.id}`)
  }
  getProductById(id:number):Observable<Product|undefined>{
    return this._httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
  


