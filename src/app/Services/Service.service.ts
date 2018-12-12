import { Http, } from '@angular/http';
import { Injectable, }  from '@angular/core';
import { Observable } from 'rxjs/Rx';   // npm install rxjs-compat
import { environment } from '../../environments/environment';
import { Product } from '../Models/Product.model';


@Injectable()
export class Service {

    constructor(private http: Http){}

    getSomting(): Observable<Product | Error> {
        return this.http.get(environment.apis.movies).map((response) => {
            return response.json();
        }).catch(this.handleError);
    }

    handleError(error: any): Observable<Error> {               //On error, throw exception
        return Observable.throw(error);
    }

}
