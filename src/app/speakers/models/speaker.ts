export class Speaker {
    id: number;
    firstName: string;
    lastName: string;
    talks: number[];
    summary: string;

    constructor(id, firstName, lastName, talks, summary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.talks = talks;
        this.summary = summary;
    }
}