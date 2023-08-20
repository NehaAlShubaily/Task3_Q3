import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-add-resto',
  templateUrl: './test-add-resto.component.html',
  styleUrls: ['./test-add-resto.component.css']
})
export class TestAddRestoComponent {
  alert :boolean =false;
  addRestaurent= new FormGroup({
    title:new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl('')
    


    
  })
  constructor(private resto:CommonService){}
  ngOnInit(): void {
    
  }


  createResto(){
   // console.log(this.addRestaurent.value);
   this.resto.addResto(this.addRestaurent.value).subscribe((result)=> {
   this.alert= true;
   this.addRestaurent.reset({});

    console.log("get data from service", result)
  })
  }

  closeAlert(){
    this.alert= false;
  }

  
}
