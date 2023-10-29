const Circle = require('../lib/shapes');
const Square = require("../lib/shapes")
const Triangle = require("../lib/shapes")

describe('Circle', () => {
    it('should return a circle logo, color choice, text, and text color', ()=>{
        const circle = new Circle();
        expect(circle.render()).toEqual(`
            <circle cx="100" cy="100" r="40" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>`
        );
    });
});