test.tests = function () {
    var largerNum = test.largerNum
    var grade = test.grade
    var fever = test.fever
    var isStopped = test.isStopped
    var washDish = test.washDish
    var flightCost = test.flightCost
    var getDayOfWeek = test.getDayOfWeek

    describe('Conditionals Testing', function () {
        describe('largerNum()', function () {
            it('Should return the larger of two inputs', function () {
                chai.assert.isTrue(largerNum(1, 2) == 2);
            })
            it('No cheating', function () {
                chai.assert.isTrue(largerNum(3, 2) == 3);
            });
            it('What about letters', function () {
                chai.assert.isTrue(largerNum('a', 'b') == 'b');
            });
        });
        describe('grade()', function () {
            it('Should return the letter grade given a score 1-100', function () {
                chai.assert.isTrue(grade(95) == 'A');
            });
            it('Should work in multiple cases', function () {
                chai.assert.isTrue(grade(75) == 'C');
            });
        });
        describe('fever()', function () {
            it('Should say no fever if under 98.6', function () {
                chai.assert.isTrue(fever(90) == 'no fever');
            });
            it('Should return fever if over', function () {
                chai.assert.isTrue(fever(100) == 'fever');
            });
            it('additionaly indicates if they should visit the hospital', function () {
                chai.assert.isTrue(fever(105) == 'fever go to hospital');
            });
        });
        describe('isStopped()', function () {
            it('Should return true if a car is not moving', function () {
                var testCar = { moving: false }
                chai.assert.isTrue(isStopped(testCar) == true);
            });
        });
        describe('washDish()', function () {
            it('Should return true if dish is dirty and yours', function () {
                var testDish1 = { yourDish: true, isDirty: true }
                chai.assert.isTrue(washDish(testDish1) == true);
            });
            it('Should return false if dish is not yours', function () {
                var testDish2 = { yourDish: false, isDirty: true }
                chai.assert.isTrue(washDish(testDish2) == false);
            });
        });
        describe('flightCosts()', function () {
            it('Flying can be expensive when traveling to china first class', function () {
                chai.assert.isTrue(flightCost('CAN', true) == 6200)
            });
            it("Don't be case sensitive", function () {
                chai.assert.isTrue(flightCost('sea') == 800)
            });
        });
        describe('getDayOfWeek()', function () {
            it('the 3rd day of the week is Tuesday', function () {
                chai.assert.isTrue(getDayOfWeek(3) == 'Tuesday')
            });
            it("No the 3rd day of the week is Wednesday", function () {
                chai.assert.isTrue(getDayOfWeek(3, true) == 'Wednesday')
            });
        });
    });
}