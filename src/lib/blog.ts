import { API_URL } from "./site";

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_url: string | null;
  cover_alt: string | null;
  category: string | null;
  published_at: string | null;
  reading_minutes: number;
}

// Últimos artigos do blog para a home. Se a API estiver fora do ar, a home simplesmente não mostra a seção.
export async function getLatestPosts(limit = 3): Promise<BlogPostSummary[]> {
  try {
    const response = await fetch(`${API_URL}/connect/blog/posts?limit=${limit}`, {
      next: { revalidate: 300 },
    });
    if (!response.ok) return [];
    const body = (await response.json()) as { data?: BlogPostSummary[] };
    return body.data ?? [];
  } catch {
    return [];
  }
}
