import { Component, OnInit } from '@angular/core';
import { ContactUsMailDialogComponent } from '../contact-us-mail-dialog/contact-us-mail-dialog.component';
import { DialogService } from 'primeng/api';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [DialogService]
})
export class ContactusComponent implements OnInit {

  constructor(private dialogService: DialogService, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  openDialogForMail() {
    const ref = this.dialogService.open(ContactUsMailDialogComponent, {
      data: {
      },
      header: 'Send Mail',
      width: '20%'
    });

    ref.onClose.subscribe((success: boolean) => {
      if (success) {
        this.notificationService.addSingle("success", "Mail send successfully", "");
      }
    });
  }

}
