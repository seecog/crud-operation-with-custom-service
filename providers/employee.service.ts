import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable({providedIn : 'root'})
export class EmployeeService{

constructor(private http : Http){

}

create(data){
return this.http.post('https://hrms-eb1fa.firebaseio.com/employees.json',data);
}

get(){
return this.http.get('https://hrms-eb1fa.firebaseio.com/employees.json');
}

update(id,updateData){
return this.http.put('https://hrms-eb1fa.firebaseio.com/employees/'+id+'.json',updateData)
}

delete(id){
return this.http.delete('https://hrms-eb1fa.firebaseio.com/employees/'+id+'.json')
}

}