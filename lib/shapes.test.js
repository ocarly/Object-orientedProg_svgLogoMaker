const {Circle , Square, Triangle } = require("./shapes");


describe("Circle", () => {
    it('should return a circle logo, color choice, and text color', ()=>{
        const circle = new Circle('CIR', '#0080ff', '#ff8000');
        console.log(circle.render());
        expect(circle.render()).toEqual(`<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="125" cy="150" r="100" fill="#505050" />
            <text x="125" y="155" font-family="Agency FB" text-anchor="middle" alignment-baseline="middle" font-size="36" fill="#00ff00">BAM</text>
            </svg>`
        );
    });
});
describe('Triangle', () => {
    it('should return a Triangle logo, color choice, text, and text color', () => {
        const triangle = new Triangle('orange','BAM','aliceblue');
        expect(triangle.render()).toEqual(`
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="blue"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="orange">BAM</text>
        </svg>`
        );
    });
});
describe('Square', () => {
    it('should return a Square logo, color choice, text, and text color', () => {
        const square = new Square('red','EKO','yellow');
        expect(square.render()).toEqual(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#dda0dd"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="gray">BAM</text>
        </svg>`
        );
    });
});