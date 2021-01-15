import { Component } from '@angular/core';
import { ProductModel } from '../models/product-model.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: ProductModel[] = [
    {
      name: "imã",
      image: "imã",
      price: 2.5
    },
    {
      name: "padrão",
      image: "padrão",
      price: 2.5
    },
    {
      name: "10x15",
      image: "10x15",
      price: 2.5
    },
    {
      name: "case",
      image: "case",
      price: 2.5
    },
  ]

  constructor() { }

}
