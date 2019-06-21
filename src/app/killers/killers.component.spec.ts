import {KillerModel} from '../model/killer.model';
import {async, TestBed} from '@angular/core/testing';

const killerConst = <KillerModel> {
  playerName: 'mangani',
  kills: 10,
  deathes: 100,
  score: 1000
};

describe('KillersComponent', () => {

  let killer: KillerModel;

  beforeEach(() => {
    killer = Object.assign(Object.create(killerConst), killerConst);
    TestBed.configureTestingModule({}).compileComponents();
  });

  it('should this.killer is instance of Killer', () => {
      expect(killer instanceof Object).toEqual(true);
    }
  );

  it('should this.killer not to be the same instance as killerConst', async (() => {
    killerConst.deathes = 1000;
    console.warn('killer -> ', JSON.stringify(killer));
    console.warn('killerConst -> ', JSON.stringify(killerConst));
    expect(Object.is(killer, killerConst)).toBe(true);

  }));

});


/**
referencia

class Address {
  constructor(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }
}

class Person {
  constructor(first, last, address) {
    this.firstName = first;
    this.lastName = last;
    this.address = address;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}
class Employee extends Person {
  constructor(first, last, address, title) {
    super(first, last, address);
    this.title = title;
  }
}


describe('Test clone', function() {
  beforeEach(function() {
    this.address = new Address('1600 Amphitheatre Parkway', 'Mountain View', 'CA');
    this.original = new Employee('Sean', 'Lynch', this.address, 'developer');

    this.clone = Object.assign(Object.create(this.original), this.original);
  });

  it('clone is instance of Person class', function() {
    expect(this.clone instanceof Person).toEqual(true);
  });

  it('clone is instance of Employee class', function() {
    expect(this.clone instanceof Employee).toEqual(true);
  });

  it('clone.Address is instance of Address class', function() {
    expect(this.clone.address instanceof Address).toEqual(true);
  });

  it('clone properties equal original', function() {
    expect(this.clone).toEqual(this.original);
  });

  it('clone.address is same instance as original.address', function() {
    expect(Object.is(this.clone.address, this.original.address)).toEqual(true);
  });
});

hljs.initHighlightingOnLoad();

 */
