const xmlParser = require('xml-js');

const dataParser = data => {
    const interData = xmlParser.xml2js(data, {compact: true, spaces: 4});
    
    let title;
        if (interData.GoodreadsResponse.book.title._cdata) {
            if (interData.GoodreadsResponse.book.title._cdata.indexOf(' (') > -1) {
                title = interData.GoodreadsResponse.book.title._cdata.split(' (')[0]
            } else {
                title = interData.GoodreadsResponse.book.title._cdata
            }
        } else {
            if (interData.GoodreadsResponse.book.title._text.indexOf(' (') > -1) {
                title = interData.GoodreadsResponse.book.title._text.split(' (')[0]
            } else {
                title = interData.GoodreadsResponse.book.title._text
            }
        }
        let author;
        if (Array.isArray(interData.GoodreadsResponse.book.authors.author)) {
            if (interData.GoodreadsResponse.book.authors.author[0].name._cdata) {
                author = interData.GoodreadsResponse.book.authors.author[0].name._cdata
            } else {
                author = interData.GoodreadsResponse.book.authors.author[0].name._text
            }
        } else {
            if (interData.GoodreadsResponse.book.authors.author.name._cdata) {
                author = interData.GoodreadsResponse.book.authors.author.name._cdata
            } else {
                author = interData.GoodreadsResponse.book.authors.author.name._text
            }
        }
        let synopsis;
        if (interData.GoodreadsResponse.book.description._cdata) {
            if (interData.GoodreadsResponse.book.description._cdata.indexOf('<br') > -1) {
                synopsis = interData.GoodreadsResponse.book.description._cdata.split("<br")[0].replace(/<[^>]*>/g, '')
            } else {
                synopsis = interData.GoodreadsResponse.book.description._cdata.replace(/<[^>]*>/g, '')
            }
        } else if (interData.GoodreadsResponse.book.description._text) {
            if (interData.GoodreadsResponse.book.description._text.indexOf('<br') > -1) {
                synopsis = interData.GoodreadsResponse.book.description._text.split("<br")[0].replace(/<[^>]*>/g, '')
            } else {
                synopsis = interData.GoodreadsResponse.book.description._text.replace(/<[^>]*>/g, '')
            }
        } else {
            synopsis = "No synopsis available."
        }
        if (synopsis.length > 500) {
            synopsis = synopsis.substring(0, 499) + "(...)"
        }
        let book_ISBN;
        let img;
        if (interData.GoodreadsResponse.book.isbn._cdata) {
            book_ISBN = interData.GoodreadsResponse.book.isbn._cdata
        } else {
            book_ISBN = interData.GoodreadsResponse.book.isbn._text
        }
        if (!book_ISBN) {
            img = interData.GoodreadsResponse.book.image_url._text.replace('._SX98_', '')
        } else {
            img = `https://covers.openlibrary.org/b/ISBN/${book_ISBN}.jpg`
        }
        const book_info = {
            title,
            author,
            synopsis,
            img: null
        }
        return [book_info, img]
}

module.exports = dataParser;