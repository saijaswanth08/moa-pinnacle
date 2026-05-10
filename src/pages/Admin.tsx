import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const ADMIN_PASSWORD = 'moa2024admin'

type Inquiry = {
  id: number
  created_at: string
  name: string
  company: string
  email: string
  phone: string
  interest: string
  message: string
}

export const Admin = () => {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(false)

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true)
      fetchData()
    } else {
      alert('Wrong password')
    }
  }

  const fetchData = async () => {
    setLoading(true)
    const { data } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    setInquiries(data || [])
    setLoading(false)
  }

  if (!authed) return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{
        color: '#C9A84C',
        fontFamily: 'Playfair Display',
        fontSize: '32px'
      }}>
        MOA Admin
      </h1>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && login()}
        style={{
          padding: '12px 16px',
          background: '#111',
          border: '1px solid rgba(201,168,76,0.3)',
          color: 'white',
          borderRadius: '8px',
          width: '300px',
          outline: 'none',
          fontFamily: 'Inter'
        }}
      />
      <button
        onClick={login}
        style={{
          padding: '12px 32px',
          background: '#C9A84C',
          color: '#000',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500',
          fontFamily: 'Inter'
        }}
      >
        Login →
      </button>
    </div>
  )

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      padding: '40px',
      color: 'white',
      fontFamily: 'Inter'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        borderBottom: '1px solid rgba(201,168,76,0.2)',
        paddingBottom: '24px'
      }}>
        <div>
          <h1 style={{
            color: '#C9A84C',
            fontFamily: 'Playfair Display',
            fontSize: '32px',
            margin: 0
          }}>
            MOA Inquiries
          </h1>
          <p style={{ color: '#A0A0A0', margin: '4px 0 0 0', fontSize: '14px' }}>
            {inquiries.length} total submissions
          </p>
        </div>
        <button
          onClick={fetchData}
          style={{
            padding: '8px 20px',
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.3)',
            color: '#C9A84C',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'Inter'
          }}
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p style={{ color: '#A0A0A0' }}>Loading...</p>
      ) : inquiries.length === 0 ? (
        <p style={{ color: '#A0A0A0' }}>No inquiries yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{
                borderBottom: '1px solid rgba(201,168,76,0.3)'
              }}>
                {['Date','Name','Company','Email','Phone','Interest','Message'].map(h => (
                  <th key={h} style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    color: '#C9A84C',
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inquiries.map((row, i) => (
                <tr key={row.id} style={{
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  background: i % 2 === 0
                    ? 'transparent'
                    : 'rgba(255,255,255,0.02)'
                }}>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#A0A0A0',
                    whiteSpace: 'nowrap'
                  }}>
                    {new Date(row.created_at).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '13px' }}>
                    {row.name}
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '13px' }}>
                    {row.company}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#C9A84C'
                  }}>
                    {row.email}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#A0A0A0'
                  }}>
                    {row.phone || '-'}
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: '13px' }}>
                    <span style={{
                      padding: '3px 10px',
                      background: 'rgba(201,168,76,0.15)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#C9A84C',
                      whiteSpace: 'nowrap'
                    }}>
                      {row.interest}
                    </span>
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#A0A0A0',
                    maxWidth: '200px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {row.message || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
