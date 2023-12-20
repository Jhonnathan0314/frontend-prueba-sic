import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoService } from '../crypto/crypto.service';
import { PersonLogin } from '../../models/person.model';
import { SessionData } from '../../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router, private cryptoService: CryptoService) {
    this.validateSession();
  }

  saveSession(loginRequest: PersonLogin, token: string) {
    const sessionData = {
      token: token,
      identificationNumber: loginRequest.identificationNumber
    };
    const encryptedSessionData = this.cryptoService.encryptObject(sessionData);
    localStorage.setItem("object", encryptedSessionData);
    if (this.isTokenExpired() || !this.isValidSessionData()) this.logout();
    this.validateSession();
  }

  logout() {
    localStorage.clear();
    this.redirect('/security/login');
  }

  validateSession() {
    if (this.isLogged()) {
      this.redirect('/dashboard');
    } else {
      this.logout();
    }
  }

  isValidSessionData(): boolean {
    return this.getSessionData().isValid();
  }

  isLogged(): boolean {
    return localStorage.getItem("object") != null && this.isValidSessionData();
  }

  redirect(path: string) {
    this.router.navigateByUrl(path);
  }

  isTokenExpired(): boolean {
    const sessionData = this.getSessionData();
    const token = sessionData.token;
    const tokenPayload = this.decodePayload(token)

    if (!tokenPayload) return true;

    const now = Math.floor(new Date().getTime() / 1000);
    return tokenPayload.exp < now;
  }

  private decodePayload(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const payload = parts[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  }

  getSessionData(): SessionData {
    const localStorageValue = this.cryptoService.decryptObject(localStorage.getItem("object") ?? "");

    let sessionData: SessionData = new SessionData();
    sessionData.token = localStorageValue.token;
    sessionData.identificationNumber = localStorageValue.identificationNumber;
    
    return sessionData;
  }

  getTokenAttribute(token: string, attribute: string) {
    return this.decodePayload(token)[attribute];
  }

  getIdentificationNumber() { return this.getSessionData().identificationNumber; }
  
  getToken() { return this.getSessionData().token; }

}
