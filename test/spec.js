//intro to unit testing with jasmine course from refactoru

describe("Pluralize", function(){
  it("should return cups if we pass 0", function(){
    expect( pluralize("cup", 0)).toBe("cups")
  });

  it("should return cat if we pass 1", function(){
    expect( pluralize("cat", 1)).toBe("cat")
  });
  it("should return dogs if we pass 2", function(){
    expect(pluralize("dog", 2)).toBe("dogs")
  });
})

describe("isEven", function(){
  it("should return true if we pass an even number", function(){
    expect( isEven(4)).toBe(true)
  });
  it("should return false if we pass an odd number", function() {
    expect( isEven(69)).toBe(false)
  });
  it("should return true if we pass 0", function() {
    expect( isEven(0)).toBe(true);
  })
})

describe("multiplyByTwo", function(){
  beforeEach(function () {
        jasmine.addMatchers({
            toBeDivisibleByTwo: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: (actual % 2) === 0
                        };
                    }
                };
            }
        });
    });

  it("should return a value mulitplied by 2", function(){
    expect(multiplyByTwo(5)).toEqual(10)
  });
  it("should return a number that's divisible by two", function(){
    expect(multiplyByTwo(33)).toBeDivisibleByTwo();
  });

})
