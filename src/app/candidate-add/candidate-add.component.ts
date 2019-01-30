import { Component, OnInit } from '@angular/core';
import { GraphqlService, Candidate } from '../graphql.service';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.css']
})
export class CandidateAddComponent implements OnInit {

  constructor(private graphqlService: GraphqlService) {
    this.candidate = new Candidate();
    this.candidate.id = UUID.UUID();
    this.candidate.created = new Date();
    this.candidate.active = true;
  }
  candidate: Candidate;
  ngOnInit() {
  }

  save(): void {
    this.graphqlService.createCandidate(this.candidate).subscribe((dto) => {
      alert(dto.name + "," + dto.id);
    }, (err) => {
      if (typeof err === typeof String) {
        alert(err);
      } else {
        alert(JSON.stringify(err));
      }
    });
  }

}
