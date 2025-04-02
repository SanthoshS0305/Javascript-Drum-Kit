//supported: clap, hihat, kick, openhat, boom, ride, snare, tom, tink
const key_map = new Map([
    [65, 'clap'], //A
    [83, 'tom'], //S
    [68, 'snare'], //D
    [70, 'kick'], //F
    [71, 'boom'], //G
    [72, 'hihat'], //H
    [74, 'openhat'], //J
    [75, 'ride'], //K
    [76, 'tink'] //L
]);
document.getElementById("key_65").innerHTML = key_map.get(65);
document.getElementById("key_83").innerHTML = key_map.get(83);
document.getElementById("key_68").innerHTML = key_map.get(68);
document.getElementById("key_70").innerHTML = key_map.get(70);
document.getElementById("key_71").innerHTML = key_map.get(71);
document.getElementById("key_72").innerHTML = key_map.get(72);
document.getElementById("key_74").innerHTML = key_map.get(74);
document.getElementById("key_75").innerHTML = key_map.get(75);
document.getElementById("key_76").innerHTML = key_map.get(76);

let playSound = function(e){
    const audio = document.querySelector(`audio[data-key="${key_map.get(e.keyCode)}"]`);
    const key = document.querySelector(`div.key[data-key="${(e.keyCode)}"]`);
    if (!audio) return; //unaccounted value stop case
    audio.currentTime=0; //rewind to the start
    audio.play();
    key.classList.add('playing');
    
}

let removeTransition = function(e){
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('div.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);