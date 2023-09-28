import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hide!: boolean;
  
  constructor(private router:Router, location:Location) {
    this.hide=false;
  
    router.events.subscribe(val=>{
        if(location.path() !=""){
          this.hide=true;
        }
        else{
          this.hide=false;
        }
    });
   }


  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./']);
  }
}
