const foodEmojis=["\uD83D\uDE00","\uD83D\uDE00","\uD83D\uDE43","\uD83D\uDE12"];function loadSheet(){fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQyAAr-qBSXtk87alfeRl7Zq3oNKNmdklSfsvdHc_KfyJqd6-ekGGz2U1LM8tSJs5emd_jJt7N8jz9a/pubhtml?gid=0&single=true").then(e=>e.text()).then(e=>{let t=new DOMParser,o=t.parseFromString(e,"text/html");o.querySelector("title").innerHTML="CSE 28 Routine | RU",o.querySelector("#doc-title").innerHTML="CSE 28 Routine",o.querySelector("#doc-title").classList.add("head-text"),table=o.querySelector("table > tbody");let r="";for(let n=0;n<17;n++)table.children[n].children[0].children[0].innerHTML=" ",r+=table.children[n].outerHTML;table.innerHTML=r,o.querySelector("#footer > span").innerHTML="Made with ❤️",o.querySelector("#footer").style.position="fixed",o.querySelector("#footer").style.bottom="0px",o.querySelector("#footer").style.width="100%";let l=o.querySelector("#footer");l.children[1].remove(),l.children[1].remove(),l.children[2].innerHTML="Updated automatically by CR",o.head.innerHTML+='<link rel="stylesheet" href="css/style.css" />',o.head.innerHTML+=`
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJDQJWPFCC"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-KJDQJWPFCC');
            </script>
            `,document.write(o.head.outerHTML+o.body.outerHTML)}).catch(e=>{console.log(e)})}document.addEventListener("DOMContentLoaded",()=>{let e=foodEmojis[Math.floor(Math.random()*foodEmojis.length)];document.querySelector("#food-emoji").innerHTML=e,document.querySelector("link[rel~='icon']").href=`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${e}</text></svg>`}),setTimeout(loadSheet,400);

