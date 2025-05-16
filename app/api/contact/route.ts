// /app/api/contact/route.ts
import { db } from '@/firebaseConfig'
import { NextRequest, NextResponse } from 'next/server'
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 })
  }

  const ip = req.headers.get('x-forwarded-for') || 'unknown'

  const cooldownMs = 60 * 1000
  const recentQuery = query(
    collection(db, 'contactos'),
    where('ip', '==', ip),
    where('createdAt', '>=', Timestamp.fromMillis(Date.now() - cooldownMs))
  )

  const recent = await getDocs(recentQuery)
  if (!recent.empty) {
    return NextResponse.json({ error: 'Por favor espera antes de enviar otro mensaje.' }, { status: 429 })
  }

  await addDoc(collection(db, 'contactos'), {
    name,
    email,
    subject,
    message,
    ip,
    createdAt: Timestamp.now()
  })

  return NextResponse.json({ success: true }, { status: 200 })
}
