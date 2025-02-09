import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { filter } from 'rxjs';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
// constructor(private taskService:TaskService){}
  //  @Input({required : true}) name!: string;
  @Input({required:true}) name?: string;
  // @Input() name: string | undefined;
@Input({required:true}) id!: string;
  tasks=[
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks(){
    return this.tasks.filter(task=>task.userId === this.id)
   // return this.taskService.getUserTasks(this.id);
  };

  onCompleteTask(id:string){
      this.tasks=this.tasks.filter((task) => task.id !== id);
      //after
     this.saveTasks();
     
  }
  isAddingTask =false;
  onStartAddTask(){
this.isAddingTask=true;
  }

  onCancelAddTask(){
    this.isAddingTask =false;
  }

  onAddTask(taskData:NewTaskData){

    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId:this.id,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date

    })
    this.saveTasks();
    this.isAddingTask=false;
  }

  constructor(){
    const tasks=localStorage.getItem('tasks')

    if(tasks){
      this.tasks =JSON.parse(tasks)
;    }
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}






//The ? after name means this property may or may not be provided.
