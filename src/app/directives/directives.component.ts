import { Component } from '@angular/core';
import { IProduct } from 'models/IProduct';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  
  //products: any = [];
  //products: any[] = [
  products: Array<IProduct> = [

    {title: `Shoe A`, count: 150, price: 2.25},
    {title: `Shoe B`, count: 200, price: 5},
    {title: `Shoe C`, count: 75, price: 4},
    {title: `Shoe D`, count: 75, price: 11},
    //{},
    //{name: "John"}
  ];

  //products[0];

  //age: any = 5; <- example
  
  constructor(){
    JSON.stringify(this.products);
  }
}
