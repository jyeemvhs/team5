$(document).ready(function(){

  //doofensmirtz
  
      $("h2").text("Chat with Doofensmirtz!");
      $("#chat").text("I'm looking for someone who's got a mind just as evil as mine (and also won't give me any more tragic backstories). Who are you?");
      $("#resp1").text("A platypus");
      $("#resp2").text("Just another member of L.O.V.E.M.U.F.F.I.N. :)");
      // Function to add a new container
      $("#opt1").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
  
         if($("#resp1").text() == "A platypus"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var doofResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            doofResp.find("#chat").text("A platypus?")
  
            //update time
            userResp.find(".time-left").text(time);
            doofResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            doofResp.appendTo("#chatContainer")
            //REUSE options
            $("#resp1").text("*puts on fedora*");
            $("#resp2").text("Krrkrkrkrkekeekjfnfnd");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "*puts on fedora*"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var doofResp = $("#chatContainer .container:last").clone();
            var doofResp2 = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            doofResp.find("#chat").text("Perry the platypus?!")
            doofResp2.find("#chat").text("Curse you, Perry the platypus!")
  
            //update time
            userResp.find(".time-left").text(time);
            doofResp.find(".time-left").text(time);
            doofResp2.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            doofResp.appendTo("#chatContainer")
            doofResp2.appendTo("#chatContainer")
            //remove options
            $(".response").remove();
          }
      });
  
      $("#opt2").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        
        if($("#resp2").text() == "Just another member of L.O.V.E.M.U.F.F.I.N. :)"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var doofResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            doofResp.find("#chat").text("I'd love to collab with you sometime on my new inator. ;)")
  
            //update time
            userResp.find(".time-left").text(time);
            doofResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            doofResp.appendTo("#chatContainer")
            //remove options
            $(".response").remove();
          }
  
          else if($("#resp2").text() == "Krrkrkrkrkekeekjfnfnd"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var doofResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            doofResp.find("#chat").text("Carry on, sorry to bother. :)")
  
            //update time
            userResp.find(".time-left").text(time);
            doofResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            doofResp.appendTo("#chatContainer")
            //remove options
            $(".response").remove();
          }
      });
      
  
  //if bully?????
  /*
      $("h2").text("Chat with Bully Maguire!");
      $("#chat").text("Sorry I'm late, its a jungle out there.");
      $("#resp1").text("It's okay. Tell me about yourself. :)");
      $("#resp2").text("Don't be late again.");
      // Function to add a new container
      $("#opt1").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
  
        if($("#resp1").text() == "It's okay. Tell me about yourself. :)"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("Who am I? You sure you want to know?")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Yeah, what do you like to do?");
            $("#resp2").text("Nevermind.");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "Yeah, what do you like to do?"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("Work out, plenty of rest. You know, eat your green vegetables")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("That's cool, Tobey!");
            $("#resp2").text("Nevermind.");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "That's cool, Tobey!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("You got my name wrong!")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Sorry");
            $("#resp2").text("Stop being so mean!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "Sorry"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("I never thought you'd really do that...")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("I said I'm sorry!");
            $("#resp2").text("It's not that deep.");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "I said I'm sorry!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("You want forgiveness? Get religion!")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Y'know what? I'm done.");
            $("#resp2").text("Go away!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "Y'know what? I'm done."){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("See ya chump.")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $(".response").remove();
          }
  
          else if($("#resp1").text() == "What do you want from me?"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("Staff job, double the money.")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Y'know what? I'm done.");
            $("#resp2").text("That's too much...");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "You didn't give me a chance to explain!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("What about my Uncle? Did you give him a chance?! Did you?!")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("I didn't choose to let him die!");
            $("#resp2").text("I didn't kill him, what are you talking about?!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "I didn't choose to let him die!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("We always have a choice. You had a choice when you killed my Uncle!")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("That's not fair!");
            $("#resp2").text("It's not that deep.");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp1").text() == "That's not fair!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("Gonna cry?")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Y'know what? I'm done.");
            $("#resp2").text("Go away!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
      });
  
      $("#opt2").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        
        if($("#resp2").text() == "Don't be late again."){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("I'll figure it out. Stop lecturing me, please!")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Sorry");
            $("#resp2").text("Nevermind.");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp2").text() == "Nevermind."){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("You should've thought of that earlier.")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("What do you want from me?");
            $("#resp2").text("Stop being so mean!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp2").text() == "Stop being so mean!" || $("#resp2").text() == "That's too much..."){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("I missed the part where that's my problem.")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("You didn't give me a chance to explain!");
            $("#resp2").text("It's not that deep.");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp2").text() == "It's not that deep."){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("Now dig on this...You're trash.")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Y'know what? I'm done.");
            $("#resp2").text("Go away!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp2").text() == "I didn't kill him, what are you talking about?!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp2").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("Stings, doesn't it?")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $("#resp1").text("Y'know what? I'm done.");
            $("#resp2").text("Go away!");
  
            $("#resp1").parent().appendTo("#chatContainer");
            $("#resp2").parent().appendTo("#chatContainer");
          }
  
          else if($("#resp2").text() == "Go away!"){
            // clone last chats
            var userResp = $("#chatContainer .container:last").clone();
            var bullyResp = $("#chatContainer .container:last").clone();
            //update color
            userResp.addClass('darkContainer').removeClass('container');
            //update message
            var textBack = $("#resp1").text()
            userResp.find("#chat").text(textBack)
            bullyResp.find("#chat").text("See ya chump.")
  
            //update time
            userResp.find(".time-left").text(time);
            bullyResp.find(".time-left").text(time);
  
            //hello chat
            userResp.appendTo("#chatContainer")
            bullyResp.appendTo("#chatContainer")
            //remove options
            //REUSE options
            $(".response").remove();
          }
      });
  */    
  
  //if onceler?????
  /*
      $("h2").text("Chat with Onceler!");
      $("#chat").text("Hey, you strike me as someone who loves a bit of mischief ;) So how about it? I'll be your Thneed - everything you'll ever need! I mean, how bad can I possibly be? 😏");
      $("#resp1").text("Count me in, I'll be your partner in completelydestroyingtheenvironmentjustformonetarygain :)");
      $("#resp2").text("Um, I actually prefer the Lorax 😳");
      // Function to add a new container
      $("#opt1").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        // clone last chats
        var userResp = $("#chatContainer .container:last").clone();
        var oncelerResp = $("#chatContainer .container:last").clone();
        //update color
        userResp.addClass('darkContainer').removeClass('container');
        //update message
        var textBack = $("#resp1").text()
        userResp.find("#chat").text(textBack)
        oncelerResp.find("#chat").text("Seeing that is almost as good as seeing the numbers in my bank account ;)")
  
        //update time
        userResp.find(".time-left").text(time);
        oncelerResp.find(".time-left").text(time);
  
        //hello chat
        userResp.appendTo("#chatContainer")
        oncelerResp.appendTo("#chatContainer")
        //remove options
        $(".response").remove();
      });
  
      $("#opt2").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        // clone last chats
        var userResp = $("#chatContainer .container:last").clone();
        var oncelerResp = $("#chatContainer .container:last").clone();
        //update color
        userResp.addClass('darkContainer').removeClass('container');
        //update message
        var textBack = $("#resp2").text()
        userResp.find("#chat").text(textBack)
        oncelerResp.find("#chat").text("Disappointing. I may not speak for the trees, but I can still make things worth your time if you ever change your mind ;)")
  
        //update time
        userResp.find(".time-left").text(time);
        oncelerResp.find(".time-left").text(time);
  
        //hello chat
        userResp.appendTo("#chatContainer")
        oncelerResp.appendTo("#chatContainer")
        //remove options
        $(".response").remove();
      });
      */
  
  
      //if luffy
      /*
      $("h2").text("Chat with Luffy!");
      $("#chat").text("Join my crew! :) ");
      $("#resp1").text("Sure.");
      $("#resp2").text("Nah.");
  
      $("#opt1").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        // clone last chats
        var userResp = $("#chatContainer .container:last").clone();
        var luffyResp = $("#chatContainer .container:last").clone();
        //update color
        userResp.addClass('darkContainer').removeClass('container');
        //update message
        var textBack = $("#resp1").text()
        userResp.find("#chat").text(textBack)
        luffyResp.find("#chat").text("👍")
  
        //update time
        userResp.find(".time-left").text(time);
        luffyResp.find(".time-left").text(time);
  
        //hello chat
        userResp.appendTo("#chatContainer")
        luffyResp.appendTo("#chatContainer")
        //remove options
        $(".response").remove();
      });
  
      $("#opt2").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        // clone last chats
        var userResp = $("#chatContainer .container:last").clone();
        var luffyResp = $("#chatContainer .container:last").clone();
        //update color
        userResp.addClass('darkContainer').removeClass('container');
        //update message
        var textBack = $("#resp2").text()
        userResp.find("#chat").text(textBack)
        luffyResp.find("#chat").text("Join my crew!")
  
        //update time
        userResp.find(".time-left").text(time);
        luffyResp.find(".time-left").text(time);
  
        //hello chat
        userResp.appendTo("#chatContainer")
        luffyResp.appendTo("#chatContainer")
        //REUSE options
        $("#resp1").parent().appendTo("#chatContainer");
        $("#resp2").parent().appendTo("#chatContainer");
  
      });
      */
  
  //if Duolingo
  /*
      $("h2").text("Chat with Duo!");
      $("#chat").text("Hola! Have you been keeping up with your Spanish lately? 😘");
      $("#resp1").text("Sí");
      $("#resp2").text("No...");
      // Function to add a new container
      $("#opt1").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        // clone last chats
        var userResp = $("#chatContainer .container:last").clone();
        var duoResp = $("#chatContainer .container:last").clone();
        //update color
        userResp.addClass('darkContainer').removeClass('container');
        //update message
        var textBack = $("#resp1").text()
        userResp.find("#chat").text(textBack)
        duoResp.find("#chat").text("Bueno! Just remember to keep that streak going! 🤗")
  
        //update time
        userResp.find(".time-left").text(time);
        duoResp.find(".time-left").text(time);
  
        //hello chat
        userResp.appendTo("#chatContainer")
        duoResp.appendTo("#chatContainer")
        //remove options
        $(".response").remove();
      });
  
      $("#opt2").click(function(){
  
        var currentTime = new Date();
        if (currentTime.getHours()<12)
            var hours = currentTime.getHours();
        if (currentTime.getHours()>12)
            var hours = currentTime.getHours()-12;
  
        var minutes = currentTime.getMinutes();
        if(minutes <10)
          var time = hours + ":0" + minutes;
        else
          var time = hours + ":" + minutes;
        // clone last chats
        var userResp = $("#chatContainer .container:last").clone();
        var duoResp = $("#chatContainer .container:last").clone();
        var angryduoResp = $("#chatContainer .container:last").clone();
        //update color + angry duo
        userResp.addClass('darkContainer').removeClass('container');
        angryduoResp.addClass('black-container').removeClass('container');
        $(".black-container p").css("color", "white");
  
        //update message
        var textBack = $("#resp2").text()
        userResp.find("#chat").text(textBack)
        duoResp.find("#chat").text("You know what that means...")
        angryduoResp.find("#chat").text("r u n   w h i l e   y o u   s t i l l   c a n")
  
        //update time
        userResp.find(".time-left").text(time);
        duoResp.find(".time-left").text(time);
        angryduoResp.find(".time-left").text(time);
  
  
        //hello chat
        userResp.appendTo("#chatContainer")
        duoResp.appendTo("#chatContainer")
        angryduoResp.appendTo("#chatContainer")
  
        //remove options
        $(".response").remove();
    });
    */
  });