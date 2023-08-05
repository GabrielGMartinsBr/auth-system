import { UserAccountSummary } from '../Account';

export interface SignUpSuccessResponse {
    success: true;
    message: string;
    user: UserAccountSummary;
}

export interface SignUpErrorResponse {
    success: false;
    message: string;
    error: {
        code: string;
        details: string;
    }
}

export type SignUpResponse = SignUpSuccessResponse | SignUpErrorResponse;
