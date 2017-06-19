import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KonamiCodeDirective } from './directives/konami-code.directive';
import { MainExampleComponent } from './components/main-example/main-example.component';

@NgModule({
  declarations: [
    AppComponent,
    KonamiCodeDirective,
    MainExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
