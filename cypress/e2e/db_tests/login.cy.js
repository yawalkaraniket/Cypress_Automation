describe('Verify user login', () => {

   it('Verify user is able to login successfully.', { tags: ['@sanity', '@ClientAdmin', '@Regression'] }, () => {

    cy.task("queryDb","select * from app_users")

    })

})
