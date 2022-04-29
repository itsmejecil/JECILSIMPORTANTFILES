var flag = true;

$(document).ready(function(){
    $(".black").click(function(){
        $("#target").addClass("black");
        
        $("#target").removeClass("red");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");

        
        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #0000;");

            flag = false;
        } else{
            // $("#cssProp").empty();
        }
        


    });

    $(".red").click(function(){
        $("#target").addClass("red");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #c00000;");

            flag = false;
        } else{}
        
        
    });

    $(".yellowGreen").click(function(){
        $("#target").addClass("yellowGreen");
       
        $("#target").removeClass("blue");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #92d050;");

            flag = false;
        } else{}
    });

    $(".blue").click(function(){
        $("#target").addClass("blue");
        $("#target").removeClass("yellowGreen");
        $("#target").removeClass("skyBlue");
        $("#target").removeClass("lightOrange");
        $("#target").removeClass("green");
        $("#target").removeClass("purple");
        $("#target").removeClass("orange");
        $("#target").removeClass("yellow");
        $("#target").removeClass("lightblue");
        $("#target").removeClass("pink");
        $("#target").removeClass("black");
        $("#target").removeClass("red");

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #002060;");

            flag = false;
        } else{}
    });

    $(".skyBlue").click(function(){
                $("#target").addClass("skyBlue");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("green");
                $("#target").removeClass("purple");
                $("#target").removeClass("orange");
                $("#target").removeClass("yellow");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #5b9bd5;");
        
                    flag = false;
                } else{}
            });
    $(".lightOrange").click(function(){
                $("#target").addClass("lightOrange");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("green");
                $("#target").removeClass("purple");
                $("#target").removeClass("orange");
                $("#target").removeClass("yellow");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffc000;");
        
                    flag = false;
                } else{}
            });
        
    $(".green").click(function(){
                $("#target").addClass("green");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("purple");
                $("#target").removeClass("orange");
                $("#target").removeClass("yellow");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #00b050;");
        
                    flag = false;
                } else{}
            });
        
    $(".purple").click(function(){
                $("#target").addClass("purple");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("green");
                $("#target").removeClass("orange");
                $("#target").removeClass("yellow");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #7030a0;");
        
                    flag = false;
                } else{}
            });
        
    $(".orange").click(function(){
                $("#target").addClass("orange");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("green");
                $("#target").removeClass("purple");
                $("#target").removeClass("yellow");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffff00;");
        
                    flag = false;
                } else{}
            });
        
    $(".yellow").click(function(){
                $("#target").addClass("yellow");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("green");
                $("#target").removeClass("purple");
                $("#target").removeClass("orange");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffff00;");
        
                    flag = false;
                } else{}
            });
    $(".lightblue").click(function(){
                $("#target").addClass("lightblue");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("green");
                $("#target").removeClass("purple");
                $("#target").removeClass("orange");
                $("#target").removeClass("yellow");
                $("#target").removeClass("pink");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                flag=true;
                $("#cssProp").empty();
        
                if(flag){
                    $("#cssProp").append($("#target").attr("style") + "\nbackground: #00b0f0;");
        
                    flag = false;
                } else{}
                
            });
        
    $(".pink").click(function(){
                $("#target").addClass("pink");
                $("#target").removeClass("yellowGreen");
                $("#target").removeClass("blue");
                $("#target").removeClass("skyBlue");
                $("#target").removeClass("lightOrange");
                $("#target").removeClass("green");
                $("#target").removeClass("purple");
                $("#target").removeClass("orange");
                $("#target").removeClass("yellow");
                $("#target").removeClass("lightblue");
                $("#target").removeClass("black");
                $("#target").removeClass("red");
        
                
                $("#cssProp").empty();
                flag=true;
               
                if(flag){
                    
                    $("#cssProp").append($("#target").attr("style") + "\n background: #f2cff3;");
        
                    flag = false;
                } else{}
            });
        

    $(".circle").click(function(){
                $("#target").addClass("circle");
                $("#target").removeClass("moon");
                $("#target").removeClass("triangle-up");
                $("#target").removeClass("star");
                $("#target").removeClass("star:before");
                $("#target").removeClass("star:after");
                $("#target").removeClass("octagon");
                $("#target").removeClass("octagon:before");
                $("#target").removeClass("octagon:after");
                $("#target").removeClass("heart");
                $("#target").removeClass("heart:before");
                $("#target").removeClass("heart:after");
                $("#target").removeClass("cross");
                $("#target").removeClass("cross:after");
                $("#target").removeClass("yin-yang");
                $("#target").removeClass("yin-yang:before");
                $("#target").removeClass("yin-yang:after");
                $("#target").removeAttr("style");

        
        
        
                
                $("#cssProp").empty();
                flag=true;
               
                if(flag){
                    
        //             $("#cssProp").append($("#target").attr("style") + "\n background: yellow green;");
        
                    flag = false;
                } else{}
            });
    $(".moon").click(function(){
            $("#target").addClass("moon");
            $("#target").removeClass("circle");
            $("#target").removeClass("triangle-up");
            $("#target").removeClass("star");
            $("#target").removeClass("star:before");
            $("#target").removeClass("star:after");
            $("#target").removeClass("octagon");
            $("#target").removeClass("octagon:before");
            $("#target").removeClass("octagon:after");
            $("#target").removeClass("heart");
            $("#target").removeClass("heart:before");
            $("#target").removeClass("heart:after");
            $("#target").removeClass("cross");
            $("#target").removeClass("cross:after");
            $("#target").removeClass("yin-yang");
            $("#target").removeClass("yin-yang:before");
            $("#target").removeClass("yin-yang:after");
            $("#target").removeAttr("style");

    
    
    
            
            $("#cssProp").empty();
            flag=true;
           
            if(flag){
                
//                 $("#cssProp").append($("#target").attr("style") + "\n background: yellow;");
    
                flag = false;
            } else{}
        });
    $(".triangle-up").click(function(){
        $("#target").addClass("triangle-up");
        $("#target").removeClass("moon");
        $("#target").removeClass("circle");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
//             
//             $("#cssProp").append($("#target").attr("style") + "\n background: blue;");

            flag = false;
        } else{}
    });
    $(".star").click(function(){
        $("#target").addClass("star");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("circle");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: darkgoldenrod;");

            flag = false;
        } else{}
    });
$(".star:before").click(function(){
        $("#target").addClass("star:before");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("circle");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: darkgoldenrod;");

            flag = false;
        } else{}
    });
$(".star:after").click(function(){
        $("#target").addClass("star:after");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("circle");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
         $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: darkgoldenrod;");

            flag = false;
        } else{}
    });
$(".octagon").click(function(){
        $("#target").addClass("octagon");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("circle");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
         $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
//             
//             $("#cssProp").append($("#target").attr("style") + "\n background: skyblue;");

            flag = false;
        } else{}
    });
$(".octagon:before").click(function(){
        $("#target").addClass("octagon:before");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("circle");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
         $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: pink;");

            flag = false;
        } else{}
    });
$(".octagon:after").click(function(){
        $("#target").addClass("octagon:after");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("circle");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: purple;");

            flag = false;
        } else{}
    });
$(".heart").click(function(){
        $("#target").addClass("heart");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("circle");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: red;");

            flag = false;
        } else{}
    });
$(".heart:before").click(function(){
        $("#target").addClass("heart:before");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("circle");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
//             
//             $("#cssProp").append($("#target").attr("style") + "\n background: white;");

            flag = false;
        } else{}
    });
$(".heart:after").click(function(){
        $("#target").addClass("heart:after");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("circle");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: sandybrown;");

            flag = false;
        } else{}
    });
$(".cross").click(function(){
        $("#target").addClass("cross");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("circle");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: blueviolet;");

            flag = false;
        } else{}
    });
$(".cross:after").click(function(){
        $("#target").addClass("cross:after");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("circle");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: orangered;");

            flag = false;
        } else{}
    });
$(".yin-yang").click(function(){
        $("#target").addClass("yin-yang");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("circle");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: chocolate;");

            flag = false;
        } else{}
    });
$(".yin-yang:before").click(function(){
        $("#target").addClass("yin-yang:before");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("circle");
        $("#target").removeClass("yin-yang:after");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: brown;");

            flag = false;
        } else{}
    });
$(".yin-yang:after").click(function(){
        $("#target").addClass("yin-yang:after");
        $("#target").removeClass("moon");
        $("#target").removeClass("triangle-up");
        $("#target").removeClass("star");
        $("#target").removeClass("star:before");
        $("#target").removeClass("star:after");
        $("#target").removeClass("octagon");
        $("#target").removeClass("octagon:before");
        $("#target").removeClass("octagon:after");
        $("#target").removeClass("heart");
        $("#target").removeClass("heart:before");
        $("#target").removeClass("heart:after");
        $("#target").removeClass("cross");
        $("#target").removeClass("cross:after");
        $("#target").removeClass("yin-yang");
        $("#target").removeClass("yin-yang:before");
        $("#target").removeClass("circle");
        $("#target").removeAttr("style");




        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
//             $("#cssProp").append($("#target").attr("style") + "\n background: palegreen;");

            flag = false;
        } else{}
    });

});
       
