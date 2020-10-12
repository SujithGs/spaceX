import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './services/shared.service';
import { HttpClientService } from './services/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  declarations: [],
  exports: [MatCardModule]
})

export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SharedService, HttpClientService]
    };
  }
}
