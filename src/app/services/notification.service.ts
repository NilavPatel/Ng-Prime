import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class NotificationService {
    constructor(private messageService: MessageService) { }

    addSingle(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }
}