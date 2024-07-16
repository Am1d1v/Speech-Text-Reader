

const main = document.querySelector('main');
const voicesSelect = document.querySelector('#voices');
const textarea = document.querySelector('#text');
const textbox = document.querySelector('#text-box');
const readButton = document.querySelector('#read');
const toggleButton = document.querySelector('#toggle');
const closeButton = document.querySelector('#close');

const data = [
    {
        image: 'https://images.unsplash.com/photo-1528669826296-dbd6f641707d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'I am hungry'
    },
    {
        image: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'I am thirsty'
    },
    {
        image: 'https://images.unsplash.com/photo-1479134262046-a470bfaf7a66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'I am tired'
    },
    {
        image: 'https://images.unsplash.com/photo-1604699229817-27301bdfed68?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'I am happy'
    },
];

data.forEach(item => {
    createBox(item);
})

// Create speech boxes
function createBox(item){
    const box = document.createElement('div');

    // Destructuring every data array object
    const {image, text} = item;

    box.classList.add('box');
    box.innerHTML = `
        <img src="${image}" alt="${text}" />
        <p class="info">${text}</p>
    `;

    // Append every box element to main
    main.appendChild(box);
}

// Store Voices
let voices = [];
const synth = window.speechSynthesis;

function Voices(){

    setTimeout(() => {
        voices = synth.getVoices();
    
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.innerText = `${voice.name} ${voice.lang}`;
    
            voicesSelect.appendChild(option);
        });
    }, 1000);
}
Voices();

// Show Text box
toggleButton.addEventListener('click', () => textbox.style.transform = 'translate(-50%, 0px)');

// Hide Text box
closeButton.addEventListener('click', () => textbox.style.transform = 'translate(-50%, -900px)');