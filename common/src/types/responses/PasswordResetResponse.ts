import { UserAccountSummary } from '../Account';

export interface PasswordResetSuccessResponse {
    success: true;
    message: string;
    user: UserAccountSummary;
}

export interface PasswordResetErrorResponse {
    success: false;
    message: string;
    error: {
        code: string;
        details: string;
    }
}

export type PasswordResetResponse = PasswordResetSuccessResponse
    | PasswordResetErrorResponse;
