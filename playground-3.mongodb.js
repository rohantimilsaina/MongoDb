use("netflix")


//$regex 
db.shows.find(
    {
        summary:{
            $regex:"under ",
            $options:"i"
        } 
    }
)