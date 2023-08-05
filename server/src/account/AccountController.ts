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

    createAccount(body: SignUpRequest): SignUpResponse {
        throw new Error('not implemented');
    }

    confirmAccount(body: ConfirmAccountRequest): ConfirmAccountResponse {
        throw new Error('not implemented');
    }

    connectAccount(body: SignInRequest): SignInResponse {
        throw new Error('not implemented');
    }

    requestPasswordReset(body: PassResetRequest): PassResetResponse {
        throw new Error('not implemented');
    }

    confirmPasswordReset(body: PassResetConfirmRequest): PassResetConfirmResponse {
        throw new Error('not implemented');
    }

}