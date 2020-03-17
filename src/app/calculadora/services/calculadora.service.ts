/**
 * Serviço responsável por executar 
 * as operações da calculadora
 * @author Paloma da C. Marques
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // Define as constantes das operações utilizadas na calculadora
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   * @param num1 number;
   * @param num2 number;
   * @param operacao string
   * @param return number
   */

  calcular(num1: number, num2: number, operacao: string){
    let resultado: number;

    switch (operacao) {

      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
    
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
    
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      
      default:
        resultado = 0
      break;
    }
    return resultado;
  }

}
