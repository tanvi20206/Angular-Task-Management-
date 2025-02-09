import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() cancel = new EventEmitter<void>();
  onCancel(){
 this.cancel.emit();
  }
  // enteresTitle =signal('') for signal uses
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
// @Output() add =new EventEmitter<{title:string;summary:string;date:string}>();
@Output() add =new EventEmitter<NewTaskData>();

  onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }
}
