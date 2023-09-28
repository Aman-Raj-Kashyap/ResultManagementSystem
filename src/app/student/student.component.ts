import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AddResultService } from '../add-result.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  [x: string]: any;

  @ViewChild("roll")
  roll!: ElementRef;

  @ViewChild("name")
  name!: ElementRef;

  searchResult= new FormGroup({
    roll: new FormControl(''),
    name: new FormControl('')
  })


  constructor(private router: Router, private addResultService: AddResultService) { }

  ngOnInit(): void {

  }

 datacol:any =[]
  fetchResult(){
      var nameValidate=RegExp("^[A-Za-z]+$");

      function isValidRoll(roll){
        return isNaN(roll);
      }
    
      if( (this.roll.nativeElement.value && !isValidRoll(this.roll.nativeElement.value)) 
          && (this.name.nativeElement.value && nameValidate.test(this.name.nativeElement.value)) ) {

        console.warn(this.searchResult.value);

        this.addResultService.getResult().subscribe((result)=>{
          this.datacol= result
          console.log(this.datacol)

          let flag=false;
          for (let i = 0; i < this.datacol.length; i++) {
            let res:any = this.datacol[i];

            if(this.searchResult.value.roll== res.roll && this.searchResult.value.name?.toLowerCase() === res.name.toLowerCase()){
              // console.warn(true);
              flag=true;
              console.warn(res.id);
              this.router.navigate(['/showResult/'+res.id]);
              break;
            }
            
          }
          if(flag==false){
            alert("Invalid details! Please enter correct details...");
            this.searchResult.reset();
          }
          
        })
      }
      else{
        alert("Please enter the value");
      }    
      
      
  }





}
