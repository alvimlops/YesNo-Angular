import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appKm]'
})
export class KeyboarManagerDirective{

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {

  }
}
