import { Component } from '@angular/core';
import { Climate, Period } from './interfaces/Climate';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Api';
  today = new Date();
  periods:Period[] = [];

  constructor(private weatherService:WeatherService){
    
  }

  ngOnInit():void {
    this.getClimateFromService();
  }

  getClimateFromService():void{
    this.weatherService.getClimate().subscribe((data)=>{
      if(data.properties!= null){
        this.periods = data.properties.periods;
      }
    });
  }

}
