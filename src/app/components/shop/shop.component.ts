import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  public products: Product[] = [];

  constructor() {
    this.products.push(new Product('coat', 250, '../../../assets/img/coat.png'));
    this.products.push(new Product('trousers', 99, '../../../assets/img/trousers.png'));
    this.products.push(new Product('shoes', 189, '../../../assets/img/shoes.png'));
  }

  ngOnInit(): void {
  }

}
