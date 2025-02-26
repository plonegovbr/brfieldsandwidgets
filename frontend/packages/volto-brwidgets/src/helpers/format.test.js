import {
  applyMask,
  applyMaskTelefone,
  cleanUpValue,
  mapToNumbers,
} from './format';

describe('format functions', () => {
  describe('applyMask', () => {
    it('applies cep mask', () => {
      expect(applyMask('01234000', '99999-999')).toEqual('01234-000');
      expect(applyMask('70609370', '99999-999')).toEqual('70609-370');
    });
    it('applies cpf mask', () => {
      expect(applyMask('00829102868', '999.999.999-99')).toEqual(
        '008.291.028-68',
      );
    });
    it('applies cnpj mask', () => {
      expect(applyMask('00000000000191', '99.999.999/9999-99')).toEqual(
        '00.000.000/0001-91',
      );
    });
  });
  describe('applyMaskTelefone', () => {
    it('applies mask to cellphone', () => {
      expect(applyMaskTelefone('11942539913')).toEqual('(11)94253-9913');
    });
    it('applies mask to fixed number', () => {
      expect(applyMaskTelefone('1142539913')).toEqual('(11)4253-9913');
    });
  });
  describe('cleanUpValue', () => {
    it('cleans up formatted numbers', () => {
      expect(cleanUpValue('(11)94253-9913')).toEqual('11942539913');
      expect(cleanUpValue('(11)4253-9913')).toEqual('1142539913');
      expect(cleanUpValue('00.000.000/0001-91')).toEqual('00000000000191');
      expect(cleanUpValue('008.291.028-68')).toEqual('00829102868');
      expect(cleanUpValue('01234-000')).toEqual('01234000');
      expect(cleanUpValue('70609-370')).toEqual('70609370');
    });
  });
  describe('mapToNumbers', () => {
    it('clean up values', () => {
      expect(mapToNumbers('8133011285')).toEqual([
        8, 1, 3, 3, 0, 1, 1, 2, 8, 5,
      ]);
      expect(mapToNumbers('(81) 3301-1285')).toEqual([
        8, 1, 3, 3, 0, 1, 1, 2, 8, 5,
      ]);
      expect(mapToNumbers('')).toEqual([]);
      expect(mapToNumbers(null)).toEqual([]);
      expect(mapToNumbers(undefined)).toEqual([]);
    });
  });
});
