import axios from 'axios';
import {
  MessageBatch,
  MessageTemplate,
  SendMessageConfiguration,
  TemplateContent,
  Message,
} from './types';

// TODO: This endpoint will be updated when the challenge has started.
//       Wait for confirmation of the software team and execute 'git pull' in the root of this repository.
const ENDPOINT = 'https://webhook.site/c9ac74c5-053e-480e-a364-49b3f5f19bc4';

/**
 * Make a POST request to our messaging endpoint.
 */
async function sendMessage(config: SendMessageConfiguration) {
  await axios.post(ENDPOINT, config);
}

/**
 * TODO: Develop the function according to its docstring
 * Complete the text of the message by replacing the dynamic variables with actual values.
 * For example: "My name is {{firstName}}" -> "My name is Thijmen"
 */
function insertVariablesIntoMessage(content: TemplateContent, message: Message): string {
  console.debug('content', content);
  console.debug('message', message);


  return 'SOME MESSAGE'
}

/**
 * Send messages to our customers for a specific language (based on the provided template and batch)
 */
export async function sendMessages(template: MessageTemplate, messageBatch: MessageBatch) {


  // TODO: Send a message for each message in the message batch
  for (const message of messageBatch.messages) {

    //TODO: Find the template content for the provided language code
    // const contentForLanguage = template.content.filter((content) => ...);


    //TODO: Replace the variables in the message content with the actual values
    // const messageContent = insertVariablesIntoMessage(contentForLanguage, message);

    const sendMessageConfig: SendMessageConfiguration = {
      teamName: 'Test',
      // TODO: add messageContent to the configuration
      messageContent: '',
      phoneNumber: message.phoneNumber
    }


    sendMessage(sendMessageConfig).catch((error) => console.error(error));
  }
}
