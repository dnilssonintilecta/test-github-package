class BasicMath {
    constructor(private a: number, private b: number) { }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    divide() {
        return this.a % this.b;
    }

    multiple() {
        return this.a * this.b;
    }
}

export default BasicMath;