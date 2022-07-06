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
  public total: number = 0;

  constructor(private userS: UserService, private prodS: ProductService) {
    this.getUserCartProducts();
   }

  ngOnInit(): void {
  }

  getUserCartProducts(){
    if (this.userS.user) {
      
      this.prodS.getUserCart(this.userS.user).subscribe({
        next: res =>{
        this.products = res;
        this.total= this.calculateTotal();
        },
        error: err => console.log(err)
      })
    }
  }
  calculateTotal() {
    let sum = 0;
    for (const product of this.products) {
      sum += product.price
    }
    return sum;
  }



}
