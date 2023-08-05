import {
    ConfirmAccountRequest,
    ConfirmAccountResponse,
    PassResetConfirmRequest,
    PassResetConfirmResponse,
    PassResetRequest,
    PassResetResponse,
    SignInRequest,
    SignInResponse,
    SignUpRequest,
    SignUpResponse,
} from '@auth/common';

export class AccountController {

    async createAccount(body: SignUpRequest): Promise<SignUpResponse> {
        throw new Error('not implemented');
    }

    async confirmAccount(body: ConfirmAccountRequest): Promise<ConfirmAccountResponse> {
        throw new Error('not implemented');
    }

    async connectAccount(body: SignInRequest): Promise<SignInResponse> {
        throw new Error('not implemented');
    }

    async requestPasswordReset(body: PassResetRequest): Promise<PassResetResponse> {
        throw new Error('not implemented');
    }

    async confirmPasswordReset(body: PassResetConfirmRequest): Promise<PassResetConfirmResponse> {
        throw new Error('not implemented');
    }

}