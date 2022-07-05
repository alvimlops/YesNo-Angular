import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeybooarManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';




@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    KeybooarManagerModule  ],
  exports: [YesNoButtonGroupComponent],
})
export class YesNoButtonGroupModule { }
