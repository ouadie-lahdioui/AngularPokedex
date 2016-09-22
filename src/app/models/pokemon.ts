export class Pokemon {

    id: number;
    name: string;
    description: string;
    category: string;
    height: number;
    weight: number;
    gender: string;
    weaknessesFire: string[];
    type: string[];

    constructor(attributes: Object = {}) {
        Object.assign(this, attributes);
    }

}
