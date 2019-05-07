import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { AnotherComponent } from './another/another.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [AnotherComponent]
})
export class TestModule { }
