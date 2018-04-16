import { Component, OnInit, Input, Output } from '@angular/core';
import { Menu } from '../menu';
import { MENU } from '../list-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() send: string;
  options: Menu[] = MENU;

  constructor() { }

  ngOnInit() {
  }
}
