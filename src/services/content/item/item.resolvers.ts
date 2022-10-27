import { resolveById } from '../../../utilities/resolve';

const resolvers = {
  joins: {
    user: resolveById('userId', 'user', 'security/user'),
    file: resolveById('fileId', 'file', 'storage/file'),
  },
};

export default resolvers;
