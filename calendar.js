var todate = new Date();
var curMonth = todate.getMonth();
var curYear = todate.getFullYear();
var selectMonth = $("#month");
var selectYear  = $("#year");
var color = 0;

//==================================Weather API=============================================================//
var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiLinkDS = "https://api.darksky.net/forecast/e2c8b7bba44a193f5ef7d56f5cc0ede3/10.3539171,123.9114687";
//==============================================================================================================//

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var monthAndYear = $('#monthAndYear');
    calendar(curMonth, curYear);

$(document).ready(function(){

    $('#next').click(function(){
        curYear = (curMonth === 11) ? curYear + 1 : curYear;
        curMonth = (curMonth + 1) % 12;
        calendar(curMonth, curYear);
    });


    $('#previous').click(function(){
        curYear = (curMonth === 0) ? curYear - 1 : curYear;
        curMonth = (curMonth === 0) ? 11 : curMonth - 1;
        calendar(curMonth, curYear);
    });

    $('#month').change(function(){
        jump()
    });

    $('#year').change(function(){
        jump()
    })
});


$('body').css({'background-image':'url(https://vignette.wikia.nocookie.net/swordartonline/images/4/40/Aincard_in_ALO.png/revision/latest?cb=20121223021437)','background-size':'cover','background-repeat':'no-repeat'})
$('.container').css({'margin-top':'50px','box-shadow':'0 0 10px 5px rgba(0, 0, 0, 0.5)'})
$('.card').css({'background-color':'rgba(255,255,255,0.4)'})
$('td').css({'font-size':'25px', 'text-align':'center', 'font-family':'elephant'})
function jump() {
    curYear = parseInt(selectYear.val());
    curMonth = parseInt(selectMonth.val());
    calendar(curMonth, curYear);
}


function calendar(month, year) {

    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();

    var tbl = $("#calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.text("");

    // filing data about month and in the page via DOM.
    monthAndYear.text(months[month] + " " + year).css({'font-size':'25px', 'text-align':'center', 'font-family':'elephant','text-align':'center','background-color':'#aeeff0'});
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    for (var i = 0; i < 6; i++) {
        // creates a table row
       
        var row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.append(cellText);
                row.append(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(date);
                if (date === todate.getDate() && year === todate.getFullYear() && month === todate.getMonth()) {
                    cell.classList.add("bg-danger");
                    cell.setAttribute('style','text-shadow:0 0 10px #00ffff')
                } // color todate's date
                cell.append(cellText);
                row.append(cell);
                date++;
            }


        }

        tbl.append(row); // appending each row into calendar body.
    }
   
    
    $('td').click(function(){
        if(color == 0){
            $(this).css('background-color','red')
            ++color
        } 
        else{
            $(this).css('background-color','')
            --color
        } 
    });

    $('td').hover(function(){
        $(this).css({'text-shadow':'0 0 3px #0066ff'});
    }, function(){
         $(this).css({'text-shadow':'0 0 3px #FFFFFF'});
    });


$(document).ready(function(){
    $('td').dblclick(function(){
        $('#myModal').modal();
    });

});

}
