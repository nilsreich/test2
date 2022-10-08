import prisma from '../../lib/prisma';

export default async function handle(req, res) {
  const content = await prisma.Todo.findMany()
  res.json(content)
};
