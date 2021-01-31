import { SharedService } from './../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.sass']
})
export class ShowDepComponent implements OnInit {

  departmentList: any = [];
  modalTitle!: string;
  activateAddEditDepComponent: boolean = false;
  dep!: Department;

  departmentIdFilter: string = '';
  departmentNameFilter: string = '';

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList() {
    this.sharedService.getDepList().subscribe(data => {
      this.departmentList = data;
    })
  }

  addDepartmentClick(){
    this.dep = {
      DepartmentID: 0,
      DepartmentName: ''
    }
    this.modalTitle = 'Add new department';
    this.activateAddEditDepComponent = true;
  }

  editDepartmentClick(item: Department) {
    this.dep = item;
    console.log(item)
    this.modalTitle = 'Edit this department';
    this.activateAddEditDepComponent = true;
  }

  closeModalClick(){
    this.activateAddEditDepComponent = false;
    this.refreshDepList();
  }

  deleteDepartmentClick(item: Department): void {
    if(confirm('Are you sure you want to delete this department?')){
      this.dep = item;
      const id = this.dep.DepartmentID;
      this.sharedService.deleteDepartment(id).subscribe(data => {
        this.refreshDepList();
      })
    }
  }


}
