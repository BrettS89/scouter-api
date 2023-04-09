import { Hook } from '@feathersjs/feathers';
import { BadRequest, GeneralError } from '@feathersjs/errors';
import bcrypt from 'bcryptjs';

export const hashPassword: Hook = context => {
  const { data } = context;

  if (!data.password) {
    throw new BadRequest('Missing password');
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(data.password, salt);

  data.password = hash;

  return context;
};

export const setRole: Hook = async context => {
  const { app, data } = context;

  const foundRole = await app
    .service('security/role')
    .find({
      query: {
        name: 'user',
      },
    });

  let role = foundRole.data[0];

  if (!role) {
    role = await app.service('security/role').create({ name: 'user' });
  }

  if (!role) {
    throw new GeneralError('No role was found');
  }

  data.roleId = role._id;

  return context;
};
