import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { TestLogin1Component } from './test-login1/test-login1.component';
import { TestIndexComponent } from './test-index/test-index.component';
import { TestRegisterUserComponent } from './test-register-user/test-register-user.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestAddRestoComponent } from './test-add-resto/test-add-resto.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    ListRestaurantComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TestComponent,
    TestLogin1Component,
    TestIndexComponent,
    TestRegisterUserComponent,
    TestListComponent,
    TestAddRestoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
