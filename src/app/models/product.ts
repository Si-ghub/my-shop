export class Product {
    public amount: number = 0;
    constructor(
        public name: string,
        public price: number,
        public img?: string
    ) { }

    public addToCart(): void {
        this.amount++;
    }

    public removeFromCart(): void {
        this.amount--;
    }
    public inCart(): boolean {
        if (this.amount > 0) {
            return true;
        } else {
            return false;
        }
    }
}




