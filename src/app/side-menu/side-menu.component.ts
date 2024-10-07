import { Component, Input } from '@angular/core';
import { Product } from '../shared/product.interface';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() product?: Product;
  constructor() {}
}
