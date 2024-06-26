let res = document.getElementById("res");
let country = document.getElementById("country");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", ()=>{
    res.innerHTML="";
    displayCat();
});

const displayCat = async() => {
    // console.log()
    let api = await fetch(`https://holidays.abstractapi.com/v1/?api_key=b822699359bb47bd93222fec453182e3&country=${country.value}&year=${year.value}&month=${month.value}&day=${day.value}`);
    let data=  await api.json();
    console.log(data);
    let col = document.createElement("div");
    col.classList.add("col-lg-12","col-sm-12");
    col.innerHTML=`<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
  <div class="card-header">${data[0].name}</div>
  <div class="card-body">
    <p class="card-text">Type: ${data[0].type}</p>
    <p class="card-text">Date: ${data[0].date}</p>
    <p class="card-text">Day: ${data[0].week_day}</p>
  </div>
</div>`;
res.append(col);
}
