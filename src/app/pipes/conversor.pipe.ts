import{Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform{
  transform(value_one:number, value_two:number){
      let result = "La multiplicacion: "+value_one+" x "+value_two+" = "+(value_one * value_two);
      return result;
    }
}
