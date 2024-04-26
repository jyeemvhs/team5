


$(document).ready(function(){
    console.log('Ready');
   
    
    $('#submit').click(clicked);
      // console.log($("#username").val());
      //ajax check if they're in database
    $("#signUpRedirect").click(changeWindow);
  
  
  });

  function clicked () {

    $.ajax({
      url: '/findAccount',
      type: "GET",            
      data: {user:$("#username").val(), pass:$("#pass").val()},
      success: function(data){
        if (!data){
          alert("Wrong username or password. /signup to create a new account");
        }else{ //data true
          openWebsite(data);
        }
        return false;
    },     
      dataType: "json"
    });
    
    return false;
      
   
  }

  function openWebsite (data){
    let tempUrl = $(location).prop('href');
    tempUrl = tempUrl.substring(0, tempUrl.lastIndexOf('/')+1);
  //console.log(tempUrl);
    const url = new URL(tempUrl+ "find");
    url.search = new URLSearchParams({user: data.username, findingStatus: "rng"});
    $(location).prop('href', url);
    return false;

  }

  function changeWindow(){
    const url = new URL($(location).prop('href') + "signup");
    $(location).prop('href', url);
    return false;

  }


  
//photo upload ? ?

//   function uploadSuccess(data) {
//     console.log(typeof data);
//     console.log(data.name);
//     let index = data.name.indexOf(".");
//     if (index >= 0)
//     {
//       let ext = data.name.substring(index+1);
//       console.log(ext);
//       if (ext == "txt")
//       {
//         $('#text').load("images/" + data.name);
//         display.src = "";
//       }
//       else if (ext == "jpg" || ext == "png")
//       {
//         $('#text').html("Hello");
//         display.src = "images/" + data.name;
//       }
//     }
   
//   }
    function success(data) { 
       
          alert("bad request");
       
      }