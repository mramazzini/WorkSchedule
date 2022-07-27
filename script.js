var row1 = $('#row1');
var row2 = $('#row2');
var row3 = $('#row3');
var row4 = $('#row4');
var row5 = $('#row5');
var row6 = $('#row6');
var row7 = $('#row7');
var row8 = $('#row8');
var row9 = $('#row9');
var rowArr = [row1,row2,row3,row4,row5,row6,row7,row8,row9];

var event1 = localStorage.getItem("e1");
var event2 = localStorage.getItem("e2");
var event3 = localStorage.getItem("e3");
var event4 = localStorage.getItem("e4");
var event5 = localStorage.getItem("e5");
var event6 = localStorage.getItem("e6");
var event7 = localStorage.getItem("e7");
var event8 = localStorage.getItem("e8");
var event9 = localStorage.getItem("e9");

var eventArr = [event1,event2,event3,event4,event5,event6,event7,event8,event9];

for(var i=0; i<9;i++){
    
    rowArr[i].children().eq(1).val(eventArr[i]);
}

console.log(event1);


//Get time and style rows as such
date= new Date();
time=date.getHours();


if(time>17){
    for(var i=0; i<9; i++){
        rowArr[i].children().eq(1).addClass('past');
    }
}
else if(time<9){
    for(var i=0; i<9; i++){
        rowArr[i].children().eq(1).addClass('future');
    }
}
else{
    time=time-9;
    rowArr[time].children().eq(1).addClass('present');

    for(var i=0; i<time; i++){
        rowArr[i].children().eq(1).addClass('past');
    }

    for(var i=time+1; i<9; i++){
        rowArr[i].children().eq(1).addClass('future');
    }
}

for(var i=0; i<rowArr.length; i++){
    
    rowArr[i].children().eq(2).on("click", function(event) {
        
        var element = event.target;
        var className = element.parentElement.id;
        var rowNum = className.substring(3,4);
        

        var item = "e"+String(rowNum);
        console.log(item);
        localStorage.setItem(item, element.parentElement.children[1].value); 
        
      });
    }

