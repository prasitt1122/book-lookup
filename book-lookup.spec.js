test('BookLookup',() =>{
    var app = new BookLookup(AmazonServices)
    var isbn = '1234567890123'
    var value = app.search(isbn)
    
})