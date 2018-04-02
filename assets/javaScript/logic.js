$(document).ready(function(){
    var hangman={
        location:$("#hangman"),
        techs:["bootstrap", "javaScript", "css"]
        };

    var crystals={
        location:$("#crystals"),
        techs:["javaScript", "jQuery", "css"]
        };
    var trivia={
        location:$("#trivia"),
        techs:["javaScript","css"]
    }
    var train={
        location:$("#train"),
        techs:["javaScript", "jQuery", "moment", "firebse", "css"]
    }
     
  
    var portPics=[hangman, crystals, trivia, train];
    var included;
    var currentBtn;

    $("#all").on("click", function(){
        showBtn();
    });

    $("#javaScript").on("click", function(){
        currentBtn = this.id;
        hideBtn(currentBtn);
    });

    $("#jQuery").on("click", function(){
        currentBtn = this.id;
        hideBtn(currentBtn);
    });  

    function showBtn(){
        for (var i=0; i<portPics.length; i++){
            var currentPort=portPics[i];
            // console.log(currentPort);
            $(currentPort.location).addClass("show");
        }
    }

    function hideBtn(){
        showBtn();
        // console.log(currentBtn);
        for (var i=0; i<portPics.length; i++){
            var currentPort=portPics[i];
            included=false;

            // console.log(currentPort);
            for (var j=0; j<currentPort.techs.length; j++){
                if (currentPort.techs[j] === currentBtn){
                    included=true;
                    // console.log("included=true "+ currentPort.techs[j]);
                }
            }
            if (included !== true){
                $(currentPort.location).addClass("hide").removeClass("show");
                // console.log("hiding");
            }
        }
    }

    
})