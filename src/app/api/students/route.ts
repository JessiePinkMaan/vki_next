import { getStudentsDb } from '@/db/studentsDB';

export async function GET(): Promise<Response> {
  const groups = await getStudentsDb();

  return new Response(JSON.stringify(groups), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
