use("Student")

//insertOne
/* db.StudentsInfo.insertOne({
    name:"Rohan Timilsaina",
    age:20,
    location:"Kathmandu",
    education:"Bachelor"
}) */

//insertMany
db.StudentsInfo.insertMany([
    {
        name:"Rohan Timilsaina",
        age:20,
        location:"Kathmandu",
        education:"Bachelor"
    },
    {
        name:"Rajesh jaishi",
        age:25,
        location:"Kathmandu",
        education:"Plust2"
    },
    {
        name:"Deepak Timilsaina",
        age:25,
        location:"Kailali",
        education:"Masters"
    }
])

//Find
//db.StudentsInfo