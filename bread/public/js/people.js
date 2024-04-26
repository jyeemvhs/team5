//&1Bread&Butter1&
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

      //ajax request to people who said yes to them

      $.ajax({
        url: "/findMatches",
        type: "GET",            
        data: {user:usernameInfo},
        async:false,
        success: function(data){
           if (!data){
            alert("Username taken, nothing was put in one of the boxes, or password entries do not match. Try again");
          }else{
            console.log(data)
            // list obj
            if(data.length == 0){
              //haha funni pcture (FIX THIS)
              $("#silly").attr("src", "superSecret.jpeg");
            }else{
              console.log(data)
              
                for(let i =0; i < data.length; i ++){
                  let url2 = $(location).prop('href');
                  let tempUrl2 = url2.substring(0, url2.lastIndexOf('/')+1);
                  console.log(tempUrl2);
                const url = new URL(tempUrl2 + "find");
                url.search = new URLSearchParams({user: usernameInfo, findingStatus: data[i]});
                let liString = "<li><a href="+ url +">" + data[i] + "</a></li>"; 
                $("#people").append(liString)
              }
            }

          } 
  
      },     
        dataType: "json"
      });



    }
   
  // http://localhost:3000/profile?user=123


  $("#findDirect").click({user:usernameInfo},findRedirect);
 
  });


  function findRedirect (event){
    let tempUrl = $(location).prop('href')
    //console.log(event.data.user)
    tempUrl = tempUrl.substring(0, tempUrl.lastIndexOf('/')+1);
  //console.log(tempUrl);
    const url = new URL(tempUrl+ "find");
    url.search = new URLSearchParams({user: event.data.user, findingStatus:"rng"});
    $(location).prop('href', url);
    return false;
  }

  