function playNote(note){
    console.log("hello")

    const audio = document.getElementById('piano-sound')
    audio.src = `piano-mp3/${note}.mp3`
    audio.currentTime = 0; 
    audio.play()
}