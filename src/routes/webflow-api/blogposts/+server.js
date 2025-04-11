import { WEBFLOW_TOKEN } from '$env/static/private';

export async function GET() {
  const collectionId = '67bf02f91ea1c640b5425abd';
  const url = `https://api.webflow.com/v2/collections/${collectionId}/items`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_TOKEN}`,
      Accept: 'application/json',
    }
  });

  if (!res.ok) {
    const errorText = await res.text();
    return new Response(`Fout bij ophalen items: ${res.status} – ${errorText}`, {
      status: res.status
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
