import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  public allProducts?: Product[];
  public visibleProducts: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public itemsNumberInChart(): number {
    let amount = 0;
    this.allProducts?.forEach((product) => {
      amount += product.amount;
    })
    return amount;
  };

  public chartItemsList(): Product[] {
    const chartItems: Product[] = [];
    this.allProducts?.forEach((product) => {
      if (product.amount > 0) {
        chartItems.push(product);
      }
    })
    return chartItems;
  };

  public changeVisibilityOfItemsInChart() {
    this.visibleProducts = !this.visibleProducts
  };

}
