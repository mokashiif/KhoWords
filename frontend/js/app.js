function searchLyrics() {
    let text = document.getElementById("searchInput").value;

    document.getElementById("resultBox").innerHTML =
        "You searched for: " + text;
}

