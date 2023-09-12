import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
