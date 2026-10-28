import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, KanbanBoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'task-manager-app';
  authService = inject(AuthService);

  // Inicia o fluxo de login com o Google através do popup
  login() {
    this.authService.loginWithGoogle();
  }

  // Faz o logout do utilizador
  logout() {
    this.authService.logout();
  }
}