import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirective {

  
  constructor(private el: ElementRef) { }

  @Input() set appHighlightDirective(stock:number) {
    this.Color(stock);
  }
  Color(stock:number): void {
    if(stock>0){
      this.el.nativeElement.style.backgroundColor='rgb(127, 225, 151)'
    }else{
      this.el.nativeElement.style.backgroundColor='rgb(245, 148, 148)'
    }
    
  }
}
