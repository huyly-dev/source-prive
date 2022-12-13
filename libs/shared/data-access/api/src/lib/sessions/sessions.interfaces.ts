import { PublicKeyCredentialWithAssertionJSON } from '@github/webauthn-json';

export interface ISessionSignInData {
  username: string;
  password: string;
}

export interface ISessionVerifyData extends PublicKeyCredentialWithAssertionJSON {
  username: string;
}
