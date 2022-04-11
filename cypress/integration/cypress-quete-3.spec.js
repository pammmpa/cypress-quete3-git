describe('JDD tests', () => {

    const query = require('../fixtures/example.json') 
    
    it('Tastedive API tests', () => {
        cy.nirvanaSearch(query.name, query.type, query.limit)
            .then(response => {
                const resp = response.body.Similar
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(resp).to.have.property('Info')
                expect(resp.Info[0]).to.have.property('Type')
                expect(resp.Info[0].Name.toLowerCase()).to.eql(query.name)
                expect(resp.Info[0].Type).to.eql(query.type)
                expect(resp.Results.length).to.eql(query.limit)
                for(let i=0; i<resp.Results.length; i++){
                    expect(resp.Results[i].Type).to.eql(query.type)
                }


            })

    })

})  
