import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBreadcrumbComponent } from './header-breadcrumb.component';

describe('HeaderBreadcrumbComponent', () => {
  let component: HeaderBreadcrumbComponent;
  let fixture: ComponentFixture<HeaderBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
