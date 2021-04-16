const { TestScheduler } = require("jest");
const triangleCreator = require("../services/triangleCreator");

test.each([
    [29, 30, 31, true, false, false, true],
    [30, 30, 30, false, true, true, true],
    [29, 30, 30, false, false, true, true],
    [-1, 30, 30, false, false, false, false]
])("Tests triangle with 3 sides as input", (sideA, sideB, sideC, expectedScalene, expectedEquilateral, expectedIsosceles, expectedIsTriangle) => {

    var triangle = triangleCreator.createTriangleFrom3Sides(sideA, sideB, sideC);

    expect(triangle.isScalene()).toBe(expectedScalene);
    expect(triangle.isEquilateral()).toBe(expectedEquilateral);
    expect(triangle.isIsosceles()).toBe(expectedIsosceles);
    expect(triangle.isTriangle()).toBe(expectedIsTriangle);
});


test.each([
    [40, 90, 50, true, false, false, true],
    [60, 60, 60, false, true, true, true],
    [50, 50, 80, false, false, true, true],
    [30, 30, 30, false, false, false, false]
])("Tests triangle with 3 angles as input", (angleA, angleB, angleC, expectedScalene, expectedEquilateral, expectedIsosceles, expectedIsTriangle) => {

    var triangle = triangleCreator.createTriangleFrom3Angles(angleA, angleB, angleC);

    expect(triangle.isScalene()).toBe(expectedScalene);
    expect(triangle.isEquilateral()).toBe(expectedEquilateral);
    expect(triangle.isIsosceles()).toBe(expectedIsosceles);
    expect(triangle.isTriangle()).toBe(expectedIsTriangle);
});

test.each([
    [29, 30, true, false, false, true],
    [60, 60, false, true, true, true],
    [40, 100, false, false, true, true],
    [40, 180, false, false, false, false]
])("Tests triangle with 2 angles as input", (angleA, angleB, expectedScalene, expectedEquilateral, expectedIsosceles, expectedIsTriangle) => {

    var triangle = triangleCreator.createTriangleFromTwoAngles(angleA, angleB);

    expect(triangle.isScalene()).toBe(expectedScalene);
    expect(triangle.isEquilateral()).toBe(expectedEquilateral);
    expect(triangle.isIsosceles()).toBe(expectedIsosceles);
    expect(triangle.isTriangle()).toBe(expectedIsTriangle);
});

test.each([
    [29, 30, 60, true, false, false, true],
    [30, 30, 60, false, true, true, true],
    [30, 30, 70, false, false, true, true],
    [40, 50, 190, false, false, false, false]
])("Tests triangle with 2 sides and one opposing angle as input", (sideA, sideB, angleA, expectedScalene, expectedEquilateral, expectedIsosceles, expectedIsTriangle) => {

    var triangle = triangleCreator.createTriangleFromTwoSidesAndOneOpposedAngle(sideA, sideB, angleA);

    expect(triangle.isScalene()).toBe(expectedScalene);
    expect(triangle.isEquilateral()).toBe(expectedEquilateral);
    expect(triangle.isIsosceles()).toBe(expectedIsosceles);
    expect(triangle.isTriangle()).toBe(expectedIsTriangle);
});

test.each([
    [29, 30, 60, true, false, false, true],
    [30, 30, 60, false, true, true, true],
    [30, 30, 70, false, false, true, true],
    [40, 50, 190, false, false, false, false]
])("Tests triangle with 2 sides and one different angle as input", (sideA, sideB, angleC, expectedScalene, expectedEquilateral, expectedIsosceles, expectedIsTriangle) => {

    var triangle = triangleCreator.createTriangleFromTwoSidesAndOneDifferentAngle(sideA, sideB, angleC);

    expect(triangle.isScalene()).toBe(expectedScalene);
    expect(triangle.isEquilateral()).toBe(expectedEquilateral);
    expect(triangle.isIsosceles()).toBe(expectedIsosceles);
    expect(triangle.isTriangle()).toBe(expectedIsTriangle);
});