import { UserAccountSummary } from '../Account';

export interface PassResetConfirmSuccessResponse {
    success: true;
    message: string;
    user: UserAccountSummary;
    token: string;
}

export interface PassResetConfirmErrorResponse {
    success: false;
    message: string;
    error: {
        code: string;
        details: string;
    }
}

export type PassResetConfirmResponse = PassResetConfirmSuccessResponse
    | PassResetConfirmErrorResponse;
