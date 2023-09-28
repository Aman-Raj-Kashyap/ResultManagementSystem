import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute  } from '@angular/router';
import { AddResultService } from '../add-result.service';

@Component({
  selector: 'app-updateresult',
  templateUrl: './updateresult.component.html',
  styleUrls: ['./updateresult.component.css']
})
export class UpdateresultComponent implements OnInit {

  updateResult= new FormGroup({
    roll: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')
  })

  constructor(private acrouter:ActivatedRoute, private addResultService: AddResultService, private router: Router) { }

  ngOnInit(): void {
    console.warn(this.acrouter.snapshot.params['id']);
    this.addResultService.getCurrentResult(this.acrouter.snapshot.params['id']).subscribe((result)=>{
      this.updateResult= new FormGroup({
        roll: new FormControl(result['roll'], Validators.required),
        name: new FormControl(result['name'], Validators.required),
        dob: new FormControl(result['dob'], Validators.required),
        score: new FormControl(result['score'], Validators.required)
      })
    console.warn(result);
    })
  }

  collection(){
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

    if(this.updateResult.value.roll && !isValidRoll(this.updateResult.value.roll) 
      && (this.updateResult.value.name && nameValidate.test(this.updateResult.value.name)) 
      && (this.updateResult.value.dob && isValidDate(this.updateResult.value.dob))
      && (this.updateResult.value.score && !isValidScore(this.updateResult.value.score) )){
          console.warn(this.updateResult.value);
          this.addResultService.updateResult(this.acrouter.snapshot.params['id'],this.updateResult.value).subscribe((result)=>{
              console.warn("result",result);
      });
      alert("Data updated successfully...");
          this.router.navigate(['/manageResult']);
    }
    else{
        alert("Please enter valid data!");
    }
    
  }

}
