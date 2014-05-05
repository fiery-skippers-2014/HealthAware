describe("queryMaker", function(){
	var query;
	var food;

	beforeEach(function() {
		food = "steak";
		query = new queryMaker(food);
		returnObject = query.makeJson();
	});

	it("should return a valid object", function() {
		expect(returnObject).toBeDefined();
	});

	it("should have the passed-in food type in the JSON", function() {
		expect(returnObject.query).toEqual("steak");
	});
});