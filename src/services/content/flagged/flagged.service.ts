// Initializes the `content/flagged` service on path `/content/flagged`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Flagged } from './flagged.class';
import createModel from '../../../models/flagged.model';
import hooks from './flagged.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'content/flagged': Flagged & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/content/flagged', new Flagged(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('content/flagged');

  service.hooks(hooks);
}
