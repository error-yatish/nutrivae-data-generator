import { type Request, type Response } from 'express';

type Identifiable = {
  id: string;
};

const parseNumber = (value: unknown, defaulValue = 0): number => {
  const parsed = Number.parseInt(String(value), 10);

  if (!Number.isFinite(parsed) || parsed < 1) {
    return defaulValue;
  }

  return parsed;
};

const getLimit = (value: unknown): number => Math.min(parseNumber(value, 5), 100);

const getOffset = (value: unknown, limit: number): number => {
  const parsedPage = parseNumber(value);

  if (parsedPage <= 1) {
    return 0;
  }

  return (parsedPage - 1) * limit;
};

export const createReadController = <T extends Identifiable>(
  items: T[],
  resourceName: string
) => ({
  getAll: (req: Request, res: Response): void => {
    const total = parseNumber(req.query.total, 10000);
    const page = parseNumber(req.query.page, 1);
    const limit = getLimit(req.query.limit);
    const offset = getOffset(req.query.page, limit);
    const totalPage = Math.ceil(total / limit);

    res.json({
      items: page <= totalPage ? items.slice(offset, Math.min(offset + limit, total)) : [],
      next: page < totalPage ? offset + limit : null
    });
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
