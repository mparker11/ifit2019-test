(async function() {
    const programs = await fetchPrograms();

    let programsMarkup = '';
    for (let i = 0; i < programs.length; i++) {
        const thisProgram = programs[i];
        
        //using template literal but I understand it's not supported on IE 11 and below
        programsMarkup += `
            <div class="program-block">
                <img alt="" src="${thisProgram.imageSrc}" />
                <p class="program-title">${thisProgram.title}</p>
                <p class="program-category">${thisProgram.category}</p>
            </div>
        `;
    }

    const programGrid = document.getElementById('programs-grid');
    programsGrid.insertAdjacentHTML('beforeend', programsMarkup);
})();

function fetchPrograms() {
    return new Promise((resolve, reject) => {
        fetch('./data/programs.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}