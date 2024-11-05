import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubitemsComponent } from './sidebar-subitems.component';

describe('SidebarSubitemsComponent', () => {
  let component: SidebarSubitemsComponent;
  let fixture: ComponentFixture<SidebarSubitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSubitemsComponent]
    });
    fixture = TestBed.createComponent(SidebarSubitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
