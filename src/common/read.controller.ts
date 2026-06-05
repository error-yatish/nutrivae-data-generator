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

export const createReadController = <T extends Identifiable>(
  items: T[],
  resourceName: string
) => ({
  getAll: (req: Request, res: Response): void => {
    res.json(items.slice(0, getLimit(req.query.limit)));
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
