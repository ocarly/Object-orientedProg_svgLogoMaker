class Shape{
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }
    setShapeColor(shapeColor){
        return   this.shapeColor = shapeColor
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`
    };
};

class Square extends Shape{
    render(){
        return `<rect width="200" height="200" fill="${this.shapeColor}"/>`
    }
};

class Triangle extends Shape{
    render(){
        return `<polygon points="50, 5 150, 200 0, 110" fill="${this.shapeColor}"/>`
    };
};

module.exports = {Circle, Square, Triangle}