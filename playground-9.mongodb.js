use("netflix")

//project
//sort
//skip
//limit

//db.shows.find({name:"Under the Dome"},{name:1,genres:1,status:1,_id:0})

//db.shows.find({},{name:1,genres:1,status:1})


//limit=> yesle chai kati ota samma dekhaune output ma data haru
//db.shows.find({},{name:1}).limit(10)

//skip() is used for skipping number of data and starting after
//skipped dataset
//db.shows.find({},{name:1,genres:1,runtime:1}).skip(10).limit(10)

//using sort() for making data ascending and decending order
/* db.shows.find({
    "rating.average":{$gt:7}
},{name:1,rating:1}).sort({
    "rating.average":1
}) */

//find shows whose runtime is less than 100 and sort the result 
//name in descending order
//project name, runtime and status
/* db.shows.find({runtime:{$lt:100}},{name:1,runtime:1,status:1}).sort({
    name:-1
}) */