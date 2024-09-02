import { Component, OnInit } from '@angular/core';
import { ProductService } from './Service/product.service';
import { product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gestionInventaire';

  filtree: string = "";

  products: product[]= [];
  constructor(private pr:ProductService){
  }

  ngOnInit(): void {
    this.products=this.pr.getProductList();
    this.newProd={
      id:0,
      name:"",
      price:0,
      category:"",
      stock:0
    }
  }
  newProd!:product;
  add(){
    this.products.push({
      id: this.products.length+1,
      name: this.newProd.name,
      price: this.newProd.price,
      category: this.newProd.category,
      stock: this.newProd.stock
    });
    this.newProd={
      id:0,
      name:"",
      price:0,
      category:"",
      stock:0
    }
  }

  triAvec:string="";

  sort(triAvec:string){
    this.triAvec=triAvec;

  }
}
