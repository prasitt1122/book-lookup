function BookLookup(AmazonServices){
    this.AmazonServices = AmazonServices
    
    this.search =(isbn) =>{
        let Search = this.AmazonServices(isbn)
        return Search
    }
    



}



test('BookLookup',() =>{
    const AmazonServices = jest.fn('1234567890123')
    .mockReturnValue({name:'basic java',cover:'javabasic.com',isbn:'1234567890123'})
    let app = new BookLookup(AmazonServices)
    let isbn = '1234567890123'
    let value = app.search(isbn)


    expect(value).toEqual({name:'basic java',cover:'javabasic.com',isbn:'1234567890123'})

})