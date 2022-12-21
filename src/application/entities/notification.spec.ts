import { SendNotification } from '../use-cases/send-notification';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade!'),
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
