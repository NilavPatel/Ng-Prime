export class notification {
    constructor(message: string, createdOn: Date, createdBy: number) {
        this.message = message;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
    }
    message: string;
    createdOn: Date;
    createdBy: number;
}