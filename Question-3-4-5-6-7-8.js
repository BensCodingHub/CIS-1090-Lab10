//❓❓ LAB QUESTION 3, 4, 5:
let myCat = {
    name: "Lucy",
    age: 4,
    speak: function(){
        console.log("🐈 Meow");
    }
}

let myDog = {
    name: "Stewart",
    age: 9,
    speak: function(){
        console.log("🐕 Woof!");
    }
}

let myFish = {
    name: "Bubbles",
    age: 1,
    speak: function(){
        console.log("According to all known laws of marine biology, there is no way for a fish to speak.")
    }
}

//❓❓ LAB QUESTION 6, 7, 8:
console.log("Speak, " + myCat.name );
myCat.speak();
function introduce(myPet){
    console.log("Speak, " + myPet.name)
    myPet.speak()
}
introduce(myDog)
introduce(myCat)
introduce(myFish)