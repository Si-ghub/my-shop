import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input()
  public allProducts?: Product[];
  public visibleProducts: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public itemsNumberInCart(): number {
    let amount = 0;
    this.allProducts?.forEach((product) => {
      amount += product.amount;
    })
    return amount;
  }

  public cartItemsList(): Product[] {
    const cartItems: Product[] = [];
    this.allProducts?.forEach((product) => {
      if (product.amount > 0) {
        cartItems.push(product);
      }
    })
    return cartItems;
  }

  public changeVisibilityOfItemsInCart() {
    this.visibleProducts = !this.visibleProducts
  }

}
