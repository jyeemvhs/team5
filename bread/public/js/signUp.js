var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;



//need a way to count answers
$(document).ready(function(){
  //console.log("at leas tthis should work dear god")
   //$("#readButton").click(readClicked);
   $('#submit').click(clicked);
   $("#loginDirect").click(loginRedirect);
   //generate preset profiles
   generatePerson({name:"fred", pass:"frescial", quizResult:"You got Fred!"});
   generatePerson({name:"freddie mercury", pass:"mAmA-miaa", quizResult:"You got Fred!"});
   generatePerson({name:"zuko", pass:"honor!", quizResult:"You got Toast!"});
   generatePerson({name:"luffy", pass:"imreal", quizResult:"You got Butter!"});
   generatePerson({name:"ash ketchum", pass:"pikachu", quizResult:"You got Jam!"});
   generatePerson({name:"azula", pass:"thebetterchild", quizResult:"You got Jam!"});
   generatePerson({name:"duolingo", pass:"dondeestalabiblioteca", quizResult:"You got Toast!"});
   generatePerson({name:"nick wilde", pass:"notascammer", quizResult:"You got Beignets!"});
   generatePerson({name:"doofensmirtz", pass:"evilinc", quizResult:"You got Scones!"});
   generatePerson({name:"onceler", pass:"ba-a-a-ad", quizResult:"You got Peanut Butter!"});
   generatePerson({name:"alex", pass:"blocke", quizResult:"You got Nutella!"});
   generatePerson({name:"steve", pass:"hmmmm", quizResult:"You got Nutella!"});
   generatePerson({name:"gojo", pass:"purple", quizResult:"You got Macaroons!"});
   generatePerson({name:"bully maguire", pass:"gonnacry?", quizResult:"You got Macaroons!"});
   generatePerson({name:"barbie", pass:"lesgoparty", quizResult:"You got Beignets!"});
   generatePerson({name:"judy hopps", pass:"zpd", quizResult:"You got Butter!"});
   generatePerson({name:"gwen stacy", pass:"falling4u", quizResult:"You got Scones!"});
   generatePerson({name:"vanessa", pass:"mydadiscoolerthanyours", quizResult:"You got Peanut Butter!"});
  });

//var result = document.getElementById("result");

function clicked() {
  //alert("Submitted!");
 // console.log("jdfkskdlfh")

    
    console.log('hello')

   //if(q1a1)
   if($('#q1a1').prop("checked")){
     result1();
   } 

   if($('#q1a2').prop("checked")){
     result2();
   } 

   if($('#q1a3').prop("checked")){
     result3();
   } 

   if($('#q1a4').prop("checked")){
     result4();
   } 


   //if(q2a1)
   if($('#q2a1').prop("checked")){
     result1();
   } 

   if($('#q2a2').prop("checked")){
     result2();
   } 

   if($('#q2a3').prop("checked")){
     result3();
   } 

   if($('#q2a4').prop("checked")){
     result4();
   } 


    //if(q3a1)
   if($('#q3a1').prop("checked")){
     result1();
   } 

   if($('#q3a2').prop("checked")){
     result2();
   } 

   if($('#q3a3').prop("checked")){
     result3();
   } 

   if($('#q3a4').prop("checked")){
     result4();
   } 


    //if(q4a1)
   if($('#q4a1').prop("checked")){
     result1();
   } 

   if($('#q4a2').prop("checked")){
     result2();
   } 

   if($('#q4a3').prop("checked")){
     result3();
   } 

   if($('#q4a4').prop("checked")){
     result4();
   } 


   //if(q5a1)
   if($('#q5a1').prop("checked")){
     result1();
   } 

   if($('#q5a2').prop("checked")){
     result2();
   } 

   if($('#q5a3').prop("checked")){
     result3();
   } 

   if($('#q5a4').prop("checked")){
     result4();
   } 

    console.log('uploading data');
      //ajax to upload
      $.ajax({
        url: "/uploadData",
        type: "POST",            
        data: {user:$("#username").val(), pass:$("#pass").val(), repass:$("#repass").val(), quizResult:$("#result").text(), npc:false},
        success: function(data){
           if (!data){
            alert("Username taken, nothing was put in one of the boxes, or password entries do not match. Try again");
          }else{
            alert(data);
          } 
  
      },     
        dataType: "json"
      });

    } 


    function generatePerson(data){
      $.ajax({
        url: "/uploadData",
        type: "POST",            
        data: {user: data.name, pass:data.pass, repass:data.pass, quizResult:data.quizResult, npc:true},
        success: function(data){
          if(!data){
            console.log(" failed, fix your code, or fred is already created! yay!");
          }else{
            console.log(" deployed")
          }
      },     
        dataType: "json"
      });
    }
    

  function result1() {
  result1Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result2() {
  result2Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result3() {
  result3Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result4() {
  result4Score++, questionCount++;
  if (questionCount >= 5) {
    updateResult();
  }
}
function updateResult() {
  if (result1Score >= 3) {
    $("#result").html("You got Butter!");
  } else if (result2Score >3) {
   $("#result").html("You got Jam!");
   console.log("jam")
  } else if (result3Score >3) {
    $("#result").html("You got Toast!");
  } else if (result4Score > 3) {
   $("#result").html("You got Scones!");
  } else if (result1Score >=2) {
    $("#result").html("You got Nutella!");
  } else if (result2Score >= 2) {
    $("#result").html("You got Beignets!");
  } else if (result3Score >= 2) {
    $("#result").html("You got Macaroons!");
  } else if (result4Score >= 2) {
    $("#result").html("You got Peanut Butter!");
  } else {
   $("#result").html("You got Fred!");
  }
  console.log(result2Score);
  return false;
}

function loginRedirect (){
  console.log("redirect")
  let tempUrl = $(location).prop('href');
  tempUrl = tempUrl.substring(0, tempUrl.lastIndexOf('/')+1);
  console.log(tempUrl);
  const url = new URL(tempUrl);
  $(location).prop('href', url);
  return false;
}


