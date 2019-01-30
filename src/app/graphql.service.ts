import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../environments/environment'
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private httpService: HttpClient, private adalSvc: MsAdalAngular6Service) { }

  private _config: GraphqlConfig;
  getConfig(): GraphqlConfig {

    let _config = new GraphqlConfig();
    _config.url = environment.graphUrl;

    return _config;
  }

  createCandidate(candidate: Candidate): Observable<Candidate> {

    return new Observable<Candidate>((observable) => {
      let action = "createCandidate";
      let month = candidate.created.getMonth() + 1;
      let created = candidate.created.getFullYear() + "-" +
        (month < 10 ? "0" + month : month) + "-" + candidate.created.getDate();

      let postBody = createCandidateStr.replace("{id}", candidate.id);
      postBody = postBody.replace("{action}", action);
      postBody = postBody.replace("{name}", candidate.name);
      postBody = postBody.replace("{created}", created);
      postBody = postBody.replace("{active}", candidate.active.toString());
      postBody = postBody.replace("{type}", candidate.type);

      this.adalSvc.acquireToken(environment.graphClientId).subscribe((resToken: string) => {

        let graphInput: GraphInput = new GraphInput();
        graphInput.operationName = null;
        graphInput.query = postBody;
        graphInput.variables = {};
        this.httpService.post(this.getConfig().url, JSON.stringify(graphInput), {
          headers: {
            authorization: "Bearer " + resToken,
            "Content-Type": "application/json"
          }
        }).subscribe((result: any) => {

          if (result.errors) {
            if (result.errors.length > 0) {
              let errors = <GraphError[]>result.errors;
              errors.forEach(x => observable.error(x.message));
              return;
            }
          }
          if (result.data) {
            var raw = result.data[action];
            if (raw !== null) {
              let dto: Candidate = <Candidate>raw;
              observable.next(dto);
              observable.complete();
            } else {
              observable.error(new Error("Invalid2"));
            }
          } else {
            observable.error(new Error("Invalid1"));
          }
        }, (err) => {
          observable.error(err);
        });
      }, (err) => {
        observable.error(err);
      });
    });
  }
}

let createCandidateStr: string = "mutation {\n\
  {action}(candidate: { id: \"{id}\", name: \"{name}\", created: \"{created}\", active: {active}, type: \"{type}\" }) {\n\
id\n\
    name\n\
    active\n\
    created\n\
    type\n\
  }\
\n}";

export class Candidate {
  id: string;
  name: string;
  active: boolean;
  created: Date;
  type: string;
}

export class GraphqlConfig {
  url: string;
}

export class GraphInput {
  operationName: string;
  variables: any;
  query: string;
}

export class GraphOutput {
  data: any;
}

export class GraphError {
  message: string;
}
