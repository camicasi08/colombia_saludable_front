import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import {BaseService} from '../../services/base.service';
import {Chart} from 'chart.js';
@Component({
    //selector: 'ngx-dashboard',
    templateUrl: './times.component.html',
})

export class TimesComponent implements OnInit {
    @ViewChild('chart') myChart: ElementRef;
    private alive = true;
    statusCards: string;
    ipss : any[];
    years : any[];
    group: string;
    operation: string;
    year: number;
    month: number;
    selectedIps: number;
    results: any[];
    chart :Chart = [];
    typeChart: string = 'bar';
    ngOnInit(){

        this.baseService.getIps().subscribe(ips =>{
             this.ipss = ips.json()
            /*  this.ipss[0].key_ips="";
             this.ipss[0].nombre="Ninguna"; */
        });
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
            group: this.group,
            operation: this.operation,
            year: this.year,
            month: this.month,
            ips: this.selectedIps,
        }
        this.baseService.getTimes(data).subscribe(results => {
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
                      label: 'Horas',
                      data: data,
                      borderColor: this.typeChart == 'line'?"#3cba9f":'',
                      backgroundColor: this.typeChart != 'line'? this.randomColors(data):''
                    },     
                  ]
                },
                options: {
                    title: {
						display: true,
                        text: 'Tiempos de espera',
                        fontSize : 18,
					}
                }
              });
            

        });
        //console.log(data);
    }
    clear(){
        this.group=null;
        this.selectedIps=null;
        this.month=null;
        this.year=null;
        this.operation=null;
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