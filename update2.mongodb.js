use("persons")

//more on array
//push values on array=>$push, $addToSet
//$push doesnot ignore the repeated values
//remove values on array=>$pop, $pull

/* db.students.insertMany([
    { "name":"Bishal", "grades" : [ 85, 80, 80 ] },
    { "name":"Milan", "grades" : [ 88, 90, 92 ] },
    { "name":"Ayush", "grades" : [ 85, 100, 90 ] }
 ]) */
//  db.students.find()
/* db.students.updateOne({name:"Bishal"},{
    $push:{
        grades:95
    }
})
db.students.find() */

//add 91 to Milan's grades
/* db.students.updateMany({name:"Milan"},{
    $push:{
        grades:91
    }
})
db.students.find() */

//adding multiple values to array
//it adds data in the form of the another array in grades array  
/* db.students.updateOne({name:"Milan"},{
    $push:{
        grades:[71,81]
    }
})
db.students.find() */


//by doing this we can add data in the grades array without creating 
//another array in grades
/* db.students.updateOne({name:"Milan"},{
    $push:{
        grades:{$each:[71,81]}
    }
})
db.students.find() */

//add 55,61,92,85,70 to Ayush's grades
//$push doesnot ignore the repeated values
/* db.students.updateOne({name:"Ayush"},{
    $push:{
        grades:{$each:[55,61,92,85,70]}
    }
})
db.students.find() */

//$addToSet=> it ignore the repeated values
/* db.students.updateOne({name:"Ayush"},{
    $addToSet:{
        grades:{$each:[71,92,86,88,55,61,52]}
    }
})
db.students.find()  */


//$position is used to give the position or index to newly adding  values
/* db.students.updateOne({name:"Milan"},{
    $push:{
        grades:{$each:[71,92,88,52],
        $position:0}
        //0,-1 etc
    }
})
db.students.find()  */


/* //below code cannot be run cause $position doesnot run in $addToSet
/* db.students.updateOne({name:"Bishal"},{
    $addToSet:{
        grades:{$each:[73,92,78,582],
        $position:0}
        //0,-1 etc
    }
})
db.students.find()  */ 


//removes items from array
//$pop
//value 1 removes item from last index
//value -1 removes item from first index

/* db.students.updateOne({name:"Milan"},{
    $pop:{
        grades:1
    }
})
db.students.find() */

/* db.students.updateOne({name:"Ayush"},{
    $pop:{
        grades:1
    }
})
db.students.find() */

//$pop Milan's last index
/* db.students.updateOne({name:"Milan"},{
    $pop:{
        grades:1
    }
})
db.students.find() */

//remove first item from Ayush

/* db.students.updateOne({name:"Ayush"},{
    $pop:{
        grades:-1
    }
})
db.students.find() */ 


//$pull => removes items from array but based upon "conditions"
/* db.students.updateOne({
    name:"Ayush",
},{
    $pull:{
        grades:{
              $gt:65
        }
      
    }
})
db.students.find() */

/* db.students.updateOne({
    name:"Milan",
},
{
    $pull:{
        grades:{$lte:85}
    }
}) */
// db.students.find()


//$pullAll
//=> it removes the exact values or as many as were given or asked to remove
/* db.students.updateOne({
    name:"Milan"
},{
    $pullAll:{
        grades:[90,71]
    }
})
db.students.find() */

db.scores.find()


