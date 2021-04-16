const Triangle = require("../models/triangle");


function degreesToRadians(angleInDegrees) {
    return angleInDegrees * (Math.PI/180);  
}

function radiansToDegrees(angelInRadians) {
    return angelInRadians * (180/Math.PI);
}

const triangleCreator = {

    createTriangleFrom3Sides(sideA, sideB, sideC) {
        var triangle = new Triangle(sideA, sideB, sideC);
        return triangle;
    },

    createTriangleFrom3Angles(angleA, angleB, angleC) {
        var triangle = new Triangle(angleA, angleB, angleC);
        return triangle;
    },

    createTriangleFromTwoAngles(angleA, angleB) {
        var triangle = new Triangle(angleA, angleB, 180-(angleA+angleB));
        return triangle;
    },

    createTriangleFromTwoSidesAndOneOpposedAngle(sideA, sideB, angleA) {
        //Law of Sines
        //Math.sin takes radians so we have to convert angleA
        var angleAInRadians = degreesToRadians(angleA);
        var angleBInRadians = Math.asin((sideB * Math.sin(angleAInRadians)) / sideA);
        var angleB = radiansToDegrees(angleBInRadians);
        return this.createTriangleFromTwoAngles(angleA, angleB);
    },

    createTriangleFromTwoSidesAndOneDifferentAngle(sideA, sideB, angleC) {
        //Law of Cosines
        var angleCInRadians = degreesToRadians(angleC);
        var sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * Math.cos(angleCInRadians));
        return this.createTriangleFrom3Sides(sideA, sideB, sideC);
    }
}

module.exports = triangleCreator;