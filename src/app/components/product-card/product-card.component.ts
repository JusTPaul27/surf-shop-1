import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private userS: UserService) { }

  ngOnInit(): void {
  }

  removeFromCart(){
    if (this.selectedProduct) {
      this.userS.removefromCart(this.selectedProduct)
      
    }
  }

}
