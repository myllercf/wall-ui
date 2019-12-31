export class Warning {
    public id: number;
    public title: string;
    public description: string;
    public publishDate: Date;
    public viewDate: Date;

    constructor(
        title: string,
        description: string
    ) {}
}