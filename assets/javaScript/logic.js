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
        showBtn();
    });

    //add transition-delay to port-tags when hovering
    var currentCard;
    $(".card").one("mouseover", function(){
        currentCard = this.id;
        console.log(currentCard);
        for (var i=0; i<portPics.length; i++){
            if (portPics[i].name === currentCard){
                currentCard = portPics[i];
                console.log(currentCard);
            }
        }
        // console.log(this);
        console.log(currentCard.techs);
        for (var i=0; i<currentCard.techs.length; i++){
            console.log("calling"+currentCard.techs[i]);
            // var addDrop = setInterval(transitionDown,1000);
        }
    });

    // function transitionDown (){
    //     // for (techs in currentCard){
    //         console.log(currentCard);
    //         console.log(currentCard.techs);
    //         $(".port-tags-wrapper li").addClass("transD");
    //     // }
    // }

    //turn off port-tags dropping down when mouse is off
    $(".card").on("mouseout", function(){
        $(".port-tags-wrapper li").removeClass("transD");

    })

    //show apps using this button's technology
    $(".portButtons").on("click", function(){
        currentBtn = this.id;
                console.log(currentBtn);

        hideBtn(currentBtn);
    });

    //show buttons with the specified technology
    function showBtn(){
        for (var i=0; i<portPics.length; i++){
            var currentPort=portPics[i];
            // console.log(currentPort);
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
        if (      document.documentElement.scrollTop > 500){
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
    
})