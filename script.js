function loadContent() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let articleData = JSON.parse(this.responseText);
            addContent(articleData);
        }
    };
    let name = location.search.substring(6);
    xmlhttp.open("GET", "https://jessalynwang.github.io/articles/" + name + ".json", true);

}