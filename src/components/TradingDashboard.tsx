import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const TradingDashboard = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([
    { symbol: 'BTC', price: 67420.50, change: 1250.30, changePercent: 1.89 },
    { symbol: 'ETH', price: 3840.25, change: -85.40, changePercent: -2.18 },
    { symbol: 'SOL', price: 185.30, change: 12.80, changePercent: 7.42 },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate price updates
      setCryptoData(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price + (Math.random() - 0.5) * 100,
        change: crypto.change + (Math.random() - 0.5) * 50,
        changePercent: crypto.changePercent + (Math.random() - 0.5) * 2,
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-bold text-lg">Live Trading Dashboard</h3>
          <p className="text-gray-400 text-sm font-mono">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-mono">LIVE</span>
        </div>
      </div>

      {/* Crypto Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {cryptoData.map((crypto, index) => (
          <div
            key={crypto.symbol}
            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-black/40 transition-all duration-300"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-bold text-lg">{crypto.symbol}</span>
              {crypto.changePercent > 0 ? (
                <TrendingUp className="w-5 h-5 text-green-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-400" />
              )}
            </div>
            <div className="space-y-1">
              <p className="text-white font-mono text-xl">
                ${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className={`text-sm font-mono ${crypto.changePercent > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {crypto.changePercent > 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Chart Simulation */}
      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-medium">Market Trend</span>
          <span className="text-green-400 text-sm font-mono">Accuracy: 94.2%</span>
        </div>
        <div className="flex items-end justify-between h-16 space-x-1">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-accent/60 to-accent/20 rounded-sm animate-pulse"
              style={{
                height: `${Math.random() * 60 + 20}%`,
                width: '4px',
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-4 left-4 text-green-400 font-mono text-xs opacity-30 animate-pulse">
        model.predict(market_data)
      </div>
      <div className="absolute top-8 left-4 text-blue-400 font-mono text-xs opacity-30 animate-pulse" style={{ animationDelay: '300ms' }}>
        accuracy: 94.2%
      </div>
      <div className="absolute bottom-8 right-4 text-purple-400 font-mono text-xs opacity-30 animate-pulse" style={{ animationDelay: '500ms' }}>
        real_time: true
      </div>
    </div>
  );
};

export default TradingDashboard;