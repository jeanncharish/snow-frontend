import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const QUERY_URL = 'https://dev26267.service-now.com/api/now/table/incident?sysparm_query=active%3Dtrue%5Estate%3D1%5EORstate%3D2';
const QUERY_URL2 = 'https://acip-demo.mybluemix.net/rest/askquestion/q/why%20I%20have%20liquid%20drops%20aldiva%20app';

@Injectable()
export class SnowExtractService {

    activeSnowTicket: any = {};

    constructor(private http: Http) {
        console.log( 'SnowExtractService initialized...');
     }

/*
    query( ): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json', 
                                    'Authorization': 'Basic YWRtaW46QGMxVDIwMTc='});
        let options = new RequestOptions({ headers: headers });

        return this.http.get(QUERY_URL, options)
           .map((res:Response) => res.json())
           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
*/
    getTickets() {
        let headers = new Headers({ 'Authorization': 'Basic YWRtaW46QGMxVDIwMTc='});
        let options = new RequestOptions({ headers: headers });

        let headers2 = new Headers({ 'clientInfo': 'ACIPRest',
                                     'Authorization': 'Basic YWNpcGVuZHVzZXI6cGFzc3dvcmQ='});
        let options2 = new RequestOptions({ headers: headers });
        

        console.log('Get Tickets Now...')

/*
        return this.http.get(QUERY_URL, options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
*/
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map((res:Response) => res.json());
/*
        return this.http.get(QUERY_URL2, options2)
            .map((res:Response) => res.json());

*/
    }

}