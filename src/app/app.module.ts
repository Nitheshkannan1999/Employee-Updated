import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    AddEmployeeComponent,
    DialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,  
    MaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    
  ],
  providers: [DatapassService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
