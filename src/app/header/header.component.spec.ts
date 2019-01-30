import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphqlService, GraphqlConfig } from './../graphql.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HeaderComponent } from './header.component';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    },
    acquireToken: (url: string) => {
      return of();
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: GraphqlService, useValue: graphqlService },
        { provide: MsAdalAngular6Service, useValue: adalSvc }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
