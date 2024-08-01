import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // name = "john doe";
  addToCart: number = 0;
  product = {
    name: 'iPhone',
    price: 789,
    color: 'black',
    discount: 8.5,
    inStock: 5,
    pImage: '/assets/images/iphone.png', 
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  // onNameChnage(event: any) {
  //   // console.log(event.target.value)
  //   // this.name = event.target.value;
  // }

  decrementCartValue() {
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if(this.addToCart < this.product.inStock)
    this.addToCart++;
    }
}
