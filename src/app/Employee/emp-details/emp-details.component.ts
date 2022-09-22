import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatapassService } from 'src/app/datapass.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';
// import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ServiceService } from 'src/app/Service/service.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { empdetails } from '../empdetails';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  delete!:any;
  displayedColumns: string[] = ['userId', 'jobTitleName', 'firstName', 'lastName','FullName', 'employeeCode', 'region', 'phoneNumber','emailAddress','actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
 

  showdelete!:boolean;
  tablesource!: empdetails[];

  constructor(private service :ServiceService,
              public  dialog :MatDialog,
              public datapassService : DatapassService) { } 


  ngOnInit(): void {

    this.service.employee().subscribe((data:empdetails[])=>{
      this.tablesource=data
      this.dataSource= new MatTableDataSource(this.tablesource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }


  ngOnDestroy()
  {
    console.log("in destrouyyy");
    this.datapassService.confirmAdd.unsubscribe();
    this.datapassService.confirmDeletion.unsubscribe();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true
    dialogConfig.width="70%";
    this.dialog.open(AddEmployeeComponent,dialogConfig);

    this.datapassService.confirmAdd.subscribe((data) => {
          console.log("enter in subscribe",Math.random());
         this.updateData(data)
      
    })
    
  }

  updateData(param : empdetails)
  {
    this.tablesource.push(param);
    this.dataSource= new MatTableDataSource(this.tablesource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onEdit(){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose=true;
    // dialogConfig.autoFocus=true
    // dialogConfig.width="70%";
    // this.dialog.open(EditEmpComponent);
  }
  
  
  onDelete(param : empdetails){
     console.log("enterrrrr");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width = '40%';
    this.dialog.open(DialogComponent);

    
    this.datapassService.confirmDeletion.subscribe(data  => {
      console.log(data,Math.random());
      if(data)
      {
        this.deletedata(param);
      }
    })

    // this.datapassService.confirmDeletion.unsubscribe();
    
  }

  deletedata(param : empdetails){
   
   
    for(let i=0;i<this.tablesource.length;i++){
      if(param.employeeCode == this.tablesource[i].employeeCode)
      {
        this.tablesource.splice(i,1);
        break;
      }
    }
      
      this.dataSource= new MatTableDataSource(this.tablesource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 
        
  }

}
