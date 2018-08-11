var id = -1;

function createEjsOnElement(template, data, element) {
    let html = ejs.render(template, data);
    let div = document.createElement('div');
    div.innerHTML = html;
    console.log("get elemetn by id :"+ element);
    document.getElementById(element).appendChild(div);
}

function renderEjsOnElement(template, data, element) {
    let html = ejs.render(template, data);
    document.getElementById(element).innerHTML = html;
}

function myFun(){
    id = id + 1;
    let thisId = id;
    createEjsOnElement('<div class="card hoverable" id=<%=Id %>></div>', {'Id':"article" + thisId}, 'articles');
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            renderEjsOnElement('<a target="_blank" href=<%=Lien %>> <div class="card-image large"> <img class="img-fit" src=<%=Image %>> <span class="card-title" id="jrub"><%=Titre %></span> </div><div class="card-content"> <span class="card-title" id="jtitle"><%=Chapo %></span> <p class="chapo" id="jchapo"></p></div><div class="card-action"> <a target="_blank" id="toto" class="media blue-text" href=<%=Lien %>>LINK</a> </div></a>'
                , JSON.parse(this.responseText)
                , 'article' + thisId);
        }
        else {
        }
    };
    req.open("GET", "articles/" + thisId, true);
    req.send();
}

function getScrollPercent() {
    var h = document.documentElement;
    b = document.body;
    st = 'scrollTop';
    sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

myFun();
myFun();
myFun();
myFun();

document.onscroll = function() {
    if (getScrollPercent() > 90) {
        myFun();
    }
};
