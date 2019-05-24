import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListContainer } from './products/container/product-list-container.component';
import { ProductListComponent } from './products/component/product-list.component';
import { FilterPipe } from './products/pipes/filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListContainer,  ProductListComponent, FilterPipe],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
