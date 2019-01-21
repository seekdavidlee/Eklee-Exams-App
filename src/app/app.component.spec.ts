import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GraphqlService, GraphqlConfig } from './graphql.service';

describe('AppComponent', () => {

  let graphqlService = {

    getConfig: (): Promise<GraphqlConfig> => {
      let promise = new Promise<GraphqlConfig>((resolve, reject) => {
        resolve({ url: "http://foo1" });
      });
      return promise;
    },

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: GraphqlService, useValue: graphqlService }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
