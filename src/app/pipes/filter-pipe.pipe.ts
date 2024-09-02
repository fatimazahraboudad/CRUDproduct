import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: product[], nom: String): product[]  {
    if(!nom) return value;
    let prods: product[]= value.filter(p => p.name === nom);
    return prods;
  

  }

}
