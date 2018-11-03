import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../services/base.service';
@Component({
  selector: 'cytograph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class CytodemoComponent implements OnInit {
  /* private _graphData: any = {
    nodes: [
      {data: {id: 'j', name: 'Jerry', faveColor: '#6FB1FC', faveShape: 'circle'}},
      {data: {id: 'e', name: 'Elaine', faveColor: '#EDA1ED', faveShape: 'circle'}},
      {data: {id: 'k', name: 'Kramer', faveColor: '#86B342', faveShape: 'circle'}},
      {data: {id: 'g', name: 'George', faveColor: '#F5A45D', faveShape: 'circle'}}
    ],
    edges: [
      {data: {source: 'j', target: 'e', faveColor: '#6FB1FC'}},
      {data: {source: 'j', target: 'k', faveColor: '#6FB1FC'}},
      {data: {source: 'j', target: 'g', faveColor: '#6FB1FC'}},

      {data: {source: 'e', target: 'j', faveColor: '#EDA1ED'}},
      {data: {source: 'e', target: 'k', faveColor: '#EDA1ED'}},

      {data: {source: 'k', target: 'j', faveColor: '#86B342'}},
      {data: {source: 'k', target: 'e', faveColor: '#86B342'}},
      {data: {source: 'k', target: 'g', faveColor: '#86B342'}},

      {data: {source: 'g', target: 'j', faveColor: '#F5A45D'}}
    ]
   
    
  }; */

  private _graphData: any;
  limit : number = 500;

  constructor(private baseService: BaseService) {
  }

  ngOnInit() {
    
  }

  send(event){
    let data = {
      
        limit: this.limit,
        //ips: this.selectedIps,
    }
    this.baseService.getMedicines(data).subscribe(result => this._graphData = result.json());
  }

  get graphData(): any {
    return this._graphData;
  }

  set graphData(value: any) {
    this._graphData = value;
  }
}