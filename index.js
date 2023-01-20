// HTML elements 

var confirmButton; // Confirm button

confirmButton = document.getElementById('confirmB');

var selectY; // Selected Yes for attendance
var selectN; // Selected No for attendance 

selectY = document.getElementById('AttenYes');
selectN = document.getElementById('AttenNo');

// setting radio button statuses //

selectY =  true;
selectN = false;



// hidden div variable 

// var hiddenInfo;

// hiddenInfo = document.getElementById('hidden');

// Function that display is based on input // 

    function showDiv() {
        document.getElementById('hidden').style.display ='block';
    }

    function hideDiv() {
        document.getElementById('hidden').style.display = 'none';
    }

// Function that displays layer2 div

function showLayer2() {
    document.getElementById('layer2').style.display = 'block';

}

function hidelayer2() {
    document.getElementById('layer2')
}

// Onload hide the Hidden

// window.onload = function() {
//     document.getElementById('hidden').style.display = 'none';
//     document.getElementById('layer2').style.display = 'none';
//     document.getElementById('subDiv').style.display= 'block';
// }





// test to check if the JS page was linking to the HTML page //
// var data;

// data = "this is a test";
// console.log(data);
