import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { allfriends } from './allfriends';
import { Observable, of } from 'rxjs';


const headersOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentAppointment: allfriends={
    firstname: '',
    lastname: '',
    packages: '',
    physiotherapist: '',
    trainerpreference: '',
    inr: 0,
    date: '',
    streetaddress: '',
    city: '',
    state: '',
    country: '',
    pincode: 0,
    phonenumber: 0,
    email: '',
    age: 0,
    id: 0
  }

  constructor(private http : HttpClient ) { }

  url : string = "http://localhost:6565/allfriends";

  //To view appointments from json file
  getusers(): Observable<allfriends[]>{
    try{
    return this.http.get<allfriends[]>(this.url,headersOptions);
    }
    catch(exception){
      return of([]);
    }
  }

  //To place appointment in json file
    setuser(appoint){
      try{
      return this.http.post(this.url,appoint,headersOptions);
      }
      catch(exception ){ return of([]);}
      
  }
  //To delete appointment from json file..
  deleteUser(id): Observable<allfriends>{
    try{
      return this.http.delete<allfriends>(this.url+'/'+id,headersOptions);
    }
    catch(exception){
      
    }
      
  }

  //To update appointment from json file
  updateUser(appoint){
    try{
      
    return this.http.put(this.url+'/'+appoint.id,appoint,headersOptions);
    }
    catch(exception){
      //return of([]);
    }
    
}
//To save contact in json file
saveContact(contact){
  try{
  return this.http.post("http://localhost:6565/contacts",contact,headersOptions);
  }
  catch(exception){
    return of([]);
  }
}

}
