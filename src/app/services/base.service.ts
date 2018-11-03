import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestOptionsArgs, URLSearchParams } from '@angular/http';

@Injectable({
    providedIn: 'root',
  })
export class BaseService {

    constructor(private http: Http){}
    private host: string = "http://localhost:3000/"
    public getIps(){
        return this.http.get(this.host+"ips", this.headers());
    }

    public getDocs(){
        return this.http.get(this.host+"docs", this.headers());
    }

    public getYears(){
        return this.http.get(this.host+"years", this.headers());
    }

    public getTimes(data){
        let params : URLSearchParams = new URLSearchParams();
        let requestOptions = new RequestOptions();
        params.append('operation', data.operation);
        params.append('year', data.year);
        params.append('month', data.month);
        params.append('group', data.group);
        params.append('ips', data.ips);
        
        requestOptions.params = params;
        requestOptions.headers = new Headers({'Access-Control-Allow-Origin': '*'})
        return this.http.get(this.host+"times", requestOptions);

    }
     public getPrices(data){
        let params : URLSearchParams = new URLSearchParams();
        let requestOptions = new RequestOptions();
        params.append('operation', data.operation);
        params.append('year', data.year);
        params.append('month', data.month);
        params.append('group', data.group);
        params.append('medicamento', data.medicamento);
        
        requestOptions.params = params;
        requestOptions.headers = new Headers({'Access-Control-Allow-Origin': '*'})
        return this.http.get(this.host+"prices", requestOptions);

    }
    public getRecipes(data){
        let params : URLSearchParams = new URLSearchParams();
        let requestOptions = new RequestOptions();
      
        params.append('year', data.year);
        params.append('month', data.month);      
        params.append('limit', data.limit);
        
        requestOptions.params = params;
        requestOptions.headers = new Headers({'Access-Control-Allow-Origin': '*'})
        return this.http.get(this.host+"recipes", requestOptions);

    }

    public getMedicines(data){
        let params : URLSearchParams = new URLSearchParams();
        let requestOptions = new RequestOptions();
        params.append('limit', data.limit);
        requestOptions.params = params;
      
        return this.http.get(this.host+"medicines", requestOptions);
    }



    private headers() {
        
      
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        //headers.append('Access-Control-Request-Headers', 'accept');
        //const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        return new RequestOptions({ headers: headers });
       
    }
}