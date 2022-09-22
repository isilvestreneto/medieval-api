import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classe'
})
export class ClassePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Fada': return 'fairy';
      case 'Genio': return 'djinn';
      case 'Dragao': return 'dragon';
      case 'Guerreiro': return 'spartan';
      case 'Sereia': return 'mermaid';
    }
    return value;
  }

}
