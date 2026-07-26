import { redirect } from 'next/navigation'
import { CONSTRUCTION_HUB_HREF } from '@/data/demo-first/portfolio'

/** 建設ハブは外部 construction_demo へ（製造と同型） */
export default function ConstructionRedirectPage() {
  redirect(CONSTRUCTION_HUB_HREF)
}
