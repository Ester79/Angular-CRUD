import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data:any = [];

  constructor( private crudservice: CrudService,  private router:Router){
    //Get all usera details
    this.crudservice.getusers().subscribe((res: any)=>{

      this.data = res;
    });
  }

 removeuser(id:number){
    this.crudservice.removeuser(id);
    this.router.navigate([`/users`]);
 }


  ngOnInit(): void {
  }
}
