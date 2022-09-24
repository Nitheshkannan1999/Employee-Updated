import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { DatapassService } from './datapass.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
  loginFlagInHome: boolean = false;


  constructor(public dialog: MatDialog,
    private datapassService : DatapassService) {}

  ngOnInit()
  {
    console.log("in on init");
    this.datapassService.loginFlag.pipe(take(1)).subscribe((data : boolean) =>
    {
      this.loginFlagInHome = data;
      console.log(this.loginFlagInHome);
    })
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  togglenav(nav:any){
    if(nav.opened){
      nav.close()
    }
    else
    {
      nav.open()
    }
  }

  logout()
  {
    this.loginFlagInHome = !this.loginFlagInHome;
  }
}


