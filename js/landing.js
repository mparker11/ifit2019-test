(async function() {
    const programs = await fetchPrograms();
    console.log(programs);
})();

function fetchPrograms() {
    return new Promise((resolve, reject) => {
        //Chrome does not allow loading local files using fetch 
        //but this is my preferred method of getting data

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


        //Have to use regular XMLHTTPRequest
        // try {
        //     var xobj = new XMLHttpRequest();
        //     xobj.overrideMimeType("application/json");
        //     xobj.open('GET', './data/programs.json', true);
        //     xobj.onreadystatechange = function () {
        //         if (xobj.readyState == 4 && xobj.status == "200") {
        //             resolve(xobj.responseText);
        //         } else {
        //             reject(null);
        //         }
        //     };
        //     xobj.send();  
        // } catch (error) {
        //     reject(error);
        // }
    });
}