
// ========== ELEMENTS DATA ==========

var elements = [
    { number: 1, symbol: "H", name: "Hydrogen", mass: 1.008, group: 1, period: 1, category: "nonmetal" },
    { number: 2, symbol: "He", name: "Helium", mass: 4.0026, group: 18, period: 1, category: "noble-gas" },

    { number: 3, symbol: "Li", name: "Lithium", mass: 6.94, group: 1, period: 2, category: "alkali-metal" },
    { number: 4, symbol: "Be", name: "Beryllium", mass: 9.0122, group: 2, period: 2, category: "alkaline-earth" },
    { number: 5, symbol: "B", name: "Boron", mass: 10.81, group: 13, period: 2, category: "metalloid" },
    { number: 6, symbol: "C", name: "Carbon", mass: 12.011, group: 14, period: 2, category: "nonmetal" },
    { number: 7, symbol: "N", name: "Nitrogen", mass: 14.007, group: 15, period: 2, category: "nonmetal" },
    { number: 8, symbol: "O", name: "Oxygen", mass: 15.999, group: 16, period: 2, category: "nonmetal" },
    { number: 9, symbol: "F", name: "Fluorine", mass: 18.998, group: 17, period: 2, category: "halogen" },
    { number: 10, symbol: "Ne", name: "Neon", mass: 20.180, group: 18, period: 2, category: "noble-gas" },

    { number: 11, symbol: "Na", name: "Sodium", mass: 22.990, group: 1, period: 3, category: "alkali-metal" },
    { number: 12, symbol: "Mg", name: "Magnesium", mass: 24.305, group: 2, period: 3, category: "alkaline-earth" },
    { number: 13, symbol: "Al", name: "Aluminium", mass: 26.982, group: 13, period: 3, category: "post-transition" },
    { number: 14, symbol: "Si", name: "Silicon", mass: 28.085, group: 14, period: 3, category: "metalloid" },
    { number: 15, symbol: "P", name: "Phosphorus", mass: 30.974, group: 15, period: 3, category: "nonmetal" },
    { number: 16, symbol: "S", name: "Sulfur", mass: 32.06, group: 16, period: 3, category: "nonmetal" },
    { number: 17, symbol: "Cl", name: "Chlorine", mass: 35.45, group: 17, period: 3, category: "halogen" },
    { number: 18, symbol: "Ar", name: "Argon", mass: 39.948, group: 18, period: 3, category: "noble-gas" },

    { number: 19, symbol: "K", name: "Potassium", mass: 39.098, group: 1, period: 4, category: "alkali-metal" },
    { number: 20, symbol: "Ca", name: "Calcium", mass: 40.078, group: 2, period: 4, category: "alkaline-earth" },
    { number: 21, symbol: "Sc", name: "Scandium", mass: 44.956, group: 3, period: 4, category: "transition-metal" },
    { number: 22, symbol: "Ti", name: "Titanium", mass: 47.867, group: 4, period: 4, category: "transition-metal" },
    { number: 23, symbol: "V", name: "Vanadium", mass: 50.942, group: 5, period: 4, category: "transition-metal" },
    { number: 24, symbol: "Cr", name: "Chromium", mass: 51.996, group: 6, period: 4, category: "transition-metal" },
    { number: 25, symbol: "Mn", name: "Manganese", mass: 54.938, group: 7, period: 4, category: "transition-metal" },
    { number: 26, symbol: "Fe", name: "Iron", mass: 55.845, group: 8, period: 4, category: "transition-metal" },
    { number: 27, symbol: "Co", name: "Cobalt", mass: 58.933, group: 9, period: 4, category: "transition-metal" },
    { number: 28, symbol: "Ni", name: "Nickel", mass: 58.693, group: 10, period: 4, category: "transition-metal" },
    { number: 29, symbol: "Cu", name: "Copper", mass: 63.546, group: 11, period: 4, category: "transition-metal" },
    { number: 30, symbol: "Zn", name: "Zinc", mass: 65.38, group: 12, period: 4, category: "transition-metal" },
    { number: 31, symbol: "Ga", name: "Gallium", mass: 69.723, group: 13, period: 4, category: "post-transition" },
    { number: 32, symbol: "Ge", name: "Germanium", mass: 72.630, group: 14, period: 4, category: "metalloid" },
    { number: 33, symbol: "As", name: "Arsenic", mass: 74.922, group: 15, period: 4, category: "metalloid" },
    { number: 34, symbol: "Se", name: "Selenium", mass: 78.971, group: 16, period: 4, category: "nonmetal" },
    { number: 35, symbol: "Br", name: "Bromine", mass: 79.904, group: 17, period: 4, category: "halogen" },
    { number: 36, symbol: "Kr", name: "Krypton", mass: 83.798, group: 18, period: 4, category: "noble-gas" },

    // PERIOD 5

    { number: 37, symbol: "Rb", name: "Rubidium", mass: 85.468, group: 1, period: 5, category: "alkali-metal" },
    { number: 38, symbol: "Sr", name: "Strontium", mass: 87.62, group: 2, period: 5, category: "alkaline-earth" },
    { number: 39, symbol: "Y", name: "Yttrium", mass: 88.906, group: 3, period: 5, category: "transition-metal" },
    { number: 40, symbol: "Zr", name: "Zirconium", mass: 91.224, group: 4, period: 5, category: "transition-metal" },
    { number: 41, symbol: "Nb", name: "Niobium", mass: 92.906, group: 5, period: 5, category: "transition-metal" },
    { number: 42, symbol: "Mo", name: "Molybdenum", mass: 95.95, group: 6, period: 5, category: "transition-metal" },
    { number: 43, symbol: "Tc", name: "Technetium", mass: 98, group: 7, period: 5, category: "transition-metal" },
    { number: 44, symbol: "Ru", name: "Ruthenium", mass: 101.07, group: 8, period: 5, category: "transition-metal" },
    { number: 45, symbol: "Rh", name: "Rhodium", mass: 102.906, group: 9, period: 5, category: "transition-metal" },
    { number: 46, symbol: "Pd", name: "Palladium", mass: 106.42, group: 10, period: 5, category: "transition-metal" },
    { number: 47, symbol: "Ag", name: "Silver", mass: 107.868, group: 11, period: 5, category: "transition-metal" },
    { number: 48, symbol: "Cd", name: "Cadmium", mass: 112.414, group: 12, period: 5, category: "transition-metal" },
    { number: 49, symbol: "In", name: "Indium", mass: 114.818, group: 13, period: 5, category: "post-transition" },
    { number: 50, symbol: "Sn", name: "Tin", mass: 118.710, group: 14, period: 5, category: "post-transition" },
    { number: 51, symbol: "Sb", name: "Antimony", mass: 121.760, group: 15, period: 5, category: "metalloid" },
    { number: 52, symbol: "Te", name: "Tellurium", mass: 127.60, group: 16, period: 5, category: "metalloid" },
    { number: 53, symbol: "I", name: "Iodine", mass: 126.904, group: 17, period: 5, category: "halogen" },
    { number: 54, symbol: "Xe", name: "Xenon", mass: 131.293, group: 18, period: 5, category: "noble-gas" },

    // PERIOD 6

    { number: 55, symbol: "Cs", name: "Cesium", mass: 132.905, group: 1, period: 6, category: "alkali-metal" },
    { number: 56, symbol: "Ba", name: "Barium", mass: 137.327, group: 2, period: 6, category: "alkaline-earth" },

    // Lanthanides - separate row

    { number: 57, symbol: "La", name: "Lanthanum", mass: 138.905, group: 3, period: 9, category: "lanthanide" },
    { number: 58, symbol: "Ce", name: "Cerium", mass: 140.116, group: 4, period: 9, category: "lanthanide" },
    { number: 59, symbol: "Pr", name: "Praseodymium", mass: 140.908, group: 5, period: 9, category: "lanthanide" },
    { number: 60, symbol: "Nd", name: "Neodymium", mass: 144.242, group: 6, period: 9, category: "lanthanide" },
    { number: 61, symbol: "Pm", name: "Promethium", mass: 145, group: 7, period: 9, category: "lanthanide" },
    { number: 62, symbol: "Sm", name: "Samarium", mass: 150.36, group: 8, period: 9, category: "lanthanide" },
    { number: 63, symbol: "Eu", name: "Europium", mass: 151.964, group: 9, period: 9, category: "lanthanide" },
    { number: 64, symbol: "Gd", name: "Gadolinium", mass: 157.25, group: 10, period: 9, category: "lanthanide" },
    { number: 65, symbol: "Tb", name: "Terbium", mass: 158.925, group: 11, period: 9, category: "lanthanide" },
    { number: 66, symbol: "Dy", name: "Dysprosium", mass: 162.500, group: 12, period: 9, category: "lanthanide" },
    { number: 67, symbol: "Ho", name: "Holmium", mass: 164.930, group: 13, period: 9, category: "lanthanide" },
    { number: 68, symbol: "Er", name: "Erbium", mass: 167.259, group: 14, period: 9, category: "lanthanide" },
    { number: 69, symbol: "Tm", name: "Thulium", mass: 168.934, group: 15, period: 9, category: "lanthanide" },
    { number: 70, symbol: "Yb", name: "Ytterbium", mass: 173.045, group: 16, period: 9, category: "lanthanide" },
    { number: 71, symbol: "Lu", name: "Lutetium", mass: 174.967, group: 17, period: 9, category: "lanthanide" },

    // Continue Period 6

    { number: 72, symbol: "Hf", name: "Hafnium", mass: 178.49, group: 4, period: 6, category: "transition-metal" },
    { number: 73, symbol: "Ta", name: "Tantalum", mass: 180.948, group: 5, period: 6, category: "transition-metal" },
    { number: 74, symbol: "W", name: "Tungsten", mass: 183.84, group: 6, period: 6, category: "transition-metal" },
    { number: 75, symbol: "Re", name: "Rhenium", mass: 186.207, group: 7, period: 6, category: "transition-metal" },
    { number: 76, symbol: "Os", name: "Osmium", mass: 190.23, group: 8, period: 6, category: "transition-metal" },
    { number: 77, symbol: "Ir", name: "Iridium", mass: 192.217, group: 9, period: 6, category: "transition-metal" },
    { number: 78, symbol: "Pt", name: "Platinum", mass: 195.084, group: 10, period: 6, category: "transition-metal" },
    { number: 79, symbol: "Au", name: "Gold", mass: 196.967, group: 11, period: 6, category: "transition-metal" },
    { number: 80, symbol: "Hg", name: "Mercury", mass: 200.592, group: 12, period: 6, category: "transition-metal" },
    { number: 81, symbol: "Tl", name: "Thallium", mass: 204.38, group: 13, period: 6, category: "post-transition" },
    { number: 82, symbol: "Pb", name: "Lead", mass: 207.2, group: 14, period: 6, category: "post-transition" },
    { number: 83, symbol: "Bi", name: "Bismuth", mass: 208.980, group: 15, period: 6, category: "post-transition" },
    { number: 84, symbol: "Po", name: "Polonium", mass: 209, group: 16, period: 6, category: "post-transition" },
    { number: 85, symbol: "At", name: "Astatine", mass: 210, group: 17, period: 6, category: "halogen" },
    { number: 86, symbol: "Rn", name: "Radon", mass: 222, group: 18, period: 6, category: "noble-gas" },

    {
        number: 87, symbol: "Fr", name: "Francium", mass: "223", group: 1, period: 7, category: "alkali-metal"
    },
    {
        number: 88, symbol: "Ra", name: "Radium", mass: "226", group: 2, period: 7, category: "alkaline-earth"
    },
    {
        number: 89, symbol: "Ac", name: "Actinium", mass: "227", group: 3, period: 10, category: "actinide"
    },
    {
        number: 90, symbol: "Th", name: "Thorium", mass: "232.038", group: 4, period: 10, category: "actinide"
    },
    {
        number: 91, symbol: "Pa", name: "Protactinium", mass: "231.036", group: 5, period: 10, category: "actinide"
    },
    {
        number: 92, symbol: "U", name: "Uranium", mass: "238.029", group: 6, period: 10, category: "actinide"
    },
    {
        number: 93, symbol: "Np", name: "Neptunium", mass: "237", group: 7, period: 10, category: "actinide"
    },
    {
        number: 94, symbol: "Pu", name: "Plutonium", mass: "244", group: 8, period: 10, category: "actinide"
    },
    {
        number: 95, symbol: "Am", name: "Americium", mass: "243", group: 9, period: 10, category: "actinide"
    },
    {
        number: 96, symbol: "Cm", name: "Curium", mass: "247", group: 10, period: 10, category: "actinide"
    },
    {
        number: 97, symbol: "Bk", name: "Berkelium", mass: "247", group: 11, period: 10, category: "actinide"
    },
    {
        number: 98, symbol: "Cf", name: "Californium", mass: "251", group: 12, period: 10, category: "actinide"
    },
    {
        number: 99, symbol: "Es", name: "Einsteinium", mass: "252", group: 13, period: 10, category: "actinide"
    },
    {
        number: 100, symbol: "Fm", name: "Fermium", mass: "257", group: 14, period: 10, category: "actinide"
    },
    {
        number: 101, symbol: "Md", name: "Mendelevium", mass: "258", group: 15, period: 10, category: "actinide"
    },
    {
        number: 102, symbol: "No", name: "Nobelium", mass: "259", group: 16, period: 10, category: "actinide"
    },
    {
        number: 103, symbol: "Lr", name: "Lawrencium", mass: "266", group: 17, period: 10, category: "actinide"
    },
    {
        number: 104, symbol: "Rf", name: "Rutherfordium", mass: "267", group: 4, period: 7, category: "transition-metal"
    },
    {
        number: 105, symbol: "Db", name: "Dubnium", mass: "268", group: 5, period: 7, category: "transition-metal"
    },
    {
        number: 106, symbol: "Sg", name: "Seaborgium", mass: "269", group: 6, period: 7, category: "transition-metal"
    },
    {
        number: 107, symbol: "Bh", name: "Bohrium", mass: "270", group: 7, period: 7, category: "transition-metal"
    },
    {
        number: 108, symbol: "Hs", name: "Hassium", mass: "277", group: 8, period: 7, category: "transition-metal"
    },
    {
        number: 109, symbol: "Mt", name: "Meitnerium", mass: "278", group: 9, period: 7, category: "transition-metal"
    },
    {
        number: 110, symbol: "Ds", name: "Darmstadtium", mass: "281", group: 10, period: 7, category: "transition-metal"
    },
    {
        number: 111, symbol: "Rg", name: "Roentgenium", mass: "282", group: 11, period: 7, category: "transition-metal"
    },
    {
        number: 112, symbol: "Cn", name: "Copernicium", mass: "285", group: 12, period: 7, category: "transition-metal"
    },
    {
        number: 113, symbol: "Nh", name: "Nihonium", mass: "286", group: 13, period: 7, category: "post-transition"
    },
    {
        number: 114, symbol: "Fl", name: "Flerovium", mass: "289", group: 14, period: 7, category: "post-transition"
    },
    {
        number: 115, symbol: "Mc", name: "Moscovium", mass: "290", group: 15, period: 7, category: "post-transition"
    },
    {
        number: 116, symbol: "Lv", name: "Livermorium", mass: "293", group: 16, period: 7, category: "post-transition"
    },
    {
        number: 117, symbol: "Ts", name: "Tennessine", mass: "294", group: 17, period: 7, category: "halogen"
    },
    {
        number: 118, symbol: "Og", name: "Oganesson", mass: "294", group: 18, period: 7, category: "noble-gas"
    },




    
];


// ========== CREATE PERIODIC TABLE ==========

var table = document.getElementById("periodicTable");

elements.forEach(function (element) {

    var box = document.createElement("div");

    box.className = "element " + element.category;

    box.dataset.number = element.number;

    box.style.gridColumn = element.group;
    box.style.gridRow = element.period;

    box.innerHTML = `
        <div class="number">${element.number}</div>
        <div class="symbol">${element.symbol}</div>
        <div class="name">${element.name}</div>
    `;

    // Element par click karne se details show hongi

    box.addEventListener("click", function () {

        showDetails(element);

    });

    table.appendChild(box);

});


// ========== SHOW ELEMENT DETAILS ==========

function showDetails(element) {

    var details = document.getElementById("elementDetails");

    details.innerHTML = `
        <h2>${element.name}</h2>
        <h1>${element.symbol}</h1>
        <p>Atomic Number: ${element.number}</p>
        <p>Atomic Mass: ${element.mass}</p>
        <p>Group: ${element.group}</p>
        <p>Period: ${element.period}</p>
        <p>Category: ${element.category}</p>
    `;

}


// ========== SEARCH ELEMENT ==========

var searchInput = document.getElementById("search");

var searchButton = document.querySelector(".search-box button");

function searchElement() {

    var searchValue = searchInput.value.toLowerCase().trim();

    var found = elements.find(function (element) {

        return element.name.toLowerCase() === searchValue ||
            element.symbol.toLowerCase() === searchValue;

    });

    if (found) {

        var allBoxes = document.querySelectorAll(".element");

        allBoxes.forEach(function (box) {

            box.style.border = "2px solid transparent";

        });

        var selectedBox = document.querySelector(
            '.element[data-number="' + found.number + '"]'
        );

        selectedBox.style.border = "3px solid white";

        showDetails(found);

        selectedBox.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });

    } else {

        alert("Element Not Found!");

    }

}

searchButton.addEventListener("click", searchElement);


// ========== DARK / LIGHT MODE ==========

var themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeBtn.innerText = "Dark Mode";

    } else {

        themeBtn.innerText = "Light Mode";

    }

});


function showDetails(element) {
    var details = document.getElementById("elementDetails");

    details.innerHTML = `
        <h2>${element.name}</h2>
        <h1>${element.symbol}</h1>

        <p><strong>Atomic Number:</strong> ${element.number}</p>

        <p><strong>Atomic Mass:</strong> ${element.mass}</p>

        <p><strong>Group:</strong> ${element.group}</p>

        <p><strong>Period:</strong> ${element.period}</p>

        <p><strong>Category:</strong> ${element.category}</p>
    `;
}
var searchInput = document.getElementById("search");
var searchButton = document.querySelector(".search-box button");

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchElement();
    }

});

var themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.innerText = "Dark Mode";
    } else {
        themeBtn.innerText = "Light Mode";
    }

});

function searchElement() {

    var searchValue = searchInput.value.toLowerCase().trim();

    var found = elements.find(function (element) {
        return element.name.toLowerCase() === searchValue ||
            element.symbol.toLowerCase() === searchValue;
    });

    var allBoxes = document.querySelectorAll(".element");

    // Purana highlight remove karein
    allBoxes.forEach(function (box) {
        box.classList.remove("highlight");
    });

    if (found) {

        var selectedBox = document.querySelector(
            '.element[data-number="' + found.number + '"]'
        );

        selectedBox.classList.add("highlight");

        showDetails(found);

        selectedBox.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });

    } else {
        alert("Element Not Found!");
    }
}

var exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {
    document.getElementById("periodicTable").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});



