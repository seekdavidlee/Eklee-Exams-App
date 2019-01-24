import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from './../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private httpService: HttpClient) { }

  private _config: GraphqlConfig;
  getConfig(): GraphqlConfig {

    let _config = new GraphqlConfig();
    _config.url = environment.graphUrl;

    return _config;
  }

  createCandidate(candidate: Candidate): void {

  }
}

export class Candidate {
  id: string;
}

export class GraphqlConfig {
  url: string;
}
