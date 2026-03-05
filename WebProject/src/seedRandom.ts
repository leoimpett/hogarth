export class SeedRandom{

    private seed: number;
    private i32: number = 2 ** 32;
    
    public constructor(seed: number){
        this.seed = seed;
    }

    public Next() {
        var n = (this.seed = (this.seed + 0x6d2b79f5) % this.i32);
        n = Math.imul(n ^ (n >>> 15), n | 1);
        n ^= n + Math.imul(n ^ (n >>> 7), n | 61);
        return ((n ^ (n >>> 14)) >>> 0) / this.i32;
    }

    public Range(a: number, b: number) {
        return a + (b - a) * this.Next();
    };
    
    public Int(a: number, b: number) {
        return Math.floor(this.Range(a, b + 0.9999));
    };
}