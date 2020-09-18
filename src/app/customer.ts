export class Customer {
    id: number;
    name: string;
    age: number;
    active: boolean;

    constructor(id?: number, name?: string, age?: number, active?: boolean) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.active = active;
    }
}
