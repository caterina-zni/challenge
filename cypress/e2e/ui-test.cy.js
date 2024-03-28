describe('validations', () => {

    it('validate title and subtitles', () => {

        //Visit site
        cy.visit('https://jsonplaceholder.typicode.com/')
        
        //Get button and click it
        cy.get('a').contains('Guide').click()

        //Check site
        cy.url().should('eq', 'https://jsonplaceholder.typicode.com/guide/')

        //Get title by tag and check text
        cy.get('h2').should('contain', "Guide")

        //Get subtitles by parent and tag and check text
        cy.get('main').find('h3')
        .should('contain', 'Getting a resource')
        .and('contain', 'Listing all resources')
        .and('contain', 'Creating a resource')
        .and('contain', 'Updating a resource')
        .and('contain', 'Patching a resource')
        .and('contain', 'Deleting a resource')
        .and('contain', 'Filtering resources')
        .and('contain', 'Listing nested resources')
        
    })
})