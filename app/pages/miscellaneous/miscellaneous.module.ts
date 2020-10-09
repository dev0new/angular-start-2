import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
  ]
})
export class MiscellaneousModule { }
