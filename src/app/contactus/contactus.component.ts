import { Component, OnInit } from '@angular/core';
import { ContactUsMailDialogComponent } from '../contact-us-mail-dialog/contact-us-mail-dialog.component';
import { DialogService } from 'primeng/api';
import { AlertService } from '../core/services/alert.service';
import { ApplicationStateService } from '../core/services/application-state.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [DialogService]
})
export class ContactusComponent implements OnInit {

  isMobileResolution: boolean = false;

  constructor(private dialogService: DialogService,
    private alertService: AlertService,
    private applicationStateService: ApplicationStateService) { }

  ngOnInit() {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  openDialogForMail() {
    var width = this.isMobileResolution ? '80%' : '20%';
    const ref = this.dialogService.open(ContactUsMailDialogComponent, {
      data: {
      },
      header: 'Send Mail',
      width: width
    });

    ref.onClose.subscribe((success: boolean) => {
      if (success) {
        this.alertService.addSingle("success", "Mail send successfully", "");
      }
    });
  }

}
