/*****************************************************************************************
 * Description : This  is used to  filter the Robo Assistants based on their name.
 * Based on the name of the robot entered in the search bar, the robots matching with the
 * name will be displayed on the search view.
 * Programmer : Pratik Nellutla
 * Date: 04-22-2017
 ******************************************************************************************
 */

import {  PipeTransform, Pipe } from '@angular/core';
import { RoboAssistant } from '../roboAssistant';

@Pipe({
  name: 'roboNameSearchFilter'
})
export class RoboFilterPipe implements PipeTransform {

  transform(value: RoboAssistant[], filterBy: string): RoboAssistant[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: RoboAssistant) =>
    product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
