let countrys = [];

//fetch data form mockapi
fetch("https://65941f231493b0116069f6c1.mockapi.io/posts")
    .then(response => response.json())
    .then(data => {
        countrys = data;
    });

//get elements from html
const elMainInner = document.querySelector(".main-inner");

//main country card creator function
creatCountrycard = (countrys) => {
    for (let count of countrys) {
        const elCountryCard = document.createElement("div");
        elMainInner.appendChild(elCountryCard);
        elCountryCard.classList.add("county-card", "mb-5", "rounded");
        elCountryCard.style.width = "370px";
        elCountryCard.style.boxShadow = "0 0 .7rem .3rem var(--black-box-shadow)";
        // card image
        const elCountryCardImg = document.createElement("img");
        elCountryCard.appendChild(elCountryCardImg);
        elCountryCardImg.classList.add("img-fluid", "rounded-top");
        elCountryCardImg.style.height = "266px";
        elCountryCardImg.src = count.img;
        elCountryCardImg.alt = count.name;
        //card info
        const elCountryCardInform = document.createElement("h4");
        elCountryCard.appendChild(elCountryCardInform);
        elCountryCardInform.classList.add("count-inform-box", "px-3", "mt-4");
        //card name
        const elCountryCardName = document.createElement("h4");
        elCountryCardInform.appendChild(elCountryCardName);
        elCountryCardName.classList.add("country-title", "fw-bold", "fs-5", "ms-1");
        elCountryCardName.textContent = count.name;
        //card population
        const elCountryCardPopulation = document.createElement("p");
        elCountryCardInform.appendChild(elCountryCardPopulation);
        elCountryCardPopulation.classList.add("country-population", "fw-bold", "fs-5", "ms-1", "mt-4", "mb-1");
        elCountryCardPopulation.textContent = `Population: `;
        //card population value
        const elCountryCardPopulationValue = document.createElement("span");
        elCountryCardPopulation.appendChild(elCountryCardPopulationValue);
        elCountryCardPopulationValue.classList.add("population-span", "fw-normal");
        elCountryCardPopulationValue.textContent = count.population;
        // card capital
        const elCountryCardRegion = document.createElement("p");
        elCountryCardInform.appendChild(elCountryCardRegion);
        elCountryCardRegion.classList.add("country-region", "fw-bold", "fs-5", "ms-1", "mb-1");
        elCountryCardRegion.textContent = `Region: `;
        //card capital value
        const elCountryCardRegionValue = document.createElement("span");
        elCountryCardRegion.appendChild(elCountryCardRegionValue);
        elCountryCardPopulationValue.classList.add("region-span", "fw-normal");
        elCountryCardRegionValue.textContent = count.region;
        // card capital
        const elCountryCardCapital = document.createElement("p");
        elCountryCardInform.appendChild(elCountryCardCapital);
        elCountryCardCapital.classList.add("country-capital", "fw-bold", "fs-5", "ms-1", "mb-5");
        elCountryCardCapital.textContent = `Capital: `;
        // card capital value
        const elCountryCardCapitalValue = document.createElement("span");
        elCountryCardCapital.appendChild(elCountryCardCapitalValue);
        elCountryCardCapitalValue.classList.add("capital-span", "fw-normal");
        elCountryCardCapitalValue.textContent = count.capital;
    }
};

// check countrys array
if (countrys.length === 0) {
    setTimeout(() => {
        creatCountrycard(countrys);
    }, 1000);
} else {
    creatCountrycard(countrys);
}
