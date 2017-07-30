import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    RouterModule.forChild([
      { path: '', component: RxjsHomeComponent, pathMatch: 'full' },
    ])
  ],
  declarations: [RxjsHomeComponent]
})
export class RxjsModule { }
