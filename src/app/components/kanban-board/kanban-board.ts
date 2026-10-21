import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './kanban-board.html',
  styleUrls: ['./kanban-board.scss']
})
export class KanbanBoardComponent {
  todo = ['Criar estrutura do projeto', 'Configurar Firebase', 'Estilizar com Tailwind'];
  in_progress = ['Desenvolver tela de Login com Google'];
  done = ['Instalar Angular CLI'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}