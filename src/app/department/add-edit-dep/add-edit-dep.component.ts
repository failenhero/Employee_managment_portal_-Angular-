import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/interfaces';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.sass']
})

export class AddEditDepComponent implements OnInit {

  @Input() dep!: Department;
  DepartmentID!: string;
  DepartmentName!: string;

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.DepartmentID = this.dep.DepartmentID;
    this.DepartmentName = this.dep.DepartmentName
  }

  addDepartment(): void {
    const val = {DepartmentName:this.DepartmentName}
    this.sharedService.addDepartment(val).subscribe( res => {
      alert(res.toString())
    });
  }

  editDepartment() {
    const val = {DepartmentID:this.DepartmentID,
      DepartmentName:this.DepartmentName};
    this.sharedService.updateDepartment(val).subscribe(res => {
      alert(res.toString())
    });
  }

}
