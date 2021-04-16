

function Triangle(sideOrAngleA, sideOrAngleB, sideOrAngleC) {
    this.sideOrAngleA = sideOrAngleA;
    this.sideOrAngleB = sideOrAngleB;
    this.sideOrAngleC = sideOrAngleC;

}

Triangle.prototype.isScalene = function isScalene() {
    return this.sideOrAngleA !== this.sideOrAngleB 
    && this.sideOrAngleA !== this.sideOrAngleC 
    && this.sideOrAngleB !== this.sideOrAngleC;
}

Triangle.prototype.isEquilateral = function isEquilateral() {
    return this.sideOrAngleA === this.sideOrAngleB 
    && this.sideOrAngleB === this.sideOrAngleC 
    && this.sideOrAngleA === this.sideOrAngleC;
}

Triangle.prototype.isIsosceles = function isIsosceles() {
    return this.sideOrAngleA === this.sideOrAngleB 
    || this.sideOrAngleB === this.sideOrAngleC 
    || this.sideOrAngleA === this.sideOrAngleC;
}

module.exports = Triangle;