import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private htttp: HttpClient) { }

  getProducts(page: number, size: number): Observable<Page<Product>> {
    return this.htttp.get<Page<Product>>(`/api/products?page=${page}&size=${size}`);
  }

}
