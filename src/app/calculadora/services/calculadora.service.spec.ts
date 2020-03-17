import { TestBed, inject } from '@angular/core/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should...', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
  }));
  
  it('A soma de 1 + 4 = 5',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

  it('A subtração de 1 - 4 = -3',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let subtração = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtração).toEqual(-3);
  }));

  it('A multiplicação de 1 * 4 = 4',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let multiplicação = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicação).toEqual(4);
  }));

  it('A divisao de 1 / 4 = 0.25',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  }));

  it('Valor impróprio para essa calculadora',
  inject([CalculadoraService], (service: CalculadoraService) => {
    let valorInvalido = service.calcular(1, 4, '%');
    expect(valorInvalido).toEqual(0);
  }));

});
