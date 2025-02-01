let newsA = {
    "id": 25,
    "title": "Earthquake in California",
    "author": "Megan Fox",
    "content": "Yesterday a 5.2 magnitude earthquake shaked Los Angeles and...",
    "date": "15/04/2063",
    "time": "5:00 am"
}

let newsB = {
    "id": 42,
    "title": "New President election",
    "author": "Will Smith",
    "content": "Today the elected president will start a new politcs...",
    "date": "01/01/2035",
    "time": "9:00 am"
}

let f = function(){
    console.log("---")
    console.log("Title:" + this.title)
    console.log("Author:" + this.author)
    console.log("Date:" + this.date)
    console.log("Time:" + this.time)
    console.log("---")
}

newsA.printNewsInfo = f;
newsB.printNewsInfo = f;

newsA.printNewsInfo()
newsB.printNewsInfo()