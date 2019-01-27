import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-content]',
})
export class DynamicContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
