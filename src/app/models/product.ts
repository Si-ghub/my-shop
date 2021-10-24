export class Product {
    public amount: number = 0;
    constructor(
        public name: string,
        public price: number,
        public img?: string
    ) { }

    public addToChart(): void {
        this.amount++
    }

    public removeFromChart(): void {
        this.amount--
    }
    public inChart(): boolean {
        if (this.amount > 0) {
            return true;
        } else {
            return false;
        }
    }
}




