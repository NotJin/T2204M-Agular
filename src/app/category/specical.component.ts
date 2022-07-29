import {Component} from "@angular/core";
import {IFood} from "../interfaces/food.interface";
import {HttpClient} from "@angular/common/http";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-specical',
  templateUrl: 'specical.component.html'
})

export class SpecicalComponent{
  food: IFood | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    const url = 'https://foodgroup.herokuapp.com/api/category/1';
    this.http.get<IFood>(url)
      .subscribe(value => {
        this.food = value;
      });
  }
}

