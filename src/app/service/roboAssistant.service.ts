/*****************************************************************************************
 * Description : This service is used to retrieve the data through http requests.
 * The actual API get requests are made through the server.js file
 * server.js file is availble in the root folder(Project Folder)
 * Programmer : Pratik Nellutla
 * Date: 04-22-2017
 ******************************************************************************************
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import {RoboAssistant} from '../roboAssistant';

@Injectable()
export class RoboAssistantService {

  private RoboAssistants:RoboAssistant[] = [];

  /* Http service has been injected to make http requests */
  constructor(private http: Http) {
  }

  helloWorld(): Promise<string> {

    // mock an asynchronous request:
    let mockAsyncRequest = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!"))
    });
    return mockAsyncRequest;
  }

  /*getAllRoboAssistants() {
        let headers = new Headers();
        headers.append('Authorization', '58f82c84884edb320127f3df');

        let options = new RequestOptions({ headers: headers });
  }*/


  /* This method is used to get the list of all Robo Assistants*/
  getRobosList() {
    return this.http.get("/bots");
  }

  /* This method is used to get the  Robo Assistant details for specific ID*/
  getRoboAssistantById( id : string){
    return this.http.get("/bots/" + id );
  }

  /* This method is used to get the reviews and ratings for the Robo Assistant through specific Reviews ID*/
  getRoboAssistantReview (rid : string){
    return this.http.get("/reviews/" + rid );
  }

  /* Note : Because of the CORS issue, the requests have been routed through server.js file*/


}
