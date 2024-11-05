import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-subitems',
  templateUrl: './sidebar-subitems.component.html',
  styleUrls: ['./sidebar-subitems.component.scss']
})
export class SidebarSubitemsComponent {
  @Input() items: string[] = [];

}
