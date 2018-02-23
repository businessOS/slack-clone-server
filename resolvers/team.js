import formatErrors from '../formatErrors';
import { requiresAuth } from '../permisions';

export default {
  Query: {
    getTeam: (parent, { id }, { models }) => models.Team.findOne({ where: { id } }),
    allTeams: (parent, args, { models }) => models.Team.findAll(),
  },
  Mutation: {
    createTeam: requiresAuth.createResolver(async (parent, args, { models, user }) => {
      try {
        await models.Team.create({ ...args, owner: user.id });
        return {
          ok: true,
        };
      } catch (err) {
        return {
          ok: false,
          errors: formatErrors(err),
        };
      }
    }),
  },
};
