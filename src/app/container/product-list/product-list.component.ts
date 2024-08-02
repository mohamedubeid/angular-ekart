import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      description: "A classic white t-shirt for everyday wear.",
      brand: "BasicWear",
      gender: "Unisex",
      category: "Clothing",
      size: ['S', 'M', 'L', 'XL'],
      color: ["White"],
      price: 19.99,
      is_in_inventory: true,
      items_left: 50,
      imageURL: "https://example.com/images/classic-white-tshirt.jpg",
      slug: "classic-white-t-shirt"
    },
    {
      id: 2,
      name: "Running Shoes",
      description: "Comfortable running shoes for all terrains.",
      brand: "RunFast",
      gender: "Men",
      category: "Footwear",
      size: [8, 9, 10, 11],
      color: ["Black", "Blue"],
      price: 49.99,
      is_in_inventory: true,
      items_left: 30,
      imageURL: "https://example.com/images/running-shoes.jpg",
      slug: "running-shoes"
    },
    {
      id: 3,
      name: "Leather Wallet",
      description: "Genuine leather wallet with multiple compartments.",
      brand: "LuxLeather",
      gender: "Men",
      category: "Accessories",
      size: [],
      color: ["Brown", "Black"],
      price: 29.99,
      is_in_inventory: false,
      items_left: 0,
      imageURL: "https://example.com/images/leather-wallet.jpg",
      slug: "leather-wallet"
    },
    {
      id: 4,
      name: "Summer Dress",
      description: "Light and breezy dress perfect for summer.",
      brand: "SummerStyle",
      gender: "Women",
      category: "Clothing",
      size: ['S', 'M',' L'],
      color: ["Yellow", "Pink", "Blue"],
      price: 39.99,
      is_in_inventory: true,
      items_left: 15,
      imageURL: "https://example.com/images/summer-dress.jpg",
      slug: "summer-dress"
    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Feature-packed smart watch with fitness tracking.",
      brand: "TechTime",
      gender: "Unisex",
      category: "Electronics",
      size: [],
      color: ["Black", "Silver"],
      price: 99.99,
      is_in_inventory: true,
      items_left: 10,
      imageURL: "https://example.com/images/smart-watch.jpg",
      slug: "smart-watch"
    }
  ];
  
}
