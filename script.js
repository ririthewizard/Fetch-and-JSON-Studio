

window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then((astronauts) => {
        let div = document.getElementById("container");

        let sortedHours = astronauts.sort((a1, a2) => (a1.hoursInSpace < a2.hoursInSpace) ? 1 : (a1.hoursInSpace > a2.hoursInSpace) ? -1 : 0);
        // console.log(sortedHours);
        // console.log(astronauts);
        for (let i = 0; i < astronauts.length; i++){
            let astronaut = astronauts[i];

            div.innerHTML += (`
            <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>`)
        }

        // div.innerHTML = `
        // <div class="astronaut">
        // <div class="bio">
        //     <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
        //         <ul>
        //             <li>Hours in space: 190</li>
        //             <li>Active: false</li>
        //             <li>Skills: Physician, Chemical Engineer</li>
        //         </ul>
        // </div>
        // <img class="avatar" src="images/mae-jemison.jpg">
        // </div>
        // `
        })
    })
})