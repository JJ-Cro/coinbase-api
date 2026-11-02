import { jest } from '@jest/globals';

import { CBPrimeClient } from '../../src/index.js';

describe('CBPrimeClient portfolio products', () => {
  const rest = new CBPrimeClient();

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('leaves product_type unset to include all available product types', async () => {
    const response = {
      products: [
        { id: 'test-spot-product', product_type: 'SPOT' },
        { id: 'test-future-product', product_type: 'FUTURE' },
        { id: 'test-option-product', product_type: 'OPTION' },
      ],
      pagination: { next_cursor: '', sort_direction: 'DESC', has_next: false },
    };
    const getPrivate = jest
      .spyOn(rest, 'getPrivate')
      .mockResolvedValue(response);

    await expect(
      rest.getPortfolioProducts({
        portfolio_id: 'test-portfolio',
        limit: 1000,
      }),
    ).resolves.toBe(response);
    expect(getPrivate).toHaveBeenCalledWith(
      '/v1/portfolios/test-portfolio/products',
      { limit: 1000 },
    );
  });

  it.each(['SPOT', 'OPTION'] as const)(
    'forwards an explicit %s filter',
    async (product_type) => {
      const getPrivate = jest.spyOn(rest, 'getPrivate').mockResolvedValue({});

      await rest.getPortfolioProducts({
        portfolio_id: 'test-portfolio',
        product_type,
        limit: 1000,
      });

      expect(getPrivate).toHaveBeenCalledWith(
        '/v1/portfolios/test-portfolio/products',
        { product_type, limit: 1000 },
      );
    },
  );

  it('lets callers follow pagination.next_cursor to retrieve the remaining products', async () => {
    const firstPage = {
      products: [{ id: 'test-spot-product', product_type: 'SPOT' }],
      pagination: {
        next_cursor: 'test-next-cursor',
        sort_direction: 'DESC',
        has_next: true,
      },
    };
    const lastPage = {
      products: [{ id: 'test-option-product', product_type: 'OPTION' }],
      pagination: { next_cursor: '', sort_direction: 'DESC', has_next: false },
    };
    const getPrivate = jest
      .spyOn(rest, 'getPrivate')
      .mockResolvedValueOnce(firstPage)
      .mockResolvedValueOnce(lastPage);

    const first = await rest.getPortfolioProducts({
      portfolio_id: 'test-portfolio',
      limit: 1000,
    });
    expect(first.pagination.has_next).toBe(true);

    const last = await rest.getPortfolioProducts({
      portfolio_id: 'test-portfolio',
      limit: 1000,
      cursor: first.pagination.next_cursor,
    });

    expect(getPrivate).toHaveBeenNthCalledWith(
      2,
      '/v1/portfolios/test-portfolio/products',
      { limit: 1000, cursor: 'test-next-cursor' },
    );
    expect(last).toBe(lastPage);
    expect(last.pagination.has_next).toBe(false);
  });
});
