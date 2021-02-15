import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';

@NgModule({
  declarations: [],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [],
  entryComponents: []
})
export class PublicWebModule {
  static forRoot(): ModuleWithProviders<PublicWebModule> {
    return {
      ngModule: PublicWebModule,
      providers: []
    };
  }
}
