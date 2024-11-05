import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-submenu-item',
  templateUrl: './sidebar-submenu-item.component.html',
  styleUrls: ['./sidebar-submenu-item.component.scss']
})
export class SidebarSubmenuItemComponent {
  @Input() label: string = '';
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
