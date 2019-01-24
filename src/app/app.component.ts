import { Component, OnInit } from '@angular/core';
import { GraphqlService } from './graphql.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { environment } from './../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private graphqlService: GraphqlService, private adalSvc: MsAdalAngular6Service) {
    this.me = adalSvc.userInfo;
  }
  title = 'eklee-exams-app';
  url = "";
  me: adal.User;
  graphToken: string;
  ngOnInit(): void {
    this.url = this.graphqlService.getConfig().url;

    this.adalSvc.acquireToken(environment.graphClientId).subscribe((resToken: string) => {
      this.graphToken = resToken;
    });
  }
}
