//"use" is for creating database
use("friendData")

//BISON => Binary Object Notation

//db.friendInfo.insertOne({name:"Rohan",age:20,location:"Laamki"})
//db.friendInfo.find()
//above find is used to show data inserted in database
//CRUD

//C=> Create
//insertOne
/* db.friendInfo.insertOne({
    name:"Saugat",
    age:16,
    location:"Kathmandu"

}) */
//db.friendInfo.find()
//insertMany
/* db.friendInfo.insertMany([
    {
    name:"Saugat",
    age:16,
    location:"Kathmandu"
    },
    {
    name:"Ravi",
    age:25,
    location:"Kailali"
    }
    
]) */

//GET/READ/RETRIVE=>R
//
//db.friendInfo.find(name:"Saugat")

//D=>Delete/Remove
/* db.friendInfo.deleteOne({
    name:"Saugat"
}) */
//db.friendInfo.find()
/* db.friendInfo.deleteMany({
    location:"Kathmandu"
}) */
//db.friendInfo.find()
/* db.friendInfo.deleteMany({
    age:20
}) */
/* db.friendInfo.deleteMany({
    age:25
})
 */

//U=>UPDATE/EDIT
/* db.friendInfo.updateOne({name:"Rohan"},
{
    $set:{location:"Bhaktapur"}
}
) */

//db.friendInfo.find()

/* db.friendInfo.updateMany({name:"Rohan"},
{
    $set:{location:"Bhaktapur"}
}
)  */
db.friendInfo.find()