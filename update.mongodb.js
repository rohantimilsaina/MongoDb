use("person")

//update array
// db.scoores.find()

/* db.friends.find({
    "sportData.title":"Football",
    "sportData.frequency":3
}) */
//$elemMatch
/* db.friends.find({
    sportData:{
        $elemMatch:{
            title:"Football",
            frequency:2
        }
    }
}) */

//changing subject name to Data-science from Social of Anit
/* db.scores.updateOne({name:"Anit","scores.subject":"Social"},{
    $set:{
        "scores.$.subject":"Data Science"
        //.$. is refered as matching object which is defined in 
        //previous {}
    }
}) */
// db.scores.find({name:"Anit"})

//increase "sanjeev" Social marks by 15
/* db.scores.updateOne({name:"Sanjeev","scores.subject":"Social"},{
    $inc:{
        "scores.$.obtained":15
    }
}) */

//to increase every subject obtained marks to 70
/* db.scores.updateOne({name:"Sanjeev"},{
    $set:{
        "scores.$[].obtained":79
    }
}) 
db.scores.find({name:"Sanjeev"}) */

//increase Sanjeev social marks by 5
/* db.scores.updateOne({name:"Sanjeev",
"scores.subject":"Social"},{
    $inc:{
        "scores.$.obtained":15
    }
}) 
db.scores.find({name:"Sanjeev"}) */

//updating all subject marks to 70 whose marks is greater than 80
/* db.scores.updateOne({name:"Dipesh"},{
    $set:{
        "scores.$[item].obtained":70
    }
},{
    arrayFilters:[{"item.obtained":{$gt:80}}]
}) */
// db.scores.find({name:"Dipesh"}) 

/* db.students.insertMany([
    { "name":"Bishal", "grades" : [ 85, 80, 80 ] },
    { "name":"Milan", "grades" : [ 88, 90, 92 ] },
    { "name":"Ayush", "grades" : [ 85, 100, 90 ] }
 ]) */


  
  