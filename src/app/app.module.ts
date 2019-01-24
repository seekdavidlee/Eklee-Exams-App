import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { environment } from './../environments/environment'

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full', canActivate: [AuthenticationGuard] }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot({
      clientId: environment.clientId,
      redirectUri: window.location.origin,
      endpoints: {

      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'sessionStorage',
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
