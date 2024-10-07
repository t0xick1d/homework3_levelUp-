import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../shared/product.interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Output() sideMenuEvent = new EventEmitter<Product>();
  constructor(private productsService: ProductsService) {}
  public getProduct(): Product[] {
    return this.productsService.getProduct();
  }
  public onItemClick(event: Event, product: Product): void {
    // console.log(event);
    this.sideMenuEvent.emit(product);
  }
  public onCheckboxClick(event: Event) {
    event.stopPropagation();
  }
}
