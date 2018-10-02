import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
