import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng';

@Component({
  selector: 'app-contact-us-mail-dialog',
  templateUrl: 'contact-us-mail-dialog.component.html',
  styleUrls: ['contact-us-mail-dialog.component.css']
})
export class ContactUsMailDialogComponent implements OnInit {

  constructor(public ref: DynamicDialogRef) { }

  ngOnInit() {
  }

  closeDialog(){
    this.ref.close(true);
  }
}
