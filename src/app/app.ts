import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board';

@Component({
  imports: [RouterOutlet, KanbanBoardComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('task-manager-app');
}
