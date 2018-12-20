export class User {
    constructor() {
        this.userId = null;
        this.userName = null;
        this.password = null;
        this.emailId = null;
        this.birthDate = null;
    }

    userId: number;
    userName: string;
    password: string;
    emailId: string;
    birthDate: Date;
}