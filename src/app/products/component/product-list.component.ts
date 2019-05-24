import { Component, Input } from '@angular/core';
import { Products } from '../models/product-list.model';
@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent  {
  @Input() products: Products[];
  searchText: string = '';
  filteredProducts: Products[];
}
