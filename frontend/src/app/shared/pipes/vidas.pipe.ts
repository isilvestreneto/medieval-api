import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vidas',
})
export class VidasPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        return 'favorite';
      case 10:
        return 'all_inclusive';
    }
    return 'hide_source';
  }
}
