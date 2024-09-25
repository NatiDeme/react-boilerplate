import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const riskData = [
  { risk: 'Heat', icon: '🌡️', kasungu: 1, malawi: 1 },
  { risk: 'Extreme fire conditions', icon: '🔥', kasungu: 4, malawi: 4 },
  { risk: 'Water scarcity', icon: '💧', kasungu: 1, malawi: 1 },
  { risk: 'Extreme precipitation', icon: '🌧️', kasungu: 3, malawi: 4 },
  { risk: 'Hail', icon: '🌨️', kasungu: 1, malawi: 1 },
  { risk: 'Extreme wind', icon: '💨', kasungu: 1, malawi: 1 },
  { risk: 'Tropical cyclones', icon: '🌀', kasungu: 1, malawi: 3 },
  { risk: 'Erosion', icon: '🏜️', kasungu: 2, malawi: 2 },
  { risk: 'Landslide', icon: '🏔️', kasungu: 1, malawi: 1 },
  { risk: 'Subsidence', icon: '🏚️', kasungu: 2, malawi: 2 },
];

const riskLevels = {
  1: 'Very low',
  2: 'Low',
  3: 'Medium',
  4: 'High'
};

const riskColors = {
  "2000-2019": '#E6FF72',
  "2020-2040": '#FFB300'
};

const RiskRadarChart = ({ timePeriod, emissionScenario }) => {
  const formatRiskLevel = (value) => riskLevels[value];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-bold mr-2">Time period:</span>
          <select className="border p-1 rounded">
            <option>{timePeriod}</option>
          </select>
        </div>
        <div>
          <span className="font-bold mr-2">Emission scenario:</span>
          <select className="border p-1 rounded">
            <option>{emissionScenario}</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={riskData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="risk" />
          <PolarRadiusAxis angle={30} domain={[0, 4]} tickFormatter={formatRiskLevel} />
          <Radar name="Kasungu" dataKey="kasungu" stroke={riskColors[0]} fill={riskColors[0]} fillOpacity={0.6} />
          <Radar name="Malawi" dataKey="malawi" stroke={riskColors[1]} fill={riskColors[1]} fillOpacity={0.6} />
          <Legend />
          <Tooltip formatter={formatRiskLevel} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskRadarChart;