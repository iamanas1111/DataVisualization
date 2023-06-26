import { AfterViewInit, Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngularChart';
  items!: any[];
  chart: any;

  constructor(private service: ServiceService) { }
  ngAfterViewInit(): void {
  
  }
  ngOnInit() {
    this.service.getData().subscribe((res: any) => {
      this.items = res;
      console.log(this.items);
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        var intensity = [];
        var likelihood1 = [];
        var relevence = [];
        var year = [];
        var country = [];
        var topics = [];
        var region = [];
        var city = [];
        intensity=element.intensity
        likelihood1 = element.likelihood;
        relevence = element.relevence;
        year = element.year;
        country = element.country;
        topics = element.topics;
        region = element.region
        city = element.city
        console.log(intensity);
        console.log(likelihood1);
        console.log(relevence);
        console.log(region);
        console.log(city);
        console.log(topics);
        console.log(year);
        console.log(country);
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: intensity,
            datasets: [
              {
                data: intensity,

                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: likelihood1,
                borderColor: '#ffcc00',
                fill: false
              },

            ]
          },
          options: {
            scales: {
              xAxis: {
                display: true
              },
              yAxes: {
                display: true
              }
            }
          }
        })
      }
      console.log(intensity);
    })
    
  }
}
