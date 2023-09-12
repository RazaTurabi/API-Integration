import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productInterface } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getAllProducts() {
    return this.http.get<productInterface[]>("https://api.escuelajs.co/api/v1/products")
  }


}
