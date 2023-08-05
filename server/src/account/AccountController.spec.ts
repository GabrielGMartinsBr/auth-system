import { beforeEach, describe, expect, it } from 'vitest';
import {
    ConfirmAccountRequest,
    PassResetConfirmRequest,
    PassResetRequest,
    SignInRequest,
    SignUpRequest
} from '@auth/common';
import { AccountController } from './AccountController';

describe('Account Controller', () => {
    let ctrlInst: AccountController;

    beforeEach(() => {
        ctrlInst = new AccountController();
    });

    it('should create controller instance', () => {
        expect(ctrlInst).toBeInstanceOf(AccountController);
    });

    describe('createAccount', () => {
        it('should return truthy response', async () => {
            const body: SignUpRequest = {
                name: 'Jack',
                surname: 'Chan',
                email: 'jack@email.com',
                password: '@=j4ck.Ch4n&-;_'
            };
            const result = await ctrlInst.createAccount(body);
            expect(result).toBeTruthy();
        });
    });

    describe('confirmAccount', () => {
        it('should return truthy response', async () => {
            const body: ConfirmAccountRequest = {
                token: ''
            };
            const result = await ctrlInst.confirmAccount(body);
            expect(result).toBeTruthy();
        });
    });

    describe('connectAccount', () => {
        it('should return truthy response', async () => {
            const body: SignInRequest = {
                email: 'jack@email.com',
                password: '@=j4ck.Ch4n&-;_'
            };
            const result = await ctrlInst.connectAccount(body);
            expect(result).toBeTruthy();
        });
    });

    describe('requestPasswordReset', () => {
        it('should return truthy response', async () => {
            const body: PassResetRequest = {
                email: 'jack@email.com'
            };
            const result = await ctrlInst.requestPasswordReset(body);
            expect(result).toBeTruthy();
        });
    });

    describe('confirmPasswordReset', () => {
        it('should return truthy response', async () => {
            const body: PassResetConfirmRequest = {
                token: '',
                newPassword: '@=j4ck.Ch4n&-;_'
            };
            const result = await ctrlInst.confirmPasswordReset(body);
            expect(result).toBeTruthy();
        });
    });
});