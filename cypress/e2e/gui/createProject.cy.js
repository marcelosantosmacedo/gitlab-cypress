import { faker } from '@faker-js/faker'

describe('Spec - Create Project', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Create a project with success', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  
  cy.gui_createProject(project)

  cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
  cy.contains(project.name).should('be.visible')
  cy.contains(project.description).should('be.visible')
  })

})