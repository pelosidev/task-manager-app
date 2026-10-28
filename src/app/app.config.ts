import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Importações do Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

// Objeto de configuração definido diretamente para eliminar erros de caminhos
const firebaseConfig = {
  // Substitui pelos dados que tens no teu environment.ts original
    apiKey: "AIzaSyAbuOj1FVoKevxecsToic4GsIurKCXCC8k",
    authDomain: "task-manager-app-63735.firebaseapp.com",
    projectId: "task-manager-app-63735",
    storageBucket: "task-manager-app-63735.firebasestorage.app",
    messagingSenderId: "700368554319",
    appId: "1:700368554319:web:731d81b4181aa44302dd3a"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    
    // Inicialização do Firebase e do Auth
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};