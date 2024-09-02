import { Injectable } from '@angular/core';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productList: product[]= [
    {id: 1, name:'gzgeg',price:4,category: 'dnd',stock: 8},
    {id: 2, name:'hhhh',price:4,category: 'fgf',stock: 50}
  ]

  getProductList(): product[]{
    return this.productList;
  }
  addProduct(product: product){
    this.productList.push(product);
  }
}
