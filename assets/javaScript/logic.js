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
        techs:["javaScript","bootstrap", "jQuery"]
        }
    var train={
        name:"train",
        location:$("#train"),
        techs:["javaScript", "jQuery", "moment", "firebase", "css"]
        }
    var veggie={
        name:"veggie",
        location:$("#veggie"),
        techs:["javaScript", "jQuery", "materialize", "firebase"]
        }
    var liri={
        name:"liri",
        location:$("#liri"),
        techs:["javaScript", "Node.js", "Command-Line"]
        }
    var bamazon={
        name:"bamazon",
        location:$("#bamazon"),
        techs:["javaScript", "Node.js", "Command-Line", "MySQL"]
        }
    var friendFinder={
        name:"friendFinder",
        location:$("#friendFinder"),
        techs:["javaScript", "jQuery", "Node.js", "Heroku", "Express", "Full Stack", "bootstrap"]
        }

    var portPics=[hangman, crystals, trivia, train, veggie, liri, bamazon, friendFinder];
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

    //makes circle text in venn diagram
    // new CircleType(document.getElementById("circleText")).radius(180);
    function circleText(text, radius, className, degrees, orig, location){
        text=text.split("");
        className=$(location)[className];
        var deg=degrees/text.length, origin=orig;
        text.forEach((each) => {
            each = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${each}</p>`;
            className.innerHTML += each;
            origin += deg;
        })
        console.log(className);
    };
    circleText("Passions", 300, 0, 55, 290, "#circleText1");
    circleText("Experiences", 300, 0, 76, 10, "#circleText2");
})