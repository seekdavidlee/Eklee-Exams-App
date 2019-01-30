import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { environment } from './../environments/environment';
import { HeaderComponent } from './header/header.component';
import { CandidateAddComponent } from './candidate-add/candidate-add.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, pathMatch: 'full', canActivate: [AuthenticationGuard] },
  { path: 'candidate-add', component: CandidateAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  MsAdalAngular6Module.forRoot({
    clientId: environment.clientId,
    redirectUri: window.location.origin,
    endpoints: {

    },
    navigateToLoginRequestUrl: false,
    cacheLocation: 'sessionStorage',
  })],
  providers: [AuthenticationGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
