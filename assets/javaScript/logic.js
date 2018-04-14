$(document).ready(function(){
    var hangman={
        name:"hangman",
        location:$("#hangman"),
        techs:["bootstrap", "javaScript", "css"]
        };

    var crystals={
        name:"crystals",
        location:$("#crystals"),
        techs:["javaScript", "jQuery", "css"]
        };
    var trivia={
        name:"trivia",
        location:$("#trivia"),
        techs:["javaScript","css"]
        }
    var train={
        name:"train",
        location:$("#train"),
        techs:["javaScript", "jQuery", "moment", "firebase", "css"]
        }
    var node={
        name:"nodejs",
        location:$("#node"),
        techs:["javaScript", "Node.js", "Command-Line"]
        }
     
    var portPics=[hangman, crystals, trivia, train, node];
    var included;
    var currentBtn;

    //show all apps on all button
    $("#all").on("click", function(){
        console.log("work");
        showBtn();
    });

    $("#allHamburger").on("click", function(){
        console.log("work");
        showBtn();
    });

    //show apps using this button's technology
    $(".portButtons, .portColl").on("click", function(){
        currentBtn = this.id;
                console.log(currentBtn);

        hideBtn(currentBtn);
    });

    //show buttons with the specified technology
    function showBtn(){
        for (var i=0; i<portPics.length; i++){
            var currentPort=portPics[i];
            console.log(currentPort);
            $(currentPort.location).addClass("show");
        }
    }

    //hide buttons that don't have specified tech
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

    //show "to the top" button when scrolling
    window.onscroll=function(){
        if (document.documentElement.scrollTop > 500){
            $("#topBtn").addClass("topBtnShow").removeClass("hide");
        }
        else {
            $("#topBtn").addClass("hide").removeClass("topBtnShow");
        }
    }

    //take user to the top of the page
    $("#topBtn").on("click", function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop=0;
    });

    $(".navbar-collapse a").click(function(){
        $(".navbar-collapse").collapse("toggle");
    });
    
    $(".portfolio-collapse li").click(function(){
        $(".portfolio-collapse").collapse("toggle");
    });

})