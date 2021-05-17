import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formsclass } from '../app/formsclass';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http:HttpClient) { }

url="http://localhost:3000"

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} 

postData(employees:any):Observable<Formsclass>{
  return this.http.post<Formsclass>(this.url+'/employees/',
  JSON.stringify(employees),this.httpOptions
  )
}
getData():Observable<Formsclass>{
  return this.http.get<Formsclass>(this.url+'/employees',this.httpOptions)
}
getDataId(id:any):Observable<Formsclass>{
  return this.http.get<Formsclass>(this.url+'/employees/'+id,
  this.httpOptions
  )
}

deleteData(id:any):Observable<Formsclass>{
 return this.http.delete<Formsclass>(this.url+'/employees/'+id,
 this.httpOptions)
}
updateData(id:any,employees:any):Observable<Formsclass>{
 return this.http.put<Formsclass>(this.url+'/employees/'+id,
  JSON.stringify(employees),this.httpOptions
  )
}




}
