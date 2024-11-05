import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseComponent } from './base/base.component';
import { SidebarNavComponent } from './sidebar/components/sidebar-nav/sidebar-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarButtonComponent } from './sidebar/components/sidebar-button/sidebar-button.component';
import { SidebarSubmenuComponent } from './sidebar/components/sidebar-submenu/sidebar-submenu.component';
import { SidebarSubmenuItemComponent } from './sidebar/components/sidebar-submenu-item/sidebar-submenu-item.component';
import { SidebarSubitemsComponent } from './sidebar/components/sidebar-subitems/sidebar-subitems.component';



@NgModule({
  declarations: [
    BaseComponent,
    SidebarComponent,
    SidebarNavComponent,
    SidebarButtonComponent,
    SidebarSubmenuComponent,
    SidebarSubmenuItemComponent,
    SidebarSubitemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BaseComponent]
})
export class LayoutModule { }
