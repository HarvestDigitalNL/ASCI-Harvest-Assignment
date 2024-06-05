import { MessageBatch } from './types.js';

// NB: dummy data
const messages: MessageBatch = {
  templateID: 12,
  messages: [
    {
      languageCode: 'EN',
      phoneNumber: '00316...',
      variables: { firstName: 'Walter', flightTime: '14:00' },
    },
    {
      languageCode: 'NL',
      phoneNumber: '00316...',
      variables: { firstName: 'Wouter', flightTime: '13:00' },
    },
    {
      languageCode: 'DE',
      phoneNumber: '00316...',
      variables: { firstName: 'Waltz', flightTime: '22:00' },
    },
    {
      languageCode: 'FR',
      phoneNumber: '00316...',
      variables: { firstName: 'il Wutrè', flightTime: '4:00' },
    },
    {
      languageCode: 'NL',
      phoneNumber: '00316...',
      variables: { firstName: 'Wouter', flightTime: '7:00' },
    },
  ],
};

/**
 * Fetch a specific batch of message from Marketing Cloud.
 *
 * TODO: the return type of this function can be improved. What should it be?
 *
 * NB: this is a dummy function, no actual call is made to Marketing Cloud.
 */
export function fetchMessageBatch(): any {
  return messages;
}
