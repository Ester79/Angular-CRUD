import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private crudService:CrudService, private formBuilder:FormBuilder, private router:Router) { }

  //Add user form actions
  get f(){return this.registerForm.controls;}

  onSubmit(){
    this.submitted = true;
    //stop here if form is invalid
    if(this.registerForm.invalid){
      return;
    }
    //True if all the fields are filled
    if(this.submitted){
      //Initialize Params Objetc
      var myFormData= new FormData();

      //Begin assigning parameter
      myFormData.append('myUsername', this.registerForm.value.firstname);
      myFormData.append('myEmail', this.registerForm.value.email);

      this.crudService.adduser(myFormData); //calling add user service
      this.router.navigate([`/users`]); //after form submit page will redirect to users page
    }

  }

  ngOnInit(): void {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      firstname:['',[Validators.required]]
    })
  }

}
