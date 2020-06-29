import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  items;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.items = this.productService.getProducts();
    console.log(this.items);
  }

}
