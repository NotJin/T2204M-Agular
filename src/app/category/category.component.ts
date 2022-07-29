import {Component, } from "@angular/core";
import {ICategory} from "../interfaces/category.interface";
import {IFood} from "../interfaces/food.interface";
import {INav} from "../interfaces/nav.interface";
import {HttpClient} from "@angular/common/http";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html'
})

export class CategoryComponent{
  category: ICategory | undefined;
  data1: IFood | undefined;
  data2: INav | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<INav>(url)
      .subscribe(value => {
        this.data2 = value;
        console.log(this.data2, '1');
      });

    const url1 = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<ICategory>(url1)
      .subscribe(value => {
        this.category = value;
        console.log(this.category, 'cate');
      });
  }
  getValue(){
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<INav>(url)
      .subscribe(value => {
        this.data2 = value;
        console.log(this.data2, '1');
      });
  }
}

