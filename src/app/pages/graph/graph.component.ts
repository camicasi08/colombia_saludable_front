import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../services/base.service';

@Component({
  selector: 'cytograph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class CytodemoComponent implements OnInit {
  hierarchialGraph = {nodes: [], links: []}
  style = [
    {
        selector: 'node',
        style: {
            shape: 'ellipse',
            'background-color': '#1a8cff',
            label: 'data(name)'
        }
    }
  ];
/*   
  layout ={
    name: 'random',
  
    fit: true, // whether to fit to viewport
    padding: 30, // fit padding
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    ready: undefined, // callback on layoutready
    stop: undefined, // callback on layoutstop
    transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts 
  };
 */
  layout ={
    name:'grid'
  }
  
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
    this.baseService.getMedicines(data).subscribe(result =>{

        this._graphData = result.json()
       
        
        /* console.log(this._graphData);
        let nodes = [];
        let links = [];
        this._graphData.nodes.map(node =>{
            nodes.push({
              id:node.data.id,
              label: node.data.label
            })
        })
        this._graphData.edges.map(edge =>{
          links.push({
            source: edge.data.source,
            target: edge.data.target
          })
      })
        this.hierarchialGraph.nodes = nodes;
        this.hierarchialGraph.links = links;
        console.log(this.hierarchialGraph); */
    });
  }

  get graphData(): any {
    return this._graphData;
  }

  set graphData(value: any) {
    this._graphData = value;
  }
}