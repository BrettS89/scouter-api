// Initializes the `content/collected-item` service on path `/content/collected-item`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { CollectedItem } from './collected-item.class';
import createModel from '../../../models/collected-item.model';
import hooks from './collected-item.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'content/collected-item': CollectedItem & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/content/collected-item', new CollectedItem(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('content/collected-item');

  service.hooks(hooks);
}
