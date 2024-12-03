let obj = {
    data:{
        name: {
            first: "John",
            last: "Doe"
        },
        age: 30,
        city: "New York",
        country: "USA",
        hobbies: ["reading", "traveling", "photography"],
        address: {
          street: "123 Main St",
          city: "New York",
          country: "USA"
        },
        isStudent: false,
        grades: [80, 90, 75, 85]
    }
   
  };

let {data:{name:{first,last},age,city,country:countryOuter,hobbies,address:{street,city:cityInner,country:countryInner},isStudent,grades}} = obj;

console.log(first,last,age,city,countryOuter,hobbies,street,cityInner,countryInner,isStudent,grades);