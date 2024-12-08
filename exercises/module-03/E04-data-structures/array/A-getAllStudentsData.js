function getAllStudentsData(searcedID){

    let IDs = [541, 567, 519, 500]
    let names = ["John", "Lucy", "Alex", "Mary"]
    let surnames = ["Doe", "Smith", "Norris", "Rose"]
    let ages = [15, 18, 25, 34]

    if(searcedID <= 0){
        console.log("Invalid ID");
        return -1;
    }

    let found = false
    for (let i = 0; i < IDs.length; i++) {
        if(searcedID === IDs[i]){
            console.log(IDs[i] + ": " + names[i] + " " + surnames[i] + " Age: " + ages[i]);
            found = true;
            return i;
        }
    }

    if(!found){
        console.log("No such students for the id: " + searcedID);
        return -1;
    }
}

getAllStudentsData(567)
getAllStudentsData(500)
getAllStudentsData(100)
getAllStudentsData(-564)