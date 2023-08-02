use("netflix");

// ? Create
// ?insertOne
// db.movies.insertOne({
//     name:"Oppenheimer",
//     director:"Nolan",
//     runtime:180,
//     status:"Running",
//     rating:8.3,
//     genre:["Thriller","Action","War","Sci-Fi"]
// })

// ? insertMany
// db.movies.insertMany([
//     {
//             name:"Dune",
//             director:"Robert",
//             runtime:160,
//             status:"Ended",   
//             rating:7.8,
//             genre:["Adventure","Action","War","Sci-Fi"]
//         }  ,
//         {
//             name:"Shawshank Redemption",
//             director:"Elon",
//             runtime:120,
//             status:"Ended",
//             rating:9.1,
//             genre:["Prison","Drama","Crime Fiction","Mystery"]
//         }
// ])

// db.movies.insertOne({
//     name:"Shutter Island",
//                 director:"Nolan",
//                 runtime:160,
//                 status:"Ended",
//                 rating:7.8,
//                 genre:["Adventure","Action","War","Sci-Fi"]
// })
// db.movies.deleteOne({name:"Dune"})

// ?Read
// db.movies.find({director:"Nolan"})
// db.movies.find({runtime:160})
// db.movies.find({rating:11})

// db.movies.findOne({_id:ObjectId("64bf9be585029bdc926d32b3")})

//? Comparison Operator

// rating>8
//? $gt, $lt, $gte, $lte
// db.movies.find({rating:{$gt:8}})

// rating<8
// db.movies.find({rating:{$lt:8}})

// db.movies.find({rating:{$gt:7.8}})

// ?$eq
// db.movies.find({runtime:{$eq:120}})
// equivalent
// db.movies.find({runtime:120})

// ?$ne
// db.movies.find({status:{$ne:"Running"}})

// ?$in
// ?find movies whose rating is either 9.1 or 7.8 or 8.3
// db.movies.find({$or:[{rating:9.1},{rating:7.8},{rating:8.3}]})
// equivalent
//db.movies.find({rating:{$in:[9.1,7.8,8.3]}})

// ?find movies whose director is either Nolan or Elon
// db.movies.find({$or:[{director:"Nolan"},{director:"Elon"}]})
// equivalent
// db.movies.find({
//     director:{$in:["Elon","Nolan"]}
// })

// ?$nin
// db.movies.find({director:{$nin:["Nolan","Elon"]}})

// *==================================================================================
// ?Logical Operator => $and, $or, $not, $nor
// ?$or

// runtime:120 or runtime:160
// db.movies.find({$or:[{runtime:120},{runtime:160}]})

// db.movies.find({$or:[{director:"Elon"},{director:"Robert"}]})

// db.movies.find({$or:[{genre:"Action"},{genre:"Adventure"}]})

// ?$nor
// db.movies.find({$nor:[{genre:"Action"},{genre:"Adventure"}]})

// ?$and

// db.movies.find({$and:[{director:"Nolan"},{runtime:160}]})

// ?find movies whose status is "Running" and genre is "Sci-Fi"
// db.movies.find({$and:[{status:"Running"},{genre:"Sci-Fi"}]})
// db.movies.find({status:"Running",genre:"Sci-Fi"})

// ?find movies whose rating is less than 8
//?  and status is "Ended"
// ?  and genre is "War"
// db.movies.find({$and:[{rating:{$lt:8}},{status:"Ended"},{genre:"War"}]})

// ?$not

// db.movies.find({director:{$not:{$eq:"Nolan"}}})
// equivalent
// db.movies.find({director:{$ne:"Nolan"}})

//* ========================================================================

// db.movies.find({$and:[{director:{$ne:"Nolan"}},{rating:{$lt:8}}]})

// db.movies.find({genre:"War"})

// db.movies.find()

// db.movies.find({status:{$ne:"Running"}})