import { MessageTemplate } from './types';

// NB: this template data would normally be stored in the database
const template: MessageTemplate = {
  id: 12,
  name: 'Flight Confirmation - ',
  content: [
    {
      languageCode: 'EN',
      text: `Good day {{firstName}}, your flight tomorrow will depart on schedule at {{flightTime}}.`,
      variables: ['firstname', 'flightTime'],
    },
    {
      languageCode: 'NL',
      text: 'Goedendag {{firstName}}, uw vlucht morgen vertrekt volgens schema om {{flightTime}}.',
      variables: ['firstName', 'flightTime'],
    },
    {
      languageCode: 'FR',
      text: "Bonjour {{firstName}}, votre vol demain partira comme prévu à {{flightTime}}.",
      variables: ['firstName', 'flightTime'],
    },
    {
      languageCode: 'DE',
      text:
        'Guten Tag {{firstName}}, Ihr Flug morgen startet planmäßig um {{flightTime}}.',
      variables: ['firstName', 'flightTime'],
    },
  ],
};

/**
 * Fetch a specific message template from our database.
 *
 * NB: this is a dummy function, no actual call is made to our database.
 *
 * TODO: the return type of this function is now any, but it can be improved. What should it be?
 */
export function fetchTemplateFromDatabase(): any {
  return template;
}
