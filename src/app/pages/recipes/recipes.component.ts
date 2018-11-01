import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {BaseService} from '../../services/base.service';
import {Chart} from 'chart.js';
@Component({
    //selector: 'ngx-dashboard',
    templateUrl: './recipes.component.html',
})

export class RecipesComponent implements OnInit {

    years : any[];
    year: number;
    month: number;
    typeChart: string = 'bar';
    limit: number = 10;
    results: any[];
    chart :Chart = [];
    ngOnInit(){

        /*   this.baseService.getIps().subscribe(ips =>{
             this.ipss = ips.json()
           
        }); */
        this.baseService.getYears().subscribe(years => this.years = years.json());
        
    }

    constructor(private themeService: NbThemeService,
        private baseService: BaseService){
            
        }

    send(event){
        //console.log(this.chart)
        if(!Array.isArray(this.chart)){
            this.chart.destroy();
        }
        let data = {
    
            year: this.year,
            month: this.month,
            limit: this.limit
            //ips: this.selectedIps,
        }
        this.baseService.getRecipes(data).subscribe(results => {
            this.results = results.json();
            let labels = [];
            let data = [];
            this.results.map(result => {
                labels.push(result.label);
                data.push(result.op)
            })

            this.chart = new Chart('canvas', {
                type: this.typeChart,
                data: {
                  labels: labels,
                  datasets: [
                    { 
                      label: 'Cantidad',
                      data: data,
                      borderColor: this.typeChart == 'line'?"#3cba9f":'',
                      backgroundColor: this.typeChart != 'line'? this.randomColors(data):''
                    },     
                  ]
                },
                options: {
                    title: {
						display: true,
                        text: 'Medicinas más recetadas',
                        fontSize : 18,
					}
                }
              });
            

        });
        //console.log(data);
    }
    clear(){
      
        this.limit=10;
        this.month=null;
        this.year=null;
       
    }

    randomColors(data){
        let result = [];
        var letters = '0123456789ABCDEF';
       
        data.map(()=>{
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                result.push(color);
            }
        )
        return result
        
    }
}