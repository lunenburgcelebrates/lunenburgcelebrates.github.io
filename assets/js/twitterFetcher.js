!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(0,function(){function e(e){if(null===p){for(var t=e.length,n=0,i=document.getElementById(s),a='<div class="row">';n<t;)a+='<div class="twitterblock">'+e[n]+"</div>",n++;a+="</div>",i.innerHTML=a}else p(e)}function t(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/<a[^>]*>(.*?)<\/a>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function n(e,t){for(var n=[],i=new RegExp("(^| )"+t+"( |$)"),s=e.getElementsByTagName("*"),a=0,l=s.length;a<l;a++)i.test(s[a].className)&&n.push(s[a]);return n}function i(e){if(e!==undefined&&e.innerHTML.indexOf("data-srcset")>=0){var t=e.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];return decodeURIComponent(t).split('"')[1]}}var s="",a=20,l=!1,d=[],r=!1,u=!0,m=!0,o=null,c=!0,h=!0,p=null,w=!1,f=!1,g=!0,T="en",v=!0,b=!1,y=null,C={fetch:function(e){if(e.enableLinks===undefined&&(e.enableLinks=!0),e.showUser===undefined&&(e.showUser=!0),e.showTime===undefined&&(e.showTime=!0),e.dateFunction===undefined&&(e.dateFunction="default"),e.showRetweet===undefined&&(e.showRetweet=!0),e.customCallback===undefined&&(e.customCallback=null),e.showInteraction===undefined&&(e.showInteraction=!0),e.showImages===undefined&&(e.showImages=!1),e.linksInNewWindow===undefined&&(e.linksInNewWindow=!0),e.showPermalinks===undefined&&(e.showPermalinks=!0),r)d.push(e);else{r=!0,s=e.domId,a=e.maxTweets,l=e.enableLinks,m=e.showUser,u=e.showTime,h=e.showRetweet,o=e.dateFunction,p=e.customCallback,w=e.showInteraction,f=e.showImages,g=e.linksInNewWindow,v=e.showPermalinks,b=e.dataOnly;var t=document.getElementsByTagName("head")[0];null!==y&&t.removeChild(y),y=document.createElement("script"),y.type="text/javascript",y.src="https://cdn.syndication.twimg.com/widgets/timelines/"+e.id+"?&lang="+(e.lang||T)+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),t.appendChild(y)}},callback:function(s){function l(e){var t=e.getElementsByTagName("img")[0];return t.src=t.getAttribute("data-src-2x"),e}var u=document.createElement("div");u.innerHTML=s.body,"undefined"==typeof u.getElementsByClassName&&(c=!1);var m=[],p=[],w=[],g=[],T=[],v=[],b=[],y=0;if(c)for(var E=u.getElementsByClassName("timeline-Tweet");y<E.length;)E[y].getElementsByClassName("timeline-Tweet-retweetCredit").length>0?T.push(!0):T.push(!1),(!T[y]||T[y]&&h)&&(m.push(E[y].getElementsByClassName("timeline-Tweet-text")[0]),v.push(E[y].getAttribute("data-tweet-id")),p.push(l(E[y].getElementsByClassName("timeline-Tweet-author")[0])),w.push(E[y].getElementsByClassName("dt-updated")[0]),b.push(E[y].getElementsByClassName("timeline-Tweet-timestamp")[0]),E[y].getElementsByClassName("timeline-Tweet-media")[0]!==undefined?g.push(E[y].getElementsByClassName("timeline-Tweet-media")[0]):g.push(undefined)),y++;else for(var E=n(u,"timeline-Tweet");y<E.length;)n(E[y],"timeline-Tweet-retweetCredit").length>0?T.push(!0):T.push(!1),(!T[y]||T[y]&&h)&&(m.push(n(E[y],"timeline-Tweet-text")[0]),v.push(E[y].getAttribute("data-tweet-id")),p.push(l(n(E[y],"timeline-Tweet-author")[0])),w.push(n(E[y],"dt-updated")[0]),b.push(n(E[y],"timeline-Tweet-timestamp")[0]),n(E[y],"timeline-Tweet-media")[0]!==undefined?g.push(n(E[y],"timeline-Tweet-media")[0]):g.push(undefined)),y++;m.length>a&&(m.splice(a,m.length-a),p.splice(a,p.length-a),w.splice(a,w.length-a),T.splice(a,T.length-a),g.splice(a,g.length-a),b.splice(a,b.length-a));for(var N=[],y=m.length,k=0;k<y;){if("string"!=typeof o){var x=w[k].getAttribute("datetime"),B=new Date(w[k].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),I=o(B,x);if(w[k].setAttribute("aria-label",I),m[k].textContent)if(c)w[k].textContent=I;else{var L=document.createElement("p"),A=document.createTextNode(I);L.appendChild(A),L.setAttribute("aria-label",I),w[k]=L}else w[k].textContent=I}var M="";M+='<div class="tweet"><a href="'+b[k]+'">'+t(m[k].innerHTML)+"</a></div>",M+='<div class="user">'+t(p[k].innerHTML)+"</div>",f&&g[k]!==undefined&&(M+='<div class="media"><img src="'+i(g[k])+'" alt="Image from tweet" /></div>'),N.push(M),k++}e(N),r=!1,d.length>0&&(C.fetch(d[0]),d.splice(0,1))}};return window.twitterFetcher=C,C});