(async function() {
    /*======================================================================*/
    /* get data for weight loss programs in order to dynamically add markup */
    /*======================================================================*/
    // const programs = await fetchPrograms();

    // let programsMarkup = '';
    // for (let i = 0; i < programs.length; i++) {
    //     const thisProgram = programs[i];
        
    //     //using template literal but I understand it's not supported on IE 11 and below
    //     programsMarkup += `
    //         <div class="program-block">
    //             <img alt="" src="${thisProgram.imageSrc}" />
    //             <p class="program-title">${thisProgram.title}</p>
    //             <p class="program-category">${thisProgram.category}</p>
    //         </div>
    //     `;
    // }

    const programsGrid = document.getElementById('programs-grid');
    // programsGrid.insertAdjacentHTML('beforeend', programsMarkup);

    /*==================================================================*/
    /*=============== set up scroll animation for programs =============*/
    /*==================================================================*/
    document.addEventListener('scroll', () => {
        const scrollBuffer = 100;
        if (window.scrollY + scrollBuffer >= programsGrid.getBoundingClientRect().top) {
            const programsElements = document.querySelectorAll('.program-block');
            for (let i = 0; i < programsElements.length; i++) {
                const block = programsElements[i];
                (function(block, i) {
                    setTimeout(function() {
                        block.classList.add('show');
                    }, 300 * i);
                })(block, i);
            }
        }
    });

    /*==================================================================*/
    /*=============== set up click animation for search bar ============*/
    /*==================================================================*/
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        searchButton.nextElementSibling.classList.add('show');
    });
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