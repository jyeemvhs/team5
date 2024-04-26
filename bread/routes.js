let path = require("path");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');

let router = express.Router();

router.get("/",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/title.html"));
});

router.get("/chat",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/chat.html"));
});

router.get("/find",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/find.html"));
});

router.get("/signup",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/signUp.html"));
});

router.get("/profile",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/profile.html"));
});

router.get("/people",function(req,res) {
    res.sendFile(path.resolve(__dirname + "/public/views/people.html"));
});


// make accessors NOW ! ! ! ! ! ! !


// photo stuff salvage later

// router.post('/fileupload', function(req, res) {
    
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         var oldpath = files.image.path;
//         var newpath = __dirname + '/public/images/' + files.image.name;

//         console.log('Received image: ' + files.image.name);

//         mv(oldpath, newpath, function (err) {
//             if (err) throw err;

//             res.json({ name: files.image.name });
//         });
//     });
// });

// module.exports = router;


// chat vars
let messageID = 0;
let name;
let comment;
let history = [];

//get user stuff vars

let userBase = [];

//find out if the username+pass given is an actual account (implement this after signup)
  router.get("/findAccount", function(req,res){
    console.log("this is working")
    if(req.query.user == null || req.query.pass == null){
        console.log('fefefe')
        res.json(false);
    }    
    for(var i =0; i < userBase.length; i++){
        if(userBase[i].username == req.query.user && userBase[i].password == req.query.pass){
            console.log("found account")
            res.json(userBase[i]);
        }
    }
    res.json(false);
});


router.post("/comment",function(req,res) {
    if(!req.body.comment){
        res.json(null);
        return;
    }
    messageID++;
    name = req.body.name;
    comment = req.body.comment;
    history[messageID] =  name + ": " + comment;
    console.log("comment " + name + " " + comment + " ID " + messageID);
    res.json({result: name + ": " + comment, messageID: messageID});
  });
  
  router.get("/check", function(req,res){
      if(req.query.currentID != messageID){
          res.json({result: history[messageID], index:messageID});
      }else{
          res.json(null);
      }
  });

  

  router.post("/uploadData", function(req,res){
    //check if username already exists (loop thru database)
    let same = false;
    if(req.body.user == null || req.body.pass == null || req.body.pass != req.body.repass){
        console.log('fefefe')
        res.json(null);
    }    
    for(var i =0; i < userBase.length; i++){
        if(userBase[i].username == req.body.user){
            console.log("userbase error")
            same = true;
        }
    }
    if(same){
        res.json(null);
    }else{ // same isfalse, data uploads
        let temp = {npc:req.body.npc,username:req.body.user, password:req.body.pass, quizResult:req.body.quizResult, failedPeople:[], potentialPeople:[], profile:{bio:"Use 500 characters to tell something about yourself!!", likes:[],dislikes:[]}}
        userBase.push(temp);
        console.log(userBase.length);
       
        res.json("upload success! please go to the main page to log in");
        
       
    }
    res.json("");
   
  });

//   router.get("/findProfile", function(req,res){
//     console.log("in Profile")
//     for(var i =0; i < userBase.length; i++){
//         if(userBase[i].username == req.query.user){
//             console.log("found account")
//             res.json(userBase[i]);
//         }

//         //assign fred
//         if(userBase[i].username == "fred"){
//             console.log("found fred (change the bio n stuf)")
//         }
//     }
//     res.json(false);
// });

router.get("/changeProfile", function(req,res){ //pass in bio, pictures, likesdislikes etc AND the user to find using the userbase
    for(var i =0; i < userBase.length; i++){
        if(userBase[i].username == req.query.user){
         //   console.log("found account")
           userBase[i].profile.bio = req.query.bio;
           //add likes dislikes when that is working

           //assuming it's changed

           res.json(userBase[i]);
        }

        // //assign fred
        // if(userbase[i].username == "fred"){
        //     console.log("found fred (change the bio n stuf)")
        // }
    }
    res.json(null);
});

router.get("/matching", function(req,res){ //find potential matches
    let findingPerson = null;
    let sameResult = [];
    /*
    what needs to be checked?

    - check if the user got and the user matching is the same 
    - check if the userGot is in their rejection list
    
    - make seperate array of the same quiz result, check from there?

    */
   //save person's stuff'
   let check1 = true;
    for(var i =0; i < userBase.length; i++){
        if(userBase[i].username == req.query.user){
            console.log(userBase[i].username + " found initial user");
            findingPerson = userBase[i];
        }
    }
    if(!findingPerson){
        res.json(null);
    }

    //////////////////////////////////////////////////////////////////////////////
    //console.log(findingPerson.quizResult);
    //make array of same quiz results
    for(var i = 0; i < userBase.length; i ++){
       // console.log(userBase[i].quizResult.trim() + " " + findingPerson.quizResult.trim());
       
        if(userBase[i].quizResult.trim() == findingPerson.quizResult.trim() && findingPerson.username != userBase[i].username){
            console.log(userBase[i].username + "quiz result");

            sameResult.push(userBase[i]);
        }
        
    }
  //&& findingPerson.username != userBase[i].username
    let mark2 = [];
    //within the people w the same quiz result, check if they've met and disliked eachother before (or liked eachother before .... do that later)
    
    //if(findingPerson.failedPeople.length > 0){

    // for(var j=0; j < findingPerson.failedPeople.length; j ++){
    //     for(var i=0; i < sameResult.length; i++){
    //             for(var k = 0; k < sameResult[i].failedPeople.length; k ++){
    //         console.log(sameResult[i] + " " + findingPerson.failedPeople[j]);
    //         if(sameResult[i].failedPeople[k] != findingPerson.failedPeople[j]){
    //             //console.log(sameResult[i]);
    //             mark2.push(sameResult[i]);
    //         }   

    //     }
    // }
    // }

    for(var i =0; i < sameResult.length; i ++){
        if(sameResult[i].failedPeople.length > 0 ){
                for(var j = 0; j < sameResult[i].failedPeople.length; j ++){
                    if(sameResult[i].failedPeople[j] != findingPerson.username){
                        //console.log(sameResult[i]);
                        mark2.push(sameResult[i]);
                    }
                }
            }else{
                console.log(sameResult[i])
                mark2.push(sameResult[i]);
            }
    }

   // }else{
        
        
    //}

    //   res.json(mark2[0]);
    //check if they've already said yes to eachother
//if(findingPerson.potentialPeople.length > 0){
//     for(var i=0; i <mark2.length; i++){
//         let test = true; 
//         for(var j=0; j < findingPerson.potentialPeople.length; j ++){
//             for(var k = 0; k < mark2[i].potentialPeople.length; k ++){
        
        
//                 if(findingPerson.username == mark2[i].username){
//                     test = false;
//                 }   
//             }

//             if(test){
//                 console.log(mark2[i]);
//                 res.json(mark2[i]);
//                 return;
//             }
        
//     }
// }


        for(var i=0; i <mark2.length; i ++){
            let test = true; 
                if(mark2[i].potentialPeople.length > 0){
            for(var j=0; j < mark2[i].potentialPeople.length; j++){
                if(findingPerson.username == mark2[i].potentialPeople[j]){
                    test = false;
                }  
            }

            if(test){
                console.log(mark2[i]);
                res.json(mark2[i]);
                return;
            }
        }else{
        res.json(mark2[i]);
        //return;
        }
        }
        console.log('awawa')
//}else{
    //res.json(mark2[Math.floor(Math.random() * mark2.length)]);
//}

    // //desperation number

    let randomNum = Math.floor(Math.random() * userBase.length);

    while(userBase[randomNum].username == req.query.user){
        console.log(userBase[randomNum].username);
        randomNum = Math.floor(Math.random() * userBase.length);
    }   
    console.log("hello")
    console.log("random")
    res.json(userBase[randomNum]);


});

router.put("/rejection", function(req,res){
    let bothFound = 0;
    let currentIndex;
    for(var i = 0; i < userBase.length; i++){
        // if(userBase[i].username == req.body.user){
        //     console.log("found account")
        //    userBase[i].failedPeople.push(req.body.rejectedUser);
        //    //adds the person they nayed to the failed people, try not too match them with them in the future
        //     bothFound ++;
          if(userBase[i].username == req.body.rejectedUser){
            userBase[i].failedPeople.push(req.body.user);
            bothFound+=2;
 
        }
        

        // //assign fred
        // if(userbase[i].username == "fred"){
        //     console.log("found fred (change the bio n stuf)")
        // }
        currentIndex++;
       
    }
    if(bothFound == 2){
        res.json(userBase[1]);
    }else{
    res.json(null);
    }

});


router.put("/acception", function(req,res){
    let bothFound = 0;
    let currentIndex = 0;
    for(var i =0; i < userBase.length; i++){
        if(userBase[i].username == req.body.acceptedUser){
          //  console.log("found account")
           userBase[i].potentialPeople.push(req.body.user);
           bothFound+=2;
           console.log(userBase[i].npc);
           //adds them to the potential list of people they said yes to
           if(userBase[i].npc == true){
            for(var j = 0; j < userBase.length; j ++){
                if(userBase[j].username == req.body.user){
                    userBase[j].potentialPeople.push(req.body.acceptedUser);
                    console.log("hiiiii")
                }
            }
        }
           
        }
        // if(userBase[i].username == req.body.user){
        //     //console.log("found account")
        //    userBase[i].potentialPeople.push(req.body.acceptedUser);
        //    bothFound++;
        //    //adds them to the potential list of people they said yes to

           
        // }
        currentIndex++;

        // //assign fred
        // if(userbase[i].username == "fred"){
        //     console.log("found fred (change the bio n stuf)")
        // }
    }
    console.log(userBase[1])
    if(bothFound == 2){
        res.json(userBase[1]);
    }else{
    res.json(null);
    }
});

router.get('/findMatches', function(req, res){
    var yesSayers = [];
    for(let i =0; i < userBase.length; i ++){
        for(let j =0; j < userBase[i].potentialPeople.length; j ++){
            console.log(userBase[i].username + " " + userBase[i].potentialPeople[j]);
            if(req.query.user == userBase[i].potentialPeople[j] && userBase[i].username != req.query.user){
                yesSayers.push(userBase[i].username);
                console.log(userBase[i].username);
            }
        }
    }
    console.log(yesSayers);
    res.json(yesSayers);
});




/// 
  module.exports = router; 