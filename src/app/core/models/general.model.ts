export class ErrorMessage {
    code: number;
    title: string;
    detail: string;
}

export class ApiResponse<T> {
    data: T;
    error: ErrorMessage;
}

export class AuthResponse {
    token: string;
}

export class SessionData {
    token: string;
    identificationNumber: string;

    isValid(): boolean {
        return this.token != null && this.token != undefined && this.token != "" &&
            this.identificationNumber != null && this.identificationNumber != undefined && this.identificationNumber != "";
    }
}