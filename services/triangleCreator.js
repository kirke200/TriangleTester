const Triangle = require("../models/triangle");

function degreesToRadians(angleInDegrees) {
    return angleInDegrees * (Math.PI/180);  
}

function radiansToDegrees(angelInRadians) {
    return angelInRadians * (180/Math.PI);
}

function roundNumber(number) {
    //rounds to 2 decimals
    return Math.round(number * 100) / 100;
}

const triangleCreator = {

    createTriangleFrom3Sides(sideA, sideB, sideC) {
        var isTriangle = sideA > 0 && sideB > 0 && sideC > 0;
        var triangle = new Triangle(roundNumber(sideA), roundNumber(sideB), roundNumber(sideC), isTriangle);
        return triangle;
    },

    createTriangleFrom3Angles(angleA, angleB, angleC) {
        var isTriangle = roundNumber(angleA + angleB + angleC) === 180.00 && angleA > 0 && angleB > 0 && angleC > 0;
        var triangle = new Triangle(roundNumber(angleA), roundNumber(angleB), roundNumber(angleC), isTriangle);
        return triangle;
    },

    createTriangleFromTwoAngles(angleA, angleB) {
        var angleC = 180.00-(angleA+angleB);
        return this.createTriangleFrom3Angles(angleA, angleB, angleC);
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

        var isTriangle = angleC < 180.00 && angleC > 0 && sideA > 0 && sideB > 0 && sideC > 0;
        var triangle = new Triangle(roundNumber(sideA), roundNumber(sideB), roundNumber(sideC), isTriangle);
        
        return triangle
    }
}

module.exports = triangleCreator;