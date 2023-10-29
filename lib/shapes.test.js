const Circle = require('../lib/shapes');


describe('Circle', () => {
    it('should return a circle logo, color choice, text, and text color', ()=>{
        const circle = new Circle('CIR', '#0080ff',  );
        expect(circle.render()).toEqual(`
            <circle cx="125" cy="150" r="100" fill="#505050" />
            <text x="125" y="155" font-family="Agency FB" text-anchor="middle" alignment-baseline="middle" font-size="36" fill="#00ff00">BAM</text>`
        );
    });
});