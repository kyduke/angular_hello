import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import {Hello} from './hello';

@NgModule({
  declarations: [Hello],
  imports: [MatButtonModule],
  exports: [Hello],
})
export class HelloModule {
}