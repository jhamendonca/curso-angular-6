import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { LifecicleComponent } from './lifecicle/lifecicle.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassbindingComponent,
    InputComponent,
    OutputComponent,
    LifecicleComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
