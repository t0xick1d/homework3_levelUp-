import { Injectable } from '@angular/core';
import { Product } from './shared/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: Product[] = [
    {
      id: 'PRD-1A2B3C',
      name: 'Smartphone',
      price: 500,
      category: 'Electronics',
      description: 'Latest model with advanced features',
      inStock: true,
      rating: 4,
    },
    {
      id: 'PRD-4D5E6F',
      name: 'Laptop',
      price: 1200,
      category: 'Electronics',
      description: 'High performance for professional use',
      inStock: true,
      rating: 5,
    },
    {
      id: 'PRD-7G8H9I',
      name: 'Headphones',
      price: 150,
      category: 'Accessories',
      description: 'Noise-cancelling over-ear headphones',
      inStock: true,
      rating: 4,
    },
    {
      id: 'PRD-1J2K3L',
      name: 'Coffee Maker',
      price: 80,
      category: 'Home Appliances',
      description: 'Brews coffee in minutes',
      inStock: false,
      rating: 3,
    },
    {
      id: 'PRD-4M5N6O',
      name: 'Smart Watch',
      price: 300,
      category: 'Wearables',
      description: 'Track fitness and notifications',
      inStock: true,
      rating: 4,
    },
    {
      id: 'PRD-7P8Q9R',
      name: 'Electric Kettle',
      price: 40,
      category: 'Home Appliances',
      description: 'Quick water boiling',
      inStock: false,
      rating: 4,
    },
    {
      id: 'PRD-1S2T3U',
      name: 'Wireless Mouse',
      price: 25,
      category: 'Accessories',
      description: 'Ergonomic design with long battery life',
      inStock: true,
      rating: 5,
    },
    {
      id: 'PRD-4V5W6X',
      name: 'Gaming Console',
      price: 400,
      category: 'Electronics',
      description: 'High-quality gaming experience',
      inStock: false,
      rating: 4,
    },
    {
      id: 'PRD-7Y8Z9A',
      name: 'Blender',
      price: 70,
      category: 'Home Appliances',
      description: 'Perfect for smoothies and soups',
      inStock: true,
      rating: 4,
    },
    {
      id: 'PRD-1B2C3D',
      name: 'Tablet',
      price: 350,
      category: 'Electronics',
      description: 'Portable device for work and play',
      inStock: false,
      rating: 5,
    },
  ];

  actveItem: Product | {} = {};
  constructor() {}
  public getProduct(): Product[] {
    return this.product;
  }
  public productActive(product: Product): void {
    this.actveItem = product;
  }
}
