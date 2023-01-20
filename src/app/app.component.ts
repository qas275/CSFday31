import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cartstring:string[] = [];
  cart:item[] = []

  add(name:string){
    const fruit = this.cart.filter(item => item.name==name)[0];
    console.log("mainnn"+name)
    if(this.cart.includes(fruit)){
      var idx = this.cart.indexOf(fruit);
      this.cart[idx].quantity +=1;
    }else{
      let newitem: item;
      newitem = {name:fruit?.name || name, quantity:1};
      this.cart.push(newitem);
    }
  }

  minus(name:string){
    const fruit = this.cart.filter(item => item.name==name)[0];

    if(fruit?.quantity===1){
      var idx = this.cart.indexOf(fruit);
      this.cart.splice(idx);
    }
    if(this.cart.includes(fruit)){
      var idx = this.cart.indexOf(fruit);
      this.cart[idx].quantity -=1;
    }
  }

  remove(name:string){
    const fruit = this.cart.filter(item => item.name==name)[0];
    var idx = this.cart.indexOf(fruit)
    this.cart.splice(idx,1);
  }
}
