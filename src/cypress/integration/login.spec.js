describe('Test the Login Page', () => {
    beforeEach(() => {
        cy.login();
    })

    it('Test Login', () => {
        expect(true).toBe(true);
    });
});