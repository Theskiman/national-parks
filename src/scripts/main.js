let displayContainer = document.querySelector("#display-container")

const displayParks = (park) => {
    const createArticle = document.createElement("article")
    let parkBorder = park.visited
    let parkHTML = `<h3>${park.name}</h3>
    <p>State: ${park.state}</p>`
    createArticle.classList = parkBorder
    createArticle.innerHTML = parkHTML
    displayContainer.appendChild(createArticle)
}


const getNationalParks = () => {
    return fetch("http://localhost:9099/parks")
    .then(response => response.json())
    .then(parsedResponse => {
        parsedResponse.forEach(park => {
            displayParks(park)
        }) 
        
    });
    
}

getNationalParks()

