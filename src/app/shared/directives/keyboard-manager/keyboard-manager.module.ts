import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { KeyboardManagedItemDirective } from './keyboar-manager-item.directive';
import { KeyboarManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [KeyboarManagerDirective, KeyboardManagedItemDirective],
  imports: [CommonModule],
  exports: [KeyboarManagerDirective, KeyboardManagedItemDirective]
})
export class KeybooarManagerModule{}
