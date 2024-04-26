

$(document).ready(function(){
  let url = $(location).prop('href');
  let tempUrl = url.substring( url.lastIndexOf('?')+1);
  console.log(tempUrl);
  console.log(tempUrl.lastIndexOf("&"))
  let usernameInfo = "";
  let findingInfo = "rng"
  if(tempUrl.lastIndexOf("&") == -1){
   usernameInfo = tempUrl.substring(5);
  }else{ //else if rng ... else = finding a specific person
   usernameInfo = tempUrl.substring(5, tempUrl.lastIndexOf("&"));
   findingInfo = tempUrl.substring( tempUrl.lastIndexOf("&"), 20);
  }
  console.log(findingInfo);
  console.log(usernameInfo)
    let userName = null;
    
    if (usernameInfo == ""){
        alert("User is not logged in. Please log in to start matching !")
    }else{ 
              //fred 
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"fred", bio:"OH MY GOD IT'S WEEZER"},
                success: function(data){
                 //match up (please do the code)
           //      console.log(data);
                
                 //put more stuff here, learn how to append js objs with more stuff idk
              },     
                dataType: "json"
              });

              //freddie mercury 
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"freddie mercury", bio:"Seeking someone who can handle my fabulousness and join me on a journey wilder than Bohemian Rhapsody!"},
                success: function(data){
                 //match up (please do the code)
            //     console.log(data);
              },     
                dataType: "json"
              });

              //zuko 
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"zuko", bio:"Hello, Zuko here. If you don't chose me, that's rough for you, buddy."},
                success: function(data){
                 //match up (please do the code)
             //    console.log(data);
              },     
                dataType: "json"
              });

              //luffy
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"luffy", bio:"If you don't take risks, you can't create a future! Join my crew!"},
                success: function(data){
                 //match up (please do the code)
              //   console.log(data);
              },     
                dataType: "json"
              });

              //ash ketchum
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"ash ketchum", bio:"not just good at catching pokemon 😏"},
                success: function(data){
                 //match up (please do the code)
            //     console.log(data);
              },     
                dataType: "json"
              });

              //azula
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"azula", bio:"Together you and I could be the strongest couple in the world! And I'm not lying 😏"},
                success: function(data){
                 //match up (please do the code)
            //     console.log(data);
              },     
                dataType: "json"
              });

              //duolingo
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"duolingo", bio:""},
                success: function(data){
                 //match up (please do the code)
            //     console.log(data);
              },     
                dataType: "json"
              });

              //nick wilde
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"nick wilde", bio:"I'm no mathematician, but I'm pretty good with numbers. You should give me yours and watch what I can do with it."},
                success: function(data){
                 //match up (please do the code)
              //   console.log(data);
              },     
                dataType: "json"
              });

              //doofensmirtz
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"doofensmirtz", bio:"Your timing is impeccable. And by impeccable, I mean completely peck-able :) <3"},
                success: function(data){
                 //match up (please do the code)
               //  console.log(data);
              },     
                dataType: "json"
              });

              //onceler
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"onceler", bio:"I must be a truffula tree because I'm falling for you. <3"},
                success: function(data){
                 //match up (please do the code)
              //   console.log(data);
              },     
                dataType: "json"
              });

              //alex
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"alex", bio:"Are you from the Nether? Cause you are out of this world!"},
                success: function(data){
                 //match up (please do the code)
                // console.log(data);
              },     
                dataType: "json"
              });

              //steve
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"steve", bio:"Redstone is red, Lazuli is blue. And you're as hot as the lava I fell into."},
                success: function(data){
                 //match up (please do the code)
               //  console.log(data);
              },     
                dataType: "json"
              });

              //gojo
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"gojo", bio:"Something's wrong with my six eyes because I can't take them off you 😳"},
                success: function(data){
                 //match up (please do the code)
              //   console.log(data);
              },     
                dataType: "json"
              });

              //bully maguire
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"bully maguire", bio:""},
                success: function(data){
                 //match up (please do the code)
                // console.log(data);
              },     
                dataType: "json"
              });

              //barbie
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"barbie", bio:"They call me plastic, but you Ken call me tonight ;) <3"},
                success: function(data){
                 //match up (please do the code)
                // console.log(data);
              },     
                dataType: "json"
              });

              //judy hopps
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"judy hopps", bio:"Are you a parking ticket? Because you've got FINE written all over you."},
                success: function(data){
                 //match up (please do the code)
                // console.log(data);
              },     
                dataType: "json"
              });

              //gwen stacy
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"gwen stacy", bio:"You might fall from a building, or you might fall from a tree. But the perfect way for you to fall is to fall in love with me <3"},
                success: function(data){
                 //match up (please do the code)
                // console.log(data);
              },     
                dataType: "json"
              });

              //vanessa
              $.ajax({
                url: '/changeProfile',
                type: "GET",            
                data: {user:"vanessa", bio:""},
                success: function(data){
                 //match up (please do the code)
               //  console.log(data);
              },     
                dataType: "json"
              });
          
        $.ajax({
            url: '/matching',
            type: "GET",            
            data: {user:usernameInfo},
            async:false,
            success: function(data){
             //match up (please do the code)
            // console.log(data);
            if(!data){
              alert("User is invalid. Please login.")
            }else{
             $("#username").text(data.username);
             $("#quizResult").text("My quiz result was: "+ data.quizResult);
             //console.log(data.profile.bio);
             $("#bio").text(data.profile.bio); 
            userName = data.username;
            }
          },     
            dataType: "json"
          });


  
    }

   
  // http://localhost:3000/find?user=123
    $("#no").click({user:usernameInfo, rejectedUser:userName},reject);
    $("#yes").click({user:usernameInfo, acceptedUser:userName},accept);
    $("#profileDirect").click({user:usernameInfo},profileRedirect);
    $("#peopleDirect").click({user:usernameInfo},peopleRedirect);
  });



  

  function profileRedirect (event){
    console.log(event.data.user)
    let tempUrl = $(location).prop('href');
    tempUrl = tempUrl.substring(0, tempUrl.lastIndexOf('/')+1);
  //console.log(tempUrl);
    const url = new URL(tempUrl+ "profile");
    url.search = new URLSearchParams({user: event.data.user});
    $(location).prop('href', url);
    return false;
  }

  function peopleRedirect (event){
    console.log(event.data.user)
    let tempUrl = $(location).prop('href');
    tempUrl = tempUrl.substring(0, tempUrl.lastIndexOf('/')+1);
  //console.log(tempUrl);
    const url = new URL(tempUrl+ "people");
    url.search = new URLSearchParams({user: event.data.user});
    $(location).prop('href', url);
    return false;
  }

  function reject(event){
    //ajax to add the person's user to their RejectedPeople
   // console.log(event.data.rejectedUser);
    $.ajax({
      url: "/rejection",
      type: "PUT",
      data: {user: event.data.user , rejectedUser: event.data.rejectedUser},
      success: success,
      dataType: "json"
    });

    return false;
  }

  function accept(event){
    //ajax to add the person's user to their RejectedPeople
  //  console.log(event.data.acceptedUser);
    $.ajax({
      url: "/acception",
      type: "PUT",
      data: {user: event.data.user , acceptedUser: event.data.acceptedUser},
      success: success,
      dataType: "json"
    });
    

   
    return false;
  }

  function success(data){
    console.log(data);
    if(!data){
      alert("You are not logged in. Please log in to start matching!")
    }else{
      location.reload(true);
    }
    return false;
  }
