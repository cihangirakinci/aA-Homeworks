function titleize(array, callback){

    let titleized = array.map (element =>`Mx. ${element} Jingleheimer Schmidt`);
    callback(titleized);
}

titleize(["Mary", "Brian", "Leo"], (names) => {
  names.forEach(name => console.log(name));
});

// var titleize = ["Mary", "Brian", "Leo"];

// titleize.forEach(name => console.log(name));

//*******
// function titleize(array){

//     var titleized = array.map (element =>`Mx. ${element} Jingleheimer Schmidt`);
//     return titleized;
// }

// console.log(titleize(["Mary", "Brian", "Leo"]));

function Elephant(name, height, tricks){

    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function(){
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRRRRRRRR!!!!!!!!!'`);
};

// var animal = new Elephant('Giant');

// animal.trumpet();

Elephant.prototype.grow = function(){
    return this.height += 12;
};

//var animal = new Elephant('Giant', 12);
// console.log(animal.grow());

Elephant.prototype.addTrick = function(trick){
    this.tricks.push(trick);
};

//////try again how you console log addTrick???

Elephant.prototype.play = function(){
    var rand_trick = this.tricks[Math.floor(Math.random()* this.tricks.length)];
    console.log(`${this.name} is ${rand_trick}`);
}


// var animal = new Elephant('Giant', 12, ['jump', 'run on 2 legs', 'lift one front leg']);
// animal.play();

// Phase 4



// Phase 5