import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORY } from '../constants';
import { item } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  @Input()
  cartList:item[] = []

  @Output()
  removeItem = new Subject<string>()

  remove(name:string){
    this.removeItem.next(name);
  }
}
