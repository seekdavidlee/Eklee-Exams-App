import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GraphqlService } from './graphql.service';

describe('GraphqlService', () => {
  let httpMock: HttpTestingController;
  let service: GraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GraphqlService]
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

  it('can get config', (done) => {

    service.getConfig().then((config) => {
      expect(config.url).toBe('http://foo1');
      done();
    });

    let req = httpMock.expectOne('/assets/graphql-config.json');
    req.flush({ url: "http://foo1" });

    httpMock.verify();
  });
});
