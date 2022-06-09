const url = "https://pokeapi.co/api/v2/pokemon/";

async function fetchData() {
    try {
        const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
  
      const data = await res.json();
  
      display(data);
      console.log('Fetch GET request Success!');
    } catch (err) {
      console.log(err);
    }
  }

const submit = document.getElementById("sub");
const content = document.getElementById("name-input");
const table = document.getElementById("table-body");

submit.addEventListener("click", (e) => {
    const newUrl = url + content.value;
    console.log("start fetch: " + newUrl);
    fetch(newUrl)
    .then(response => response.json())
    .then(data => display(data));
    //fetchData(newUrl);
    
});

function display(data) {
    table.innerHTML = "";
    const stats = data.stats;
    for (var key in stats){
        const value = stats[key];
        table.appendChild(createRow(value));
    }
}

function createRow(value){
    const tr = document.createElement('tr');
  
    const tdName = document.createElement('td');
    const tdBase = document.createElement('td');
    const tdEffort = document.createElement('td');

    tdName.innerHTML = value.stat.name;
    tdBase.innerHTML = value.base_stat;
    tdEffort.innerHTML = value.effort;

    tr.appendChild(tdName);
    tr.appendChild(tdBase);
    tr.appendChild(tdEffort);
  
    return tr;

}