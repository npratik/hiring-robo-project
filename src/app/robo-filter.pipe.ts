import {  PipeTransform, Pipe } from '@angular/core';
import { RoboAssistant } from './roboAssistant';

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
