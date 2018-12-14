import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() editToDOButtonClicked =new EventEmitter();

  cname: string = "";
  ccategory: string = "";
  cstatus: boolean = false;



  constructor() { }

  ngOnInit() {
  }

  onNewButtonClick()
   {
    this.addNewToDoButtonClicked.emit();
  }

  onEditClicked(item: any)
  {
    item.status = this.cstatus;
   
     this.editToDOButtonClicked.emit(item);
    }
  }

  


