import { Injectable } from '@angular/core';
import { IProductService } from './iproduct-service';
import { Observable } from 'rxjs';
import { ProductConcrete } from '../Concrete/product-concrete';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService {

  private baseUrl: string = "https://fakestoreapi.com";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<ProductConcrete[]> {
    return this.httpClient
      .get<ProductConcrete[]>(`${this.baseUrl}/products`, { responseType: 'json' });
  }

  getAllProductsCategories(): Observable<string[]> {
    return this.httpClient
      .get<string[]>(`${this.baseUrl}/products/categories`, { responseType: 'json' });
  }

  getAllProductsCategoriesWise(category: string): Observable<ProductConcrete[]> {
    return this.httpClient
      .get<ProductConcrete[]>(`${this.baseUrl}/products/category/${category}`, { responseType: 'json' });
  }
}