import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class AlertService {
    constructor(private messageService: MessageService) { }

    addSingle(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    addMultiple(messages: any) {
        this.messageService.addAll(messages);
    }
}