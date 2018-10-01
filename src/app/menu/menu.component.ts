import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'TV', icon: 'pi pi-fw pi-caret-right'
          },
          {
              label: 'Sports', icon: 'pi pi-fw pi-caret-right'
          },
          {
              label: 'Entertainment', icon: 'pi pi-fw pi-caret-right'
          },
          {
              label: 'Technology', icon: 'pi pi-fw pi-caret-right'
          }
      ];
    }  
}
