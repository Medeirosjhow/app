import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  template: `
    <button class="sidebar__button">{{ label }}</button>
  `,
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent {
  @Input() label: string = '';

}
