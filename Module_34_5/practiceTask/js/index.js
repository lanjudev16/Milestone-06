const loadData = async (value) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    const res = await fetch(url)
    const data = await res.json()
    displayAudioAndControl(data)
}
const displayAudioAndControl = data => {
    const audioPlay = document.getElementById('audioPlay')
    audioPlay.innerHTML = ''
    const audio = document.createElement('audio')
    audio.src = data[0].phonetics[0].audio
    audioPlay.innerHTML = `
    <i id="iconBtnClickId" class="bi bi-play text-secondary iconStyle"></i>
    `
    document.getElementById('iconBtnClickId').addEventListener('click', function () {
        audio.play()
    })

    audioPlay.appendChild(audio)

}

document.getElementById('searchInputFieldId').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchInputFieldIdValue = document.getElementById('searchInputFieldId').value
        loadData(searchInputFieldIdValue)
    }
})

loadData()