import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './Employee/emp-details/emp-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatapassService } from './datapass.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    AddEmployeeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,  
    MaterialModule,
    MatDialogModule
  ],
  providers: [DatapassService],
  bootstrap: [AppComponent],
})
export class AppModule { }
