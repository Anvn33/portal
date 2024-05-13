import { Component, OnInit } from "@angular/core";
import { ApiAuthAService } from "../../../services/apiauth.service";


@Component ({templateUrl:'login.component.html'})
export class LoginComponent implements OnInit {

public email: string = '';
public password: string = '';

constructor(public apiauth: ApiAuthAService){

}


  ngOnInit() {
    
  }

  login(){
    /*this.apiauth.login(this.email,this.password).subscribe(response =>{
      console.log(response);
    })*/

  }
}
