<!DOCTYPE HTML>
<html>
	<head>
	<link rel="canonical" href="https://cao-points-info.com/" />
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-08383DC9PC"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-08383DC9PC');
	</script>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-P9SWD5K');</script>
	<!-- End Google Tag Manager -->
		<meta charset="utf-8">
		<meta name="description" content="Outputs required grade averages and suggested grades to reach a CAO point target.">
		<meta name="keywords" content="CAO, Leaving Cert">
		<meta name="author" content="Emmanuel Koledoye">
		<link href='style.css' type='text/css' rel='stylesheet' />
		<!-- // automatically sets the website to viewed in desktop mode -->
		<meta name="viewport" content="width=device-width, initial-scale=0.1">
		<title>
			Info On CAO Points
		</title>
		<!-- This is the favicon image -->
		<link rel='icon' href='images/logo.png'>
	</head>
	<body>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9SWD5K"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
		<center>
			<div id="welcome" class="site-info" style="font-size: 48px;">
				Enter your <strong class="info_output">CAO point target</strong> into the  <strong class="info_output">text fields</strong> to see the <strong class="important-red">suggested</strong> <strong class="info_output">grade averages</strong>, and   <strong class="info_output">results </strong> required to meet a <strong class="info_output">CAO point target</strong>.
			</div>

			<a style="display:none;" href="//www.dmca.com/Protection/Status.aspx?ID=2856b17e-9262-4ec9-bc17-c6fda4dbc1f2" title="DMCA.com Protection Status" class="dmca-badge"> <img class="image-enlargen"src ="images/dmca-image.png"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
		</center>

		<br>

		<center>
			<div style="width: auto;" class="text_box"><input id="target_text" type="number" style="height: 200px;font-size: 70px;font-family: 'Courier new';" class="text-enlargen" class="input_style" placeholder="CAO pts: 1-625"><strong id="target"> </strong></div>
		</center>

		<center>
			<table>
				<tr>
					<th style="display:inline;float:left;">
						<center>
						<div style="margin: auto;"class="text_box"><input type="number" id="hl_subs_text"  style="height: 200px;font-size: 70px;" class="text-enlargen" class="input_style" placeholder="HL Subjects: 1-6"><strong id="hl_subs"> </strong></div>
						</center>
					</th>
					
					
					<th style="display:inline;float:right;">
						<center>
						<div style="margin: auto;"class="text_box"><input type="number" id="ol_subs_text"  style="height: 200px;font-size: 70px;" class="text-enlargen" class="input_style" placeholder="OL Subjects: 1-6"><strong id="ol_subs"> </strong></div>
						</center>
					</th>
				
				</tr>
			</table>
			
		</center>
		<br>

		<div id="info_container" style="margin:auto">
			<br>
			<div id="adding_25_container">
				<h1>
					Adding +25
				</h1>
			</div>

			<div class="categories" id="row1">
				<h1> Recommended Points: <strong class="colon"> : </strong> <strong class="info_output" id="points_req1">  </strong>  </h1>
				<h1> <strong id="ideal"> (Suggested) </strong>Required Results<strong class="colon"> : </strong> <strong class="info_output" id="req_results1">  </strong>  </h1>
				<h1> <strong id="ideal"> (Minimum) </strong>Grade Average Required<strong class="colon"> : </strong><strong class="info_output" id="grade_avg_req1">  </strong>  </h1>
			</div>

			<div class="categories" id="row2">
				<h1><center><strong class="important-red"> OR</strong></center></h1>
				<h1> Recommended Points: <strong class="colon"> : </strong> <strong class="info_output" id="points_req2">  </strong>  </h1>
				<h1> <strong id="ideal"> (Suggested) </strong>Required Results<strong class="colon"> : </strong> <strong class="info_output" id="req_results2">  </strong>  </h1>
				<h1> <strong id="ideal"> (Minimum) </strong>Grade Average Required<strong class="colon"> : </strong><strong class="info_output" id="grade_avg_req2">  </strong>  </h1>
			</div>
		

			<div class="categories" id="row3">
				<h1><center><strong class="important-red"> OR </strong></center></h1>
				<h1> Recommended Points: <strong class="colon"> : </strong> <strong class="info_output" id="points_req3">  </strong>  </h1>
				<h1> <strong id="ideal"> (Suggested) </strong>Required Results<strong class="colon"> : </strong> <strong class="info_output" id="req_results3">  </strong>  </h1>
				<h1> <strong id="ideal"> (Minimum) </strong>Grade Average Required<strong class="colon"> : </strong><strong class="info_output" id="grade_avg_req3">  </strong>  </h1>
			</div>

			<div> <h1><strong id="invalid_input">  </strong></h1> </div>
		</div>

		<!-- hide all rows -->
		<script type="text/javascript">
		// hide all rows
		for (var i = 0; i < 3; i++) {
			var row = "row"+String(i+1);
			document.getElementById(row).style.display = "none";
		}

		document.getElementById("adding_25_container").style.display = "none";
		</script>

		<br>

		<center>
			<table>
				<tr>
					<th>
						<div id = "support">
							<a href="https://ko-fi.com/agent421"> <img src="images/kofi.png" class="bottom-images"  alt="Support Me On Ko-Fi"> </a>
						</div>
					</th>

					<th>
						<div>
							<a href="https://github.com/Agent421/cao-points-info"> <img src="images/github.png" class="bottom-images" alt="My github"> </a>
						</div>
					</th>
				</tr>
			</table>
		</center>

		<br>

		<center>
			<div class="general_background">
				<h1 class="headings"> What is the CAO points system?</h1>
			</div>
		
			<br>
		
			<img src="images/points-system.jpg" width="1500px">
		</center>
		
		<br>
		
		<div class="general_text">
			<div class="general_background">
				<p>
					CAO Stands for <a href="https://www.cao.ie/" id="cao-link" target="_blank"> <strong class="important-red">C</strong>entral </strong><strong class="important-red">A</strong>pplications </strong><strong class="important-red">O</strong>ffice</a>
				</p>
				<p>They essentially process applications for Irish leaving cert students for third-level education.</p>
				<p>
					The tool above is targeted at senior Irish Secondary school students. This tool would be for Students from the 4th to 6th year.
				</p>
				<p>
					<strong class="important-red">
						I am not affiliated with the Central Applications Office or the Irish education system. 
					</strong>
				</p>
			</div>
		</div>
		
		<br>

		<center>
			<div class="general_background">
				<h1 class="headings"> Why Use my tool?</h1>
			</div>
		</center>
		
		<br>
		
		<div class="general_text">
			<div class="general_background">
					<p>
					When I was an Irish Leaving cert student it was frustrating and time-consuming to calculate an ideal grade requirement to reach a CAO points target.
					</p>
					<p>So I created this tool.</p>
					<p>The tool quickly outputs an ideal grade requirement to reach a CAO point target which also accounts for the amount of higher level and ordinary level subjects that the user does and then outputs the grade average required as a bonus.</p>
					<p>The tool saves time as it may be time-consuming to calculate a grade combination that you are comfortable with.</p>
					<p>The tool also completely <strong class="important-red">FREE</strong> to use and doesn't retain any of the user's inputted information.</p>
					<p style="color: #0066ff;">TLDR; The tool saves students time, stress, and money.</p>
			</div>
		</div>

		<br>
		
		<center>
			<a href="#top">
				<button class="buttons-style">Back to top</button>
			</a>
		</center>

<br>

<script type="module" src="home.js">
</script>

<script type="module" src="darkreader.js">
</script>


</body>
</html><!DOCTYPE HTML>
<html>
	<head>
	<link rel="canonical" href="https://cao-points-info.com/" />
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-08383DC9PC"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-08383DC9PC');
	</script>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-P9SWD5K');</script>
	<!-- End Google Tag Manager -->
		<meta charset="utf-8">
		<meta name="description" content="Outputs required grade averages and suggested grades to reach a CAO point target.">
		<meta name="keywords" content="CAO, Leaving Cert">
		<meta name="author" content="Emmanuel Koledoye">
		<link href='style.css' type='text/css' rel='stylesheet' />
		<!-- // automatically sets the website to viewed in desktop mode -->
		<meta name="viewport" content="width=device-width, initial-scale=0.1">
		<title>
			Info On CAO Points
		</title>
		<!-- This is the favicon image -->
		<link rel='icon' href='images/logo.png'>
	</head>
	<body>
	<!-- Google Tag Manager (noscript) -->
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P9SWD5K"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<!-- End Google Tag Manager (noscript) -->
		<center>
			<div id="welcome" class="site-info" style="font-size: 48px;">
				Enter your <strong class="info_output">CAO point target</strong> into the  <strong class="info_output">text fields</strong> to see the <strong class="important-red">suggested</strong> <strong class="info_output">grade averages</strong>, and   <strong class="info_output">results </strong> required to meet a <strong class="info_output">CAO point target</strong>.
			</div>

			<a style="display:none;" href="//www.dmca.com/Protection/Status.aspx?ID=2856b17e-9262-4ec9-bc17-c6fda4dbc1f2" title="DMCA.com Protection Status" class="dmca-badge"> <img class="image-enlargen"src ="images/dmca-image.png"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
		</center>

		<br>

		<center>
			<div style="width: auto;" class="text_box"><input id="target_text" type="number" style="height: 200px;font-size: 70px;font-family: 'Courier new';" class="text-enlargen" class="input_style" placeholder="CAO pts: 1-625"><strong id="target"> </strong></div>
		</center>

		<center>
			<table>
				<tr>
					<th style="display:inline;float:left;">
						<center>
						<div style="margin: auto;"class="text_box"><input type="number" id="hl_subs_text"  style="height: 200px;font-size: 70px;" class="text-enlargen" class="input_style" placeholder="HL Subjects: 1-6"><strong id="hl_subs"> </strong></div>
						</center>
					</th>
					
					
					<th style="display:inline;float:right;">
						<center>
						<div style="margin: auto;"class="text_box"><input type="number" id="ol_subs_text"  style="height: 200px;font-size: 70px;" class="text-enlargen" class="input_style" placeholder="OL Subjects: 1-6"><strong id="ol_subs"> </strong></div>
						</center>
					</th>
				
				</tr>
			</table>
			
		</center>
		<br>

		<div id="info_container" style="margin:auto">
			<br>
			<div id="adding_25_container">
				<h1>
					Adding +25
				</h1>
			</div>

			<div class="categories" id="row1">
				<h1> Recommended Points: <strong class="colon"> : </strong> <strong class="info_output" id="points_req1">  </strong>  </h1>
				<h1> <strong id="ideal"> (Suggested) </strong>Required Results<strong class="colon"> : </strong> <strong class="info_output" id="req_results1">  </strong>  </h1>
				<h1> <strong id="ideal"> (Minimum) </strong>Grade Average Required<strong class="colon"> : </strong><strong class="info_output" id="grade_avg_req1">  </strong>  </h1>
			</div>

			<div class="categories" id="row2">
				<h1><center><strong class="important-red"> OR</strong></center></h1>
				<h1> Recommended Points: <strong class="colon"> : </strong> <strong class="info_output" id="points_req2">  </strong>  </h1>
				<h1> <strong id="ideal"> (Suggested) </strong>Required Results<strong class="colon"> : </strong> <strong class="info_output" id="req_results2">  </strong>  </h1>
				<h1> <strong id="ideal"> (Minimum) </strong>Grade Average Required<strong class="colon"> : </strong><strong class="info_output" id="grade_avg_req2">  </strong>  </h1>
			</div>
		

			<div class="categories" id="row3">
				<h1><center><strong class="important-red"> OR </strong></center></h1>
				<h1> Recommended Points: <strong class="colon"> : </strong> <strong class="info_output" id="points_req3">  </strong>  </h1>
				<h1> <strong id="ideal"> (Suggested) </strong>Required Results<strong class="colon"> : </strong> <strong class="info_output" id="req_results3">  </strong>  </h1>
				<h1> <strong id="ideal"> (Minimum) </strong>Grade Average Required<strong class="colon"> : </strong><strong class="info_output" id="grade_avg_req3">  </strong>  </h1>
			</div>

			<div> <h1><strong id="invalid_input">  </strong></h1> </div>
		</div>

		<!-- hide all rows -->
		<script type="text/javascript">
		// hide all rows
		for (var i = 0; i < 3; i++) {
			var row = "row"+String(i+1);
			document.getElementById(row).style.display = "none";
		}

		document.getElementById("adding_25_container").style.display = "none";
		</script>

		<br>

		<center>
			<table>
				<tr>
					<th>
						<div id = "support">
							<a href="https://ko-fi.com/agent421"> <img src="images/kofi.png" class="bottom-images"  alt="Support Me On Ko-Fi"> </a>
						</div>
					</th>

					<th>
						<div>
							<a href="https://github.com/Agent421/cao-points-info"> <img src="images/github.png" class="bottom-images" alt="My github"> </a>
						</div>
					</th>
				</tr>
			</table>
		</center>

		<br>

		<center>
			<div class="general_background">
				<h1 class="headings"> What is the CAO points system?</h1>
			</div>
		
			<br>
		
			<img src="images/points-system.jpg" width="1500px">
		</center>
		
		<br>
		
		<div class="general_text">
			<div class="general_background">
				<p>
					CAO Stands for <a href="https://www.cao.ie/" id="cao-link" target="_blank"> <strong class="important-red">C</strong>entral </strong><strong class="important-red">A</strong>pplications </strong><strong class="important-red">O</strong>ffice</a>
				</p>
				<p>They essentially process applications for Irish leaving cert students for third-level education.</p>
				<p>
					The tool above is targeted at senior Irish Secondary school students. This tool would be for Students from the 4th to 6th year.
				</p>
				<p>
					<strong class="important-red">
						I am not affiliated with the Central Applications Office or the Irish education system. 
					</strong>
				</p>
			</div>
		</div>
		
		<br>

		<center>
			<div class="general_background">
				<h1 class="headings"> Why Use my tool?</h1>
			</div>
		</center>
		
		<br>
		
		<div class="general_text">
			<div class="general_background">
					<p>
					When I was an Irish Leaving cert student it was frustrating and time-consuming to calculate an ideal grade requirement to reach a CAO points target.
					</p>
					<p>So I created this tool.</p>
					<p>The tool quickly outputs an ideal grade requirement to reach a CAO point target which also accounts for the amount of higher level and ordinary level subjects that the user does and then outputs the grade average required as a bonus.</p>
					<p>The tool saves time as it may be time-consuming to calculate a grade combination that you are comfortable with.</p>
					<p>The tool also completely <strong class="important-red">FREE</strong> to use and doesn't retain any of the user's inputted information.</p>
					<p style="color: #0066ff;">TLDR; The tool saves students time, stress, and money.</p>
			</div>
		</div>

		<br>
		
		<center>
			<a href="#top">
				<button class="buttons-style">Back to top</button>
			</a>
		</center>

<br>

<script type="module" src="home.js">
</script>

<script type="module" src="darkreader.js">
</script>


</body>
</html>
