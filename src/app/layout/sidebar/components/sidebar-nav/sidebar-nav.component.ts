import { Component } from '@angular/core';
import { MENU_ITEMS, MenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
})
export class SidebarNavComponent {
  menuItems: MenuItem[] = MENU_ITEMS;
}
