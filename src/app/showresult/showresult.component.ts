import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddResultService } from '../add-result.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {
  
  constructor(private acrouter: ActivatedRoute, private router:Router, private addResultService: AddResultService) { }
  
  showResult= new FormGroup({
    roll: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')
  })


  ngOnInit(): void {
    // console.warn(this.router.url.slice(12));

    console.warn(this.acrouter.snapshot.params['id']);
    this.addResultService.getCurrentResult(this.acrouter.snapshot.params['id']).subscribe((result)=>{
      this.showResult= new FormGroup({
        roll: new FormControl(result['roll']),
        name: new FormControl(result['name']),
        dob: new FormControl(result['dob']),
        score: new FormControl(result['score'])
      })
    console.warn(result);
    })

  }


}
