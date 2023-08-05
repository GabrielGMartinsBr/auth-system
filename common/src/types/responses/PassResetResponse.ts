import { UserAccountSummary } from '../Account';

export interface PassResetSuccessResponse {
    success: true;
    message: string;
    user: UserAccountSummary;
}

export interface PassResetErrorResponse {
    success: false;
    message: string;
    error: {
        code: string;
        details: string;
    }
}

export type PassResetResponse = PassResetSuccessResponse
    | PassResetErrorResponse;
