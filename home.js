// will redirect the user to the correct website
var _0x53f917=_0x1780;function _0x1780(_0x310202,_0x28dc44){var _0x100b50=_0x100b();return _0x1780=function(_0x178008,_0x238931){_0x178008=_0x178008-0xcd;var _0x560c38=_0x100b50[_0x178008];return _0x560c38;},_0x1780(_0x310202,_0x28dc44);}function _0x100b(){var _0x2a87cd=['4xtFVYx','location','27zacgGe','8197119XbIXSb','3pGJIAV','542008UcdUub','654174OoBxXo','872880hNHvFC','caopoints-info.web.app','hostname','21366SGHrJa','10981465opRjzP','href','635diJNxU','201290fAWahX'];_0x100b=function(){return _0x2a87cd;};return _0x100b();}(function(_0x2290f8,_0x33eced){var _0x338d46=_0x1780,_0x4e06e0=_0x2290f8();while(!![]){try{var _0x2c8bcb=parseInt(_0x338d46(0xce))/0x1*(parseInt(_0x338d46(0xd1))/0x2)+-parseInt(_0x338d46(0xd0))/0x3*(parseInt(_0x338d46(0xd9))/0x4)+-parseInt(_0x338d46(0xd7))/0x5*(parseInt(_0x338d46(0xd4))/0x6)+parseInt(_0x338d46(0xcd))/0x7+parseInt(_0x338d46(0xcf))/0x8*(parseInt(_0x338d46(0xdb))/0x9)+-parseInt(_0x338d46(0xd8))/0xa+-parseInt(_0x338d46(0xd5))/0xb;if(_0x2c8bcb===_0x33eced)break;else _0x4e06e0['push'](_0x4e06e0['shift']());}catch(_0x2d4e6a){_0x4e06e0['push'](_0x4e06e0['shift']());}}}(_0x100b,0xf2e19));(window['location'][_0x53f917(0xd3)]==_0x53f917(0xd2)||window[_0x53f917(0xda)][_0x53f917(0xd3)]=='caopoints-info.firebaseapp.com')&&(window[_0x53f917(0xda)][_0x53f917(0xd6)]='https://cao-points-info.com/');

var mobile_user = navigator.userAgent.includes('Mobile') || navigator.userAgent.includes('Android') || navigator.userAgent.includes('Phone');

if (mobile_user == true) {
    document.getElementById('inputs').style.zoom = "150%";
    document.getElementById('back-to-top').style.zoom = "150%";
    document.getElementById('main').style.zoom = "100%";
    document.getElementById('pts-sys-img').style.width = "90%";
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getStorage, ref, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js";

// firebase config
//------
function _0x30a4(_0x3cde86,_0x3e7b54){const _0x9a462f=_0x9a46();return _0x30a4=function(_0x30a4ed,_0x334913){_0x30a4ed=_0x30a4ed-0x1e3;let _0x4a2369=_0x9a462f[_0x30a4ed];return _0x4a2369;},_0x30a4(_0x3cde86,_0x3e7b54);}const _0xe840c0=_0x30a4;(function(_0x38a583,_0x5f00cc){const _0x58e8c4=_0x30a4,_0x2bf75e=_0x38a583();while(!![]){try{const _0x47c0a8=parseInt(_0x58e8c4(0x1e4))/0x1*(-parseInt(_0x58e8c4(0x1f4))/0x2)+parseInt(_0x58e8c4(0x1ed))/0x3*(parseInt(_0x58e8c4(0x1e6))/0x4)+parseInt(_0x58e8c4(0x1eb))/0x5+parseInt(_0x58e8c4(0x1e8))/0x6+-parseInt(_0x58e8c4(0x1e5))/0x7*(-parseInt(_0x58e8c4(0x1ea))/0x8)+-parseInt(_0x58e8c4(0x1f2))/0x9*(-parseInt(_0x58e8c4(0x1f3))/0xa)+parseInt(_0x58e8c4(0x1e3))/0xb*(-parseInt(_0x58e8c4(0x1e7))/0xc);if(_0x47c0a8===_0x5f00cc)break;else _0x2bf75e['push'](_0x2bf75e['shift']());}catch(_0x2fda50){_0x2bf75e['push'](_0x2bf75e['shift']());}}}(_0x9a46,0x77780));const firebaseConfig={'apiKey':_0xe840c0(0x1f0),'authDomain':'caopoints-info.firebaseapp.com','databaseURL':'https://caopoints-info-default-rtdb.europe-west1.firebasedatabase.app','projectId':_0xe840c0(0x1ee),'storageBucket':_0xe840c0(0x1ec),'messagingSenderId':_0xe840c0(0x1ef),'appId':_0xe840c0(0x1e9),'measurementId':_0xe840c0(0x1f1)};function _0x9a46(){const _0xcff212=['4MNAyYs','21923fanQNn','230586iluPYr','190351rbQQkk','14648JwfsQi','19644yLNdLL','3521328nlQsrW','1:615159418744:web:35978469f92b90b5c9828d','272WZWHtc','4646570aLqCXI','caopoints-info.appspot.com','654imilfV','caopoints-info','615159418744','AIzaSyA5BqxvA4AHcwVZ8IPWvSSHEiJ-3sUgF0g','G-08383DC9PC','8765793wZZYzm','10mFvQFx'];_0x9a46=function(){return _0xcff212;};return _0x9a46();}
//----
// Initialize Firebase Storage --------
const app = initializeApp(firebaseConfig);
const storage = getStorage();
//---------


function hide_rows() {
 // hide all rows
 for (var i = 0; i < 3; i++) {
     var row = "row"+String(i+1);
     document.getElementById(row).style.display = "none";
 }

 document.getElementById("invalid_input").style.display = "inline";
}

document.getElementById("adding_25_container").style.display = "none";


function is_hl(grade) {
 hl_sub = (37 == grade) || (46 == grade) || (56 == grade) || (66 == grade) || (77 == grade) || (88 == grade) || (100 == grade);
 if ( (hl_sub == true) && (hl_sub != 25) ){
     return true;
 }
 else{
     return false;
 }
}

// grade average and points to grades as list of numbers
function gar_and_ptg(points_needed) {
 var dict = {
     'h1':90,
     'h2':80,
     'h3':70,
     'h4':60,
     'h5/o1':50,
     'h6/o2':40,
     'h7/o3':30,

     'h5/o1':90,
     'h6/o2':80,
     'h7/o3':70,
     'o4':60,
     'o5':50,
     'o6':40,
     'o7':30,
 };

 var mixed_dict = {
     100:'h1',
     88:'h2',
     77:'h3',
     66:'h4',
     56:'h5/o1',
     46:'h6/o2',
     37:'h7/o3',
     56:'h5/o1',
     46:'h6/o2',
     37:'h7/o3',
     28:'o4',
     20:'o5',
     12:'o6',
     0:'o7',
 };

 var new_target_needed = false;
 if (points_needed.includes(25) == true ) {
     var new_target = 0;
     for (var i = 0; i < points_needed.length-1; i++) {
         new_target += Number(points_needed[i]);
     }
     new_target += 25;
     new_target_needed = true;
 }

 var letter_grades = [];

 for (var i = 0; i < points_needed.length; i++) {

     if (points_needed[i] != 25 ) {
         letter_grades.push( mixed_dict[points_needed[i]] );
     }
 }

 var points = [];
 for (var i = 0; i < letter_grades.length; i++) {
     points.push( dict[letter_grades[i]] );
 }

 var total = 0;
 for (var i = 0; i < points.length; i++) {
     total += Number(points[i]);
 }

 total = total / points.length;
 var percentage_avg = String(Math.round(total))+"%";

 var grades_soultion = [];
 for (var i = 0; i < points_needed.length; i++) {
     if (points_needed[i] != 25 ) {
         grades_soultion.push( mixed_dict[points_needed[i]] );
     }
 }
 var sum_total = summed_total(points_needed);

 return [percentage_avg, grades_soultion, sum_total];

}

function is_25_in_grades(grade) {
    var hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));
   
    if ( (hl_sub == true) ) {
        return true;
    }
   
    else {
        return false;
    }
}

var matches;
var accounted;
function plus_25(grade) {

 var output = grade;
 var hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));

 if ( (hl_sub == true) && (hl_sub != 25) ) {
     output.push(25);
     return output;
 }

 else {
     return output;
 }
}

function letter_grades_to_points(grades) {
 var points = [];
 var dict = {
     'h1':100,
     'h2':88,
     'h3':77,
     'h4':66,
     'h5/o1':56,
     'h6/o2':46,
     'h7/o3':37,
     'h5/o1':56,
     'h6/o2':46,
     'h7/o3':37,
     'o4':28,
     'o5':20,
     'o6':12,
     'o7':0,
 };

 for (var i = 0; i < grades.length; i++) {
     points.push( dict[ grades[i] ] );
 }

 return points;
}

function count(array, element) {
    var counter = 0;
    for (var i =0; i< array.length; i++) {
        var current = array[i];
        if (element == current) {
            counter += 1;
        }
    }
   
    return counter;
}

function summed_total(array) {
    var counter = 0;
    for (var i =0; i< array.length; i++) {
        counter += Number(array[i]);
    }

    return counter;

}

// as letters
function rankings(grades) {
    var ranked_grades = [];

    ranked_grades.push( count(grades, 'h1') );
    ranked_grades.push( count(grades, 'h2') );
    ranked_grades.push( count(grades, 'h5/o1') );
    ranked_grades.push( count(grades, 'h6/o2') );

    var total = count(grades, 'h1') + count(grades, 'h2') + count(grades, 'h5/o1') + count(grades, 'h6/o2');

    return [ranked_grades, total];
}

function display_plus_25(matches) {

    var hl_subs = Number(document.getElementById("hl_subs_text").value);
    var boolen_bank = [];
    for (var i = 0; i < matches.length; i++) {
        var current = matches[i];
        if ( is_25_in_grades(current) == true ) {
            boolen_bank.push(true);
        }
    }

    console.log(' count(boolen_bank, true) :  ', count(boolen_bank, true));

    if ( (count(boolen_bank, true) > 0) && (hl_subs > 0) ) {
        document.getElementById("adding_25_container").style.display = 'inline';
    }

    else {
        document.getElementById("adding_25_container").style.display = 'none';
    }
}

window.find_points_needed = async function () {
var target_num = Number(document.getElementById("target_text").value);
 var hl_num = Number(document.getElementById("hl_subs_text").value);
 var ol_num = Number(document.getElementById("ol_subs_text").value);

 console.log(target_num, hl_num, ol_num);

 // check for invalid input
 var invalid_target_input = ( target_num <= 0 ) || ( target_num > 625 );
 var invalid_subs_input = (hl_num < 0) || (ol_num < 0) || (hl_num >6) || (ol_num >6) || (hl_num+ol_num>6);
 var impossible_case = target_num > ( (hl_num*100) + (ol_num*56) + 25);

 console.log('impossible_case: ', impossible_case);
 console.log('invalid_target_input: ', invalid_target_input);
 console.log('invalid_subs_input: ', invalid_subs_input);
 console.log(target_num, Number( (hl_num*100) + (ol_num*56) + 25));

 if ( invalid_target_input || invalid_subs_input || impossible_case ) {
     

     console.log("INVALID INPUT");
     document.getElementById("invalid_input").innerHTML = "INVALID INPUT";
     document.getElementById("invalid_input").style.color = "red";
     document.getElementById("adding_25_container").style.display = "none";

     hide_rows();

     document.getElementById("invalid_input").style.display = "inline";

 }

 else {
     document.getElementById("invalid_input").style.display = "none";


     var base_grades_info = "grades/["+String(hl_num)+", "+String(ol_num)+"].txt";
     var base_points_info = "points/["+String(hl_num)+", "+String(ol_num)+"]_points.txt";
     
     const grade_ref_text = ref(storage, base_grades_info);
     const grade_url = await Promise.resolve(getDownloadURL(grade_ref_text));
     const grade_response = await fetch(grade_url, {mode:'cors'});

     const grades = JSON.parse(await grade_response.text());

     const point_ref_text = ref(storage, base_points_info);
     const point_url = await Promise.resolve(getDownloadURL(point_ref_text));
     const point_response = await fetch(point_url, {mode:'cors'});

     console.log({point_response});
     const points = JSON.parse(await point_response.text());

     // change the target_num if nessecary	
     while ( points.includes(target_num) == false && target_num <= 625 ) {
         target_num += 1;
      }

     matches = [];
     accounted = [];
     
     var current;
     for (var i = 0; i < grades.length; i++) {
         var c_grade = grades[i][0];
         if ( (c_grade != 0) && (c_grade != undefined)  ) {
             var c_point = Number(grades[i][1]);
             
             c_grade = c_grade.sort();
             if ( (c_point >= target_num) && (accounted.includes(c_grade.toString()) == false ) ) {
                 matches.push(c_grade);
                 accounted.push(c_grade.toString());
             }
         }
     }	


     // choosing the easist "ranked" soultion-----
     
     var all_soultions = []; // all of the current status in one array
     var order_grade_avg = []; // order_grade_avg for the soultions to follow from smallest to biggest

     for (var i = 0; i < matches.length; i++) {
         current = matches[i];
         // console.log('current: ', current);
         var ranked_info = gar_and_ptg(current);  // current grade average
         var c_grade_avg = ranked_info[0];
         var c_soultion = ranked_info[1];
         var c_total = ranked_info[2];

         // has to be within 10 of target and the easiest soultion (by choosing the loweest grade average)
         
         if ( target_num + 10 >= c_total ) {

            if ( order_grade_avg.includes(c_grade_avg) == false) {
                order_grade_avg.push(c_grade_avg);
            }

            all_soultions.push( [c_soultion, c_grade_avg] );
        }
     }

     order_grade_avg = order_grade_avg.sort();

     var collected_soultions = [];
     var min_grade_avg = order_grade_avg[0];
     var order_rank_total = [];
     for (var i = 0; i < all_soultions.length; i++) {
        var current = all_soultions[i];
        var c_grade = current[0];
        var c_avg = current[1];

        if (c_avg == min_grade_avg) {
            collected_soultions.push([c_grade, rankings(c_grade)]);
            var ranked_total = rankings(c_grade)[1];
            collected_soultions.push([c_grade, ranked_total]);

            if (order_rank_total.includes(ranked_total) == false) {
                order_rank_total.push(ranked_total);
            }
        }
     }

     order_rank_total = order_rank_total.sort();

     var final_soultion = [];

     for (var x = 0; x < order_rank_total.length; x++) {
        var order = order_rank_total[x];

        for (var i = 0; i < collected_soultions.length; i++) {
            if (order == collected_soultions[i][1]) {
                final_soultion.push(plus_25(letter_grades_to_points(collected_soultions[i][0])));
            }
        }
     }
     
     final_soultion = final_soultion.sort().reverse();
     // console.log('final_soultion: ', final_soultion);



     // create the new matches (so the code can continute as is with its output)
     // cap the length of matches at 3 to avoid errors with the rows output and to not overwhelm the user

     matches = final_soultion.splice(0, 3);

     // ---------------------------


     // then display output
     var points_req;
     var req_results;
     var grades_needed;


     for (var i = 0; i < matches.length; i++)  {
        var row = "row"+String(i+1);
        document.getElementById(row).style.display = "inline";
        
        var current = gar_and_ptg(matches[i]); // letter grades
        // console.log('current: ', current);

        var grade_avg_req = current[0];
        var req_results = current[1];
        var points_req = current[2];

        if ( ( matches[i].includes(25) ) && ( Number(document.getElementById("hl_subs_text").value) == 0 ) ) {
            points_req -= 25;
        }

        var id_points_req = "points_req"+String(i+1);
        var id_req_results = "req_results"+String(i+1);
        var id_grade_avg_req = "grade_avg_req"+String(i+1);
        document.getElementById(id_points_req).innerHTML =  String(points_req);
        document.getElementById(id_req_results).innerHTML = String(req_results);
        document.getElementById(id_grade_avg_req).innerHTML =  String(grade_avg_req);
     }

     // hide the rows that aren't used
     if ( (matches.length > 0) && (matches.length != 3) ) {
         for (var i = 0; i < 3-matches.length; i++) {
             var row = "row"+String(3-(i+1)+1);
             document.getElementById(row).style.display = "none";
         }

         document.getElementById("invalid_input").style.color = "red";
         document.getElementById("invalid_input").innerHTML = "INVALID INPUT";
         document.getElementById("invalid_input").style.display = "none";

         document.getElementById("adding_25_container").style.display = "none";
     }

     display_plus_25(matches);

 }
}



// --------------------------------------------------------------------------------------
// browserify home.js -o bundle.js

// example ----------
/*
const ref_text = ref(storage, 'grades/[1, 0].txt');

const text_url = await getDownloadURL(ref_text);

const response = await fetch(text_url, {mode:'cors'});
var text = await response.text();
text = JSON.parse(text);
*/
// -------------------

// -------

/*
RESOURCES:
references in firebase:
https://firebase.google.com/docs/storage/web/create-reference

what is CORS:
https://www.youtube.com/watch?v=4KHiSt0oLJ0&ab_channel=Fireship

CORS configuration:
https://stackoverflow.com/questions/37760695/firebase-storage-and-access-control-allow-origin
(involes the use of google cloud and gsutil command line tool)

to use await inside of function:
https://bobbyhadz.com/blog/javascript-unexpected-reserved-word-await#:~:text=The%20%22unexpected%20reserved%20word%20await,of%20how%20the%20error%20occurs

for the correct url:
https://stackoverflow.com/questions/61396081/how-to-turn-off-default-domain-in-firebase-hosting-firebase
*/
