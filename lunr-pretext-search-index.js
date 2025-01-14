var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-my-favorite-example",
  "level": "1",
  "url": "sec-my-favorite-example.html",
  "type": "Section",
  "number": "2.1",
  "title": "My Favorite Example",
  "body": " My Favorite Example  Text of section.    I define bankruptcy!       Yeppers!     Q: What do you call a large pile of kittens?  A: A meow-ntain! XD   "
},
{
  "id": "def-itsadef",
  "level": "2",
  "url": "sec-my-favorite-example.html#def-itsadef",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  I define bankruptcy!    "
},
{
  "id": "thm-",
  "level": "2",
  "url": "sec-my-favorite-example.html#thm-",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "",
  "body": "  Yeppers!   "
},
{
  "id": "sec-my-favorite-example-5",
  "level": "2",
  "url": "sec-my-favorite-example.html#sec-my-favorite-example-5",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " Q: What do you call a large pile of kittens?  A: A meow-ntain! XD  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
