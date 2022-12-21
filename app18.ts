const reqType: [string, string, number, string] = ['sone', 'sone', 1, 'sone'];

enum statusRequest {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
  Optional = 'optional',
}

async function getFaqs(req: {
  topicId: number;
  status: statusRequest;
}): Promise<
  { question: string; answer: string; tags: string[]; likes: number; status: statusRequest }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
