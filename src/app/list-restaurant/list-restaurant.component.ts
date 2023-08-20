
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent {
  public collection: any;
  alert: boolean = false;
  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result;

      console.log(this.collection)
    });

  }


//   deleteRestau(id:any) {
//    this.commonService.deleteResto(this.router.snapshot.params['id']).subscribe((result) => {
//     this.alert = true;
//   });
// }


deleteRestau(id: number): void {
  this.commonService.deleteResto(id).subscribe(
    () => {
     
      this.alert =true;
      this.commonService.getRestoList().subscribe((result) => {
        this.collection = result;}) 
    },
    (error) => {
      console.error('Error deleting restaurant:', error);
    }
  );
}
}





