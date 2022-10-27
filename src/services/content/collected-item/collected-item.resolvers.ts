import { resolveById } from '../../../utilities/resolve';

const resolvers = {
  joins: {
    item: resolveById('itemId', 'item', 'content/item', { query: { $resolve: { user: true } } }),
    user: resolveById('itemId', 'item', 'content/item', { query: { $resolve: { file: true } } }),
  },
};

export default resolvers;
