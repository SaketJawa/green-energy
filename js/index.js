function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

function preloader() {
    const imagesList = [
       "./img/solution-1.jpg",
       "./img/solution-2.jpg",
       "./img/solution-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

let btn = document.querySelectorAll("button");

let data = {
    solution1: {
        title: 'Solar Energy',
        imgURL: './img/solution-1.jpg',
        imgALT: 'Solar Pannels in the medows',
        bodyText: ' due to increased production, government subsidies, and mounting environmental concerns, the direct costs of solar and wind energy for consumers have decreased. In fact, some markets generate renewable energy more cheaply for consumers than fossil fuels. While wind energy, such as wind farms, is predominantly used for commercial means, solar energy has both commercial and residential uses.'
    },
    solution2: {
        title: 'Nuclear Energy',
        imgURL: './img/solution-2.jpg',
        imgALT: 'Nuclear power plants',
        bodyText: 'Nuclear power requires high upfront investment, but the result is a low levelized cost of electricity (LCOE). If carbon pricing is factored in, it drops even lower, making nuclear an economical long-term choice. Once the infrastructure is built, operating costs are low for this non-renewable resource, in large part because exponentially less fuel is needed than coal or gas to generate comparable wattage. Its also reliable, which makes it valuable for the money, and would do well (especially alongside hydro) as a baseload power backup for renewable development to support service electrification.'
    },
    solution3: {
        title: 'Electric Energy',
        imgURL: './img/solution-3.jpg',
        imgALT: 'Electrical Grid',
        bodyText: 'Electrical energy is one of the most commonly used forms of energy in the world. It can be easily converted into any other energy form and can be safely and efficiently transported over long distances. As a result, it is used in our daily lives more than any other energy source. It powers home appliances, cars, and trains; supplies the machines that pump water; and energizes the light bulbs lighting homes and cities.'
    }
};

let div = document.querySelector(".dynamic-content");

let markup = 
    `
    <div class="solution">
        <h3>${data.solution1.title}</h3>
        <div class="sol-content">
            <img src="${data.solution1.imgURL}" alt="${data.solution1.imgALT}">
            <p>${data.solution1.bodyText}</p>
        </div>
    </div>
    `;

    div.innerHTML = markup;

function handleSelection(ev){

    for (let i=0; i<btn.length; i++){

        if (btn[i].hasAttribute("id")){
            btn[i].removeAttribute("id");
        }
    }

    ev.target.setAttribute("id", "active");

    if (btn[0].hasAttribute("id")){
        div.innerHTML=
        `
        <div class="solution">
            <h3>${data.solution1.title}</h3>
            <div class="sol-content">
                <img src="${data.solution1.imgURL}" alt="${data.solution1.imgALT}">
                <p>${data.solution1.bodyText}</p>
            </div>
        </div>
        `
    }
    else if (btn[1].hasAttribute("id")){
        div.innerHTML=
        `
        <div class="solution">
            <h3>${data.solution2.title}</h3>
            <div class="sol-content">
                <img src="${data.solution2.imgURL}" alt="${data.solution2.imgALT}">
                <p>${data.solution2.bodyText}</p>
            </div>
        </div>
        `
    }
    else if (btn[2].hasAttribute("id")){
        div.innerHTML=
        `
        <div class="solution">
            <h3>${data.solution3.title}</h3>
            <div class="sol-content">
                <img src="${data.solution3.imgURL}" alt="${data.solution3.imgALT}">
                <p>${data.solution3.bodyText}</p>
            </div>
        </div>
        `
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', handleSelection);
}