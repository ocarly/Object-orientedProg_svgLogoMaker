class SVG {
    constructor(){
        this.textEl = ""
        this.shapeEl = null
    }

    renderSvg(){
        const shapeSvg = this.shapeEl ? this.shapeEl.render() : '';
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${shapeSvg}${this.textEl}</svg>`
    }

    setText(color , text ){
        this.textEl = `<text x="50" y="50" font-family="Arial" text-anchor="middle" alignment-baseline="middle" font-size="24" fill="${color}">${text}</text>`
    }

    setShape(shape){
        this.shapeEl = shape
    }
}







module.exports = SVG