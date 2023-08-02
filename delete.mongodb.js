use("person")

//deleteOne
//deleteMany
// db.persons.deleteOne({"name.first":"victor"})
// db.persons.find({"name.first":"victor"}).count()

/* db.persons.deleteMany({"name.first":"victor"})
db.persons.find({"name.first":"victor"}) */


//delete user whose firs name is " maeva" and last name is " wilson"
// db.persons.deleteOne({"name.first":"maeva","name.last":"wilson"})
// db.persons.find({"name.first":"maeva","name.last":"wilson"})