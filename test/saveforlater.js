$(".button").click(function(){
                    
                    chapter++;
                    console.log(chapter);
                    
                    if(chapter < 8){

                        if(chapter == 2){
                            $(".chapter.two").addClass("chaptershow").siblings().removeClass("chaptershow")
                        }
                        else if(chapter == 3){
                            $(".chapter.three").addClass("chaptershow").siblings().removeClass("chaptershow")
                        }
                        else if(chapter == 4){
                            $(".chapter.four").addClass("chaptershow").siblings().removeClass("chaptershow")
                        }
                        else if(chapter == 5){
                            $(".chapter.five").addClass("chaptershow").siblings().removeClass("chaptershow")
                        }
                        else if(chapter == 6){
                            $(".chapter.six").addClass("chaptershow").siblings().removeClass("chaptershow")
                        }
                        else if(chapter == 7){
                            $(".chapter.seven").addClass("chaptershow").siblings().removeClass("chaptershow")
                        }
                        else{
                            $("end").show
                        }
                    }
                    
                    else if(chapter > 7){
                        console.log("greater than 7");
                        reset();
                    }
                    
                    else{
                        console.log("error")
                    }
                    
                    
                });
                
                
                var chap3sleep = function(){
                    if($(".three .A").hasClass("selected")){
                        sleepStatus = sleepStatus + 10;
                    } else if($(".three .B").hasClass("selected")){
                        sleepStatus = sleepStatus + 6;
                    } else {
                        sleepStatus = sleepStatus + 0;
                    }
                    console.log(sleepStatus);
                };
                //end of sleep
                
                var chap6fightflight = function(){
                    if(sleepStatus >= 8){
                        attackStatus = attackStatus + 10;
                        sneakStatus = sneakStatus + 7.5;
                        console.log("high sleep");
                    } else if(sleepStatus <= 7 && sleepStatus > 3){
                        attackStatus = attackStatus + 7;
                        sneakStatus = sneakStatus + 5;
                        console.log("med sleep");
                    } else if(sleepStatus <= 3){
                        attackStatus = attackStatus + 3;
                        sneakStatus = sneakStatus + 2.5;
                        console.log("low sleep");
                    } else {
                        console.log(Error);
                    }
                    console.log("sleep: " + sleepStatus);
                    console.log("attack: " + attackStatus);
                    console.log("sneak: " + sneakStatus);
                }//end of flight or fight
                
                var chap6fight = function(){
                    var animalStatus = Math.floor((Math.random() * 10) + 1 );
                    console.log("The animal was a " + animalStatus + " you were at " + attackStatus);
                    var animaloutcome = animalStatus - attackStatus;
                    if (animaloutcome < 1){
                        console.log(" you win!")
                    } else {
                        console.log(animaloutcome)
                    }
                }//end of fight
                
                var chap6flight = function(){
                    var animalStatus = Math.floor((Math.random() * 10) + 1);
                    console.log("The animal is " + animalStatus + " youre at " + sneakStatus);
                    var animalnofight = animalStatus - sneakStatus;
                    if(animalnofight < 1){
                        console.log("you got away!")
                    } else {
                        console.log(animalnofight);
                        console.log("death!")
                    }
                }
                
                var reset = function(){
                    console.log("reload")
                    //location.reload();
                }
                
                
                
                
                