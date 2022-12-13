import { from, Observable } from 'rxjs';
import {
  create,
  CredentialCreationOptionsJSON,
  CredentialRequestOptionsJSON,
  get,
  PublicKeyCredentialWithAssertionJSON,
  PublicKeyCredentialWithAttestationJSON
} from '@github/webauthn-json';

/**
 * createKey from data
 * @param requestJSON: CredentialCreationOptionsJSON
 * @returns Observable<PublicKeyCredentialWithAttestationJSON>
 */
export const createKey = (requestJSON: CredentialCreationOptionsJSON): Observable<PublicKeyCredentialWithAttestationJSON> => {
  return from(create(requestJSON));
};

/**
 * createKey from data
 * @param requestJSON: CredentialRequestOptionsJSON
 * @returns Observable<PublicKeyCredentialWithAssertionJSON>
 */
export const getKey = (requestJSON: CredentialRequestOptionsJSON): Observable<PublicKeyCredentialWithAssertionJSON> => {
  return from(get(requestJSON));
};
