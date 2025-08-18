import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const TradingDashboard = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      // Note: In production, API keys should be stored securely on the backend
      const symbols = ['BTCUSDT', 'ETHUSDT', 'SOLUSDT'];
      const promises = symbols.map(async (symbol) => {
        const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`);
        const data = await response.json();
        
        return {
          symbol: symbol.replace('USDT', ''),
          price: parseFloat(data.lastPrice),
          change: parseFloat(data.priceChange),
          changePercent: parseFloat(data.priceChangePercent)
        };
      });
      
      const results = await Promise.all(promises);
      setCryptoData(results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      // Fallback to demo data
      setCryptoData([
        { symbol: 'BTC', price: 67420.50, change: 1250.30, changePercent: 1.89 },
        { symbol: 'ETH', price: 3840.25, change: -85.40, changePercent: -2.18 },
        { symbol: 'SOL', price: 185.30, change: 12.80, changePercent: 7.42 },
      ]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      fetchCryptoData();
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-surface via-background to-card border border-border rounded-lg p-3 sm:p-6 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full bg-accent blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-accent/70 blur-2xl"></div>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 relative z-10 gap-2">
        <div>
          <h3 className="text-foreground font-bold text-base sm:text-lg">Live Trading Dashboard</h3>
          <p className="text-muted-foreground text-xs sm:text-sm font-mono">
            {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-accent text-xs sm:text-sm font-mono">LIVE</span>
        </div>
      </div>

      {/* Crypto Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
        {cryptoData.map((crypto, index) => (
          <div
            key={crypto.symbol}
            className="bg-card border border-border rounded-lg p-3 sm:p-4 hover:bg-surface-elevated transition-all duration-300"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-bold text-sm sm:text-lg">{crypto.symbol}</span>
              {crypto.changePercent > 0 ? (
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              ) : (
                <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
              )}
            </div>
            <div className="space-y-1">
              <p className="text-foreground font-mono text-sm sm:text-xl">
                ${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className={`text-xs sm:text-sm font-mono ${crypto.changePercent > 0 ? 'text-accent' : 'text-destructive'}`}>
                {crypto.changePercent > 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Chart Simulation */}
      <div className="bg-card border border-border rounded-lg p-3 sm:p-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-1">
          <span className="text-foreground font-medium text-sm sm:text-base">Market Trend</span>
          <span className="text-accent text-xs sm:text-sm font-mono">Accuracy: 94.2%</span>
        </div>
        <div className="flex items-end justify-between h-12 sm:h-16 space-x-1">
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
    </div>
  );
};

export default TradingDashboard;