const foodEmojis = [
    "😀",
    "😀",
    "🙃",
    "😒"
];

document.addEventListener("DOMContentLoaded", () => {
    const randomEmoji =
        foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    document.querySelector("#food-emoji").innerHTML = randomEmoji;
    document.querySelector(
        "link[rel~='icon']"
    ).href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${randomEmoji}</text></svg>`;
});

setTimeout(loadSheet, 400);

function loadSheet() {
    fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyAAr-qBSXtk87alfeRl7Zq3oNKNmdklSfsvdHc_KfyJqd6-ekGGz2U1LM8tSJs5emd_jJt7N8jz9a/pubhtml?gid=0&single=true"
    )
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const parsedHTML = parser.parseFromString(html, "text/html");
            parsedHTML.querySelector("title").innerHTML =
                "CSE 28 Routine | RU";
            parsedHTML.querySelector("#doc-title").innerHTML =
                "CSE 28 Routine";
            parsedHTML.querySelector("#doc-title").classList.add("head-text");
            table = parsedHTML.querySelector("table > tbody");
            let tableRowString = "";
            for (let rowNum = 0; rowNum < 17; rowNum++) {
                let rowElement = table.children[rowNum];
                rowElement.children[0].children[0].innerHTML = " ";
                tableRowString += table.children[rowNum].outerHTML;
            }
            table.innerHTML = tableRowString;

            parsedHTML.querySelector("#footer > span").innerHTML =
                'Made with ❤️';
            parsedHTML.querySelector("#footer").style.position = 'fixed';
            parsedHTML.querySelector("#footer").style.bottom = '0px';
            parsedHTML.querySelector("#footer").style.width = '100%';

            const footer = parsedHTML.querySelector("#footer");
            footer.children[1].remove();
            footer.children[1].remove();
            footer.children[2].innerHTML = "Updated automatically by CR";

            parsedHTML.head.innerHTML += `<link rel="stylesheet" href="css/style.css" />`;
            parsedHTML.head.innerHTML += `
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJDQJWPFCC"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-KJDQJWPFCC');
            </script>
            `;

            document.write(
                parsedHTML.head.outerHTML + parsedHTML.body.outerHTML
            );
        })
        .catch((err) => {
            console.log(err);
        });
}


