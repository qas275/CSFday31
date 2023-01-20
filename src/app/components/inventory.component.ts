import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORY } from '../constants';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  fruits = INVENTORY;

  @Output()
  addFruit = new Subject<string>()
  @Output()
  minusFruit = new Subject<string>()

  add(name:string){
    console.log(name);
    this.addFruit.next(name);
  }

  minus(name:string){
    console.log(name);
    this.minusFruit.next(name);
  }
}
