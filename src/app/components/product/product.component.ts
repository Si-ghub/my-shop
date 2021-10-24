import {
  Component, EventEmitter,
  Input,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  public item?: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
