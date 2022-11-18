// Lager en array over alle produktene mine
const varer = [
  [
    {
      Name: "Elden Ring",
      id: "eldenring",
      Pris: 599,
      iHandlevogn: false,
      img: "bilder/eldenring.png",
      antall: 0,
    },
    {
      Name: "Minecraft",
      id: "minecraft",
      Pris: 200,
      iHandlevogn: false,
      img: "bilder/minecraft.jpg",
      antall: 0,
    },
    {
      Name: "Portal",
      id: "portal",
      Pris: 10,
      iHandlevogn: false,
      img: "bilder/portal.jpg.jpg",
      antall: 0,
    },
    {
      Name: "Portal 2",
      id: "portal2",
      Pris: 10,
      iHandlevogn: false,
      img: "bilder/portal2.png.png",
      antall: 0,
    },
    {
      Name: "Omori",
      id: "omori",
      Pris: 100,
      iHandlevogn: false,
      img: "bilder/omori.jpg.jpg",
      antall: 0,
    },
  ],
  [
    {
      Name: "Nintendo Switch",
      id: "switch",
      Pris: 2000,
      iHandlevogn: false,
      img: "bilder/switch.png",
      antall: 0,
    },
    {
      Name: "Playstation 5",
      id: "ps5",
      Pris: 5000,
      iHandlevogn: false,
      img: "bilder/ps5.png",
      antall: 0,
    },
    {
      Name: "Xdrit one",
      id: "xbox",
      Pris: 3000,
      iHandlevogn: false,
      img: "bilder/xbox.png",
      antall: 0,
    },
  ],
];
// Lager en bestemt design til alle varene i arrayen
function visVarer(index) {
  document.getElementById("Box").innerHTML = "";
  for (let i = 0; i < varer[index].length; i++) {
    document.getElementById("Box").innerHTML +=
      `<div>
        <div class="d-flex ms-3 mb-3 flex-column ">
            <div class=" d-flex mx-3 flex-column border border-2 bg-light">
                <img src="` +
      varer[index][i].img +
      `" alt="` +
      varer[index][i].Name +
      `"></img>
                <h3>` +
      varer[index][i].Name +
      `</h3>
      </div>
      <div class="d-flex mx-3 flex-row flex-fill border border-2 bg-light">
      <button id="btn` +
      varer[index][i].id +
      `" class="btn btn-primary fs-5" onclick="leggTil('${index}', '${i}');">Legg til</button>              
                    <div class="d-flex flex-fill fs-5 justify-content-end"> <input type="number" value="1"id="antall` +
      varer[index][i].id +
      `" style="Width:60px">` +
      varer[index][i].Pris +
      `kr` +
      `</div>
                    </div>
     </div>
     </div>
     `;
  }
}
function leggTil(indeks, i, svar) {
  let antallvarer = parseInt(
    document.getElementById("antall" + varer[indeks][i].id).value
  );
  // Sjekker om varen er i handlevognen
  if (varer[indeks][i].iHandlevogn == true || antallvarer >= 2) {
    // sender en HTML varsel til brukeren
    document.getElementById(
      "advarsel"
    ).innerHTML = `<a class="nav-link disabled ">Varsel: Vil du legge denne varen i handlevognen</a>
      <button class="nav-link" onclick="leggTil(${indeks},${i},${true});">Ja</button>
      <button class="nav-link" onclick="leggTil(${indeks},${i},${false});">Nei</button>`;
    if (svar == true) {
      varer[indeks][i].iHandlevogn = true;
      varer[indeks][i].antall += antallvarer;
	  localStorage.setItem(varer[indeks][i].id,varer[indeks][i].antall)
      document.getElementById("advarsel").innerHTML = "";
      // sjekker svaret og putter den i localstorage
    } else if (svar == false) {
      document.getElementById("advarsel").innerHTML = "";
    }
  } else {
	localStorage.setItem(varer[indeks][i].id,varer[indeks][i].antall + 1)
  varer[indeks][i].iHandlevogn = true;
  
    varer[indeks][i].antall = antallvarer;
  }
}
// function tilLocalStorage(produkter) {
//   let kurvTing = localStorage.getItem("produkterIKurva")
//   kurvTing = JSON.parse(kurvTing);

//   if(kurvTing != null) {
//     if(kurvTing[varer.id] == undefined){
//       kurvTing={...kurvTing,[varer.id]: varer}
//     }
//     kurvTing[varer.id].antall += 1;
//   } else{
//     varer.antall = 1;
//     kurvTing = {[varer.id]: varer}
//   }
// localStorage.setItem("produkterIKurva", JSON.stringify(kurvTing))
// }


// lager en kort oppsummering over handlevognen i HTML
function handleVognen(){
  for (let i = 0, l = localStorage.length; i < l; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    document.getElementById("kurv").innerHTML +=
    `<div>
    <div class="d-flex ms-3 mb-3 flex-column ">
        <div class=" d-flex mx-3 flex-column border border-2 bg-light">
            <h3>${key}</h3>
            </h3>
            <h4>antall: ${value}</h4>
            <h5>pris:</h5>
            <input type="button" value="slett" onclick="slettMeg()">
        </div>
        <div class="d-flex mx-3 flex-row flex-fill border border-2 bg-light">
            <div class="d-flex flex-fill fs-5 justify-content-end">
            </div>
        </div>
    </div>
</div>`;
}
}
