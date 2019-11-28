import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactUsMailDialogComponent } from './contact-us-mail-dialog.component';

describe('ContactUsMailDialogComponent', () => {
  let component: ContactUsMailDialogComponent;
  let fixture: ComponentFixture<ContactUsMailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsMailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsMailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
