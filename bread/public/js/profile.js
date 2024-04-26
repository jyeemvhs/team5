$(document).ready(function(){
    let url = $(location).prop('href');
    let tempUrl = url.substring( url.lastIndexOf('?')+1);
    console.log(tempUrl);
    console.log(tempUrl.lastIndexOf("&"))
    let usernameInfo = "";
    if(tempUrl.lastIndexOf("&") == -1){
     usernameInfo = tempUrl.substring(5);
    }else{
     usernameInfo = tempUrl.substring(5, tempUrl.lastIndexOf("&"));
    }
    console.log(usernameInfo)
    if (usernameInfo == ""){
        alert("User is not logged in. Please log in to start matching !")
    }else{ 

      $.ajax({
        url: '/changeProfile',
        type: "GET",            
        data: {user:usernameInfo, bio:$("#Bio").val()},
        success: function(data){
         //match up (please do the code)
         console.log(data);
         $("#quizResult").html("My quiz result was:" + data.quizResult);
         $("#Bio").val(data.profile.bio);
         //put more stuff here, learn how to append js objs with more stuff idk
      },     
        dataType: "json"
      });
    }
   
  // http://localhost:3000/profile?user=123
    // fred




  $("#findDirect").click({user:usernameInfo},findRedirect);
  $("#update").click({user:usernameInfo},updateProfile);
  });


  function findRedirect (event){
    //console.log(event.data.user)
    let tempUrl = $(location).prop('href');
    tempUrl = tempUrl.substring(0, tempUrl.lastIndexOf('/')+1);
  //console.log(tempUrl);
    const url = new URL(tempUrl+ "find");
    url.search = new URLSearchParams({user: event.data.user});
    $(location).prop('href', url);
    return false;
  }

  function updateProfile(event){
    //add this in later: updates the bio, likes/dislikes, etc.
  }

  