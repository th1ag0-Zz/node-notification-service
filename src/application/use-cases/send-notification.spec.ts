import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';

import { SendNotification } from './send-notification';

describe('Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'exemple-recipient-id',
      category: 'social',
      content: 'Voce tem uma nova mensagem',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
