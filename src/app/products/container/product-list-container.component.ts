import { Component } from '@angular/core';
import { Products } from '../models/product-list.model';
@Component({
  selector: 'product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: [ './product-list-container.component.css' ]
})
export class ProductListContainer  {
  products : Products[] = [];
  name = 'Angular';
  ngOnInit(){
    this.products = [
      {'id': 1, 'name': 'Apple', 'price': 20},
      {'id': 2, 'name': 'Banana', 'price': 10},
      {'id': 3, 'name': 'Pinapple', 'price': 30},
      {'id': 4, 'name': 'Mango', 'price': 60}
    ]
  }
}
