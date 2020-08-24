function loadContent(name) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let articleData = JSON.parse(this.responseText);
            addContent(articleData);
        }
    };
    xmlhttp.open("GET", "https://jessalynwang.github.io/educationatlas.github.io/info/" + name + ".json", true);
    xmlhttp.send();
}

function addContent(articleData) {
    let place = document.getElementsByClassName("innerthings");
    let content = "";
    for (let a in articleData) {
        let classes = classMatch(articleData[a]["name"]);
        content = content + "<div class='info-blub " + classes + "'>" + articleData[a]["name"] + "<hr class='gold' />" + articleData[a]["summary"] + "<p>Eligibility:" + "<ul style='list-style-type: disc; padding-left: 50px;'>";
        for (let c in articleData[a]["eligibility"]) {
            content = content + articleData[a]["eligibility"][c];
        }
        content = content + "</ul>" + "</p>" + "<p>Application Components:" + "<ul style='list-style-type: disc; padding-left: 50px;'>";
        for (let c in articleData[a]["components"]) {
            content = content + articleData[a]["components"][c];
        }
        content = content + "</ul>" + "</p>" + "<p>Application Deadline(s):" + "<ul style='list-style-type: disc; padding-left: 50px;'>";
        for (let c in articleData[a]["deadlines"]) {
            content = content + articleData[a]["deadlines"][c];
        }
        content = content + "</ul>" + "</p>" + "</div>";
    }

    for (let d in place) place[d].innerHTML = content;
}

function classMatch(name) {
    var matches = {
        "<h2>CBS News Internship - <a href='https://www.cbsnews.com/news/cbs-news-internship-program/' target='_blank'>Apply here</a></h2>": "digitalmedia",
        "<h2>Kaiser Permanente (KP) Launch - <a href='https://kplaunch.kaiserpermanente.org/high-school-program/' target='_blank'>Apply here</a></h2>": "biology",
        "<h2>Hutton Junior Fisheries Biology Program - <a href='https://hutton.fisheries.org/' target='_blank'>Apply here</a></h2>": "biology",
        "<h2>Eugene and Ruth Roberts Summer Student Academy - <a href='https://www.cityofhope.org/education/irell-and-manella-graduate-school-of-biological-sciences/irell-manella-graduate-school-programs/summer-student-academy' target='_blank'>Apply here</a></h2>": "biology",
        "<h2>NASA Internships - <a href='https://intern.nasa.gov/' target='_blank'>Apply here</a></h2>": "tech misc",
        "<h2>Cedar-Sinai Minors in Research Program - <a href='https://www.cedars-sinai.org/education/professional-training-programs/internship/minors.html?_ga=2.160060728.465703239.1597968786-321095429.1597968786' target='_blank'>Apply here</a></h2>": "biology",
        "<h2>Department of Homeland Security Cybersecurity Internship Program - <a href='https://www.dhs.gov/homeland-security-careers/cybersecurity-internship-program-0' target='_blank'>Apply here</a></h2>": "tech",
        "<h2>Stanford Summer Session - <a href='https://summer.stanford.edu/program/high-school-high-school-summer-college' target='_blank'>Apply here</a></h2>": "gen",
        "<h2>Launch X - <a href='https://launchx.com/summer-program/' target='_blank'>Apply here</a></h2>": "business",
        "<h2>Telluride Association Summer Program - <a href='https://www.tellurideassociation.org/our-programs/high-school-students/summer-program-juniors-tasp/apply-tasp/' target='_blank'>Apply here</a></h2>": "gen",
        "<h2>CSSSA Visual Arts Summer Program - <a href='https://www.csssa.ca.gov/academic-programs/visual-arts/' target='_blank'>Apply here</a></h2>": "arts",
        "<h2>Chapman University Dodge College Summer Film Academy - <a href='https://www.chapman.edu/dodge/summer-programs/summer-film-academy/index.aspx' target='_blank'>Apply here</a></h2>": "film",
        "<h2>UCLA Film and Summer Institute Track 8: Pre-College Writing for TV- Big Ideas for the Small Screen - <a href='http://www.tft.ucla.edu/programs/summer-programs/ucla-film-and-television-summer-institute/track-8-writing-for-tv/' target='_blank'>Apply here</a></h2>": "film",
        "<h2>QuestBridge Scholarship - <a href='https://www.questbridge.org/high-school-students/national-college-match' target='_blank'>Apply here</a></h2>": "gen",
        "<h2>The Gates Scholarship - <a href='https://www.thegatesscholarship.org/scholarship' target='_blank'>Apply here</a></h2>": "gen",
        "<h2>Bank of America Scholarship - <a href='https://worldscholarshipforum.com/bank-america-student-leaders-program/' target='_blank'>Apply here</a></h2>": "gen",
        "<h2>Amazon Future Engineer Program - <a href='https://learnmore.scholarsapply.org/amazonfutureengineer/' target='_blank'>Apply here</a></h2>": "tech",
        "<h2>ISC<sup>2</sup> Undergraduate Cybersecurity Scholarship - <a href='https://www.iamcybersafe.org/s/undergraduate-scholarships' target='_blank'>Apply here</a></h2>": "tech",
        "<h2>UCLA The Nicholas Endowment TFT Summer Institute Scholarship - <a href='http://www.tft.ucla.edu/summer-institute/nicholas-endowment-ftvdm/' target='_blank'>Apply here</a></h2>": "film"
    }

    return matches[name];
}

var masterlist = [];
function select(x, y) {
    var elements = document.getElementsByClassName("filterb");
    elements[x].classList.toggle("selected");
    let chosenones = document.getElementsByClassName("info-blub");
    if (masterlist.indexOf(y) > -1) {
        masterlist.splice(masterlist.indexOf(y), 1);
    } else {
        masterlist.push(y);
    }
    for (let a in chosenones) {
        if (chosenones[a].classList.contains(y) && (masterlist.indexOf(y) <= -1)) {
            masterlist.splice(masterlist.indexOf(chosenones[a]), 1);
            if (masterlist.indexOf(chosenones[a]) <= -1) {
                chosenones[a].classList.add("hide");
            }
        } else if (chosenones[a].classList.contains(y) && (masterlist.indexOf(y) > -1)) {
            masterlist.push(chosenones[a]);
            chosenones[a].classList.remove("hide");
        } else {
            if (masterlist.indexOf(chosenones[a]) <= -1) {
                chosenones[a].classList.add("hide");
            }
        }
        if (a == chosenones.length - 1)
            console.log(masterlist);
            mastercheck();
    }

}

function mastercheck() {
    let chosenones = document.getElementsByClassName("info-blub");
    if (masterlist.length == 0) {
        for (let a in chosenones) chosenones[a].classList.remove("hide");
    }
}