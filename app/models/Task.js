import {Realm} from '@realm/react';
export class Task extends Realm.Object {
  static generate(subject, body) {
    return {
      _id: new Realm.BSON.ObjectId(),
      subject,
      body,
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
      isComplete: {type: 'bool', default: false},
      createdAt: 'date',
    },
  };
}
