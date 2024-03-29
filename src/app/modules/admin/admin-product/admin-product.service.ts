import { Injectable } from '@angular/core';
import { AdminProduct } from './adminProduct';
import { Page } from 'src/app/shared/model/page';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {


  constructor(private htttp: HttpClient) { }

  getProducts(page: number, size: number): Observable<Page<AdminProduct>> {
    return this.htttp.get<Page<AdminProduct>>(`/api/admin/products?page=${page}&size=${size}`);
  }

  delete(id: number): Observable<void> {
    return this.htttp.delete<void>(`/api/admin/products/` + id)
  }

}
