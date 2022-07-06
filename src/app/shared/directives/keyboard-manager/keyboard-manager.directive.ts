import { KeyboardManagedItemDirective } from './keyboar-manager-item.directive';
import { ContentChild, ContentChildren, Directive, HostListener, QueryList } from "@angular/core";

@Directive({
  selector: '[appKm]'
})
export class KeyboarManagerDirective{

  @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboarManagerDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {

  }
}
