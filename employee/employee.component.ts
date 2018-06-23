import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../providers/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private edit_id : string;
  private save_stt : boolean=false;
  private btn_stt: boolean = true;
  private emp: any = {};
  private emps: any[] = [];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.empService.get().subscribe(
      (res) => {
        let jsonRecord = res.json();
        let keys = Object.keys(jsonRecord);
        this.emps = keys.map(key => {
          return { id: key, data: jsonRecord[key] };
        })
        console.log('The keys is ', keys)
      },
      (err) => {
        console.log('The error is ', err)
      }
    )
  }

updateEmployee(){
  this.empService.update(this.edit_id,this.emp).subscribe(
    (res) => {
      console.log('Record updated');
    },
    (err) => {
      console.log('The error is ', err)
    },
    ()=>{
      this.getEmployee();
    }
  )
}

  saveEmployee() {
    this.save_stt=true;
    this.empService.create(this.emp).subscribe(
      (res) => {
        console.log('Record saved')
      },
      (err) => {
        console.log('The error is ', err)
      },
      () => {
        this.save_stt = false;
        this.getEmployee();
      }
    )
  }

  editEmployee(emp) {
    this.btn_stt = false;
    this.edit_id = emp.id;
    this.emp = emp.data;
  }

  removeEmp(id) {
    this.empService.delete(id).subscribe(
      (res) => {
        console.log('Record deleted')
      },
      (err) => {
        console.log('The error is ', err)
      },
      () => {
        this.getEmployee();
      }
    )
  }

}
