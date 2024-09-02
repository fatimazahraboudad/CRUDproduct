import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../models/product';

@Pipe({
  name: 'tri'
})
export class TriPipe implements PipeTransform {

  transform(tab: any[], column: string): product[] {
    if(column==""){
      return tab;
    }
    return tab.sort((a,b) =>{
      if(typeof a[column]=="string" && typeof b[column]=="string"){
        return a[column].localeCompare(b[column]);
      }else {
        return a[column] - b[column];
      }
    }
    )
      
    
  

  }

}
