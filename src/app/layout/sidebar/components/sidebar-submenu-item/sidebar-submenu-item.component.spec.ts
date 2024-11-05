import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubmenuItemComponent } from './sidebar-submenu-item.component';

describe('SidebarSubmenuItemComponent', () => {
  let component: SidebarSubmenuItemComponent;
  let fixture: ComponentFixture<SidebarSubmenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSubmenuItemComponent]
    });
    fixture = TestBed.createComponent(SidebarSubmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
