export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL; // from .env.local
    const res = await fetch(`${baseUrl}${endpoint}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }
    return res.json();
}
