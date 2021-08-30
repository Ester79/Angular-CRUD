import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit {

  data:any = [];

  constructor(private crudservice:CrudService, private router:Router) {
    //Get all usera details
    this.crudservice.getusers().subscribe((res: any)=>{

      this.data = res;
    });
   }

   modifyuser(id:number){
    this.crudservice.modifyuser(id);
    this.router.navigate([`/users`]);
 }

  ngOnInit(): void {
  }

}
