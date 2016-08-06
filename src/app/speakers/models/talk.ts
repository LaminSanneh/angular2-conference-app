import { Speaker } from './speaker';
export class Talk {
    id: number;
    title: string;
    date: string;
    summary: string;

    constructor(id, title, date, summary) {
        this.id = id;
        this.title = title; 
        this.date = date;
        this.summary = summary;
  }
}