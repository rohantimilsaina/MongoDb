use("Friends")

/* db.friends.insertMany([
    {
        name:"Rohan",
        hobbies:["Singing","Books"],
        sportData:[
            {
                title:"Football",
                frequency:3
            },
            {
                title:"Cricket",
                frequency:2

            }
        ]
    },
    {
        name:"Dipesh",
        hobbies:["Books","Guitar","Hiking"],
        sportData:[
            {
                title:"Football",
                frequency:5,
            },
            {
                title:"Tennis",
                frequency:1
            },
            {
                title:"Volleyball",
                frequency:6
            }
        ]

    },
    {
        name:"Aakash",
        hobbies:["Hikings","Foods","Singing"],
        sportData:[
            {
                title:"E-gaming",
                frequency:3,
            },
            {
                title:"Football",
                frequency:2
            },
            {
                title:"Basketball",
                frequency:1
            }
        ]

    }
    
]) */

//db.friends.find({hobbies:"Singing"})

//find friends whoose hobbies are Books or foods

//db.friends.find({$or:[{hobbies:"Books"},{hobbies:"Foods"}]})
//db.friends.find({hobbies:{$in:["Books","Foods"]}})

//Using $all for ignoring serial sequence of an array 
//By using $all we can extracts exact element
//$all is equivalent of $and
/* db.friends.find({
    hobbies:{$all:["Foods","Hikings"]}
}) */
//$and
/* db.friends.find({
    $and:[{hobbies:"Foods"},{hobbies:"Hikings"}]
}) */
// db.friends.find({hobbies:"Books"})
/* db.friends.insertOne({
    name:"Deepak",
    hobbies:["Books","Guitar","Hiking"],
    sportData:[
        {
            title:"Football",
            frequency:1,
        },
        {
            title:"Ludo",
            frequency:1
        },
        {
            title:"Rugby",
            frequency:6
        }
    ]

}) */

//$size
//it is used for finding the array where hobbies have 3 values
/* db.friends.find({
    hobbies:{$size:3}
}
) */


//find friend whoose title is Football and frequency is 2 in sportData
//yesle chai exactly value huna parxa friends ko element vitra like
//title ma j lekhxaun tyo element bhitra hunai parxa ra khali title matra lekhesi
//ni friends ko value haru didaina
/* db.friends.find({
    sportData:{
        title:"Football",
        frequency:2
    }
}) */

//yesle chai title maa "Football" bhako jati sabai friends ko data dekhaunxa

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

//find friends whoose title is cricket and frequency is less than 3
/* db.friends.find({
    sportData:{
        $elemMatch:{
            title:"Cricket",
            frequency:{$lt:3}
        }
    }
}) */