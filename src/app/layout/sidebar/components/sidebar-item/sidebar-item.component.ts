import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input() item!: MenuItem;
  @Input() level: number = 0;
  isExpanded = false;

  constructor(private router: Router) {}

  onItemClick(event: Event) {
    if (this.item.children) {
      event.preventDefault(); // Impede a navegação
      this.isExpanded = !this.isExpanded;
    }
    // Caso contrário, permite a navegação normal pelo [routerLink]
  }
}
