let numberPictures = 0;
let numberClasses = [ // Number of images per class.
    '0',
    '8',
    '15',
    '22',
    '26',
    '34',
    '36',
    '43',
    '49',
    '54',
    '57',
    '61',
    '63'
];
let classesDays = [
    '16/03/20',
    '18/03/20',
    '19/03/20',
    '25/03/20',
    '26/03/20',
    '30/03/20',
    '2/04/20',
    '3/04/20',
    '6/04/20',
    '7/04/20',
    '9/04/20',
    '13/04/20'
];
for(i=0; i<classesDays.length;i++){
    let h1Maker = document.createElement('h1');
    h1Maker.textContent = 'Aula do dia ' + classesDays[i];
    h1Maker.id = classesDays[i];
    h1Maker.classList.add("centered");
    h1Maker.style.fontSize = "70px";
    document.body.appendChild(h1Maker);
    let divMaker = document.createElement('div');
    divMaker.classList.add("gallery");
    document.body.appendChild(divMaker);

    // Creates an option for the select box
    let optionMaker = document.createElement('option');
    optionMaker.value = classesDays[i];
    optionMaker.innerHTML = classesDays[i];
    document.getElementById('selectBox').appendChild(optionMaker);
    for(j=(Number(numberClasses[i]));j<Number(numberClasses[i+1]);j++){

        // Creates an a tag
        let aMaker = document.createElement('a');
        aMaker.href = 'images/quadro_' + (Number(j) + 1) + ".jpeg";
        aMaker.dataset.lightbox = "mygallery";
        divMaker.appendChild(aMaker);

        // Creates and appends an img tag to the a tag and appends it all to the body
        let imgMaker = document.createElement('img');
        imgMaker.src = 'images/quadro_' + (Number(j) + 1) + ".jpeg";
        imgMaker.style.width = '300px';
        aMaker.appendChild(imgMaker);
        console.log(j);
    }
    console.log(numberClasses[i] + ' i');
    console.log(numberClasses[i+1] + ' i + 1');
    // numberPictures += Number(numberClasses[i]);
    // numberPictures = Math.abs(numberPictures);
    // console.log(numberPictures);
}
function scrollToClass () {
    const select = document.getElementById('selectBox');
    select.addEventListener('change', event => {
        console.log(event.target.value)
        document.getElementById(event.target.value).scrollIntoView();
    })
}