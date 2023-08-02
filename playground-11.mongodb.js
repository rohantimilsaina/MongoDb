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

/* db.persons.updateOne({"name.first":"victor",state:"wicklow"},{
    $set:{
        email:"carl@gmail.com",
        phone:"9823232323"
    }
}) */

// db.persons.findOne({"name.first":"carl",'location.state':"wicklow"})
