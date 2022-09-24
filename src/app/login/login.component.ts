import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatapassService } from '../datapass.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  iconvalue:boolean=true;

  constructor(private fb:FormBuilder,
             private datapassService : DatapassService) {}

    loginform = this.fb.group({
      username : ['',[Validators.required,uservalidate]],
      password :['',[Validators.required,Validators.minLength(8),passwordvalidate]]
    })

  ngOnInit(): void {
   
  }

  validatePassAndId()
  {
    this.datapassService.loginFlag.next(true);
     console.log("hit");
    
  }

}

function uservalidate(control : AbstractControl) : {[key : string] : any}|null
  {    
    let str = control.value as string;
    if(str!='admin')
    {
      return {'validuser' :{value :  control.value}};
    }
    return null;
  }

  function passwordvalidate(control : AbstractControl) : {[key : string] : any}|null
  {    
    let str = control.value as string;
    if(str!='admin123@')
    {     
      return {'validpass' :{value :  control.value}};
    }
    return null;
  }
