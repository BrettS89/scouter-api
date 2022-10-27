import { resolveById } from '../../../utilities/resolve';

const resolvers = {
  joins: {
    item: resolveById('itemId', 'item', 'content/item'),
    user: resolveById('userId', 'user', 'security/user'),
  },
};

export default resolvers;
