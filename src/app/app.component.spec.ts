import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GraphqlService, GraphqlConfig } from './graphql.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('AppComponent', () => {

  let graphqlService = {

    getConfig: (): Promise<GraphqlConfig> => {
      let promise = new Promise<GraphqlConfig>((resolve, reject) => {
        resolve({ url: "http://foo1" });
      });
      return promise;
    }
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

  it(`should have as title 'eklee-exams-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('eklee-exams-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to eklee-exams-app!');
  });
});
