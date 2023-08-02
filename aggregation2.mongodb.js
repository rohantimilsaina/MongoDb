use("person")

//Aggregation


//find persons whose gender is male
// db.persons.find({gender:"male"})

//Aggregation=> complex query
//=> Only read operation
//=>consists of pipeline stage
//=> example of satges $match, $lookup, $unwind, $group,
// $skip, $limit, $project

/* db.persons.aggregate([
    {
        $match: {gender:"male"}
    },

    {
        $project: {
          gender:1,
          email:1,
          name:1,
          dob:1
          currentAge:"$dob.age"
         //(currentAge:"$dob.age")=>yesle chai name field ko name rename garxa
        }
    }
 
])
 */


//using $concat to concate first name and last name
/* db.persons.aggregate([
    {
        $match: {gender:"male"}
    },
    {
        $project: {
          gender:1,
          email:1,
          fullName:{$concat:["$name.first"," ","$name.last"]}
        }
    },
    {
        $sort:{
            currentAge:1//descending order of age
        }
    },
    {
        $skip:0
    },
    {
        $limit:3
    }
]) */

//find user who are male and age is greater than 30
//$project name, age email, gender, state, phone
//sort result by age

db.persons.aggregate([
    {
        $match:{gender:"male","dob.age":{$gt:30}}
    },
    {
        $project:{
            name:1,
            "dob.age":1,
            email:1,
            gender:1,
            state:"$location.state",
            phone:1
        }
    },
    {
        $sort: {
          age: 1
        }
    },
    {
        $skip:10
    },
    {
        $limit:20
    }
])