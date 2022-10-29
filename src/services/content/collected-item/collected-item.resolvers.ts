import { resolveById } from '../../../utilities/resolve';

const resolvers = {
  joins: {
    item: resolveById('itemId', 'item', 'content/item', { query: { $resolve: { user: true, file: true } } }),
    user: resolveById('userId', 'user', 'security/user'),
  },
};

export default resolvers;
