import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, lang: string = "en"): string {
    if(lang === "fr")
      return value ? "Oui" : "Non";
    else
      return value ? "Yes" : "No";
  }

}
