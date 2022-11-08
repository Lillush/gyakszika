import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'sorter',
})
export class SorterPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: T[], header: string): T[] {
    if (!Array.isArray(value) || !header) {
      return value;
    }
    header = header.toLowerCase();
    console.log(header);
    return value.sort((a, b) => {
      // if (typeof a[header] === 'number' && typeof b[header] === 'number') {
      return String(a[header]).localeCompare(String(b[header]));
      // } else {
      //   return String(
      //     a[header].toLowerCase().localeCompare(String(b[header].toLowerCase()))
      //   );
      // }
    });
  }
}
