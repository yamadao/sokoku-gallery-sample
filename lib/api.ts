const API_BASE = process.env.NEXT_PUBLIC_LIST_API_BASE;

export type ApiResult<T> = {
    ok: boolean;
    status: number;
    data?: T;
    error?: string;
};

export async function apiGet<T>(path: string, init?: RequestInit): Promise<ApiResult<T>> {
    if (!API_BASE) {
        return { ok: false, status: 500, error: 'NEXT_PUBLIC_LIST_API_BASE が設定されていません (.env.local を確認)' };
    }
    try {
        const url = `${API_BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
        const res = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            ...init,
        });
        if (!res.ok) {
            return { ok: false, status: res.status, error: `Request failed (${res.status})` };
        }
        const data = (await res.json()) as T;
        return { ok: true, status: res.status, data };
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        return { ok: false, status: 500, error: message };
    }
} 