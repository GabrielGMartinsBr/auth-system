
import { UserAccountSummary } from '../Account';

export interface SignInSuccessResponse {
    success: true;
    message: string;
    user: UserAccountSummary;
    token: string;
}

export interface SignInErrorResponse {
    success: false;
    message: string;
    error: {
        code: string;
        details: string;
    }
}

export type SignInResponse = SignInSuccessResponse | SignInErrorResponse;
