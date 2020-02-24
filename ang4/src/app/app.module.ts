import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { WorkerElementComponent } from './worker-element/worker-element.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextMaskModule} from 'angular2-text-mask';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    WorkerElementComponent,
    SearchPipe
  ],
    imports: [
        TextMaskModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
