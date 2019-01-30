import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GraphqlService, GraphqlConfig } from './graphql.service';
import { of } from 'rxjs';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

describe('GraphqlService', () => {
  let httpMock: HttpTestingController;
  let service: GraphqlService;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GraphqlService, useValue: graphqlService },
        { provide: MsAdalAngular6Service, useValue: adalSvc }
      ]
    });

    service = TestBed.get(GraphqlService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('httpMock should be created', () => {
    expect(httpMock).toBeTruthy();
  });

  it('can get config', () => {

    expect(service.getConfig().url).not.toBeNull();
    expect(service.getConfig().url).not.toBe("");

  });
});
