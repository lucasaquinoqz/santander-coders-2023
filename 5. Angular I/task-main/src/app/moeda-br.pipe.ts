import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedaBR'
})
export class MoedaBRPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let valor = Number(value)
    let valorMoeda = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return valorMoeda;
  }

}
