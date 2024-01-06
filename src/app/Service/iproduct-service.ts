import { Observable } from "rxjs";
import { ProductConcrete } from "../Concrete/product-concrete";

export interface IProductService {
    getAllProducts(): Observable<ProductConcrete[]>;
}