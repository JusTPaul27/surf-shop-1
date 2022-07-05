import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductGuard } from './guards/product/product.guard';



const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserDetailComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', redirectTo: '/products' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
