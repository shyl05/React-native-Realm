import {Realm} from '@realm/react';
export class Task extends Realm.Object {
  static generate(subject, body, type) {
    return {
      _id: new Realm.BSON.ObjectId(),
      subject,
      body,
      type,
      isComplete: false,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      subject: 'string',
      body: 'string',
      type: 'string',
      isComplete: {type: 'bool', default: false},
      createdAt: 'date',
    },
  };
}
