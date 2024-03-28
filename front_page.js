window.onload = function() {
    const debut = document.getElementById('debut')
    const fearless = document.getElementById('fearless')
    const speakNow = document.getElementById('speakNow')
    const red = document.getElementById('red')
    const nineteenEightyNine = document.getElementById('nineteenEightyNine')
    const reputation = document.getElementById('reputation')
    const lover = document.getElementById('lover')
    const folklore = document.getElementById('folklore')
    const evermore = document.getElementById('evermore')
    const midnights = document.getElementById('midnights')

    debut.addEventListener('click', function() {
        localStorage.setItem("albumName", 'debut')
        window.location.href = "quiz_page.html"
    })

    fearless.addEventListener('click', function() {
        localStorage.setItem("albumName", 'fearless')
        window.location.href = "quiz_page.html"
    })

    speakNow.addEventListener('click', function() {
        localStorage.setItem("albumName", 'speakNow')
        window.location.href = "quiz_page.html"
    })

    red.addEventListener('click', function() {
        localStorage.setItem("albumName", 'red')
        window.location.href = "quiz_page.html"
    })

    nineteenEightyNine.addEventListener('click', function() {
        localStorage.setItem("albumName", 'nineteenEightyNine')
        window.location.href = "quiz_page.html"
    })

    reputation.addEventListener('click', function() {
        localStorage.setItem("albumName", 'reputation')
        window.location.href = "quiz_page.html"
    })

    lover.addEventListener('click', function() {
        localStorage.setItem("albumName", 'lover')
        window.location.href = "quiz_page.html"
    })

    folklore.addEventListener('click', function() {
        localStorage.setItem("albumName", 'folklore')
        window.location.href = "quiz_page.html"
    })

    evermore.addEventListener('click', function() {
        localStorage.setItem("albumName", 'evermore')
        window.location.href = "quiz_page.html"
    })

    midnights.addEventListener('click', function() {
        localStorage.setItem("albumName", 'midnights')
        window.location.href = "quiz_page.html"
    })
}