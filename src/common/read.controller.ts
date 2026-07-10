import { type Request, type Response } from 'express';

type Identifiable = {
  id: string;
};

const getLimit = (value: unknown): number => {
  const parsed = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 5;
  }

  return Math.min(parsed, 100);
};

const getOffset = (value: unknown, limit: number): number => {
  const parsedPage = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsedPage) || parsedPage <= 1) {
    return 0;
  }

  return (parsedPage - 1) * limit;
};

export const createReadController = <T extends Identifiable>(
  items: T[],
  resourceName: string
) => ({
  getAll: (req: Request, res: Response): void => {
    const limit = getLimit(req.query.limit);
    const offset = getOffset(req.query.page, limit);
    
    res.json(items.slice(offset, offset + limit));
  },
  getById: (req: Request, res: Response): void => {
    const id = req.params.id as string;
    const item = items.find(candidate => candidate.id === id);

    if (!item) {
      res.status(404).json({ error: `${resourceName} not found` });
      return;
    }

    res.json(item);
  }
});
