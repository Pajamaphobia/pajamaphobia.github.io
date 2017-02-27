function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getRuinerGif()
{
    var gif = getQueryVariable("gif");
    document.getElementById('animation-gif-layer').style.backgroundImage = "url('"+gif+"')";
}

window.onload = getRuinerGif;