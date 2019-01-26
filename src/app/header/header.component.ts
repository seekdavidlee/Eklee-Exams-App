import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { GraphqlService } from './../graphql.service';
import { environment } from './../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private graphqlService: GraphqlService,private adalSvc: MsAdalAngular6Service) { }
  me: adal.User;
  url = "";
  graphToken: string;
  ngOnInit() {
    this.me = this.adalSvc.userInfo;
    this.url = this.graphqlService.getConfig().url;

    this.adalSvc.acquireToken(environment.graphClientId).subscribe((resToken: string) => {
      this.graphToken = resToken;
    });
  }

}
