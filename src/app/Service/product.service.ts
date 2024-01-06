import { Injectable } from '@angular/core';
import { IProductService } from './iproduct-service';
import { Observable } from 'rxjs';
import { ProductConcrete } from '../Concrete/product-concrete';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService {

  constructor() { }

  getAllProducts(): Observable<ProductConcrete[]> {
    throw new Error('Method not implemented.');
  }
}
