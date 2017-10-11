// RUBY CLASS:
// class Car
//   attr_accessor :model, :year, :miles
//
//   def initialize(model, year, miles)
//     @model = model
//     @year = year
//     @miles = miles
//   end
//
//   def print_message
//     "#{model} has done #{miles} miles"
//   end
// end
//
// civic = Car.new("Honda Civic", 2009, 20000)
// mondeo = Car.new("Ford Mondeo", 2010, 5000)
// puts civic
// puts civic.year
// puts civic.print_message




// JAVASCRIPT "CLASS":
var car = {
  model: "Buick",
  year: 2004,
  miles: 20000,
  printMessage: function() {
    return `${this.model} has done ${this.miles} miles`;
  }
};
console.log(car["model"]);
console.log(car.year);
console.log(car.printMessage());
console.log(car.printMessage);


