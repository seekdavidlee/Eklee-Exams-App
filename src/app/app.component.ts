import { Component, OnInit } from '@angular/core';
import { GraphqlService, MeDto } from './graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private graphqlService: GraphqlService) {

  }
  title = 'eklee-exams-app';
  url = "";
  me: MeDto;
  ngOnInit(): void {
    this.graphqlService.getConfig().then(config => {
      this.url = config.url;
    });

    this.graphqlService.getMe().then(me => {
      this.me = me;
    });
  }
}
