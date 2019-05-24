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
      {'id': 4, 'name': 'Mango', 'price': 60},
      {'id': 5, 'name': 'Cherry', 'price': 20},
      {'id': 6, 'name': 'Orange', 'price': 10},
      {'id': 7, 'name': 'Blue Berry', 'price': 30},
      {'id': 8, 'name': 'Black Berry', 'price': 60}
    ]
  }
}
