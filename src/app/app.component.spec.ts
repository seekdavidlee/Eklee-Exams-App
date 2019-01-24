import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GraphqlService, GraphqlConfig } from './graphql.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

describe('AppComponent', () => {

  let graphqlService = {

    getConfig: (): GraphqlConfig => {
      let config = new GraphqlConfig();
      config.url = "http://fo";
      return config;
    },

  };

  let adalSvc = {
    username: "f",
    profile: {
      tid: '12345'
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: GraphqlService, useValue: graphqlService },
        { provide: MsAdalAngular6Service, useValue: adalSvc }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
