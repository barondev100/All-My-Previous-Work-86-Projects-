const synth = window.speechSynthesis;

const textForm = document.querySelector('form');
const textInput =  document.querySelector('#text-input');
const voiceSelect =  document.querySelector('#voice-select');
const rate =  document.querySelector('#rate');
const rateValue =  document.querySelector('#rate-value');
const pitch =  document.querySelector('#pitch');
const pitchValue =  document.querySelector('#pitch-value');
const body = document.querySelector('body')
let voices = [];

const getVoices = ()=> {
    voices = synth.getVoices();
    // Loop Through Voices
    voices.forEach(voice =>{
        const option = document.createElement('option');
        // Fill The option with voice.
        option.textContent = voice.name + '('+ voice.lang +')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}
getVoices();
if(synth.onvoiceschanged !== undefined){
    synth.onvoiceschanged = getVoices;
}



// Speak
const speak = ()=>{
    // Background Animation
   
    // Check If Speaking
    if(synth.speaking){
        console.error('Already Speaking...');
        return;
    }
    if(textInput.value !== ''){
        const speakText = new SpeechSynthesisUtterance(textInput.value);
        body.style.background = "black url(img/wave.gif)";
        body.style.backgroundRepeat = 'repeat-x';
        body.style.backgroundSize = '100% 100%';
        // Speak End
        speakText.onend = (e)=>{
            console.log("done Speaking...");
            body.style.background ="black";
        }
        speakText.onerror = e=>{
            console.log("Something Went Wrong!");
        }

        // Selected Voice
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
        // Loop Through Voices
        voices.forEach(voice=>{
            if(voice.name === selectedVoice){
                speakText.voice = voice;
            }
        })

        speakText.rate = rate.value;
        speakText.pitch = pitch.value;
        // Speak
        synth.speak(speakText);
    }
}
// Event Listeners
textForm.addEventListener('submit', e=>{
    e.preventDefault();
    speak();
    textInput.blur();
});

//Rate Value Change
rate.addEventListener('change', e=> rateValue.textContent = rate.value);
//Pitch Value Change
pitch.addEventListener('change', e=> pitchValue.textContent = pitch.value);

// Voice Select Change
voiceSelect.addEventListener('change',e=>speak());