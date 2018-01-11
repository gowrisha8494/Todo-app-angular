import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent  {
  value: any;
  items: any[] = [];
  msg: string;
  error: boolean= false;
  wasClicked: boolean = false;
  selectedRow: number;
  addItems(value: any) {
    if (value !== undefined && value !== '') {
      this.items.push(value);
      this.value = '';
      this.error = false;
    }
  // tslint:disable-next-line:one-line
  else {
      this.error = true;
    }
  }
  delItems(i) {
    this.items.splice(i, 1);
  }
  onClick(item: number): void {
    event.stopPropagation();
    event.preventDefault();
    this.wasClicked = !this.wasClicked;
    this.selectedRow = item;
 }

 getTotalItems(): number {
    return this.items.length;
 }

}
