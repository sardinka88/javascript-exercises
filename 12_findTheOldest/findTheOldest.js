const findTheOldest = function(array) {
    const currentYear = (new Date()).getFullYear();

    // check if yearOfDeath exists, if not, assign it as currentYear
    array.forEach(person => {
        if (person.yearOfDeath === undefined) person.yearOfDeath = currentYear;
    })

    const sorted = array.sort((a, b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
