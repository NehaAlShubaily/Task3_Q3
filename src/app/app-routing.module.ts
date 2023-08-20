 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TestIndexComponent } from './test-index/test-index.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestLogin1Component } from './test-login1/test-login1.component';
import { TestRegisterUserComponent } from './test-register-user/test-register-user.component';
import { TestAddRestoComponent } from './test-add-resto/test-add-resto.component';
const routes: Routes = [
 {component :HomeComponent, path:'home'}, 
    {  component :TestIndexComponent, path:''},
  {    component :AddRestaurantComponent, path:'add'},  
  {    component :ListRestaurantComponent, path:'list'}, 
  {    component :UpdateRestaurantComponent, path:'update/:id'}, 
  {    component :LoginComponent, path:'login'}, 
  {    component :RegisterComponent, path:'register'},
  {    component :TestListComponent, path:'listFancy'},
  {    component :TestLogin1Component, path:'testLogin'},
  {    component :TestRegisterUserComponent, path:'testRegister'},
  {    component :TestAddRestoComponent, path:'testAdd'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
