import { Component, HostListener, ElementRef } from '@angular/core';
import { Product } from './shared/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeSideMenu: boolean = false;
  activeItem: Product | undefined = undefined;
  constructor(private elementRef: ElementRef) {}
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.activeSideMenu = false;
      this.activeItem = undefined;
    }
  }
  public switchSideMenu(product: Product): void {
    if (this.activeItem === undefined) {
      this.activeSideMenu = !this.activeSideMenu;
      this.activeItem = product;
      return;
    }
    if (this.activeItem.id === product.id) {
      this.activeSideMenu = !this.activeSideMenu;
      this.activeItem = undefined;
      return;
    }
    if (this.activeItem.id !== product.id) {
      this.activeItem = product;
      return;
    }
  }
}
