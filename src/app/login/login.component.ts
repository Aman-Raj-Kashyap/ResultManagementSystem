import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  onClick1() {
    this.router.navigate(['/manageResult']);
  }

  onClick2() {
    this.router.navigate(['/searchResult']);
  }
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


}
