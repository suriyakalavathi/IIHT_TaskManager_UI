import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskApplicationService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  task: Task = new Task();

  constructor(private router: Router, private taskAppService: TaskApplicationService) { }

  ngOnInit() {
  }

  addTask(): void {
    this.taskAppService.addTask(this.task).subscribe( data => { alert('Task added successfully');
    console.log('Task added successfully');
    });
  }

  reset(): void {
    this.task.taskName = '';
    this.task.parentTaskName = '';
    this.task.priority = null;
    this.task.startDate = '';
    this.task.endDate = '';
  }

}
