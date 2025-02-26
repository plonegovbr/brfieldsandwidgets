import {
  validaCEP,
  validaCPF,
  validaCNPJ,
  validaTelefone,
} from './validadores';

describe('validadores', () => {
  describe('validaCEP', () => {
    it('valida números sem pontuação', () => {
      expect(validaCEP('01234000')).toBe(true);
      expect(validaCEP('70609370')).toBe(true);
      expect(validaCEP('aaaa')).toBe(false);
      expect(validaCEP('1234')).toBe(false);
    });
    it('valida números com pontuação', () => {
      expect(validaCEP('01234-000')).toBe(true);
      expect(validaCEP('70609-370')).toBe(true);
      expect(validaCEP('aaaa-000')).toBe(false);
      expect(validaCEP('1234-123')).toBe(false);
    });
  });
  describe('validaCPF', () => {
    it('valida números sem pontuação', () => {
      expect(validaCPF('00829102868')).toBe(true);
      expect(validaCPF('00000000000')).toBe(false);
      expect(validaCPF('11111111111')).toBe(false);
      expect(validaCPF('22222222222')).toBe(false);
      expect(validaCPF('33333333333')).toBe(false);
      expect(validaCPF('44444444444')).toBe(false);
      expect(validaCPF('55555555555')).toBe(false);
      expect(validaCPF('66666666666')).toBe(false);
      expect(validaCPF('77777777777')).toBe(false);
      expect(validaCPF('88888888888')).toBe(false);
      expect(validaCPF('99999999999')).toBe(false);
    });
    it('valida números com pontuação', () => {
      expect(validaCPF('008.291.028-68')).toBe(true);
      expect(validaCPF('000.000.000-00')).toBe(false);
      expect(validaCPF('111.111.111-11')).toBe(false);
      expect(validaCPF('222.222.222-22')).toBe(false);
      expect(validaCPF('333.333.333-33')).toBe(false);
      expect(validaCPF('444.444.444-44')).toBe(false);
      expect(validaCPF('555.555.555-55')).toBe(false);
      expect(validaCPF('666.666.666-66')).toBe(false);
      expect(validaCPF('777.777.777-77')).toBe(false);
      expect(validaCPF('888.888.888-88')).toBe(false);
      expect(validaCPF('999.999.999-99')).toBe(false);
    });
  });
  describe('validaCNPJ', () => {
    it('valida números sem pontuação', () => {
      expect(validaCNPJ('00000000000191')).toBe(true);
      expect(validaCNPJ('00000000000192')).toBe(false);
    });
    it('valida números com pontuação', () => {
      expect(validaCNPJ('00.000.000/0001-91')).toBe(true);
      expect(validaCNPJ('00.000.000/0001-92')).toBe(false);
    });
  });
  describe('validaTelefone', () => {
    it('validates telefone fixos', () => {
      expect(validaTelefone('8133011285')).toBe(true);
      expect(validaTelefone('1133011285')).toBe(true);
      expect(validaTelefone('0133011285')).toBe(false);
      expect(validaTelefone('6133011285')).toBe(true);
    });
    it('validates telefone celulares', () => {
      expect(validaTelefone('11942893964')).toBe(true);
      expect(validaTelefone('81994340171')).toBe(true);
      expect(validaTelefone('81894340171')).toBe(false);
    });
  });
});
