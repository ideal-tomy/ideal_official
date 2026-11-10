import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { looksLikeAutomatedContact } from './spam-signals.ts'

describe('looksLikeAutomatedContact', () => {
  it('届いているランダム英数字の送信を検知する', () => {
    const samples = [
      {
        name: 'idlACOtrKiVichxGsAEmol',
        message: 'pockimJFpXpXMZztiCWxZq',
      },
      {
        name: 'RzyqmbYKRiezfbLQGgvXUkN',
        message: 'QqelwbgsUaulJGmHtDwAF',
      },
      {
        name: 'jlmWJwzvCwjoYrSQuLAv',
        message: 'bjQMcgAykCrWKCFMlfh',
      },
    ]
    for (const sample of samples) {
      assert.equal(looksLikeAutomatedContact(sample), true)
    }
  })

  it('日本語と英文の問い合わせは通過させる', () => {
    assert.equal(
      looksLikeAutomatedContact({
        name: '山田 太郎',
        message: 'ランディングページの制作について相談したいです。',
      }),
      false,
    )
    assert.equal(
      looksLikeAutomatedContact({
        name: 'John Smith',
        message: 'I would like to discuss a new marketing website for our team.',
      }),
      false,
    )
  })

  it('ドットの多いメールや LLC だけでは検知しない', () => {
    assert.equal(
      looksLikeAutomatedContact({
        name: '山田 太郎',
        message: 'I would like a quote for Acme LLC.',
      }),
      false,
    )
  })

  it('片方だけが英数字の塊でも通過させる', () => {
    assert.equal(
      looksLikeAutomatedContact({
        name: 'idlACOtrKiVichxGsAEmol',
        message: 'サイト制作の相談です。来月の公開を希望しています。',
      }),
      false,
    )
    assert.equal(
      looksLikeAutomatedContact({
        name: '山田 太郎',
        message: 'pockimJFpXpXMZztiCWxZq',
      }),
      false,
    )
  })
})
