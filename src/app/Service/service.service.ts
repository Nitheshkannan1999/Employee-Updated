import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { empdetails } from '../Employee/empdetails';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  url="http://localhost:3000";
  
  url1="http://localhost:3001";

  employee() : Observable<empdetails[]> {
  //       return this.http.get<empdetails[]>(`${this.url}/employeedetails`)  
  

  // insertdata(data : any){
  //   return this.http.post(this.url1,data)
  // }


 return of ([{
      "userId":"rirani",
      "jobTitleName":"Developer",
      "firstName":"Romin",
      "lastName":"Irani",
      "FullName":"Romin Irani",
      "employeeCode":"E1",
      "region":"CA",
      "phoneNumber":"408-1234567",
      "emailAddress":"romin.k.irani@gmail.com"
   },
   {
      "userId":"nirani",
      "jobTitleName":"Developer",
      "firstName":"Neil",
      "lastName":"Irani",
      "FullName":"Neil Irani",
      "employeeCode":"E2",
      "region":"CA",
      "phoneNumber":"408-1111111",
      "emailAddress":"neilrirani@gmail.com"
   },
   {
      "userId":"thanks",
      "jobTitleName":"Program Directory",
      "firstName":"Tom",
      "lastName":"Hanks",
      "FullName":"Tom Hanks",
      "employeeCode":"E3",
      "region":"CA",
      "phoneNumber":"408-2222222",
      "emailAddress":"tomhanks@gmail.com"
   },
   {
      "userId":"rirani",
      "jobTitleName":"Developer",
      "firstName":"Romin",
      "lastName":"Irani",
      "FullName":"Romin Irani",
      "employeeCode":"E4",
      "region":"CA",
      "phoneNumber":"408-1234567",
      "emailAddress":"romin.k.irani@gmail.com"
   },
   {
      "userId":"nirani",
      "jobTitleName":"Developer",
      "firstName":"Neil",
      "lastName":"Irani",
      "FullName":"Neil Irani",
      "employeeCode":"E5",
      "region":"CA",
      "phoneNumber":"408-1111111",
      "emailAddress":"neilrirani@gmail.com"
   },
   {
      "userId":"thanks",
      "jobTitleName":"Program Directory",
      "firstName":"Tom",
      "lastName":"Hanks",
      "FullName":"Tom Hanks",
      "employeeCode":"E6",
      "region":"CA",
      "phoneNumber":"408-2222222",
      "emailAddress":"tomhanks@gmail.com"
   },
   {
      "userId":"rirani",
      "jobTitleName":"Developer",
      "firstName":"Romin",
      "lastName":"Irani",
      "FullName":"Romin Irani",
      "employeeCode":"E7",
      "region":"CA",
      "phoneNumber":"408-1234567",
      "emailAddress":"romin.k.irani@gmail.com"
   },
   {
      "userId":"nirani",
      "jobTitleName":"Developer",
      "firstName":"Neil",
      "lastName":"Irani",
      "FullName":"Neil Irani",
      "employeeCode":"E8",
      "region":"CA",
      "phoneNumber":"408-1111111",
      "emailAddress":"neilrirani@gmail.com"
   },
   {
      "userId":"thanks",
      "jobTitleName":"Program Directory",
      "firstName":"Tom",
      "lastName":"Hanks",
      "FullName":"Tom Hanks",
      "employeeCode":"E9",
      "region":"CA",
      "phoneNumber":"408-2222222",
      "emailAddress":"tomhanks@gmail.com"
   },
   {
      "userId":"rirani",
      "jobTitleName":"Developer",
      "firstName":"Romin",
      "lastName":"Irani",
      "FullName":"Romin Irani",
      "employeeCode":"E10",
      "region":"CA",
      "phoneNumber":"408-1234567",
      "emailAddress":"romin.k.irani@gmail.com"
   },
   {
      "userId":"nirani",
      "jobTitleName":"Developer",
      "firstName":"Neil",
      "lastName":"Irani",
      "FullName":"Neil Irani",
      "employeeCode":"E11",
      "region":"CA",
      "phoneNumber":"408-1111111",
      "emailAddress":"neilrirani@gmail.com"
   },
   {
      "userId":"thanks",
      "jobTitleName":"Program Directory",
      "firstName":"Tom",
      "lastName":"Hanks",
      "FullName":"Tom Hanks",
      "employeeCode":"E12",
      "region":"CA",
      "phoneNumber":"408-2222222",
      "emailAddress":"tomhanks@gmail.com"
   },
   {
      "userId":"rirani",
      "jobTitleName":"Developer",
      "firstName":"Romin",
      "lastName":"Irani",
      "FullName":"Romin Irani",
      "employeeCode":"E13",
      "region":"CA",
      "phoneNumber":"408-1234567",
      "emailAddress":"romin.k.irani@gmail.com"
   },
   {
      "userId":"nirani",
      "jobTitleName":"Developer",
      "firstName":"Neil",
      "lastName":"Irani",
      "FullName":"Neil Irani",
      "employeeCode":"E14",
      "region":"CA",
      "phoneNumber":"408-1111111",
      "emailAddress":"neilrirani@gmail.com"
   },
   {
      "userId":"thanks",
      "jobTitleName":"Program Directory",
      "firstName":"Tom",
      "lastName":"Hanks",
      "FullName":"Tom Hanks",
      "employeeCode":"E15",
      "region":"CA",
      "phoneNumber":"408-2222222",
      "emailAddress":"tomhanks@gmail.com"
   }]);
  }
}
