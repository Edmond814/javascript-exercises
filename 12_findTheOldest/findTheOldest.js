const findTheOldest = function(people) {
    const oldest = people.reduce((old,nextOne)=>{
        if (!nextOne.yearOfDeath)
            nextOne.yearOfDeath=new Date().getFullYear()

        if (isempty(old)){
            old = nextOne
            old.age = old.yearOfDeath - old.yearOfBirth
        }

        let age = nextOne.yearOfDeath - nextOne.yearOfBirth
        if (old.age< age){
            old = nextOne
        }
        return old;
    },{})

    return oldest
};

function isempty(obj){
    for (let i in obj) return false
    return true;
}

// Do not edit below this line
module.exports = findTheOldest;
