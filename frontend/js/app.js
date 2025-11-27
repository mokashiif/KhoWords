function searchLyrics() {
    let text = document.getElementById("searchInput").value;

    document.getElementById("resultBox").innerHTML =
        "<strong>You searched for:</strong> " + text;
}

