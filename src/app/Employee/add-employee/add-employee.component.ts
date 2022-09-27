import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { DatapassService } from 'src/app/datapass.service';
import { ServiceService } from 'src/app/Service/service.service';
import { empdetails } from '../empdetails';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private empbuilder : FormBuilder,
    private empservice :ServiceService,
    private datapassService : DatapassService){}

Employeeform = this.empbuilder.group({

userId  : ['',[Validators.minLength(3)]],
jobTitleName : ['',Validators.minLength(3)],
firstName  : ['',[Validators.minLength(3)]],
lastName  : ['',[Validators.minLength(1)]],
FullName  : ['',[Validators.minLength(1)]],
employeeCode  : ['',Validators.minLength(2)],
region  : ['', Validators.minLength(2)],
phoneNumber  : ['',[Validators.minLength(10)]],
emailAddress  : ['',[Validators.email]],
})

ngOnInit(): void {

this.editvalue();
}

submitvalue(){
  let datasample = this.Employeeform.value  as empdetails;
   
  this.datapassService.confirmAdd.next(datasample);
}

editvalue(){
  this.datapassService.Editvalue.pipe(take(1)).subscribe((data) => {
   this.Employeeform.setValue(data)
   console.log(data);

})
}
onclear(){
this.Employeeform.reset();
}


}
