import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PriveCommonTableColumnBodyDirective, PriveCommonTableColumnHeaderDirective } from '../../directives';

@Component({
  selector: 'prive-common-table-column',
  template: ''
})
export class PriveCommonTableColumnComponent {

  @Input()
  public key!: string;

  @ContentChild(PriveCommonTableColumnHeaderDirective, { read: TemplateRef, static: true })
  public header!: TemplateRef<HTMLElement>;

  @ContentChild(PriveCommonTableColumnBodyDirective, { read: TemplateRef, static: true })
  public body!: TemplateRef<HTMLElement>;

}
