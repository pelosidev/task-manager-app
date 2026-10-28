import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private googleProvider = new GoogleAuthProvider();

  // Observable para monitorizar se o utilizador está logado ou não
  user$ = user(this.auth);

  // Função para fazer login com o popup do Google
  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, this.googleProvider);
      return result.user;
    } catch (error) {
      console.error('Erro no login com o Google', error);
      throw error;
    }
  }

  // Função para terminar sessão
  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Erro ao terminar sessão', error);
    }
  }
}