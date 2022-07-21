import {Component, Input} from "@angular/core";
import {IForecast} from "../interfaces/curent.weatherforecast.interface";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-curentweatherforcast',
  templateUrl: './curent.weatherforecast.component.html'
})
export class CurentWeatherforecastComponent{
  @Input()
  data!:IForecast | undefined;
  }
