describe("FoodController", function (){

	var myModel = "Hello, world!";
	var myView = "Hi, yourself!";
	var myHealthview = "Healthy!";

	it("should initialize with an options hash", function(){
		f = new FoodController({
			"model" : myModel,
			"Foodview" : myView,
			"Healthview" : myHealthview
		});

		expect(f.model).toEqual("Hello, world!");
		expect(f.view).toEqual("Hi, yourself!");
		expect(f.healthView).toEqual("Healthy!");
  });

  
 });
