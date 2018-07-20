
var id = -1;

function myFun(){
    id = id + 1;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var html = ejs.render('<div class="card"> <a target="_blank" href=<%=Lien %>> <div class="card-image large"> <img class="img-fit" src=<%=Image %>> <span class="card-title" id="jrub"><%=Titre %></span> </div><div class="card-content"> <span class="card-title" id="jtitle"><%=Chapo %></span> <p class="chapo" id="jchapo"></p></div><div class="card-action"> <a target="_blank" id="toto" class="media blue-text" href=<%=Lien %>>LINK</a> </div></a> </div>',
                JSON.parse(this.responseText));
            var div = document.createElement('div')
            div.innerHTML = html;
            document.getElementById('articles').appendChild(div);
        }
        else {
            console.log("+++++++++++++++++++++++++");
        }
    };
    req.open("GET", "articles/" + id, true);
    req.send();
}

function getScrollPercent() {
    var h = document.documentElement;
    b = document.body;
    st = 'scrollTop';
    sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

document.onscroll = function() {
    if (getScrollPercent() > 90) {
        myFun();
    }
};
