function BookLookup(){
    
    this.search =(isbn) =>{
        return this.AmazonService(isbn)
    }
    



}



test('BookLookup',() =>{
    const AmazonServices = jest.fn('1234567890123')
    .mockReturnValue({name: 'basic java',cover:'javabasic.com',isbn:'1234567890123'})
    var app = new BookLookup(AmazonServices)
    var isbn = '1234567890123'
    var value = app.search(isbn)

})