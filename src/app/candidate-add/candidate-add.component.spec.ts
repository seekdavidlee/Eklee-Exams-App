import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAddComponent } from './candidate-add.component';
import { FormsModule } from '@angular/forms';
import { GraphqlConfig, GraphqlService } from '../graphql.service';

describe('CandidateAddComponent', () => {
  let component: CandidateAddComponent;
  let fixture: ComponentFixture<CandidateAddComponent>;
  let graphqlService = {

    getConfig: (): GraphqlConfig => {
      let config = new GraphqlConfig();
      config.url = "http://fo";
      return config;
    },

  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CandidateAddComponent],
      providers: [
        { provide: GraphqlService, useValue: graphqlService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
