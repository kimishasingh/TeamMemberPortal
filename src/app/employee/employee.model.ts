export class Employee {
    id: string;
    name: string;
    funFact: string;
    photo: string;
    
    constructor(name: string, funFact: string, photo: string) {
        this.name = name;
        this.funFact = funFact;
        this.photo = photo;
    }
}