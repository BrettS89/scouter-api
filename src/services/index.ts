import { Application } from '../declarations';
import securityUser from './security/user/user.service';
import securityRole from './security/role/role.service';
import securitySession from './security/session/session.service';
import storageFile from './storage/file/file.service';
import storageSignature from './storage/signature/signature.service';
import dataTag from './data/tag/tag.service';
import testTest from './test/test/test.service';
import contentItem from './content/item/item.service';
import contentCollectedItem from './content/collected-item/collected-item.service';
import contentPlacedItem from './content/placed-item/placed-item.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(securityUser);
  app.configure(securityRole);
  app.configure(securitySession);
  app.configure(storageFile);
  app.configure(storageSignature);
  app.configure(dataTag);
  app.configure(testTest);
  app.configure(contentItem);
  app.configure(contentCollectedItem);
  app.configure(contentPlacedItem);
}
