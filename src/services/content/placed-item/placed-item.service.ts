// Initializes the `content/placed-item` service on path `/content/placed-item`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { PlacedItem } from './placed-item.class';
import createModel from '../../../models/placed-item.model';
import hooks from './placed-item.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'content/placed-item': PlacedItem & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$nearSphere', '$geometry', '$maxDistance', '$exists'],
    useEstimatedDocumentCount: true,
  };

  // Initialize our service with any options it requires
  app.use('/content/placed-item', new PlacedItem(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('content/placed-item');

  service.hooks(hooks);
}
