import { UserAccountSummary } from '../Account';

export interface ConfirmAccountSuccessResponse {
    success: true;
    message: string;
    user: UserAccountSummary;
    token: string;
}

export interface ConfirmAccountErrorResponse {
    success: false;
    message: string;
    error: {
        code: string;
        details: string;
    }
}

export type ConfirmAccountResponse = ConfirmAccountSuccessResponse
    | ConfirmAccountErrorResponse;
