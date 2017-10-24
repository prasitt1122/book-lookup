function BookLookup(AmazonServices){
    this.AmazonServices = AmazonServices
    
    this.search =(ispn) =>{
        let Search = this.AmazonServices(ispn)
        return Search
    }
    



}



test('BookLookup',() =>{
    const AmazonServices = jest.fn('1234567890123')
    .mockReturnValue({name:'basic java',cover:'javabasic.com',ispn:'1234567890123'})
    let app = new BookLookup(AmazonServices)
    let ispn = '1234567890123'
    let value = app.search(ispn)


    expect(value).toEqual({name:'basic java',cover:'javabasic.com',ispn:'1234567890123'})
    expect(AmazonServices).toHaveBeenCalled()
    expect(AmazonServices).toHaveBeenCalledWith(ispn)
    expect(value.name).toBe("basic java")
    expect(value).toHaveProperty("cover")
    

    


})