import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classe'
})
export class ClassePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Fada': return 'fairy';
      case 'genio': return 'djinn';
      case 'dragao': return 'dragon';
      case 'guerreiro': return 'spartan';
      case 'sereia': return 'mermaid';
    }
    return value;
  }

}
