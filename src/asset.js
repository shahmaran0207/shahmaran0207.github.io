// public/ 자산 경로 (base 경로 호환)
export const asset = (p) => import.meta.env.BASE_URL + String(p).replace(/^\.?\/?/, '')
