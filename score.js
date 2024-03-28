window.onload = function () {
    var scoreLocal = localStorage.getItem("localScore")
    document.getElementById('score').innerHTML = scoreLocal + "/5"

    const again = document.getElementById('replay')
    const newAlbum = document.getElementById('newAlbum')

    again.addEventListener('click', function() {
        window.location.href = "quiz_page.html"
    })

    newAlbum.addEventListener('click', function() {
        window.location.href = "front_page.html"
    })
}
