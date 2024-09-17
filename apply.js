const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "wick"
  }

  console.log(person.fullName.apply(person1, ["guntur","ap"]))
  