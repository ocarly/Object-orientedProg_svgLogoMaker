const {Circle , Square, Triangle } = require("./shapes");


describe("Circle", () => {
    it('should return a circle logo, color choice, and text color', ()=>{
        const shape = new Circle();
        const color = shape.setShapeColor("gray")
        const expected =  `<circle cx="50" cy="50" r="50" fill="gray"/>`
        expect(shape.render(color)).toEqual(expected);
    });
});
describe('Triangle', () => {
    it('should return a Triangle logo, color choice, text, and text color', () => {
        const shape = new Triangle();
        const color = shape.setShapeColor("plum")
        const expected =  `<polygon points="100, 15 200, 200 0, 200" fill="plum"/>`
        expect(shape.render(color)).toEqual(expected);
    });
});
describe('Square', () => {
    it('should return a Square logo, color choice, text, and text color', () => {
        const shape = new Square();        
        const color = shape.setShapeColor("blue")
        const expected = `<rect width="200" height="200" fill="blue"/>`
        expect(shape.render(color)).toEqual(expected)
    });
});

