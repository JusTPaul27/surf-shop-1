import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  private readonly BASE_URL = 'https://628b2f157886bbbb37b20caa.mockapi.io/products'

  constructor(private http: HttpClient) { }

  getProducts(searchString?: string, category?: string):Observable<Product[]> {
    let url = this.BASE_URL + '?';
    if (searchString) {
      url += 'name=' + searchString;
    }
    if(category){
      url += '&catergory=' + category;
    }
    return this.http.get<Product[]>(url);
  }

  getProductById(id: string) :Observable<Product>{
   const url = this.BASE_URL + '/' + id;
   return this.http.get<Product>(url);
  }

  getUserCart(user:User) {
    return this.http.get<Product[]>(this.BASE_URL).pipe(
      map(products => this.createCardProductList(user, products)))
  }

  createCardProductList(user: User, products: Product[]): Product[]{
    if (user.cart) {
      const cartProducts = [];
      for (const id of user.cart) {
        const product = products.find(p => p.id === id);
        if (product) {
          cartProducts.push(product);
        }
      }
      return cartProducts;
    }
    return [];
  }
}
