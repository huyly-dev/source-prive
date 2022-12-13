import { Inject, Pipe, PipeTransform } from '@angular/core';
import { INavigationItem } from '@data-access-common';
import { DOCUMENT } from '@angular/common';

@Pipe({
  name: 'priveCommonNavigationSelected',
  pure: true
})
export class PriveCommonNavigationSelectedPipe implements PipeTransform {

  constructor(
    @Inject(DOCUMENT)
    protected readonly dom: Document
  ) {
  }


  public transform(item: INavigationItem | undefined, data: { selected: string | undefined, typeCheck: 'route' | 'selected' }): boolean {
    if (!item) {
      return false;
    }

    const { selected, typeCheck } = data;

    if (typeCheck === 'selected') {
      if (!selected) {
        return false;
      }

      if (item.items) {
        return item.items.some((e) => e.key === selected);
      } else {
        return item.key === selected;
      }
    } else {
      const { pathname } = this.dom.location;

      if (item.items) {
        return item.items.some((e) => pathname === '/' + e.route);
      } else {
        return pathname === '/' + item.route;
      }
    }

  }

}
