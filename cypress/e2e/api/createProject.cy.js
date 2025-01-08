import { faker } from '@faker-js/faker'

describe('Spec - Create Project - API', () => {
  beforeEach(() => cy.api_deleteProjects())
  
  it('Create project', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    }

    cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(project.name)
        expect(response.body.description).to.eq(project.description)
        })
    })
})  
