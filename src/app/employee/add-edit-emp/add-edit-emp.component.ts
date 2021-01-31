import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/interfaces';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.sass']
})
export class AddEditEmpComponent implements OnInit {

  @Input() emp!: Employee;
  EmployeeID!: any;
  EmployeeName!: string;
  Department!: string;
  DateOfJoining!: string;
  PhotoFileName!: string;
  PhotoFilePath!: string;

  DepartmentList: any = [];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.refreshDepartmentList();
  }

  refreshDepartmentList(): void {
    this.sharedService.getDepList().subscribe(data => {
      this.DepartmentList = data;

      this.EmployeeID = this.emp.EmployeeID;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.sharedService.PhotoUrl+this.PhotoFileName;
    })
  }

  addEmployee(){
    const val = {
      EmployeeID:this.EmployeeID,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    }
    this.sharedService.addEmployee(val).subscribe(res => {
      alert(res.toString());
    })
  }

  editEmployee(){
    const val = {
      EmployeeID:this.EmployeeID,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    }
    this.sharedService.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    })
  }

  uploadPhoto(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile',file,file.name);

    this.sharedService.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.sharedService.PhotoUrl+this.PhotoFileName;
    })
  }

}
