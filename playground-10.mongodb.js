use("person")

/* db.persons.find().count() */

//update
//$set
//find user with firstname victor and 
//set his email to "victor@gmail.com"
/* db.persons.updateOne({"name.first":"victor"},{
    $set:{
        email:"victor@gmail.com"
    }
}) */

//find user whose first name is "carl" and state is "wickl"
//update his email to "carl@gmail.com"
//and phone number to 9834252645

/* db.persons.updateOne({"name.first":"carl","location.state":"wicklow"},{
    $set:{
        email:"carl@gmail.com",
        phone:"9823232323"
    }
})
 */
/* db.persons.findOne({"name.first":"carl","location.state":"wicklow"}) */

/* db.scores.insertMany([
    {
        name:"Sanjeev",
        age:23,
      
       highestScore:93,
       location:{
        temporary:"Ktm",
        permanent:"Kavre"
       },
       scores:[
        {
            subject:"Science",
            obtained:85
         },  {
            subject:"Social",
            obtained:75
         },  {
            subject:"Math",
            obtained:93
         }
       ]
    },
    {
        name:"Anit",
        age:24,
      
       highestScore:95,
       location:{
        temporary:"Ktm",
        permanent:"Nepalgunj"
       },
       scores:[
        {
            subject:"Science",
            obtained:95
         },  {
            subject:"Social",
            obtained:82
         },  {
            subject:"Math",
            obtained:73
         }
       ]
    },
    {
        name:"Dipesh",
        age:23,
      
       highestScore:98,
       location:{
        temporary:"Ktm",
        permanent:"Bhaktapur"
       },
       scores:[
        {
            subject:"Science",
            obtained:81
         },  {
            subject:"Social",
            obtained:67
         },  {
            subject:"Math",
            obtained:98
         }
       ]
    }
]) */

//update age of sanjeev to 24 and temporary location to lalitpur
/* db.scores.find()
 */
/* db.scores.updateOne({name:"Sanjeev"},{
    $set:{
        age:24,
        "location.temporary":"Lalitpur"
    }
}) */
//db.scores.findOne({name:"Sanjeev"})

//$inc
/* db.scores.updateOne({
    name:"Anit"
},{
    $inc:{
        age:2
    }
}) */
/* db.scores.findOne({name:"Anit"}) */

/* db.scores.updateMany({},{
    $inc:{
        age:3
    }
}) */


//increase highest number of "Anit" by 3
/* db.scores.updateOne({name:"Anit"},{
    $inc:{
        highestScore:3
    }
}) */

/* db.scores.findOne({name:"Anit"}) */

//
/* db.scores.updateMany({},{
    $inc:{
        highestScore:-10
    }
})  */

// db.scores.find()

//$mul
/* db.scores.updateOne({
    name:"Dipesh"
},{
    $mul:{
        age:2
    }
}) */

// db.scores.findOne({name:"Dipesh"})

//divide dipesh age by 2
/* db.scores.updateOne({
    name:"Dipesh"
},{
    $mul:{
        age:0.5
    }
})  */
//db.scores.findOne({name:"Dipesh"})

//multiply highesh scores of every person by 2
/* db.scores.updateMany({},{
    $mul:{
        highestScore:2
    }
}) 
db.scores.find() */


//divide by 4 to all 
/* db.scores.updateMany({},{
    $mul:{
        highestScore:0.25
    }
})  */
// db.scores.find()

//$set

/* db.scores.updateMany({},{
    $set:{
        isBrilliant:true
    }
}) */

// db.scores.find()


//$rename
//this is used to rename name field only not the values on it
/* db.scores.updateMany({},{
    $rename:{
        age:"totalAge"
    }
})
 db.scores.find() */

 //changing "Highestscore" name field into "lowestScore"
/*  db.scores.updateMany({},{
    $rename:{
        highestScore:"lowestScore"
    }
})
 db.scores.find()
 */

 //find users whose age is greater than or equals to 25
 //and change fiels totalAge to age

/*  db.scores.updateMany({totalAge:{$gte:25}},{
    $rename:{
        totalAge:"age"
    }
 }) */

//  db.scores.find()

//$unset=> removes whole name field
/* db.scores.updateMany({},{
    $unset:{
        isBrilliant:""
    }
})
 db.scores.find() */

 //using $or

/*  db.scores.updateMany({
    $or:[{name:"Sanjeev"},{name:"Anit"}]
 },{
    $set:{
        "location.temporary":"Kailali"
    }
 }) */

//  db.scores.find()
/* db.scores.insertOne({
    "name": "Santosh",
    "location": {
      "temporary": "Kailali",
      "permanent": "Kaski"
    },
    "scores": [
      {
        "subject": "Science",
        "obtained": 83
      },
      {
        "subject": "Social",
        "obtained": 70
      },
      {
        "subject": "Math",
        "obtained": 90
      }
    ],
    "lowestScore": 45.5,
    "age": 25
}) */
// db.scores.find()
//1.update  lowestScore of dipesh to 51,
// temporary location to "Biratnagar"
/* db.scores.updateOne({name:"Dipesh"},{
    $set:{
        lowestScore:51,
        "location.temporary":"Biratnagar"
    }
}) */
// db.scores.find({name:"Dipesh"})
//2.increase age of dipesh by 2
/* db.scores.updateOne({name:"Dipesh"},{
    $inc:{
        age:2
    }
})
db.scores.find({name:"Dipesh"}) */
// 3.decrease lowestScore of dipesh by 9
/* db.scores.updateOne({name:"Dipesh"},{
    $inc:{
        lowestScore:-9
    }
})
db.scores.find({name:"Dipesh"})  */
//4divide age of anit by 2.
/* db.scores.updateOne({name:"Anit"},{
    $mul:{
        age:0.5
    }
})
db.scores.find({name:"Anit"}) */
//5.multiply age of Sanjeev by 1.5
/* db.scores.updateOne({name:"Sanjeev"},{
    $mul:{
        age:1.5
    }

})
db.scores.find({name:"Sanjeev"}) */
//6.//Change name of santosh to sandip,
/* db.scores.updateMany({name:"Santosh"},{
    $set:{
        name:"Sandip"
    }
})
db.scores.find({name:"Sandip"}) */


// db.scores.find()

//remove 
/* db.scores.updateOne({name:"Dipesh"},{
    $pull:
    { scores:
        {obtained:{$lt:68}}}
   
})
 db.scores.find()
 */


 //remove Data Science subject from Anit's Score
/*  db.scores.updateOne({name:"Anit"},{
    $pull:
    { scores:
        {subject:{$eq:"Data Science"}}}
   
})
 db.scores.find() */


 //$push
 //add following scores on Anit
 //subject:"Computer",obtained:95
 //subject:"DataMining",obtained:82
 /* db.scores.updateOne({name:"Anit"},{
    $push:{
        scores:{
        $each:[{subject:"Computer",obtained:95},
        {subject:"Data-Mining",obtained:82}]
    }}
 }) */

// db.scores.find({name:"Anit"})

