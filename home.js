// Import the functions you need from the SDKs you need
(function(_0x263fd2,_0x584beb){var _0x17cf6a=_0x414d,_0x4363f2=_0x263fd2();while([]){try{var _0x5a2a5c=-parseInt(_0x17cf6a(0xdc))/0x1*(-parseInt(_0x17cf6a(0xdb))/0x2)+parseInt(_0x17cf6a(0xe0))/0x3*(parseInt(_0x17cf6a(0xe2))/0x4)+-parseInt(_0x17cf6a(0xda))/0x5+-parseInt(_0x17cf6a(0xdd))/0x6+-parseInt(_0x17cf6a(0xdf))/0x7+-parseInt(_0x17cf6a(0xde))/0x8+-parseInt(_0x17cf6a(0xe1))/0x9*(-parseInt(_0x17cf6a(0xe3))/0xa);if(_0x5a2a5c===_0x584beb)break;else _0x4363f2["push"](_0x4363f2["shift"]());}catch(_0x5ceb23){_0x4363f2["push"](_0x4363f2["shift"]());}}}(_0x2b49,0x61bea));import{initializeApp}from"firebase/app";import{getStorage,ref,getDownloadURL}from"firebase/storage";function _0x414d(_0x222ec5,_0x503851){var _0x2b49c0=_0x2b49();return _0x414d=function(_0x414d15,_0x5adf98){_0x414d15=_0x414d15-0xda;var _0x57b793=_0x2b49c0[_0x414d15];return _0x57b793;},_0x414d(_0x222ec5,_0x503851);}import{getPerformance}from"firebase/performance";function _0x2b49(){var _0x339e7a=["1176590kaoJCF","2VAUSbd","479099Ucrlzf","3591768IrqfgE","2986712kXaBci","1743987NNfCHG","66aunyoI","9KWjkdA","60440PYMvVF","10452690wIoOgD"];_0x2b49=function(){return _0x339e7a;};return _0x2b49();}

// browserify home.js -o bundle.js
// npx eslint home.js --fix
// npm run build (at root)

// firebase config
function _0xd3cb(){const _0x36f275=["4344320YlXhZu","1359270EfArRl","575501HSVDHW","1455330csBHSf","4152835ynfIgT","https://caopoints-info-default-rtdb.europe-west1.firebasedatabase.app","AIzaSyA5BqxvA4AHcwVZ8IPWvSSHEiJ-3sUgF0g","caopoints-info","615159418744","7MFsvxx","913400mOIRPL","caopoints-info.firebaseapp.com","caopoints-info.appspot.com","3159376VIhlki"];_0xd3cb=function(){return _0x36f275;};return _0xd3cb();}function _0x59bb(_0x59c83a,_0x200952){const _0xd3cb89=_0xd3cb();return _0x59bb=function(_0x59bb69,_0x467649){_0x59bb69=_0x59bb69-0xc1;let _0x8339e7=_0xd3cb89[_0x59bb69];return _0x8339e7;},_0x59bb(_0x59c83a,_0x200952);}const _0x1b6156=_0x59bb;(function(_0x4ff776,_0x1b1779){const _0x150f33=_0x59bb,_0x2e8f02=_0x4ff776();while([]){try{const _0xa628dc=parseInt(_0x150f33(0xc1))/0x1+-parseInt(_0x150f33(0xc9))/0x2+-parseInt(_0x150f33(0xc2))/0x3+-parseInt(_0x150f33(0xcc))/0x4+parseInt(_0x150f33(0xc3))/0x5+parseInt(_0x150f33(0xce))/0x6*(parseInt(_0x150f33(0xc8))/0x7)+parseInt(_0x150f33(0xcd))/0x8;if(_0xa628dc===_0x1b1779)break;else _0x2e8f02["push"](_0x2e8f02["shift"]());}catch(_0x565ae2){_0x2e8f02["push"](_0x2e8f02["shift"]());}}}(_0xd3cb,0x6c65f));const firebaseConfig={"apiKey":_0x1b6156(0xc5),"authDomain":_0x1b6156(0xca),"databaseURL":_0x1b6156(0xc4),"projectId":_0x1b6156(0xc6),"storageBucket":_0x1b6156(0xcb),"messagingSenderId":_0x1b6156(0xc7),"appId":"1:615159418744:web:35978469f92b90b5c9828d","measurementId":"G-08383DC9PC"};
 
// Initialize Firebase Storage --------
const app = initializeApp(firebaseConfig);
const storage = getStorage();
getPerformance(app);
// ---------

document.getElementById("bool_hl_maths").addEventListener("click", is_hl_maths);
let bool_hl_maths = true;
let add_25 = 25;
let counter = 1;
function is_hl_maths() {
  if (counter == 0) {
    document.getElementById("bool_hl_maths").innerHTML = "Yes";
    document.getElementById("adding_25_text").style.opacity = "1";
    document.getElementById("adding_25_text").style.transition = "0.2s";
    bool_hl_maths = true;
    add_25 = 25;
    counter = 1;
  } else {
    document.getElementById("bool_hl_maths").innerHTML = "No";
    document.getElementById("adding_25_text").style.opacity = "0";
    bool_hl_maths = false;
    add_25 = 0;
    counter = 0;
  }
}

let target_num = 0;
let hl_num = 0;
let ol_num = 0;

function hide_rows() {
  "use strict";
  // hide all rows
  for (let i = 0; i < 3; i++) {
    const row = "row" + String(i + 1);
    document.getElementById(row).style.display = "none";
  }

  document.getElementById("invalid_input").style.display = "inline";
}

document.getElementById("adding_25_container").style.display = "none";

// grade average and points to grades as list of numbers
function gar_and_ptg(points_needed) {
  "use strict";
  // ol_num hl_num target_num

  // issues of duplicate keys for grade average caluclation
  const dict = {
    "h1": 90,
    "h2": 80,
    "h3": 70,
    "h4": 60,
    "h5/o1": 90,
    "h6/o2": 80,
    "h7/o3": 70,
    "o4": 60,
    "o5": 50,
    "o6": 40,
    "o7": 30,
  };

  if (hl_num > 0) {
    dict["h5/o1"] = 50;
    dict["h6/o2"] = 40;
    dict["h7/o3"] = 30;
  } else {
    dict["h5/o1"] = 90;
    dict["h6/o2"] = 80;
    dict["h7/o3"] = 70;
  }

  const mixed_dict = {
    100: "h1",
    88: "h2",
    77: "h3",
    66: "h4",

    46: "h6/o2",
    37: "h7/o3",
    56: "h5/o1",
    28: "o4",
    20: "o5",
    12: "o6",
    0: "o7",
  };

  const letter_grades = [];
  for (var i = 0; i < points_needed.length; i++) {
    if (points_needed[i] != 25) {
      letter_grades.push(mixed_dict[points_needed[i]]);
    }
  }

  const points = [];
  for (i = 0; i < letter_grades.length; i++) {
    points.push(dict[letter_grades[i]]);
  }

  let total = 0;
  for (i = 0; i < points.length; i++) {
    total += Number(points[i]);
  }

  total = total / points.length;
  const percentage_avg = String(Math.round(total)) + "%";

  const grades_soultion = [];
  for (i = 0; i < points_needed.length; i++) {
    if (points_needed[i] != 25) {
      grades_soultion.push(mixed_dict[points_needed[i]]);
    }
  }
  const sum_total = summed_total(points_needed);

  return [percentage_avg, grades_soultion, sum_total];
}

function is_25_in_grades(grade) {
  "use strict";
  const hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));

  if ((hl_sub == true)) {
    return true;
  } else {
    return false;
  }
}

let matches;
let accounted;
function plus_25(grade) {
  "use strict";
  const output = grade;
  const hl_sub = (grade.includes(46)) || (grade.includes(56)) || (grade.includes(66)) || (grade.includes(77)) || (grade.includes(88)) || (grade.includes(100));

  if ((hl_sub == true) && (hl_sub != 25)) {
    output.push(25);
    return output;
  } else {
    return output;
  }
}

function letter_grades_to_points(grades) {
  "use strict";
  const points = [];
  const dict = {
    "h1": 100,
    "h2": 88,
    "h3": 77,
    "h4": 66,

    "h5/o1": 56,
    "h6/o2": 46,
    "h7/o3": 37,
    "o4": 28,
    "o5": 20,
    "o6": 12,
    "o7": 0,
  };

  for (let i = 0; i < grades.length; i++) {
    points.push(dict[grades[i]]);
  }

  return points;
}

function count(array, element) {
  "use strict";
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (element == current) {
      counter += 1;
    }
  }

  return counter;
}

function summed_total(array) {
  "use strict";
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
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
  const ranked_grades = [];

  ranked_grades.push(count(grades, "h1"));
  ranked_grades.push(count(grades, "h2"));
  ranked_grades.push(count(grades, "h5/o1"));
  ranked_grades.push(count(grades, "h6/o2"));

  const total = count(grades, "h1") + count(grades, "h2") + count(grades, "h5/o1") + count(grades, "h6/o2");

  return [ranked_grades, total];
}

function display_plus_25(matches) {
  "use strict";
  const boolen_bank = [];
  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    if (is_25_in_grades(current) == true) {
      boolen_bank.push(true);
    }
  }

  if (bool_hl_maths == true && valid_inputs == true) {
    document.getElementById("adding_25_container").style.display = "inline";
  } else {
    document.getElementById("adding_25_container").style.display = "none";
  }
}

function red_commas(grades) {
  grades = grades.toString();
  grades = grades.replaceAll(",", "<strong class=\"important-red\">,</strong>");
  return grades;
}

function error_function(error_msg) {
  document.getElementById("invalid_input").innerHTML = error_msg;
  document.getElementById("invalid_input").style.color = "red";
  document.getElementById("adding_25_container").style.display = "none";
  hide_rows();
  document.getElementById("invalid_input").style.display = "inline";
}

let valid_inputs;
document.getElementById("output-button").addEventListener("click", find_points_needed);
async function find_points_needed() {
  "use strict";
  target_num = Number(document.getElementById("target_text").value);
  hl_num = Number(document.getElementById("hl_subs_text").value);
  ol_num = Number(document.getElementById("ol_subs_text").value);

  // check for invalid input
  const invalid_target_input = (target_num <= 0) || (target_num > 625);
  const invalid_subs_input = (hl_num < 0) || (ol_num < 0) || (hl_num > 6) || (ol_num > 6) || (hl_num + ol_num > 6);
  const max_pts = (hl_num * 100) + (ol_num * 56) + add_25;
  const invalid_range = (max_pts >= target_num) == false;

  valid_inputs = (invalid_target_input == false) && (invalid_subs_input == false) && (invalid_range == false);

  // console.log('\nbool_hl_maths: ', bool_hl_maths);
  // console.log('add_25: ', add_25);
  // console.log('max_pts: ', max_pts);
  // console.log('invalid_range: ', invalid_range);
  // console.log('invalid_target_input: ', invalid_target_input);
  // console.log('invalid_subs_input: ', invalid_subs_input);

  const range_error_msg = `It's impossible to achieve ${target_num} CAO points with ${hl_num} higher-level subjects and ${ol_num} ordinary-level subjects.`;
  const pts_error_msg = "Your inputted CAO points must be between 1 and 625.";
  const subs_error_msh = "This calculator will not allow for more than 6 subjects in total as inputs.";

  if (invalid_range) {
    error_function(range_error_msg);
  } else if (invalid_target_input) {
    error_function(pts_error_msg);
  } else if (invalid_subs_input) {
    error_function(subs_error_msh);
  } else {
    document.getElementById("invalid_input").style.display = "none";

    const base_grades_info = String(bool_hl_maths) + "_grades/[" + String(hl_num) + ", " + String(ol_num) + "].txt";
    const base_points_info = String(bool_hl_maths) + "_points/[" + String(hl_num) + ", " + String(ol_num) + "]_points.txt";

    const grade_ref_text = ref(storage, base_grades_info);
    const grade_url = await Promise.resolve(getDownloadURL(grade_ref_text));
    const grade_response = await fetch(grade_url, { mode: "cors" });

    const grades = JSON.parse(await grade_response.text());

    const point_ref_text = ref(storage, base_points_info);
    const point_url = await Promise.resolve(getDownloadURL(point_ref_text));
    const point_response = await fetch(point_url, { mode: "cors" });

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
        const c_point = Number(grades[i][1]);
        c_grade = c_grade.sort();
        if ((c_point >= target_num) && (accounted.includes(c_grade.toString()) == false)) {
          matches.push(c_grade);
          accounted.push(c_grade.toString());
        }
      }
    }


    // choosing the easist "ranked" soultion-----

    const all_soultions = []; // all of the current status in one array
    let order_grade_avg = []; // for the soultions to follow from smallest to biggest

    for (i = 0; i < matches.length; i++) {
      current = matches[i];
      const ranked_info = gar_and_ptg(current);
      const c_grade_avg = ranked_info[0]; // current grade average
      const c_soultion = ranked_info[1]; // current grades soultion e.g. [100, 100, 100, 100, 100, 100, 25]
      const c_total = ranked_info[2]; // current summed total of grades soultion

      // has to be within 10 of target and the easiest soultion (by choosing the lowest grade average)
      if (target_num + 10 >= c_total) {
        if (order_grade_avg.includes(c_grade_avg) == false) {
          order_grade_avg.push(c_grade_avg);
        }

        all_soultions.push([c_soultion, c_grade_avg]);
      }
    }

    order_grade_avg = order_grade_avg.sort(); // .sort() so the grade avg can be from the smallest to the largest

    const collected_soultions = [];
    const min_grade_avg = order_grade_avg[0];
    let order_rank_total = [];
    for (i = 0; i < all_soultions.length; i++) {
      current = all_soultions[i];
      c_grade = current[0];
      const c_avg = current[1];

      if (c_avg <= min_grade_avg) {
        collected_soultions.push([c_grade, rankings(c_grade)]);
        const ranked_total = rankings(c_grade)[1]; // the summed total of the "ranks" which are defined near the function
        collected_soultions.push([c_grade, ranked_total]);

        // to avoid duplicates in the order_rank_total
        if (order_rank_total.includes(ranked_total) == false) {
          order_rank_total.push(ranked_total);
        }
      }
    }


    order_rank_total = order_rank_total.sort(); // listed from smallest to largest

    let final_soultion = [];

    for (let x = 0; x < order_rank_total.length; x++) {
      const order = order_rank_total[x];
      for (i = 0; i < collected_soultions.length; i++) {
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

    for (i = 0; i < matches.length; i++) {
      var row = "row" + String(i + 1);
      document.getElementById(row).style.display = "inline";

      current = gar_and_ptg(matches[i]); // letter grades

      const grade_avg_req = current[0];
      req_results = current[1];
      req_results = red_commas(req_results);
      points_req = current[2];

      if ((matches[i].includes(25)) && (Number(document.getElementById("hl_subs_text").value) == 0 || bool_hl_maths == false)) {
        points_req -= 25;
      }

      const id_points_req = "points_req" + String(i + 1);
      const id_req_results = "req_results" + String(i + 1);
      const id_grade_avg_req = "grade_avg_req" + String(i + 1);
      document.getElementById(id_points_req).innerHTML = String(points_req);
      document.getElementById(id_req_results).innerHTML = String(req_results);
      document.getElementById(id_grade_avg_req).innerHTML = String(grade_avg_req);
    }

    // hide the rows that aren't used
    if ((matches.length > 0) && (matches.length != 3)) {
      for (i = 0; i < 3 - matches.length; i++) {
        row = "row" + String(3 - (i + 1) + 1);
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
let drop1_counter = 1;
function func_drop1() {
  "use strict";
  if (drop1_counter == 0) {
    document.getElementById("drop1-content1").style.display = "block";
    document.getElementById("drop1-content2").style.display = "block";
    document.getElementById("drop1-content1").scrollIntoView();
    drop1_counter = 1;
  } else {
    document.getElementById("drop1-content1").style.display = "none";
    document.getElementById("drop1-content2").style.display = "none";
    drop1_counter = 0;
  }
}

document.getElementById("drop2-title").addEventListener("click", func_drop2);
let drop2_counter = 1;
function func_drop2() {
  "use strict";
  if (drop2_counter == 0) {
    document.getElementById("drop2-content").style.display = "block";
    document.getElementById("drop2-content").scrollIntoView();
    drop2_counter = 1;
  } else {
    document.getElementById("drop2-content").style.display = "none";
    drop2_counter = 0;
  }
}

// --------------------------------------------------------------------------------------