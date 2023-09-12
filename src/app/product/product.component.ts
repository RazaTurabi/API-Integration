import { Component, OnInit } from '@angular/core';
import { productInterface } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  constructor(
    private productService:ProductService
    )
  {}
 
  products!:productInterface[]
  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(val=>this.products=val)
  }

}
