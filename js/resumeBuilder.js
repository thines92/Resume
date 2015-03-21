

	var bio = {
		"name" : "Tyler",
		"role" : "Web Developer",
		"contacts" : {
			"email" : "tylerhines1992@gmail.com",
			"mobile" : "508-322-8336",
			"github" : "thines92",
			"twitter" : "@thines92",
			"location" : "San Francisco"
		},
		"bioPic" : "images/tylerpic.jpg",
		"welcomeMessage" : "Welcome to my resume!",
		"skills" : [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
		]

	}

	var work = {
		"jobs" : [
		{
			"title" : "Sales Consultant",
			"employer" : "AT&T",
			"dates" : "March, 2012 - Current",
			"city" : "Norwell",
			"description" : "Discover customers needs and suggest appropriate products."
		},
		{
			"title" : "Sales",
			"employer" : "Target Mobile",
			"dates" : "September, 2011 - March, 2012",
			"city" : "Kingston",
			"description" : "Discover customers needs and suggest appropriate products."
		},
		{
			"title" : "Sales",
			"employer" : "Sears",
			"dates" : "October, 2009 - October, 2011",
			"city" : "Kingston",
			"description" : "Educate customers on Tools, Home and Garden and Fitness products and suggest the appropriate products."
		}
		]
	}



	var education = {
		"schools" : [
		{
			"school" : "Dimond High School",
			"schoolCity" : "Anchorage, Alaska",
			"graduation" : "N/A"

	},
	{
		"school" : "Silver Lake Regional High School",
		"schoolCity" : "Kingston, MA",
		"graduation" : "2011"
	}
	],
	"onlineCourses": [
		{
			"title" : "Intro to HTML/CSS",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804"
		}
		]
	}

	var projects = {
		"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Sample Project 1",
			"images" : "Blank Image"

		}
	]
}

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);


	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}



	function displayWork() {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);


	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(
		formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(
		formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(
		formattedDescription);
	}
	}
	displayWork();

	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x,y);
	});

	function inName(name) {
		name = name.trim().split(" ");
		console.log(name);
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

		return name[0] + " " + name[1];
	}


	$("#main").append(internationlizeButton);
