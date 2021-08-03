import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { ArtistsService } from './artists.service';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SharedComponentComponent],
  exports: [SharedComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModuleModule {
  
  static forRoot(): ModuleWithProviders<CoreModuleModule> {
  return {
    ngModule: CoreModuleModule,
    providers: [
      ArtistsService
    ]
  };
}

constructor (@Optional() @SkipSelf() parentModule: CoreModuleModule) {
  if (parentModule) {
    throw new Error(
      'CoreModule is already loaded. Import it in the AppModule only');
  }
}

}