import { Pipe, PipeTransform } from '@angular/core';
import { Validator } from 'class-validator';

/**
 * @description Avoids errors when you have to access nested properties.
 * A common errors that occurs is 'Cannot access property (x) of undefined.
 *
 * @link https://gidi.io/2016/02/07/using-es6-s-proxy-for-safe-object-property-access.html
 * @link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

@Pipe({
  name: 'nestingSafe'
})
export class NestingSafePipe extends Validator implements PipeTransform {

  /**
   * @description Tries to get a nested value from an object.
   * @param target - Source field to extract value defined at keys path.
   * @param keys - Path to extract the vakue.
   */
  transform(target: any, keys: any): any {
    return keys.split('.').reduce((value: any, key: any): any | undefined => {
      return value && key in value ? value[key] : undefined;
    }, target);
  }
}
