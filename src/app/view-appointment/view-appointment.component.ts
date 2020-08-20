import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { allfriends } from '../_services/allfriends';
import { Appoint } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private us: UserService) { }

  colunms = ["Sl NO","Name","Address","City","Package","Trainer Preference","Phone"];
  //index = ["id","firstname","lastname","age","email","phonenumber","trainerpreference","physiotheropist","packages"];
  list : Appoint[] = [];


  ngOnInit() {
    this.getAllAppointments();  //calling method to view data from json file
  }
  getAllAppointments(){
     //calling UserService method to view data from json file
  this.us.getusers().subscribe
    (
      (response)=>
      {
        this.list = response;
      },
      (error)=>
      {
        console.log("Error :"+error);
      }
    )
  }
  //To delete appointment from json file
  deleteAppointment(id: number){
    this.us.deleteUser(id).subscribe(
      (data: allfriends)=>{
        this.getAllAppointments();
      }
    );
  }

  //Click event of edit button.It will display edit form
  editForm(appoint){
  
    document.getElementById("myForm").style.display = "block";
    this.us.currentAppointment = Object.assign({}, appoint);

  }

  //To update appointment from json file
  createAndUpdate(appoint: Appoint){
    
    this.us.updateUser(appoint).subscribe();

    location.reload();
  }

  //Change event of package box to set INR value
  packageEvent(e){
  
    var x=e.target.value;
    
    this.us.currentAppointment.inr=x;
    
}

//Validate date wether it is a past date
validateDate(){
var d=new Date(this.us.currentAppointment.date);
var d1=new Date(Date.now());
if(d<d1){
  alert("Date cant be past date")
}
}

}
