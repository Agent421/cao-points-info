// redirect to the correct website
// if (window.location.href != "https://www.caopts.com") {
//     window.location.href = "https://www.caopts.com";
// }

// Import the functions you need from the SDKs you need
(function (_0x36a688, _0x3907b0) { var _0x546c5 = _0x5d9c, _0x23883e = _0x36a688(); while (!![]) { try { var _0x1fc794 = parseInt(_0x546c5(0x160)) / 0x1 + parseInt(_0x546c5(0x15e)) / 0x2 + parseInt(_0x546c5(0x15a)) / 0x3 * (parseInt(_0x546c5(0x15d)) / 0x4) + parseInt(_0x546c5(0x162)) / 0x5 * (parseInt(_0x546c5(0x15b)) / 0x6) + -parseInt(_0x546c5(0x15f)) / 0x7 + -parseInt(_0x546c5(0x15c)) / 0x8 * (-parseInt(_0x546c5(0x159)) / 0x9) + -parseInt(_0x546c5(0x161)) / 0xa; if (_0x1fc794 === _0x3907b0) break; else _0x23883e['push'](_0x23883e['shift']()); } catch (_0x545e54) { _0x23883e['push'](_0x23883e['shift']()); } } }(_0xd639, 0x553c7)); function _0x5d9c(_0x29f13a, _0x2581e4) { var _0xd639d2 = _0xd639(); return _0x5d9c = function (_0x5d9c26, _0x3dde7a) { _0x5d9c26 = _0x5d9c26 - 0x159; var _0x39a28d = _0xd639d2[_0x5d9c26]; return _0x39a28d; }, _0x5d9c(_0x29f13a, _0x2581e4); } import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js'; function _0xd639() { var _0x2e5268 = ['2235380NedBgR', '15WrMJqO', '9VawhWv', '69171LjfTac', '49830JcJIPu', '887688vSvORJ', '4QYkcuW', '697840UShfyd', '1497454ulduJf', '278734mejAWi']; _0xd639 = function () { return _0x2e5268; }; return _0xd639(); } import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-storage.js';

// firebase config
//------
function _0x30a4(_0x3cde86, _0x3e7b54) { const _0x9a462f = _0x9a46(); return _0x30a4 = function (_0x30a4ed, _0x334913) { _0x30a4ed = _0x30a4ed - 0x1e3; let _0x4a2369 = _0x9a462f[_0x30a4ed]; return _0x4a2369; }, _0x30a4(_0x3cde86, _0x3e7b54); } const _0xe840c0 = _0x30a4; (function (_0x38a583, _0x5f00cc) { const _0x58e8c4 = _0x30a4, _0x2bf75e = _0x38a583(); while (!![]) { try { const _0x47c0a8 = parseInt(_0x58e8c4(0x1e4)) / 0x1 * (-parseInt(_0x58e8c4(0x1f4)) / 0x2) + parseInt(_0x58e8c4(0x1ed)) / 0x3 * (parseInt(_0x58e8c4(0x1e6)) / 0x4) + parseInt(_0x58e8c4(0x1eb)) / 0x5 + parseInt(_0x58e8c4(0x1e8)) / 0x6 + -parseInt(_0x58e8c4(0x1e5)) / 0x7 * (-parseInt(_0x58e8c4(0x1ea)) / 0x8) + -parseInt(_0x58e8c4(0x1f2)) / 0x9 * (-parseInt(_0x58e8c4(0x1f3)) / 0xa) + parseInt(_0x58e8c4(0x1e3)) / 0xb * (-parseInt(_0x58e8c4(0x1e7)) / 0xc); if (_0x47c0a8 === _0x5f00cc) break; else _0x2bf75e['push'](_0x2bf75e['shift']()); } catch (_0x2fda50) { _0x2bf75e['push'](_0x2bf75e['shift']()); } } }(_0x9a46, 0x77780)); const firebaseConfig = { 'apiKey': _0xe840c0(0x1f0), 'authDomain': 'caopoints-info.firebaseapp.com', 'databaseURL': 'https://caopoints-info-default-rtdb.europe-west1.firebasedatabase.app', 'projectId': _0xe840c0(0x1ee), 'storageBucket': _0xe840c0(0x1ec), 'messagingSenderId': _0xe840c0(0x1ef), 'appId': _0xe840c0(0x1e9), 'measurementId': _0xe840c0(0x1f1) }; function _0x9a46() { const _0xcff212 = ['4MNAyYs', '21923fanQNn', '230586iluPYr', '190351rbQQkk', '14648JwfsQi', '19644yLNdLL', '3521328nlQsrW', '1:615159418744:web:35978469f92b90b5c9828d', '272WZWHtc', '4646570aLqCXI', 'caopoints-info.appspot.com', '654imilfV', 'caopoints-info', '615159418744', 'AIzaSyA5BqxvA4AHcwVZ8IPWvSSHEiJ-3sUgF0g', 'G-08383DC9PC', '8765793wZZYzm', '10mFvQFx']; _0x9a46 = function () { return _0xcff212; }; return _0x9a46(); }
//----
// Initialize Firebase Storage --------
const app = initializeApp(firebaseConfig);
const storage = getStorage();
//---------


var did_hl_maths = document.getElementById("bool_hl_maths");
document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);
var bool_hl_maths = true;
var add_25 = 25;
var counter = 1;
function is_hl_maths() {
    if (counter == 0) {
        document.getElementById("bool_hl_maths").innerHTML = "Yes";
        document.getElementById("adding_25_text").style.opacity = "1";
        document.getElementById("adding_25_text").style.transition = "0.2s";
        bool_hl_maths = true;
        add_25 = 25;
        counter = 1;
    }
    else {
        document.getElementById("bool_hl_maths").innerHTML = "No";
        document.getElementById("adding_25_text").style.opacity = "0";
        bool_hl_maths = false;
        add_25 = 0;
        counter = 0;
    }
}

var target_num = 0;
var hl_num = 0;
var ol_num = 0;

function hide_rows() {
    "use strict";
    // hide all rows
    for (var i = 0; i < 3; i++) {
        var row = "row" + String(i + 1);
        document.getElementById(row).style.display = "none";
    }

    document.getElementById("invalid_input").style.display = "inline";
}

document.getElementById("adding_25_container").style.display = "none";


function is_hl(grade) {
    "use strict";
    hl_sub = (37 == grade) || (46 == grade) || (56 == grade) || (66 == grade) || (77 == grade) || (88 == grade) || (100 == grade);
    if ((hl_sub == true) && (hl_sub != 25)) {
        return true;
    }
    else {
        return false;
    }
}

// grade average and points to grades as list of numbers
function gar_and_ptg(points_needed) {
    "use strict";
    // ol_num hl_num target_num

    // issues of duplicate keys for grade average caluclation
    var dict = {
        'h1': 90,
        'h2': 80,
        'h3': 70,
        'h4': 60,
        'h5/o1': 90,
        'h6/o2': 80,
        'h7/o3': 70,
        'o4': 60,
        'o5': 50,
        'o6': 40,
        'o7': 30,
    };

    if (hl_num > 0) {
        dict['h5/o1'] = 50;
        dict['h6/o2'] = 40;
        dict['h7/o3'] = 30;
    }
    else {
        dict['h5/o1'] = 90;
        dict['h6/o2'] = 80;
        dict['h7/o3'] = 70;
    }

    var mixed_dict = {
        100: 'h1',
        88: 'h2',
        77: 'h3',
        66: 'h4',

        46: 'h6/o2',
        37: 'h7/o3',
        56: 'h5/o1',
        28: 'o4',
        20: 'o5',
        12: 'o6',
        0: 'o7',
    };

    if (points_needed.includes(25) == true) {
        var new_target = 0;
        for (var i = 0; i < points_needed.length - 1; i++) {
            new_target += Number(points_needed[i]);
        }
        new_target += 25;
    }

    var letter_grades = [];

    print(typeof(points_needed));
    for (var i = 0; i < points_needed.length; i++) {

        if (points_needed[i] != 25) {
            letter_grades.push(mixed_dict[points_needed[i]]);
        }
    }

    var points = [];
    for (var i = 0; i < letter_grades.length; i++) {
        points.push(dict[letter_grades[i]]);
    }

    var total = 0;
    for (var i = 0; i < points.length; i++) {
        total += Number(points[i]);
    }

    total = total / points.length;
    var percentage_avg = String(Math.round(total)) + "%";

    var grades_soultion = [];
    for (var i = 0; i < points_needed.length; i++) {
        if (points_needed[i] != 25) {
            grades_soultion.push(mixed_dict[points_needed[i]]);
        }
    }
    var sum_total = summed_total(points_needed);

    return [percentage_avg, grades_soultion, sum_total];

}

function is_25_in_grades(grade) {
    "use strict";
    var hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));

    if ((hl_sub == true)) {
        return true;
    }

    else {
        return false;
    }
}

var matches;
var accounted;
function plus_25(grade) {
    "use strict";
    var output = grade;
    var hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));

    if ((hl_sub == true) && (hl_sub != 25)) {
        output.push(25);
        return output;
    }

    else {
        return output;
    }
}

function letter_grades_to_points(grades) {
    "use strict";
    var points = [];
    var dict = {
        'h1': 100,
        'h2': 88,
        'h3': 77,
        'h4': 66,

        'h5/o1': 56,
        'h6/o2': 46,
        'h7/o3': 37,
        'o4': 28,
        'o5': 20,
        'o6': 12,
        'o7': 0,
    };

    for (var i = 0; i < grades.length; i++) {
        points.push(dict[grades[i]]);
    }

    return points;
}

function count(array, element) {
    "use strict";
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        var current = array[i];
        if (element == current) {
            counter += 1;
        }
    }

    return counter;
}

function summed_total(array) {
    "use strict";
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        counter += Number(array[i]);
    }

    return counter;

}

/* 
the ranking system works by count the number h1, h2, o1, and o2s and then output the easiest soultions by having
the fewest amount of those particular grades
*/
function rankings(grades) {
    "use strict";
    var ranked_grades = [];

    ranked_grades.push(count(grades, 'h1'));
    ranked_grades.push(count(grades, 'h2'));
    ranked_grades.push(count(grades, 'h5/o1'));
    ranked_grades.push(count(grades, 'h6/o2'));

    var total = count(grades, 'h1') + count(grades, 'h2') + count(grades, 'h5/o1') + count(grades, 'h6/o2');

    return [ranked_grades, total];
}

function display_plus_25(matches) {
    "use strict";
    var hl_subs = Number(document.getElementById("hl_subs_text").value);
    var boolen_bank = [];
    for (var i = 0; i < matches.length; i++) {
        var current = matches[i];
        if (is_25_in_grades(current) == true) {
            boolen_bank.push(true);
        }
    }

    if (bool_hl_maths == true && valid_inputs == true) {
        document.getElementById("adding_25_container").style.display = 'inline';
    }

    else {
        document.getElementById("adding_25_container").style.display = 'none';
    }
}

function red_commas(grades) {
    grades = grades.toString();
    grades = grades.replaceAll(",", `<strong class="important-red">,</strong>`);
    return grades;
}

function error_function(error_msg) {
    document.getElementById("invalid_input").innerHTML = error_msg;
    document.getElementById("invalid_input").style.color = "red";
    document.getElementById("adding_25_container").style.display = "none";
    hide_rows();
    document.getElementById("invalid_input").style.display = "inline";
}

var valid_inputs;
window.find_points_needed = async function () {
    "use strict";
    target_num = Number(document.getElementById("target_text").value);
    hl_num = Number(document.getElementById("hl_subs_text").value);
    ol_num = Number(document.getElementById("ol_subs_text").value);

    // check for invalid input
    var invalid_target_input = (target_num <= 0) || (target_num > 625);
    var invalid_subs_input = (hl_num < 0) || (ol_num < 0) || (hl_num > 6) || (ol_num > 6) || (hl_num + ol_num > 6);
    var max_pts = (hl_num * 100) + (ol_num * 56) + add_25;
    var invalid_range = (max_pts >= target_num) == false;

    valid_inputs = (invalid_target_input == false) && (invalid_subs_input == false) && (invalid_range == false);

    console.log('\nbool_hl_maths: ', bool_hl_maths);
    console.log('add_25: ', add_25);
    console.log('max_pts: ', max_pts);
    console.log('invalid_range: ', invalid_range);
    console.log('invalid_target_input: ', invalid_target_input);
    console.log('invalid_subs_input: ', invalid_subs_input);

    var range_error_msg = `It's impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`
    var pts_error_msg = "Your inputted CAO points must not exceed 625 points.";
    var subs_error_msh = "This calculator will not allow for more than 6 subjects in total as inputs."

    if (invalid_range) {
        error_function(range_error_msg);
    }

    else if (invalid_target_input) {
        error_function(pts_error_msg);
    }

    else if (invalid_subs_input) {
        error_function(subs_error_msh);
    }

    else {
        document.getElementById("invalid_input").style.display = "none";

        var base_grades_info = String(bool_hl_maths) + "_grades/[" + String(hl_num) + ", " + String(ol_num) + "].txt";
        var base_points_info = String(bool_hl_maths) + "_points/[" + String(hl_num) + ", " + String(ol_num) + "]_points.txt";

        const grade_ref_text = ref(storage, base_grades_info);
        const grade_url = await Promise.resolve(getDownloadURL(grade_ref_text));
        const grade_response = await fetch(grade_url, { mode: 'cors' });

        const grades = JSON.parse(await grade_response.text());

        const point_ref_text = ref(storage, base_points_info);
        const point_url = await Promise.resolve(getDownloadURL(point_ref_text));
        const point_response = await fetch(point_url, { mode: 'cors' });

        const points = JSON.parse(await point_response.text());

        // change the target_num if nessecary	
        while (points.includes(target_num) == false && target_num <= 625) {
            target_num += 1;
        }

        matches = [];
        accounted = []; // temp container

        var current;
        for (var i = 0; i < grades.length; i++) {
            var c_grade = grades[i][0]; // [x, x, x, x, x, x, x]
            if ((c_grade != 0) && (c_grade != undefined)) {
                var c_point = Number(grades[i][1]);
                c_grade = c_grade.sort();
                if ((c_point >= target_num) && (accounted.includes(c_grade.toString()) == false)) {
                    matches.push(c_grade);
                    accounted.push(c_grade.toString());
                }
            }
        }


        // choosing the easist "ranked" soultion-----

        var all_soultions = []; // all of the current status in one array
        var order_grade_avg = []; // for the soultions to follow from smallest to biggest

        for (var i = 0; i < matches.length; i++) {
            current = matches[i];
            var ranked_info = gar_and_ptg(current);
            var c_grade_avg = ranked_info[0]; // current grade average
            var c_soultion = ranked_info[1]; // current grades soultion e.g. [100, 100, 100, 100, 100, 100, 25]
            var c_total = ranked_info[2]; // current summed total of grades soultion

            // has to be within 10 of target and the easiest soultion (by choosing the lowest grade average)
            if (target_num + 10 >= c_total) {

                if (order_grade_avg.includes(c_grade_avg) == false) {
                    order_grade_avg.push(c_grade_avg);
                }

                all_soultions.push([c_soultion, c_grade_avg]);
            }
        }

        order_grade_avg = order_grade_avg.sort(); // .sort() so the grade avg can be from the smallest to the largest

        var collected_soultions = [];
        var min_grade_avg = order_grade_avg[0];
        var order_rank_total = [];
        for (var i = 0; i < all_soultions.length; i++) {
            var current = all_soultions[i];
            var c_grade = current[0];
            var c_avg = current[1];

            if (c_avg <= min_grade_avg) {
                collected_soultions.push([c_grade, rankings(c_grade)]);
                var ranked_total = rankings(c_grade)[1]; // the summed total of the "ranks" which are defined near the function
                collected_soultions.push([c_grade, ranked_total]);

                // to avoid duplicates in the order_rank_total
                if (order_rank_total.includes(ranked_total) == false) {
                    order_rank_total.push(ranked_total);
                }
            }
        }


        order_rank_total = order_rank_total.sort(); // listed from smallest to largest

        var final_soultion = [];

        for (var x = 0; x < order_rank_total.length; x++) {
            var order = order_rank_total[x];
            for (var i = 0; i < collected_soultions.length; i++) {
                if (order <= collected_soultions[i][1]) {
                    // the plus_25 adds 25 to the list if it is eligible for the points
                    final_soultion.push(plus_25(letter_grades_to_points(collected_soultions[i][0])));
                }
            }
        }

        final_soultion = final_soultion.sort().reverse(); // the end of the list tends to have small grade averages which is it's reversed

        // create the new matches (so the code can continute as is with its output)
        // cap the length of matches at 3 to avoid errors with the rows output and to not overwhelm the user

        matches = final_soultion.splice(0, 3);

        // ---------------------------


        // then display output ------------------
        var points_req;
        var req_results;
        var grades_needed;

        for (var i = 0; i < matches.length; i++) {
            var row = "row" + String(i + 1);
            document.getElementById(row).style.display = "inline";

            var current = gar_and_ptg(matches[i]); // letter grades

            var grade_avg_req = current[0];
            var req_results = current[1];
            req_results = red_commas(req_results);
            var points_req = current[2];

            if ((matches[i].includes(25)) && (Number(document.getElementById("hl_subs_text").value) == 0 || bool_hl_maths == false)) {
                points_req -= 25;
            }

            var id_points_req = "points_req" + String(i + 1);
            var id_req_results = "req_results" + String(i + 1);
            var id_grade_avg_req = "grade_avg_req" + String(i + 1);
            document.getElementById(id_points_req).innerHTML = String(points_req);
            document.getElementById(id_req_results).innerHTML = String(req_results);
            document.getElementById(id_grade_avg_req).innerHTML = String(grade_avg_req);
        }

        // hide the rows that aren't used
        if ((matches.length > 0) && (matches.length != 3)) {
            for (var i = 0; i < 3 - matches.length; i++) {
                var row = "row" + String(3 - (i + 1) + 1);
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

document.getElementById("drop1-title").addEventListener("click", func_drop1);
var drop1_counter = 1;
function func_drop1() {
    "use strict";
    if (drop1_counter == 0) {
        document.getElementById("drop1-content1").style.display = "block";
        document.getElementById("drop1-content2").style.display = "block";
        drop1_counter = 1;

    }
    else {
        document.getElementById("drop1-content1").style.display = "none";
        document.getElementById("drop1-content2").style.display = "none";
        drop1_counter = 0;
    }
}

document.getElementById("drop2-title").addEventListener("click", func_drop2);
var drop2_counter = 1;
function func_drop2() {
    "use strict";
    if (drop2_counter == 0) {
        document.getElementById("drop2-content").style.display = "block";
        drop2_counter = 1;
    }
    else {
        document.getElementById("drop2-content").style.display = "none";
        drop2_counter = 0;
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

add "use-strict"; to all functions (this will speed up the changes in the innerHTML and DOM usage along with helping you to write cleaner code)
*/
