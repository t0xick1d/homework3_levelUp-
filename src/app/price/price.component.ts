import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
  @Input() price!: number;
  constructor() {}
}
