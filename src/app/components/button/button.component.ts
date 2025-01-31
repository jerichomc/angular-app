import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() color: string = 'blue';
  @Output() btnClick: EventEmitter<void> = new EventEmitter()

  onClick(){
    this.btnClick.emit();
  } //allows set function per button

}
