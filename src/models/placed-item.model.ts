// content/placed-item-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';

export default function (app: Application): Model<any> {
  const modelName = 'content/placedItem';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
      required: true,
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'content/item',
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number]
      },
    },
    collectedById: {
      type: Schema.Types.ObjectId,
      ref: 'security/user',
      index: true,
    },
  }, {
    timestamps: true
  });

  schema.index({ location: '2dsphere' });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
