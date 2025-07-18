import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [signals, setSignals] = useState([])

  useEffect(() => {
    axios.get('https://your-backend-name.onrender.com/signals')
      .then(res => setSignals(res.data))
      .catch(err => console.error('Error fetching signals:', err))
  }, [])

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📈 Stocks to Watch</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Confidence Score (%)</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Chart</th>
          </tr>
        </thead>
        <tbody>
          {signals.length > 0 ? signals.map(s => (
            <tr key={s.ticker}>
              <td>{s.ticker}</td>
              <td>{s.confidence_score}</td>
              <td>{s.date}</td>
              <td>{s.reason}</td>
              <td>
                <a href={`https://your-backend-name.onrender.com/${s.chart_url}`} target="_blank" rel="noreferrer">
                  View Chart
                </a>
              </td>
            </tr>
          )) : <tr><td colSpan="5">No signals yet.</td></tr>}
        </tbody>
      </table>
    </div>
  )
}

export default App
// Trigger rebuild
