import {Component} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    username: string;
    password: string;
    error: string;

    constructor(private httpClient: HttpClient) {
    }

    login() {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));

        this.httpClient.get(environment.url + '/login-api', {'headers': headers})
            .toPromise()
            .then(result => {
                console.log(result);
                this.error = '';
            })
            .catch((result: HttpErrorResponse) => {
                console.error(result);

                this.error = result.status + ' ' + result.message;
            });
    }

}
