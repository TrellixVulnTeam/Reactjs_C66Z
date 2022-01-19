'use strict';

var add = function add(a, b) {
    //  console.log(arguments);
    return a + b;
};
//console.log(add(5,3));
/*
// this is function Es5---Es5 USING ( THIS ) WHICH IS NOT WORKING IN IT 
const user={
    name:'Andrew',
    cities:['Philidephia','Nework','Dublin'],
    printPlacesLived:function(){
        this.cities.forEach(function(city)
        {
            console.log(this.name +' has lived in '+city )

        });
    }
}
user.printPlacesLived(); */

/*
// this is function Es5---Es5 USING  ( THIS ) INDIRECTLY WHICH IS  WORKING IN IT
//  
const user={
    name:'Andrew',
    cities:['Philidephia','Nework','Dublin'],
    printPlacesLived:function(){
        let that =this;
        this.cities.forEach(function(city)
        {
            console.log(that.name +' has lived in '+city )

        });
    }
}
user.printPlacesLived(); */

// this is function Es5---Es6 USING ( THIS  ) WHICH IS  WORKING IN IT
// const user={
//     name:'Andrew',
//     cities:['Philidephia','NewYork','Dublin'],
//     printPlacesLived:function(){
//         this.cities.forEach((city) =>
//         {
//             console.log(this.name +' has lived in  ' +city )

//         });
//     }
// }
// user.printPlacesLived();


// this is function Es6---Es6 USING ( THIS ) WHICH IS NOT WORKING IN IT

// const user={
//     name:'Andrew',
//     cities:['Philidephia','Newyork','Dublin'],
//     printPlacesLived:()=>{
//        
//         this.cities.forEach((city) =>
//         {
//             console.log(this.name +' has lived in '+city )

//         });
//     }
// }
// user.printPlacesLived();


//  Es5 FUNCTION CONTAING ( Map ) Method 
// const user={
//     name:'Andrew',
//     cities:['Philidephia','Newyork','Dublin'],
//     printPlacesLived:function(){
//         const cityMessages=this.cities.Map(city)
//         {
//             return this.name +' has Lived in '+ city ;

//         };
//         return cityMessages;
//     }
// }
// user.printPlacesLived();


var user = {
    name: 'Andrew',
    cities: ['Philidephia', 'Newyork', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has Lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    number: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.number + ' have been multiplied ' + _this2.number;
        });
    }
};
console.log(multiplier.multiply());
