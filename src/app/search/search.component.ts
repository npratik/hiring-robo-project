/*****************************************************************************************
 * Description : This component is used to search for Robo Assistants by Name
 * This also enlists the Robo Assitants list. The user can click the name on the list
 * then the user will be redirected to the detailed description and reviews
 * Programmer : Pratik Nellutla
 * Date: 04-22-2017
******************************************************************************************
 */

import { Component, OnInit } from '@angular/core';
import {RoboAssistantService} from "../service/roboAssistant.service";
import {RoboAssistant} from '../roboAssistant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  /* RoboAssistantService has been injected to make http requests through API*/
  constructor(private roboAssistantService: RoboAssistantService) { }

  roboNameSearch: string;



  private RoboAssistants:RoboAssistant[] = [];

  /* To display the Robots list on the search home page as soon as the page is launched
   getRoboAssitantsList() is called in ngOnInit*/
  ngOnInit(): void {
    this.getRoboAssitantsList();
  }

  /* This is method is used to get the Robo Assistant Json objects through Robo Assistance Service.
   * The Json result is being assigned to RoboAssistants, which is used in the components html to
   * display results */
  getRoboAssitantsList(){
   this.roboAssistantService.getRobosList().subscribe(response => {
        this.RoboAssistants = JSON.parse(response.json());
    },
      error => {
        console.log("error retrieving data from Robo Assistant service:", error);
      });

  }



}
