const data="https://flauntsites.local/wp-json/wp/v2/seoqa",main=document.querySelector(".entry-content"),div=document.createElement("div"),title=document.createElement("h1"),jsonLd=document.createElement("script"),schema=[{title:"This is the title"}];console.log(schema);const posts=function(){fetch(data).then(function(e){if(200!==e.status)return void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(function(e){console.log(e),main.appendChild(div),div.appendChild(title),main.appendChild(jsonLd),jsonLd.innerText=JSON.stringify(schema),title.innerHTML=e[0].title.rendered,schema.push({content:"This is content"}),div.innerHTML=e[0].content.rendered})}).catch(function(e){console.log("Fetch Error :-S",e)})};posts();