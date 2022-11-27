const testThis = require("./bmi _calculator");

test ("If BMI result is correct", () => {
    var expectedRes = 22.229061933586397

    expect(testThis(65, 68.4)).toBe(expectedRes);
});

