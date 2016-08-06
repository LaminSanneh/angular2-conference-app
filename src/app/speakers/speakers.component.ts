import { Component, OnInit } from '@angular/core';
import { Speaker } from './models/speaker';
import { SpeakerService } from './services/speaker-service';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'speakers',
  templateUrl: 'speakers.component.html',
  styleUrls: ['speakers.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SpeakersComponent implements OnInit {
  public speakers: Speaker[];
  constructor(private speakerService: SpeakerService) {}

  ngOnInit() {
    this.speakerService.getAll().then(speakers => { this.speakers = speakers });
  }

}
