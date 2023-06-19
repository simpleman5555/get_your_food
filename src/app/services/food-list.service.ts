import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor() { }

  foodList = [
    {
      id:1,
      foodName:"Grilled Sandwich",
      foodDetails:"Pan-fried masala toast.",
      foodPrice:20,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Vegan Pizza",
      foodDetails:"Onion, green capsicum, mushroom, black olives, sweet corn, red paprika topped with cheese.",
      foodPrice:36.3,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Chicken Burger",
      foodDetails:"An incredible chicken burger with cheese and fresh salad.",
      foodPrice:25,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Buffalo Chicken Wrap",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:23.5,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Black Brownie",
      foodDetails:"(Eggless) Treat yourself to the lovingly made brownie, which offers an extremely rich chocolate experience.",
      foodPrice:11,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream, feel the love and taste.",
      foodPrice:19.4,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    } 
  ]
}