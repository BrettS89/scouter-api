import { resolveById } from '../../../utilities/resolve';

const resolvers = {
  joins: {
    item: resolveById('itemId', 'item', 'content/item', { query: { $resolve: { file: true } } }),
    user: resolveById('userId', 'user', 'security/user'),
    collectedByUser: resolveById('collectedById', 'collectedByUser', 'security/user'),
  },
};

export default resolvers;
