import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const deleteTransaction = getCustomRepository(TransactionsRepository);

    const transaction = await deleteTransaction.findOne({
      where: {
        id,
      },
    });

    if (!transaction) {
      throw new AppError('This transaction does not exist');
    }

    await deleteTransaction.remove(transaction);
  }
}

export default DeleteTransactionService;
