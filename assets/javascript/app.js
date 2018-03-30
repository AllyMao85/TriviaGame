$(document).ready(function(){
function questions(question,options,answer,explainations) {
    this.question=question;
    this.options=options;
    this.answer=answer;
    this.explainations=explainations;
}
var selected = false;
var sel='';
var question1 =new questions(
    "If r•s≠0, then what is the value of r/s + s/r\?\n(1) r•s=8\n(2) r/s=2", 
   ["A. statement (1) ALONE is sufficient, but statement (2) alone is not sufficient to answer the question asked;",

    "B. statement (2) ALONE is sufficient, but statement (1) alone is not sufficient to answer the question asked;",
    
    "C. BOTH statements (1) and (2) TOGETHER are sufficient to answer the question asked, but NEITHER statement ALONE is sufficient to answer the question asked;",
    
    "D. EACH statement ALONE is sufficient to answer the question asked;",
    
    "E. Statements (1) and (2) TOGETHER are NOT sufficient to answer the question asked, and additional data specific to the problem are needed."],
    "option2",
    "Stat. (1) provides the denominator of the combined fraction. However, you’re still missing the values of s2 and r2, so Stat. (1)->IS->BCE. \nStat. \(2\)\: if r\/s \= 2, then the reciprocal s\/r must equal the reciprocal of 2\: 1\/2. Therefore, this is a single value for the sum of the fractions, so Stat. \(2\)\-\>S\-\>B."
)

var question2 = new questions(
"Matthew Barney is one of the contemporary artists that uses digital media whereas Brett Whitely, a painter and sculptor from Australia, uses traditional methods.",

["A. uses digital media whereas Brett Whitely, a painter and sculptor from Australia, uses traditional methods.",

"B. uses digital media while the Australian painter and sculptor Brett Whitely uses traditional methods.",

"C. use digital media whereas Brett Whitely, a painter and sculptor from Australia, use traditional methods.",

"D. use digital media whereas Brett Whitely, a painter and sculptor from Australia, uses traditional methods.",

"E. use digital media, while Brett Whitely, a painter and sculptor from Australia, uses the methods that are traditional."
],
"option4",
"This answer choice corrects the original Relative Clause error by matching the plural verb use to the plural subject contemporary artists."
)

var question3=new questions("Since Java coffee shop began advertising on the local radio station 3 months ago, its business volume has increased by 15%. In order to increase its business volume, Java’s next door competitor, Kahva, should also start advertising on the local radio station. Which of the following most weakens the argument\’s conclusion\?",

["A. Kahva’s number of customers went down 15% last year.",

"B. Of the 9 coffee shops that advertised on the local radio, only Java’s business increased.",

"C. 78% of the businesses that advertise on the local radio report an increase in business volume.",

"D. The local radio station has over 10,000 listeners.",

"E. The local radio station dedicates 15% of its air time to commercials."
],
"option2",
"This answer choice weakens the argument’s second assumption that the example of Java’s case is something that may apply to all coffee shops that advertise. It does so by stating that the success rate of radio commercials for coffee shops is 1 out of 12. \nFor more information about the GMAT and the type of questions asked, visit MBA.com, the official website of the GMAT."
)

var questionBank=[question1, question2, question3];


function showquestion(obj) {

$('#question').text(obj.question);
$("<div>").attr({id:"div1", class:"form-check"}).appendTo("#mainpage");
$("<label>").attr({id:"id_1", class:"form-check-label"}).appendTo("#div1");
$("<input>").attr({
    class:"form-check-input",
    type:"radio",
    name:"exampleRadios",
    id:"exampleRadios1",
    value:"option1"
    
}).appendTo("#id_1");
$("<p>").text(obj.options[0]).appendTo("#id_1");

$("<div>").attr({id:"div2", class:"form-check"}).appendTo("#mainpage");
    $("<label>").attr({id:"id_2", class:"form-check-label"}).appendTo("#div2");
    $("<input>").attr({
        class:"form-check-input",
        type:"radio",
        name:"exampleRadios",
        id:"exampleRadios2",
        value:"option2"
    }).appendTo("#id_2");
    $("<p>").text(obj.options[1]).appendTo("#id_2");

    $("<div>").attr({id:"div3", class:"form-check"}).appendTo("#mainpage");
    $("<label>").attr({id:"id_3", class:"form-check-label"}).appendTo("#div3");
    $("<input>").attr({
        class:"form-check-input",
        type:"radio",
        name:"exampleRadios",
        id:"exampleRadios3",
        value:"option3"
    }).appendTo("#id_3");
    $("<p>").text(obj.options[2]).appendTo("#id_3");

    $("<div>").attr({id:"div4", class:"form-check"}).appendTo("#mainpage");
    $("<label>").attr({id:"id_4", class:"form-check-label"}).appendTo("#div4");
    $("<input>").attr({
        class:"form-check-input",
        type:"radio",
        name:"exampleRadios",
        id:"exampleRadios4",
        value:"option4"
    }).appendTo("#id_4");
    $("<p>").text(obj.options[3]).appendTo("#id_4");

    $("<div>").attr({id:"div5", class:"form-check"}).appendTo("#mainpage");
    $("<label>").attr({id:"id_5", class:"form-check-label"}).appendTo("#div5");
    $("<input>").attr({
        class:"form-check-input",
        type:"radio",
        name:"exampleRadios",
        id:"exampleRadios5",
        value:"option5"
    }).appendTo("#id_5");
    $("<p>").text(obj.options[4]).appendTo("#id_5");

    //$('<button>').attr('id',"submitBtn").text("Submit").appendTo("#mainpage");
}

// function check_radio(element_id){
//     document.getElementById(element_id).checked = true;
//   }

function cleanContent(){
    $('#remainingtime').empty();
    $('#question').empty();
    $('#mainpage').empty();
}
//show remaining time for question
var county=0;
var ctdowny=30;
function questionRemain() { 
    
    county++;
    ctdowny=30-county;  
    $("#remainingtime").text("Time Remaining: "+ ctdowny+ " Seconds");
}
// }
//show remaining time for results and answers
var countx=0;
var ctdownx=10;
function answerRemain(){
    
    countx++;
    ctdownx=10-countx;  
    $("#remainingtime").text("Time Remaining to review answers: "+ ctdownx+ " Seconds");
}
var wins=0;
var loses=0;
function showsummary() {
    cleanContent();
    $('<div>').html("The number of correct answers: "+wins +".<br/> The number of wrong answers: "+loses+".<br/><br/>").appendTo('#mainpage');
    $('<button>').attr('id',"startoverBtn").text("Startover").appendTo("#mainpage");
}
var correct=false;
function quesQueue(i) {
    
    county=0;
    ctdowny=30;
    correct=false;
    finishloop=false;
    selected=false;
    clearInterval(countdown);
   // clearInterval(answerreviewctdown);
   // clearTimeout(questionTimeout);
      cleanContent();
      showquestion(questionBank[i]);
     // console.log(obj);
      //question interval&time remain<-  start from here
    //   var countdown=setInterval(function(){ 
    //     questionRemain();
       
    //   },1000);
      //question timeout
    //   var questionTimeout=setTimeout(function(){
    //     var countx=0;
    //     var ctdownx=10;
    //      clearInterval(countdown);
    //      cleanContent();
    //      $('<div>').html("Time is out.<br/> The correct answer is "+obj.answer +".<br/> The explanation: "+obj.explainations).appendTo('#mainpage');      
    //     var answerreviewctdown=setInterval(function(){                
    //         answerRemain();           
    //     },1000);
    //     var answerTimeout=setTimeout(function(){
    //         clearInterval(answerreviewctdown);
    //     },10000)
    //     loses++;
    //     finishloop=true;
    //   },30000);
      //answerRemain();  <-end here
      var countdown=setInterval(function(){ 
        questionRemain();
        if(ctdowny == 0|| selected) {
            ctdowny = 0;
            cleanContent();
            if (correct===true) {
                $('#mainpage').prepend("Congrats! Your answer is correct!");
            } else {
            $('#mainpage').text("Your answer is wrong. The corrent answer is "+questionBank[i].answer +". The explanation: "+questionBank[i].explainations);  
             }
            countx=0;
            ctdownx=10; 
            var answerreviewctdown=setInterval(function(){  
                                
                   answerRemain();           
                   },1000);   
            clearInterval(countdown);
            var answerTimeout=setTimeout(function(){
                    clearInterval(answerreviewctdown);
                    console.log(i);
                    if (i===questionBank.length-1) {
                        showsummary();
                    } else {
                        quesQueue(i+1);
                    }
               },10000)     
                //if(ctdowny == 0) {
                  //  clearInterval(countdown);
                 //clearInterval(answerreviewctdown);           
                loses=questionBank.length-wins;
                finishloop=true;
           // }
        }
       }, 1000);
      
    
      //radio button was non existent at the time the event was bound, need to delegate the event
      $("#mainpage").on('click', 'input[name=exampleRadios]:radio', function() { 
          // addd next++ to increment by clicks
          selected = true;
          county=0;
          ctdowny=10;
          sel=$("input[name=exampleRadios]:checked").val();
          //console.log(sel);
          //clearInterval(countdown);
          //clearTimeout(questionTimeout);
          //this one don't work
        //   var answerreviewctdown=setInterval(function(){ 
        //     answerRemain()              
        //  }, 1000);
          if (sel===questionBank[i].answer) {
             //cleanContent(); 
             //$('#mainpage').text("Congrats! Your answer is correct!");
             
             wins++;
             correct=true;
             console.log("wins: "+wins);
          } 
       finishloop=true;
    })  
  
    // If (finishloop=true) {
    //     var answerTimeout=setTimeout(function(){
    //        If (questionBank.indexof(obj)<questionBank.length-1) {
    //         Continue;
    //        } else { showsummary()
    //      }
    //   },10000) 
    // }


}
//$(document).on("click", "#start", showquestion(question1));
$('#start').on("click",function(){
    $('#start').remove();
    var i = 0;
    quesQueue(i);
   
})


$("#mainpage").on('click', 'button[id=startoverBtn]', function() {
     wins=0;
     loses=0;
    //$('#start').remove();
    cleanContent(); 
    var i = 0;
    quesQueue(i);
   
})
    // for (var i=1;i<questionBank.length;i++) {
    //     quesQueue(questionBank[i]);
    //     if (i===questionBank.length) {
    //         showsummary();
    //     }
    //    }  
   
    //var selection=$(this).val();
    //var checked = $(this).find("input:checked");
    
    







})