// ==UserScript==
// @name         Haxy Krunker. Make u pro.
// @version      1.3
// @author       gpy-dev // hackers1337
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(game|server|party)=.+)$/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @namespace gpy // hxors1337
// ==/UserScript==

window.stop();
document.innerHTML = "";

// * * * * * * * * * * * * * * * * 
// * * * * * * * * * * * * * * * * 

const version = '1.3';

// * * * * * * * * * * * * * * * * 
// * * * * * * * * * * * * * * * * 

GM_xmlhttpRequest({
    method: "GET",
    url: document.location.origin,
    onload: res => {
        let html = res.responseText;
        html = html.replace(/game\.[^\.]+\.js/, '____.js');
        html = html.replace(/<script (type="text\/javascript"\s)?data-cfasync(.|\s)*?<\/script>/, `<meta name="gpy_version" content="${version}">`);
        GM_xmlhttpRequest({
            method: "GET",
            url: document.location.origin + '/libs/zip.js',
            onload: res => {
                let zip = res.responseText;
                zip = zip.replace(/setInterval.*?\);/, '');
                html = html.replace(/<script src="libs\/zip\.js.+"><\/script>/, `<script>${zip}</script>`);
                html += '<script src="https://raw.githack.com/hackers1337/krunker/master/bypass.js"></script>';
                html += '<script src="https://raw.githack.com/hackers1337/krunker/master/haxy.js"></script>';
                html += '<script src="https://raw.githack.com/hackers1337/krunker/master/game.js"></script>';

                document.open();
                document.write(html);
                document.close();
            }
        })
    }
})
