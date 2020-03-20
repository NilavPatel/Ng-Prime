import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng';
import { ContactUsMailDialogComponent } from 'src/app/features/contactus/contact-us-mail-dialog/contact-us-mail-dialog.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { ApplicationStateService } from 'src/app/core/services/application-state.service';

@Component({
  selector: 'app-contactus',
  templateUrl: 'contactus.component.html',
  styleUrls: ['contactus.component.css'],
  providers: [DialogService]
})
export class ContactusComponent implements OnInit {

  isMobileResolution: boolean = false;

  constructor(private dialogService: DialogService,
    private toastService: ToastService,
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
        this.toastService.addSingle("success", "Mail send successfully", "");
      }
    });
  }

}
