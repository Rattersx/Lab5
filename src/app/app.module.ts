import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListAppComponent } from './to-do-list-app/to-do-list-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
