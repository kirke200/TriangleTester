

function Triangle(sideOrAngleA, sideOrAngleB, sideOrAngleC, isTriangle) {
    this.sideOrAngleA = sideOrAngleA;
    this.sideOrAngleB = sideOrAngleB;
    this.sideOrAngleC = sideOrAngleC;
    this.isCorrectTriangle = isTriangle;
}


Triangle.prototype.isTriangle = function isTriangle() {
    return this.isCorrectTriangle;
}

Triangle.prototype.isScalene = function isScalene() {
    return this.sideOrAngleA !== this.sideOrAngleB 
    && this.sideOrAngleA !== this.sideOrAngleC 
    && this.sideOrAngleB !== this.sideOrAngleC
    && this.isTriangle();
}

Triangle.prototype.isEquilateral = function isEquilateral() {
    return this.sideOrAngleA === this.sideOrAngleB 
    && this.sideOrAngleB === this.sideOrAngleC 
    && this.sideOrAngleA === this.sideOrAngleC
    && this.isTriangle();
}

Triangle.prototype.isIsosceles = function isIsosceles() {
    return (this.sideOrAngleA === this.sideOrAngleB 
    || this.sideOrAngleB === this.sideOrAngleC 
    || this.sideOrAngleA === this.sideOrAngleC)
    && this.isTriangle();
}


module.exports = Triangle;