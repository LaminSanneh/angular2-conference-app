import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from '../speakers/services/speaker-service';
import { Speaker } from '../speakers/models/speaker';

@Component({
  moduleId: module.id,
  selector: 'speaker-details',
  templateUrl: 'speaker-details.component.html',
  styleUrls: ['speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  speaker: Speaker;
  constructor(
      private speakerService: SpeakerService,
      private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let speakerId = params['id'];
      this.speakerService.getOne(speakerId).then(speaker => this.speaker = speaker);
    });
  }

}
