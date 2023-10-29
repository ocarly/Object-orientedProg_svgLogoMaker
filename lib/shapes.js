class Shapes{
    constructor(text, shapeColor, textColor){
this.text = text,
this.shapeColor = shapeColor,
this.textColor = textColor;
    }
}

class Circle extends Shapes{
    render(){
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };
};

class Square extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };
};

class Triangle extends Shapes{
    render(){
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    };
};