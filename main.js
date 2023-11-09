async function getAffixes(){
  let respons = await fetch("https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en")
  if(respons.ok){
    let affixes = await respons.json()
    console.log(affixes)

    for (const i in affixes.affix_details) {
      createCard(affixes.affix_details[i].name, affixes.affix_details[i].description, affixes.affix_details[i].icon)
      console.log(affixes.affix_details[i])
    }
    
// affixContainer.textContent += affixes.affix_details[0].description
  }

}

getAffixes()


function createCard(title, description, icon){
const mainContainer = document.querySelector("main")
const newCard = document.createElement("div")
const newTitle = document.createElement("h2")
const newImg = document.createElement("img")
const newPara = document.createElement("p")

newTitle.textContent = title;
newImg.src= "https://wow.zamimg.com/images/wow/icons/large/" + icon+ ".jpg";
newPara.textContent= description;
newCard.className = "cardContainer"
newCard.appendChild(newImg)
newCard.appendChild(newTitle)
newCard.appendChild(newPara)
mainContainer.appendChild(newCard)
}