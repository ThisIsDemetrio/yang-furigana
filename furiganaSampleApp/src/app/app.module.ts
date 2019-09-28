import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFuriganaModule } from 'ng-furigana';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgFuriganaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
