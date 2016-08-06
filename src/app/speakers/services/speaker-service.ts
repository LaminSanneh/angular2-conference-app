import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Speaker } from '../models/speaker';
import { Talk } from '../models/talk';

@Injectable()
export class SpeakerService {
  speakers: Speaker[];
  talks: Talk[];
  constructor(private http: Http) { }

  public getAll() {
    return this.http.get("http://localhost:3000/speakers")
      .toPromise().then((response) => {
        return this.mapGetAll(response);
      });
  }
  
  public getOne(id) {
    return this.http.get("http://localhost:3000/speakers/"+id)
      .toPromise().then((response) => {
        return this.mapGetOne(response);
      });
  }

  public mapGetAll(resp) {
    let speakers = resp.json().speakers.map((speaker) => {
      let talks = this.prepareSpeakerTalks(speaker, resp.json().talks);
      return new Speaker(speaker.id, speaker.firstName, speaker.lastName, talks, speaker.summary);
    });

    return speakers;
  }
  
  public mapGetOne(resp) {
    let speaker = resp.json().speaker;
    let talks = this.prepareSpeakerTalks(speaker, resp.json().talks);

    speaker = new Speaker(speaker.id, speaker.firstName, speaker.lastName, talks, speaker.summary);

    return speaker;
  }

  public prepareSpeakerTalks(speaker, talks) {
    let speakerTalks = [];

    talks.forEach((talk) => {
      if (speaker.id === talk.speaker) {
        speakerTalks.push(new Talk(talk.id, talk.title, talk.date, talk.summary));
      }
    });

    return speakerTalks;
  }
}
