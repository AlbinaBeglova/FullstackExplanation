const person = {
    age: 25,
    getAge: function () {
      return this.age;
    },
  };
  
  console.log(person.getAge());
  // Expected output: 25
  