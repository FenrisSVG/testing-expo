describe('Should visit and show the page', () => {
  //Prueba para verificar si la webpage esta visible al usuario.
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('user can see the page', () => {
    /**
     * ! Al usar should y contain el texto tiene que coincidir al 100% incluidos los caracteres especiales (!,.) o daria error.
     */
    cy.log('Webpage test')
    cy.get('[data-test-id="advice-card"]').should('be.visible')
    cy.get('[data-test-id="advice-number"]').should('contain', 'ADVICE #0')
    cy.get('[data-test-id="advice-body"]').should('contain', 'Click en el boton para generar un nuevo advice!.')
  })

  it('API Should be OK Response', () => {
    cy.log('Test response API')
    let slip_id = Math.floor(Math.random() * 150);
    const API_ENDPOINT = `https://api.adviceslip.com/advice/${slip_id}`;
    cy.request('GET',API_ENDPOINT).then(res => {
      //Problamos el estado 200 de la API.
      expect(res.status).to.equal(200)
      //Probamos que el status code sea OK.
      expect(res.isOkStatusCode).to.true
    })
  })

  it('Button should be generate a new random advice', () => {
    cy.log('Prueba clickear boton generar un nuevo consejo aleatorio')
    // Identificamos el boton y le decimos que de click!
    cy.get('button').should('be.visible').trigger('click')
    //
    cy.log('Probamos que el boton tenga la clase css de flex')
    cy.get('[data-test-id="advice-button"]').should(
      'have.css',
      'display',
      'flex'
    )
      //
    cy.log('Probamos que el tailwind este funcionando verificando que tenga la clase del bg')
    cy.get('[data-test-id="advice-button"]').should(
      'have.class',
      'bg-neon-green'
    )
    //
    cy.log('Verificamos que la imagen tenga visible el atributo alt por cualqueir error.')
    cy.get('[data-test-id="advice-button"]').find('img').should(
      'have.attr',
      'alt',
      'button randomize advice'
    )
  })

  it('Title should be equal to tag title on html', () => {
    //Verificamos el titulo de la pagina sea el correcto.
    /**
     * ! CUANDO OCUPAMOS SHOULD TIENE QUE SER EXACTO COMO LO ESCRIBIMOS EN LOS HEAD TAGS. POR EJEMPLO EL PUNTO FINAL (.) SI NO ESTA
     * ! NOS DARIA ERROR
     */
    cy.title().should('eq','Advice generator app coding.')
  })
})