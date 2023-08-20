import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent {
alert:boolean =false;
  editRestaurent: FormGroup;


  constructor (private  resto:CommonService,private router:ActivatedRoute, private formBuilder: FormBuilder){ 

  this.editRestaurent =this.formBuilder.group({
    title: new FormControl(''),
    Address: new FormControl(''),
    email: new FormControl('')
  });
}
//   ngOnInit(): void{
//  this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=> {
//   console.log(result)
//  });
//   }

//------------------------------------------------------------------------------------

  ngOnInit(): void {
  const id = this.router.snapshot.params['id']; // Get the 'id' parameter from the route
    this.resto.getCurrentData(id).subscribe(
      (result) => {
      this.editRestaurent.patchValue(result);
    },
    
    (error) => {
      console.error('Error fetching restaurant data:', error);
    }
    
    );
  }

  updateResto(){
    this.resto.updateResto(this.router.snapshot.params['id'],this.editRestaurent.value).subscribe((result)=> {
 console.log(result,"data updated successfully")
 this.alert = true;
    })
}



}
