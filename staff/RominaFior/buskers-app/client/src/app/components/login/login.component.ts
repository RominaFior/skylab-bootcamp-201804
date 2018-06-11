import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  providers: [UserService] 
})
export class LoginComponent implements OnInit{
  public title = "Login";
  public user: User;
  public identity=true;
  public token;
  
  constructor() { 
    private _userService: UserService
    
  }
  ngOnInit(){    
  }
  

}
