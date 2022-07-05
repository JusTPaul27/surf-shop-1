import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];

  constructor(private userS: UserService, private prodS: ProductService) {
    if (userS.user) {
      
      prodS.getUserCart(userS.user).subscribe({
        next: res => this.products = res,
        error: err => console.log(err)
      })
    }
   }

  ngOnInit(): void {
  }

}
