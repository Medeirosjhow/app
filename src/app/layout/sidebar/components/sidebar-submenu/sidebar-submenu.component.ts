import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-submenu',
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.scss']
})
export class SidebarSubmenuComponent {
  @Input() label: string = '';
  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}
