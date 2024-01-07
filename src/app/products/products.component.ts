import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ProductConcrete } from '../Concrete/product-concrete';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: ProductConcrete[] = [];
  productsCat: string[] = [];
  selectedCategory: string = "";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllProductsCategories();
    this.getAllProductsCategoriesWise();
  }

  getAllProducts() {
    this
      .productService
      .getAllProducts()
      .subscribe(res => this.products = res);
  }

  getAllProductsCategories() {
    this
      .productService
      .getAllProductsCategories()
      .subscribe(res => {
        this.productsCat = res;
        this.selectedCategory = "all";
      });
  }

  getAllProductsCategoriesWise() {
    if (this.selectedCategory === "all") {
      this.getAllProducts();
    } else {
      this
        .productService
        .getAllProductsCategoriesWise(this.selectedCategory)
        .subscribe(res => this.products = res);
    }
  }
}
