import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-login1',
  templateUrl: './test-login1.component.html',
  styleUrls: ['./test-login1.component.css']
})
export class TestLogin1Component implements OnInit {
  alert: boolean = false;
  email: string = '';
  password: string = '';

  public loginForm!: FormGroup

  constructor(private resto: CommonService, private http: HttpClient, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  LoginTo() {
    this.http.get<any>("http://localhost:3000/users").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        alert("Login successful")
        this.loginForm.reset();
        this.router.navigate(['list'])
      }
      else {
        alert(" pls check your email id and password");
      }
    }, err => {
      alert("something went wrong !!")
    })
  }





  logIn() {

  }


}
