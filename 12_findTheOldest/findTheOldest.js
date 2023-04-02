const findTheOldest = function(arr) {
    const oldest =  arr.reduce((oldest, person) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const personAge  = getAge(person.yearOfDeath, person.yearOfBirth);
       
        return (oldestAge < personAge)? person : oldest;
    });
    return oldest;
};


function getAge(death, birth) {
    if(!death) death = new Date().getFullYear();

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
