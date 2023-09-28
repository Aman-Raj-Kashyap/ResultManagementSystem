import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddResultService } from '../add-result.service';

@Component({
  selector: 'app-manageresult',
  templateUrl: './manageresult.component.html',
  styleUrls: ['./manageresult.component.css']
})
export class ManageresultComponent implements OnInit {

  constructor(private router: Router, private addResult:AddResultService) { }

  list:any=[];

  ngOnInit(): void {

    this.addResult.getResult().subscribe((show)=>{
        this.list=show;
        console.warn(this.list);
    });
  }

  add(){
    this.router.navigate(['/addResult']);
  }

  deleteResult(item:any) {
    console.warn(item);
    let tid = this.list.findIndex((x:{id:any;})=>x.id===item);
    
    this.list.splice(tid,1);
    this.addResult.deleteResult(item).subscribe((result)=>{
      console.warn("result",result);
    })
  }

}
