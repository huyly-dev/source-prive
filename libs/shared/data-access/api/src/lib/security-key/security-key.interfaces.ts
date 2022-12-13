import { PublicKeyCredentialWithAttestationJSON } from '@github/webauthn-json/dist/types/basic/json';

export interface ISecurityKeyListItem {
  id: string;
  label: string;
  createdAt: Date;
  lastUsed: Date;
}

export interface ISecurityKeyListItemVM {
  id: string;
  label: string;
  created_at: Date;
  last_used: Date;
}

export interface ISecurityRegisterKeyChallengeData {
  password: string;
}

export interface ISecurityRegisterNewKeyData extends PublicKeyCredentialWithAttestationJSON {
  label: string;
}

export interface ISecurityUpdateLabelData {
  id: string;
  label: string;
}

