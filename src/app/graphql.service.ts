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

  getMe(): Promise<MeDto> {
    let promise = new Promise<MeDto>((resolve, reject) => {
      this.httpService.get("/.auth/me").subscribe((value: MeDto) => {
        resolve(value);
      }, (error) => {
        reject(error);
      });
    });

    return promise;
  }
}

export class ClaimDto {
  typ: string;
  val: string;
}

export class MeDto {
  id_token: string;
  user_id: string;
  user_claims: ClaimDto[];
}

export class GraphqlConfig {
  url: string;
}
