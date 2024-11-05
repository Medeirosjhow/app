import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarNavComponent } from './sidebar/components/sidebar-nav/sidebar-nav.component';
import { SidebarItemComponent } from './sidebar/components/sidebar-item/sidebar-item.component';



@NgModule({
  declarations: [
    BaseComponent,
    SidebarComponent,
    SidebarNavComponent,
    SidebarItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[BaseComponent]
})
export class LayoutModule { }
