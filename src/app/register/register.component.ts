import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  alert: boolean = false;
  createUser = new FormGroup({
    name: new FormControl(''),

    email: new FormControl(''),

    password: new FormControl('')

  })
  constructor(private resto: CommonService, private router: Router) { }

  regUser() {
    console.log(this.createUser.value);
    this.resto.createUser(this.createUser.value).subscribe((result) => {
      console.log(result, "data created successfully"),
      alert("data created successfully"),
      this.createUser.reset();
    },
      error => {
        alert("not registered")
      }
    )
  }

  nav() {
    this.router.navigate(['../login']);
  }

}
