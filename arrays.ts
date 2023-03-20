const carMaker: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMaker[0];
const myCar = carMaker.pop();

// Prevent incompatible values
carMaker.push("100");

// Help with 'map'
carMaker.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push(new Date());
importantDates.push("2030-10-10");
