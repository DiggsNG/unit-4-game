//*Establish counter for the crystal game.
var win = 0;
var lose = 0;
var random_result1 = 0;
var initCount = 0;
var result1 = 0;


//*******Generate random numbers: 19 -120 */
var gamesBegin = function() {
        //*** *initCount = 0;
       $(".crystals").empty();
       var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNgRBIxW8-qR3gezQm3iLBpeq_AS1lpse-pquf8CIWqvxE1U6 ",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCMtLVYbUAl7aSv1HboUb87xYDSqYP-LPtXVoQe1Zx9U0b6MO",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNlhSqov1dyvsJUHHJtIt-o0w_xPCquJZ8FI-utXe1PJpku1Xzg ",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIagUKY3W0Bko2fz3TaVrC4SR7-BISNIggouRKhvedTxbm1jqCg "];
        random_result1 = Math.floor(Math.random() * 101 ) + 19;
        
        $("#result1").html('Random Results: ' + random_result1);

        
        //*Building random numbers for 4 crystals
        for (var i = 0; i < 4; i++){
            var random = Math.floor(Math.random() *11) + 1;
                console.log(random);

            var crystalOne = $("<div>");
                crystalOne.attr({
                    "class": 'crystalOne',
                    "data-random": random
                });   
                crystalOne.css({
                    "background-image":"url('" + (images[i])+ "')",
                    "background-size": "cover"
                })  
               //***/ crystalOne.html(random);*Add number to crystals**      
            $(".crystals").append(crystalOne);    
                
       } 
       $("#pScore").html('Total Score:' + initCount);
}
gamesBegin();

 //*Click each crystal to retrive a number
 //$(".crystalOne").on('click', function () {
 $(document).on('click', ".crystalOne", function () {
    
    var num1 = parseInt($(this).attr('data-random'));
    initCount += num1;
    $("#pScore").html('Total Score: ' + initCount);
    console.log(initCount);
    if(initCount > random_result1){
         lose++;
         $("#lose").html('You lost: ' + lose);
         //$("#pScore").html(initCount);
         initCount = 0;
        //** */ lose = 0;
         gamesBegin();
    }
    else if(initCount == random_result1){

         win++;
         $("#wins").html('You won: ' + win);
         //$("#pScore").html(initCount);
         initCount = 0;
         win = 0;
         gamesBegin();
    }
        console.log(initCount);
        $("pScore").html(initCount);
    });





