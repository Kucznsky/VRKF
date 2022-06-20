import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isUserLogin = false;

  ngOnInit(): void {
  }

  login(){
    this.isUserLogin = true;
  }

  logout(){
   this.isUserLogin = false;
  }
}
