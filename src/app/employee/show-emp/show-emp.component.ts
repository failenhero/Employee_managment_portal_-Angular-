import { SharedService } from './../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { Department, Employee } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.sass']
})
export class ShowEmpComponent implements OnInit {

  employeeList: any = [];
  modalTitle!: string;
  activateAddEditEmpComponent: boolean = false;
  emp!: Employee;

  employeeIdFilter: string = '';
  employeeNameFilter: string = '';
  departmentNameFilter: string = '';

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.sharedService.getEmpList().subscribe(data => {
      this.employeeList = data;
    })
  }

  addEmployeeClick(){
    this.emp = {
      EmployeeID: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'anonymous.png'
    }
    this.modalTitle = 'Add new employee';
    this.activateAddEditEmpComponent = true;
  }

  editEmployeeClick(item: Employee) {
    this.emp = item;
    console.log(item)
    this.modalTitle = 'Edit this employee profile';
    this.activateAddEditEmpComponent = true;
  }

  closeModalClick(){
    this.activateAddEditEmpComponent = false;
    this.refreshEmpList();
  }

  deleteEmployeeClick(item: Employee): void {
    if(confirm('Are you sure you want to delete this employee?')){
      this.emp = item;
      const id = this.emp.EmployeeID;
      this.sharedService.deleteEmployee(id).subscribe(data => {
        this.refreshEmpList();
      })
    }
  }
}
