import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

const options: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'top',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, options)],
  bootstrap: [AppComponent],
})
export class AppModule {}
