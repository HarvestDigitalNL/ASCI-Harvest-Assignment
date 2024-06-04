import { fetchMessageBatch } from './fetchMessageBatch.js';
import { fetchTemplateFromDatabase } from './fetchTemplatesFromDatabase.js';
import { sendMessages } from './sendMessages.js';
import { MessageTemplate, MessageBatch } from './types.js';

export const TEAMNAME = 'YOUR-TEAM';

/**
 * Hi ASCI! Start here :-)
 *
 * The goal: we want to send some messages to our customers! To do so, we have two data sources:
 *
 * 1. A batch of messages, which contains the selected template and customer-specific information.
 * 2. A message template, which contains information about the message we want to send in several languages.
 *
 *  Your task is to:
 *  - Fetch the message template from our database.
 *  - Fetch the message batch from our messageBatch.
 *  - Construct the messages we'd like to send (based on the message template and the variable values in the message).
 *  - Construct the request and send the message.
 *
 * Make sure you read README.md before proceeding.
 */
function main() {
  console.info('>> App started \n');

  // TODO (1): fetch template information from our database
  const template: MessageTemplate = fetchTemplateFromDatabase();
  console.info('>> Template fetched: ', template);

  // TODO (2): construct the messages we'd like to send (based on the message template)
  const messages: MessageBatch= fetchMessageBatch()
  console.info('>> Messages fetched: ', messages);

  // TODO (3): construct request and send message
  sendMessages(template, messages)
    .then(() => console.info('>> Messages sent successfully! \n'))
    .catch((error) => console.error(error));

  console.info('>> App finished \n');
}

main();
