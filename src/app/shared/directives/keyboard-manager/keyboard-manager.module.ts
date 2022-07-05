import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { KeyboarManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [KeyboarManagerDirective],
  imports: [CommonModule],
  exports: [KeyboarManagerDirective]
})
export class KeybooarManagerModule{}
