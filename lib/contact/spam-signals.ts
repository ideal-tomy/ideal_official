/**
 * ランダムな英数字の自動送信を補助的に検知する。
 * 名前とメッセージの両方が、空白も句読点もない大小混在の英数字だけ、
 * という条件を満たすときだけ拒否する。
 * 日本語、空白を含む英文、ローマ字の氏名は通過させる。
 */

const ALPHANUMERIC_TOKEN = /^[A-Za-z0-9]+$/

function isMixedCaseToken(value: string, minLength: number): boolean {
  const trimmed = value.trim()
  if (trimmed.length < minLength) return false
  if (!ALPHANUMERIC_TOKEN.test(trimmed)) return false
  return /[a-z]/.test(trimmed) && /[A-Z]/.test(trimmed)
}

export function looksLikeAutomatedContact(input: {
  name: string
  message: string
}): boolean {
  return isMixedCaseToken(input.name, 12) && isMixedCaseToken(input.message, 16)
}
