import { Http, } from '@angular/http';
import { Injectable, }  from '@angular/core';
import { Observable } from 'rxjs/Rx';   // npm install rxjs-compat
import { environment } from '../../environments/environment';
import { Product } from '../Models/Product.model';

@Injectable()
export class Products {
    constructor(private http: Http){}

    getProducts(): Observable<Product[]> {
        return this.http.get(environment.apis.products).map((response) => {
            return response.json().products;
        }).catch(this.handleError).delay(3000); // delay(3000) just for illustration
    }

    handleError(error: any): Observable<Error> {               // On error, throw exception
        return Observable.throw(error);
    }


}
