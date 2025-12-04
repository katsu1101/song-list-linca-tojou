// utils/dateFormat.ts

/**
 * ISO日付文字列を "YYYY/MM/DD "文字列フォーマットに変換する。
 *
 * @param {string} isoString - フォーマットするISO日付文字列。
 * @return {string} YYYY/MM/DD "形式でフォーマットされた日付文字列。
 */
export function formatDateYmd(isoString: string): string {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${day} ${hour}:${minute}`; // 2024/01/05 みたいな固定形式
}
