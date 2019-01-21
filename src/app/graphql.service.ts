import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private httpService: HttpClient) { }

  getConfig(): Promise<GraphqlConfig> {

    let promise = new Promise<GraphqlConfig>((resolve, reject) => {
      this.httpService.get("/assets/graphql-config.json").subscribe((value: GraphqlConfig) => {
        resolve(value);
      }, (error) => {
        reject(error);
      });
    });

    return promise;
  }
}

export class GraphqlConfig {
  url: string;
}
