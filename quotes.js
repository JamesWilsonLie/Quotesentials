function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    const values = urlParams.getAll(name);
    return values.length > 0 ? values : null;
}

const quotes = getParameterByName('q');
if (quotes) {
    quotes.forEach((quote, index) => {
        const quoteElement = document.createElement('p');
        quoteElement.id = 'q' + (index + 1);
        quoteElement.innerText = quote;
        document.getElementById('quote').innerText=quote;
    });
}

const authors = getParameterByName('a');
if (authors) {
    authors.forEach((author, index) => {
        const authorElement = document.createElement('p');
        authorElement.id = 'a' + (index + 1);
        authorElement.innerText = author;
        document.getElementById('author').innerText= '~ ' + author;
    });
}