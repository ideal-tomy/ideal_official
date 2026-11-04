'use client'

import { useRouter } from 'next/navigation'
import { useState, type FormEvent } from 'react'
import { servicesLpContact } from '@/data/services/hub'
import { Eyebrow, LpHeading } from './ServicesLpParts'

/** 入力は保存しない。/contact の prefill で相談フォームの本文に載せる */
export function ServicesLpContact() {
  const router = useRouter()
  const [memo, setMemo] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = memo.trim()
    router.push(text ? `/contact?prefill=${encodeURIComponent(text)}` : '/contact')
  }

  return (
    <section id="contact" className="svc-w svc-sec">
      <div className="svc-wrap">
        <form className="svc-contact" onSubmit={onSubmit}>
          <Eyebrow>{servicesLpContact.eyebrow}</Eyebrow>
          <LpHeading lines={servicesLpContact.heading} />
          <p className="svc-body svc-left">{servicesLpContact.body}</p>
          <label htmlFor="svc-memo">{servicesLpContact.label}</label>
          <textarea
            id="svc-memo"
            value={memo}
            onChange={(event) => setMemo(event.target.value)}
            placeholder={servicesLpContact.placeholder}
          />
          <button type="submit" className="svc-btn">
            {servicesLpContact.button}
          </button>
          <p className="svc-small">{servicesLpContact.note}</p>
        </form>
      </div>
    </section>
  )
}
