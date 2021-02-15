import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FathymSharedModule,
  LCUServiceSettings,
  MaterialModule,
} from '@lcu/common';
import { AppRoutingModule } from 'projects/demo/src/app/app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FathymSharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment),
    },
  ],
  exports: [],
})
export class AppModule {}
