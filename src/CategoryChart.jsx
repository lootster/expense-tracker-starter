import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const PHOSPHOR = '#00ff66';
const AMBER = '#ffb000';

function CategoryChart({ transactions }) {
  const totalsByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(totalsByCategory)
    .map(([name, value]) => ({ name: name.toUpperCase(), value }))
    .sort((a, b) => b.value - a.value);

  const tooltipStyle = {
    background: '#000',
    border: '1px solid #00aa44',
    color: '#00ff66',
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: '12px',
    letterSpacing: '0.08em',
    padding: '6px 10px',
  };

  return (
    <div className="category-chart">
      <h2>SPEND.BY_CAT</h2>
      {data.length === 0 ? (
        <p className="empty-state">no expenses logged</p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ top: 10, right: 16, left: 4, bottom: 8 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="#0f1a0f" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#00aa44"
              tick={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10, letterSpacing: '0.12em' }}
              tickLine={false}
            />
            <YAxis
              stroke="#00aa44"
              tickFormatter={(value) => `$${value}`}
              tick={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: 10 }}
              tickLine={false}
              axisLine={{ stroke: '#00aa44' }}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              labelStyle={{ color: '#00aa44', fontSize: '10px', letterSpacing: '0.18em' }}
              cursor={{ fill: 'rgba(0, 255, 102, 0.05)' }}
              formatter={(value) => [`$${value.toFixed(2)}`, 'AMOUNT']}
            />
            <Bar dataKey="value" isAnimationActive={true}>
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={index === 0 ? AMBER : PHOSPHOR}
                  stroke={index === 0 ? AMBER : PHOSPHOR}
                  strokeWidth={1}
                  fillOpacity={index === 0 ? 0.85 : 0.65}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default CategoryChart;
