import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  // transform(value: any, ...args: unknown[]): any {
    // let currentDate=new Date().getFullYear()
    // let evaluateDate=new Date().setFullYear(2000,11,5)
    // let dateResult=currentDate-evaluateDate
// }
    transform(value: string, gender: string): any {
      if (gender.toLowerCase()=='male') {
        return 'Mr. '+value
      }
      else{
        return 'Miss. '+value
      }
      // return Math.pow(value, isNaN(exponent) ? 1 : exponent);
    
  }

}
