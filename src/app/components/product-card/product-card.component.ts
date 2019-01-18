import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Array<Product>;  // --> product type ?
  @Input() itemIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
