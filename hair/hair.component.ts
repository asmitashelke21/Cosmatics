import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hair',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.css'
})
export class HairComponent {
  hairProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getHairProducts();
  }

  getHairProducts(): void {
    this.productService.getProductsByType('hair-products').subscribe(
      (products: Product[]) => {
       this.hairProducts=products
      },
      (error) => {
        console.error(error);
      }
    );
  }
}