import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: FoodListService) { }

  currentFoodId: any;
  currentFood: any;

  ngOnInit(): void {
    this.currentFoodId = this.param.snapshot.paramMap.get('id');
    if (this.currentFoodId) {
      this.currentFood = this.service.foodList.filter((food) => {
        return food.id == this.currentFoodId;
      });
    }
  }

}