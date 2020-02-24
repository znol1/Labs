import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(workerElements, search: string = ''): any {
    if (!search.trim()) {
      return workerElements;
    }
    return workerElements.filter(el => {
      return el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }

}
