import request from 'supertest';
import app from '../src/app.js';
import * as solanaService from '../src/services/solanaService.js';

jest.mock('../src/services/solanaService.js');

describe('Transfer Controller', () => {
  it('should return 400 if sender public key is missing', async () => {
    const response = await request(app)
      .post('/api/actions/transfer-usdc')
      .send({ recipientAddress: 'some-address' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing required parameters');
  });

  it('should return 400 if recipient address is missing', async () => {
    const response = await request(app)
      .post('/api/actions/transfer-usdc')
      .send({ senderPublicKey: 'some-public-key' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Missing required parameters');
  });

  it('should return 400 if USDC balance is insufficient', async () => {
    solanaService.checkUsdcBalance.mockResolvedValue(1.5);

    const response = await request(app)
      .post('/api/actions/transfer-usdc')
      .send({ senderPublicKey: 'sender-public-key', recipientAddress: 'recipient-address' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Not enough USDC for transaction');
  });

  it('should return serialized transaction if USDC balance is sufficient', async () => {
    solanaService.checkUsdcBalance.mockResolvedValue(3);
    solanaService.prepareUsdcTransfer.mockResolvedValue('serialized-transaction');

    const response = await request(app)
      .post('/api/actions/transfer-usdc')
      .send({ senderPublicKey: 'sender-public-key', recipientAddress: 'recipient-address' });

    expect(response.status).toBe(200);
    expect(response.body.serializedTransaction).toBe('serialized-transaction');
    expect(response.body.message).toContain('Transfer 1 USDC from');
  });
});