import { hashPassword, setRole } from './hooks';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      hashPassword,
      setRole,
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
