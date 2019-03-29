import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { LoggedUser } from './services/dtd/loggedUser.dtd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){

  }

  ngOnInit(){
    
  }

}
