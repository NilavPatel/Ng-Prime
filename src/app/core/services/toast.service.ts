import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
/**
 * Toast service class
 * This class provides methods to add single, multiple alerts as a toast 
 */
export class ToastService {
    constructor(private messageService: MessageService) { }

    /**
     * add single toast message
     * @param severity Severity level of the message, valid values are "success", "info", "warn" and "error"
     * @param summary Summary text of the message.
     * @param detail Detail text of the message.
     */
    addSingle(severity: string, summary: string, detail: string) {
        this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }

    /**
     * add multiple toast messages
     * @param messages 
     * array of message type {severity:'success', summary:'Service Message', detail:'Via MessageService'}
     */
    addMultiple(messages: any) {
        this.messageService.addAll(messages);
    }

    /**
     * clear all toast messages
     */
    clear() {
        this.messageService.clear();
    }
}