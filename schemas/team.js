export default `
  type Team {
    name: String!
    owner: User
    members: [User!]
    channels: [Channel!]
  }
  type Query {
    getTeam(id: Int!): Team!
    allTeams: [Team!]!
  }
  type CreateTeamResponse {
    ok: Boolean!
    errors: [Error!]
  }
  type Mutation {
    createTeam(name: String!): CreateTeamResponse!
  }
`;
