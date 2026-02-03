
import React, { useState } from 'react';
import { Search, Filter, Clock, Lock, Sparkles, TrendingUp, TrendingDown, Youtube } from 'lucide-react';

const mockTrends: any[] = [
  { id: '1', rank: 1, keyword: '저자극 메이크업', score: 98, change: 'up', category: 'Beauty', type: 'Shorts', country: 'KR', lastUpdated: '3분 전' },
  { id: '2', rank: 2, keyword: 'ChatGPT 신기능 리뷰', score: 94, change: 'new', category: 'Tech', type: 'Long-form', country: 'KR', lastUpdated: '3분 전' },
  { id: '3', rank: 3, keyword: '단백질 쉐이크 레시피', score: 89, change: 'up', category: 'Health', type: 'Shorts', country: 'KR', lastUpdated: '3분 전' },
  { id: '4', rank: 4, keyword: '일본 온천 여행 브이로그', score: 85, change: 'down', category: 'Travel', type: 'Long-form', country: 'KR', lastUpdated: '3분 전' },
  { id: '5', rank: 5, keyword: '재테크 챌린지', score: 82, change: 'up', category: 'Finance', type: 'Both', country: 'KR', lastUpdated: '3분 전' },
  { id: '6', rank: 6, keyword: '신형 전기차 주행 성능 테스트', score: 79, change: 'up', category: 'Auto', type: 'Long-form', country: 'KR', lastUpdated: '3분 전' },
  { id: '7', rank: 7, keyword: '미니멀리스트 인테리어 팁', score: 75, change: 'down', category: 'Lifestyle', type: 'Shorts', country: 'KR', lastUpdated: '3분 전' },
  { id: '8', rank: 8, keyword: '실패 없는 파스타 요리법', score: 72, change: 'up', category: 'Food', type: 'Shorts', country: 'KR', lastUpdated: '3분 전' },
  { id: '9', rank: 9, keyword: '주간 K-POP 인기 차트 분석', score: 68, change: 'new', category: 'Music', type: 'Both', country: 'KR', lastUpdated: '3분 전' },
  { id: '10', rank: 10, keyword: '노트북 배터리 수명 늘리는 법', score: 65, change: 'down', category: 'Tech', type: 'Long-form', country: 'KR', lastUpdated: '3분 전' },
];

const Trends: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'KR' | 'US' | 'JP'>('KR');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 mb-1">
              <Clock size={12} />
              <span className="text-[10px] font-bold uppercase tracking-wider">Last updated: 3 mins ago</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-black">실시간 유튜브 트렌드</h1>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 glass rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-white/5">
              <Filter size={14} /> 필터
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 bg-white text-black rounded-full text-xs font-black hover:bg-zinc-200">
              맞춤 리포트
            </button>
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                <input 
                  type="text" 
                  placeholder="키워드 검색..." 
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/20 transition-all text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex glass p-1 rounded-xl">
                {(['KR', 'US', 'JP'] as const).map((country) => (
                  <button
                    key={country}
                    onClick={() => setActiveTab(country)}
                    className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === country ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {country === 'KR' ? '한국' : country === 'US' ? '미국' : '일본'}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex glass p-3 rounded-xl items-center justify-between">
            <div className="flex items-center gap-2">
              <Youtube className="text-red-500" size={18} />
              <div>
                <p className="text-[8px] text-zinc-500 uppercase font-black">분석 비디오</p>
                <p className="text-sm font-bold leading-none">12,847</p>
              </div>
            </div>
            <div className="text-[10px] text-emerald-500 font-bold">+12%</div>
          </div>
        </div>

        {/* Trends List - Mobile Optimized */}
        <div className="glass rounded-2xl overflow-hidden mb-8">
          {/* Header Row (Visible on larger screens) */}
          <div className="hidden md:grid grid-cols-12 bg-white/5 border-b border-white/5 px-6 py-3">
            <div className="col-span-1 text-[10px] font-black text-zinc-500 uppercase tracking-widest">Rank</div>
            <div className="col-span-6 text-[10px] font-black text-zinc-500 uppercase tracking-widest">Keyword</div>
            <div className="col-span-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest">Format</div>
            <div className="col-span-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest text-center">Vibe Score</div>
            <div className="col-span-1 text-[10px] font-black text-zinc-500 uppercase tracking-widest text-right">Action</div>
          </div>

          <div className="flex flex-col">
            {mockTrends.map((trend: any) => (
              <div key={trend.id} className="grid grid-cols-12 items-center px-4 md:px-6 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                {/* Rank & Change */}
                <div className="col-span-2 md:col-span-1 flex items-center gap-2">
                  <span className="text-lg md:text-xl font-black italic text-zinc-600 group-hover:text-white transition-colors">{trend.rank}</span>
                  <div className="flex flex-col items-center">
                    {trend.change === 'up' && <TrendingUp size={12} className="text-emerald-500" />}
                    {trend.change === 'down' && <TrendingDown size={12} className="text-red-500" />}
                    {trend.change === 'new' && <span className="px-1 py-0.5 bg-blue-500 text-[8px] font-black rounded text-white leading-none">NEW</span>}
                  </div>
                </div>

                {/* Keyword & Category */}
                <div className="col-span-7 md:col-span-6 flex flex-col justify-center">
                  <p className="font-bold text-sm md:text-base leading-tight break-keep" style={{ wordBreak: 'keep-all' }}>
                    {trend.keyword}
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Category: {trend.category}</p>
                </div>

                {/* Format Tag */}
                <div className="col-span-3 md:col-span-2 flex justify-end md:justify-start">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black tracking-tighter ${trend.type === 'Shorts' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-zinc-800 text-zinc-400'}`}>
                    {trend.type.toUpperCase()}
                  </span>
                </div>

                {/* Score & AI (Desktop Only) */}
                <div className="hidden md:flex col-span-2 items-center justify-center gap-2">
                  <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${trend.score}%` }} />
                  </div>
                  <span className="text-[10px] font-bold mono">{trend.score}</span>
                </div>

                <div className="hidden md:flex col-span-1 justify-end">
                  {trend.rank <= 2 ? (
                    <button className="px-3 py-1 bg-white text-black text-[10px] font-black rounded hover:scale-105 transition-all">
                      AI Insight
                    </button>
                  ) : (
                    <Lock size={12} className="text-zinc-700" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade Prompt - Smaller for better scrolling flow */}
        <div className="glass p-8 md:p-12 rounded-[32px] text-center relative overflow-hidden glow-blue">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/5 blur-[80px] pointer-events-none" />
          <Sparkles className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-black mb-2">유튜브 트렌드의 숨은 기회를 발견하세요</h2>
          <p className="text-zinc-500 max-w-md mx-auto mb-8 text-xs md:text-sm">
            Pro 플랜으로 업그레이드하면 100위까지의 모든 트렌드와<br className="hidden md:block" /> Gemini AI 전략 리포트를 실시간으로 확인할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-black font-black rounded-full text-xs shadow-xl hover:bg-zinc-200 transition-all">
              14일 무료 체험 시작
            </button>
            <button className="w-full sm:w-auto px-8 py-3 glass text-white font-bold rounded-full text-xs hover:bg-white/5 transition-all">
              요금제 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
