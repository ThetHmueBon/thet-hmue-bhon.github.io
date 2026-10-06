export const sections = ['home', 'about', 'skills', 'projects', 'contact']
export const marqueeItems = [
  'VUE 3',
  'SPRING BOOT',
  'JAVA SE',
  'SPRING SECURITY',
  'REST API',
  'CUCUMBER',
  'JAVASCRIPT',
  'PYTHON',
  'AWS',
  'REDIS',
  'POSTGRESQL',
  'TOMCAT',
]
export const skills = {
  Frontend: [
    'Vue 3',
    'JavaScript',
    'TypeScript',
    'Vue Router',
    'Vuex',
    'Vite',
    'Ant Design Vue',
  
  ],

  Backend: [
    'Java SE',
    'Python',
    'Spring Boot',
    'Spring Security',
    'REST API',
    'Cucumber / BDD',
  ],

  Database: [
    'PostgreSQL',
    'Redis',
    'DynamoDB',
    'MongoDB',
  ],

  Tools: [
    'AWS',
    'Git',
    'Docker',
    'Tomcat',
    'Swagger / OpenAPI',
    'Postman',
  ],
}
export const projects = [
  { number: '01', title: 'User Role Management', category: 'FULL-STACK', year: '2026', description: 'A role-based management system with JWT authentication, authorization, soft delete and PostgreSQL persistence.', stack: ['Vue 3', 'Spring Boot', 'Java', 'PostgreSQL'], detail: 'Built to explore secure role-based access control, REST APIs, validation and database relationships.', visual: 'dashboard' },
  { number: '02', title: 'Redis Management', category: 'BACKEND', year: '2026', description: 'A practical caching project exploring cache hit/miss behavior, invalidation and database synchronization.', stack: ['Vue 3', 'Spring Boot', 'Redis', 'PostgreSQL'], detail: 'Built to understand caching behavior in a real CRUD flow and observe stale-cache scenarios.', visual: 'cache' },
  { number: '03', title: 'Transaction Lab', category: 'BACKEND', year: '2026', description: 'A Spring transaction playground covering rollback, propagation, REQUIRES_NEW and failure scenarios.', stack: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'], detail: 'A learning project focused on ACID behavior, transactional boundaries and propagation.', visual: 'transaction' }
]
export const orbitSkills = {
  Frontend: [
    { name: 'Vue 3' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Vue Router' },
    { name: 'Vuex' },
    { name: 'Vite' },
    ],

  Backend: [
    { name: 'Java' },
    { name: 'Python' },
    { name: 'Spring Boot' },
    { name: 'Spring Security' },
    { name: 'REST API' },
    { name: 'Cucumber' }
  ],

  Database: [
    { name: 'PostgreSQL' },
    { name: 'Redis' },
    { name: 'DynamoDB' },
    { name: 'MongoDB' }
  ],

  Tools: [
    { name: 'AWS' },
    { name: 'Git' },
    { name: 'Docker' },
    { name: 'Swagger' },
    { name: 'Postman' }
  ]
}