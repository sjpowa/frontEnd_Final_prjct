$(document).ready(
    function(){
        $('#searchbar').hide()
    }
);

function ShowAndHide() {
    var x = document.getElementById('searchbar');
    $('#searchbar').val('');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
};

// new Date().getTime();

// function DateTimez(){
// var dt = new Date();
//    var time = dt.getMonth() + dt.getDay() + " , " + dt.getFullYear();
//    document.write(time);
// }

// function Datatume(){
//     var dt = new Date();
// document.getElementById('date-time').innerHTML=dt;
// }

