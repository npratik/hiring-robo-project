/*****************************************************************************************
 * Description : This component is used to display the details for Robo Assistant
 * This also enlists the Robo Assitants reviews and ratings.
 * Programmer : Pratik Nellutla
 * Date: 04-22-2017
 ******************************************************************************************
 */


import {Component, OnInit, Input,OnDestroy} from '@angular/core';
import {RoboAssistantService} from "../service/roboAssistant.service";
import {RoboAssistant} from '../roboAssistant';
import {ReviewContents} from '../reviewContents';

import {RoboReview} from '../roboReview';

import { Router,ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Subscription }       from 'rxjs/Subscription';


@Component({
  //TODO: Add appropriate options
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit , OnDestroy {

  roboAssistant: RoboAssistant;
  reviewContents: RoboReview;
  private counter: number=0;
  private totalRatings: number=0;
  finalRating:number=0;


  private sub: Subscription;
  idcheck: string;

  /* RoboAssistantService has been injected to make http requests through API
   * Router has been injected to navigate to other views similarly
   * ActivatedRoute for retrieving the parameter
   * */
  constructor(private roboAssistantService: RoboAssistantService,
              private route: ActivatedRoute,
              private _router: Router) { }

  //TODO: Inject the RoboAssistantsService and use to fetch and display the profile of a RoboAssistant.

  /* To display the Robo Assistant details on the details view as soon as the page is launched
   * getRoboDetails() is called in ngOnInit with the Robo ID for the selected Robot */
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        this.idcheck = params['id'];
        this.getRoboDetails(this.idcheck);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /* This is method is used to get the details of Robo Assistant Json objects through Robo Assistance Service.
   * The Json result is being assigned to RoboAssistants, which is used in the components html to
   * display results */
  getRoboDetails(id: string) {
    this.roboAssistantService.getRoboAssistantById(id).subscribe(response => {
        this.roboAssistant = JSON.parse(response.json());
        this.getRoboReviews(this.roboAssistant.reviews);
      },
      error => {
        console.log("error retrieving Robo Details data from Robo Assistant service:", error);
      });
  }

  /* This is method is used to get the reviews for Robo Assistant Json objects through Robo Assistance Service.
   * The Json result is being assigned to RoboReview object(reviewContents), which is used in the components html to
   * display results */
  getRoboReviews(rid: string) {
    this.roboAssistantService.getRoboAssistantReview(rid).subscribe(response => {
        this.reviewContents = JSON.parse(response.json());
        this.calculateAverageRating();
      },
      error => {
        console.log("error retrieving Robo Reviews from Robo Assistant service:", error);
      });
  }

  /* This method is used to calculate Average ratings for a Robo Assistant*/
  calculateAverageRating(){
    for (let content of this.reviewContents.content) {
      this.counter++;
      this.totalRatings = this.totalRatings + content.rating;
    }

    if (this.counter > 0) {
      this.finalRating = (this.totalRatings) / (this.counter);
    }
  }

  /* This method is used to route back to the Robo Assistant Search Page */
  previousView(): void {
    this._router.navigate(['/search']);
  }

  }

