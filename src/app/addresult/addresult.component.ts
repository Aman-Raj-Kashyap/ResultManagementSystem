import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { AddResultService } from '../add-result.service';

@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css']
})

export class AddresultComponent implements OnInit {

@ViewChild("roll")
roll!:ElementRef
@ViewChild("name")
name!:ElementRef
@ViewChild("dob")
dob!:ElementRef
@ViewChild("score")
score!:ElementRef

  addResult= new FormGroup({
    roll: new FormControl('', Validators.required),
    name:new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required)
    // score:new FormControl('', Validators.pattern("^\d{1,3}$"))
  })

  
  constructor(private router: Router, private save : AddResultService) { }
  
  ngOnInit(): void {
    
  }
  
  collectResult(){

    var nameValidate=RegExp("^[A-Za-z]+$");

    function isValidDate(date) {
      var temp = date.split('/');
      var d = new Date(temp[1] + '/' + temp[0] + '/' + temp[2]);
      return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) && d.getFullYear() == Number(temp[2]) && Number(temp[2]>1900 && temp[2]<2100));
    }

    function isValidRoll(roll){
      if(parseInt(roll)>0 && parseInt(roll)<100000){
        return isNaN(roll);
      }
      else{
        return true;
      }
    }

    function isValidScore(score){
      if(parseInt(score)>0 && parseInt(score)<1000){
        return isNaN(score);
      }
      else{
        return true;
      }
    }

    if( (this.roll.nativeElement.value && !isValidRoll(this.roll.nativeElement.value)) 
          && (this.name.nativeElement.value && nameValidate.test(this.name.nativeElement.value)) 
          && (this.dob.nativeElement.value && isValidDate(this.dob.nativeElement.value))
          && (this.score.nativeElement.value && !isValidScore(this.score.nativeElement.value) )){
      // console.warn(this.addResult.value);
      this.save.saveResult(this.addResult.value).subscribe((result)=>{
        console.warn("result is here",result);
      });
      this.addResult.reset({});
      alert("Result added successfully!");
      this.router.navigate(['/manageResult']);
    }
    else{
      alert("Please fill all details!");
    }
  }

}
