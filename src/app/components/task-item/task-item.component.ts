import { Component, Input } from '@angular/core';
import {Task} from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
}
