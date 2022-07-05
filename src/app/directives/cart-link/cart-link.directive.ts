import { Directive, ElementRef, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Directive({
  selector: '[appCartLink]'
})
export class CartLinkDirective {

  @Input() 
  set user(value: User | undefined){
    this.isInitElement(value);
    
    
  }


  constructor(private el: ElementRef) {
    el.nativeElement.style.borderStyle = 'solid'
   }

   isInitElement(user: User | undefined) {
    if (user && user.cart) {  
      this.el.nativeElement.style.display = 'inline'
      this.el.nativeElement.innerHTML = 'Cart: ' + user.cart.length
    } else{
      this.el.nativeElement.style.display= 'none'
    }

  }

}


