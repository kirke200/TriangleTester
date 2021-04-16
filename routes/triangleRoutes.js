const express = require("express");
const triangleCreator = require("../services/triangleCreator");
const router = express.Router();


function isValidSideOrAngle(side) {
    return side && !isNaN(side) && side > 0;
}

router.post("/triangleFrom3Sides", (req, res) => {
    var body = req.body;

    if (!isValidSideOrAngle(body.sideA) || !isValidSideOrAngle(body.ideB) || !isValidSideOrAngle(body.sideC)) {
        res.status(300).json({
            message: "Your input is not valid. You need to input 3 sides sideA, sideB and sideC"
        });
        return;
    }

    var triangle = triangleCreator.createTriangleFrom3Sides(body.sideA, body.sideB, body.sideC);

    res.status(200).json({
        IsScalene: triangle.isScalene(),
        IsEquilateral: triangle.isEquilateral(),
        IsIsosceles: triangle.isIsosceles()
    });
});

router.post("/triangleFromThreeAngles", (req, res) => {
    var body = req.body;

    if (!isValidSideOrAngle(body.angleA) || !isValidSideOrAngle(body.angleB) || !isValidSideOrAngle(body.angleC)) {
        res.status(300).json({
            message: "Your input is not valid. You need to input 3 angles angleA, angleB and angleC"
        });
        return;
    }

    var triangle = triangleCreator.createTriangleFrom3Angles(body.angleA, body.angleB, body.angleC);

    res.status(200).json({
        IsScalene: triangle.isScalene(),
        IsEquilateral: triangle.isEquilateral(),
        IsIsosceles: triangle.isIsosceles()
    });
});

router.post("/triangleFromTwoAngles", (req, res) => {
    var body = req.body;

    if (!isValidSideOrAngle(body.angleA) || !isValidSideOrAngle(body.angleB)) {
        res.status(300).json({
            message: "Your input is not valid. You need to input 2 angles angleA and angleB"
        });
        return;
    }

    var triangle = triangleCreator.createTriangleFromTwoAngles(body.angleA, body.angleB);

    res.status(200).json({
        IsScalene: triangle.isScalene(),
        IsEquilateral: triangle.isEquilateral(),
        IsIsosceles: triangle.isIsosceles()
    });
});

router.post("/triangleFromTwoSidesAndOneOpposedAngle", (req, res) => {
    var body = req.body;

    if (!isValidSideOrAngle(body.sideA) || !isValidSideOrAngle(body.sideB) || !isValidSideOrAngle(body.angleA)) {
        res.status(300).json({
            message: "Your input is not valid. You need to input 2 sides sideA and sideB and 1 angle angleA"
        });
        return;
    }

    var triangle = triangleCreator.createTriangleFromTwoSidesAndOneOpposedAngle(body.sideA, body.sideB, body.angleA);

    res.status(200).json({
        IsScalene: triangle.isScalene(),
        IsEquilateral: triangle.isEquilateral(),
        IsIsosceles: triangle.isIsosceles()
    });
});

router.post("/triangleFromTwoSidesAndOneDifferentAngle", (req, res) => {
    var body = req.body;

    if (!isValidSideOrAngle(body.sideA) || !isValidSideOrAngle(body.sideB) || !isValidSideOrAngle(body.angleC)) {
        res.status(300).json({
            message: "Your input is not valid. You need to input 2 sides sideA and sideB and 1 angle angleC"
        });
        return;
    }

    var triangle = triangleCreator.createTriangleFromTwoSidesAndOneDifferentAngle(body.sideA, body.sideB, body.angleC);

    res.status(200).json({
        IsScalene: triangle.isScalene(),
        IsEquilateral: triangle.isEquilateral(),
        IsIsosceles: triangle.isIsosceles()
    });
});

module.exports = router;