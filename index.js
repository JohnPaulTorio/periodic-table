import table from './PeriodicTableJSON.json' assert { type: 'json' };

let noOfElements = table.elements.length;

for(let i = 0; i <= noOfElements; i++) {
    document.getElementById(table.elements[i].name).innerHTML = `
    <td>
        <p>${table.elements[i].number}</p>
        <h1>${table.elements[i].symbol}</h1>
        <p class="name">${table.elements[i].name}</p>
        <p class="atomic_mass">${table.elements[i].atomic_mass.toFixed(3)}</p>
    </td>
`
    let category = table.elements[i].category;
    switch (category) {
        case "diatomic nonmetal":
            document.getElementById(table.elements[i].name).style = "border-color: #359e9d; color: #359e9d;";
            break;

        case "noble gas":
            document.getElementById(table.elements[i].name).style = "border-color: #2f4e7c; color: #2f4e7c;"
            break;

        case "alkali metal":
            document.getElementById(table.elements[i].name).style = "border-color: #bd2b36; color: #bd2b36;"
            break;

        case "transition metal":
            document.getElementById(table.elements[i].name).style = "border-color: #f9ca0b; color: #f9ca0b;"
            break;

        case "alkaline earth metal":
            document.getElementById(table.elements[i].name).style = "border-color: #e64517; color: #e64517;"
            break;

        case "metalloid":
            document.getElementById(table.elements[i].name).style = "border-color: #5aa95b; color: #5aa95b;"
            break;

        case "polyatomic nonmetal":
            document.getElementById(table.elements[i].name).style = "border-color: #47a4a9; color: #47a4a9;"
            break;

        case "post-transition metal":
            document.getElementById(table.elements[i].name).style = "border-color: #2a673c; color: #2a673c;"
            break;

        case "lanthanide":
            document.getElementById(table.elements[i].name).style = "border-color: #ef781c; color: #ef781c;"
            break;

        case "actinide":
            document.getElementById(table.elements[i].name).style = "border-color: #e0e010; color: #e0e010;"
            break;

        case "unknown, predicted to be noble gas": case "unknown, probably metalloid": case "unknown, probably post-transition metal": case "unknown, probably transition metal":
            document.getElementById(table.elements[i].name).style = "border-color: #bfc4c8; color: #bfc4c8;"
            break;
        default:
            break;
    }
};


