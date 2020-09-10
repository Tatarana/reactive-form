import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, position: string, textToApped: string): string {
    return position === 'pre' ? textToApped + input : input  + textToApped;
  }

}