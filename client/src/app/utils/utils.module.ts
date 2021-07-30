import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlynumberDirective } from './directives/allow-numbers';
import { BlockCopyPasteDirective } from './directives/block-copypaste';
import { PreventfirstwhitespaceDirective } from './directives/prevent-first-whitespace';
import { PreventSpaceDirective } from './directives/prevent-space';

@NgModule({
  declarations: [
    OnlynumberDirective,
    BlockCopyPasteDirective,
    PreventfirstwhitespaceDirective,
    PreventSpaceDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnlynumberDirective,
    BlockCopyPasteDirective,
    PreventfirstwhitespaceDirective,
    PreventSpaceDirective
  ]
})
export class UtilsModule { }
