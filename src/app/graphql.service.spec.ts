import { TestBed } from '@angular/core/testing';
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

  it('can get config', () => {

    expect(service.getConfig().url).not.toBeNull();
    expect(service.getConfig().url).not.toBe("");

  });
});
