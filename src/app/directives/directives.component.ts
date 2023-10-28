import { Injectable } from '@angular/core';

import { Component } from '@angular/core';
import { IProduct } from 'models/IProduct';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  products: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];

  constructor(private ps: ProductService) {}

  ngOnInit():void{
    this.ps.getProducts().subscribe({
      next: (res: IProduct[]) => {
        this.products = res;
        this.filteredProducts = this.products;
      },
      error:(err: any) => console.error(err),
    })
    this.filteredProducts = this.products;
  }

/** NB! TODO::See why this is not working
      private ps;
      constructor(productService: ProductService) {
       this.ps = productService;
      }

      ngOnInit(): void {
        this.products = this.productService.getProducts();
       }
*/

  
  onFilter($event: any): void{
    console.log($event.target.value.toLowerCase());
    let filterString =$event.target.value.toLowerCase();
    /** 
      //Ternary:
      this.filteredProducts = filterString ==== ""
      ? this.products;
      : this.filteredProducts = this.products.filter(p => p.title.toLowerCase().includes(filterString));

     */ 
    if(filterString ==="")
      this.filteredProducts = this.products;
    else
      this.filteredProducts = this.products.filter(p => p.title.toLowerCase().includes(filterString));
      
  }

}
