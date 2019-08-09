import { configureTestSuite } from '../config/config-test-suite.spec';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Validator } from 'class-validator';
import { PriceService } from './price.service';
import { AjaxPrice } from '../model/ajax-price.model';

describe('Price test module configuration', () => {

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        Validator,
        PriceService
      ]
    });
  })().then(done).catch(done.fail));

  describe('PriceService', () => {

    let priceService: PriceService;

    beforeAll(done => (async () => {
      priceService = TestBed.get(PriceService);
    })().then(done).catch(done.fail));

    it('should be created', done => (async () => {
      expect(priceService).toBeDefined();
    })().then(done).catch(done.fail));

    it('should get ajax price', done => (async () => {
      priceService.find('4611686018427362236').then((ajaxPrice: AjaxPrice) => {
        expect(ajaxPrice).toBeDefined();
      })

    })().then(done).catch(done.fail));

  });
});
