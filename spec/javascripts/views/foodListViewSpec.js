describe("foodListView", function(){

	var dummyFoodElements = {
		"container" : $('#container'),
		"foodTemplate" : $('#food-template')
	};
	var foodList = new FoodListView(dummyFoodElements);

	describe("#parseFieldName", function(){
		var lameName = "nf_total_fat";

		it("should return a properly parsed field name", function(){
			var goodName = foodList.parseFieldName(lameName);
			expect(goodName).toEqual("Total Fat");
		});
	});
});