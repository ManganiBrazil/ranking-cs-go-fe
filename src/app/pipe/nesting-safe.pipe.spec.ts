import { NestingSafePipe } from './nesting-safe.pipe';

const customer = {
  id: 10,
  name: 'Paulo',

  contacts: [
    '11944971403',
    '11968259591'
  ],

  creditCard: {
    number: '9999 9999 9990 9999',
    safeCode: '999',
    expireDate: '99/99/9999',

    institution: {
      name: 'ITAÚ',
      cnpj: '999999999999/0001',

      location: {

        province: 'São Paulo',
        city: 'São Paulo',

        address: {
          zipPostal: '99999-999',
          number: 999,
          contact: '99999-9999'
        }
      }
    }
  }
}


describe('NestingSafePipe', () => {

  let nestingSafe: NestingSafePipe;

  beforeEach(async () => {
    nestingSafe = new NestingSafePipe();
  });

  it('create an instance', () => {
    const pipe = new NestingSafePipe();
    expect(pipe).toBeTruthy();
  });

  it('should extract zipPostal from customer in a huge loop of 10000 times', () => {

    let zipCode = undefined;

    for (let i = 0; i < 10000; i++) {
      zipCode = nestingSafe.transform(customer, 'creditCard.institution.location.address.zipPostal');
      expect(zipCode).toBe('99999-999');
    }
  });

  it('should extract the second contact from customer', () => {
    const contact = nestingSafe.transform(customer, `contacts.${0}`);
    expect(contact).toBe('11944971403');
  });

  it('should extract the third contact which is null.', () => {
    const contact = nestingSafe.transform(customer, `contacts.${2}`);
    expect(contact).toBeUndefined();
  });

  it('should get property undefined from customer', () => {
    const reference = nestingSafe.transform(customer, 'creditCard.institution.location.address.reference');
    expect(reference).toBeUndefined();
  });

  it('should not conflict with class-validator', done => (async () => {
    expect(nestingSafe.isDefined(customer)).toBeTruthy();
    expect(nestingSafe.arrayNotEmpty(customer.contacts)).toBeTruthy();
  })().then(done).catch(done.fail));
});
