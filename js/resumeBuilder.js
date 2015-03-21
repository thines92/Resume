

	var bio = {

		"name" : "Tyler Hines",
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
			"degree" : "N/A",
			"schoolLocation" : "Anchorage, Alaska",
			"dates" : "2008 - 2009",
			"major" : "N/A",
			"graduation" : "N/A"

	},
	{
		"school" : "Silver Lake Regional High School",
		"degree" : "N/A",
		"schoolLocation" : "Kingston, MA",
		"dates" : "2009-2011",
		"major" : "N/A",
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
		"classes" : [
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Sample Project 1",
			"image" : "Blank Image"

		}
	]
}

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);


	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

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



	education.display = function() {
	for (schoolInfo in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schoolInfo].school);

		$(".education-entry:last").append(formattedSchool);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolInfo].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolInfo].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolInfo].major);
		$(".education-entry:last").append(formattedMajor);
	}
	// $("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolInfo);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();

	projects.display = function() {
	for (classInfo in projects.classes) {
		$("#projects").append(HTMLprojectStart);



			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.classes[classInfo].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.classes[classInfo].dates);
			var formattedProjectInformation = formattedTitle + formattedDates;
			$(".project-entry:last").append(formattedProjectInformation);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.classes[classInfo].description);
			$(".project-entry:last").append(formattedDescription);

			var formattedImage = HTMLprojectImage.replace("%data%", projects.classes[classInfo].image);
			$(".project-entry:last").append(formattedImage);

		}
	}
	projects.display();


	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x,y);
	}
	);

	/*function inName(name) {
		name = name.trim().split(" ");
		console.log(name);
		name[1] = name[1].toUpperCase();
		name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

		return name[0] + " " + name[1];
	}
*/

