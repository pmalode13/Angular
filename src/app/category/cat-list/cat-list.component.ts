import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  @Output() showNewCatForm = new EventEmitter();

  @Output() showEditForm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  onCatNewButtonClick()
  {
    this.showNewCatForm.emit();
  }


  onCEditClick()
  {
    this.showEditForm.emit();
  }
}
