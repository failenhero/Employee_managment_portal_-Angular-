import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.sass']
})

export class AddEditDepComponent implements OnInit {

  @Input() dep!: Department;

  constructor() { }

  ngOnInit(): void {
  }

}
