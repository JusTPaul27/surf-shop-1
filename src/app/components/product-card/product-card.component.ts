import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() selectedProduct?: Product;
  @Input() isCart:boolean = false
  @Output() productRemoved = new EventEmitter<Product>()

  constructor(private userS: UserService) { }

  ngOnInit(): void {
  }

  removeFromCart(event: MouseEvent){
    event.stopPropagation();
    if (this.selectedProduct) {
      this.userS.removefromCart(this.selectedProduct)
      this.productRemoved.emit(this.selectedProduct);
    }
  }

}
