function loadContent() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let articleData = JSON.parse(this.responseText);
            addContent(articleData);
        }
    };
    let name = location.search.substring(6);
    xmlhttp.open("GET", "https://jessalynwang.github.io/educationatlas.github.io/info/" + name + ".json", true);
    xmlhttp.send();
}

function addContent(articleData) {
    let place = document.getElementsByClassName("innerthings");
    let content = "";
    for (let a in articleData) {
        content = content + "<div class='info-blub'>" + articleData[a]["name"] + "<hr class='gold' />" + articleData[a]["summary"] + "<p>Eligibility:" + "<ul style='list-style-type: disc; padding-left: 50px;'>";
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