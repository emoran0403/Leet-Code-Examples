function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // define arrays to contain the apples and oranges that fall on sam's house
  let applesOnHouse = [];
  let orangesOnHouse = [];

  // iterate through the apples array, determining if the distance they fall lies within the bounds of sam's house
  apples.forEach((apple) => {
    let appleDistance = a + apple;
    if (appleDistance >= s && appleDistance <= t) {
      applesOnHouse.push(apple);
    }
  });

  // iterate through the oranges array, determining if the distance they fall lies within the bounds of sam's house
  oranges.forEach((orange) => {
    let orangeDistance = b + orange;
    if (orangeDistance >= s && orangeDistance <= t) {
      orangesOnHouse.push(orange);
    }
  });
  // the length of the applesOnHouse array will be the amount of apples on the house
  console.log(applesOnHouse.length);
  // the length of the orangesOnHouse array will be the amount of oranges on the house
  console.log(orangesOnHouse.length);
}
