
import React, { useState, useEffect } from 'react';
import { Search, Filter, Globe, BarChart3, Clock, Lock, Sparkles, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { TrendItem } from '../types';

const mockTrends: TrendItem[] = [
  { id: '1', rank: 1, keyword: '저자극 메이크업', score: 98, change: 'up', category: 'Beauty', platform: 'Both', country: 'KR', lastUpdated: '3분 전' },
  { id: '2', rank: 2, keyword: 'ChatGPT 신기능 리뷰', score: 94, change: 'new', category: 'Tech', platform: 'YouTube', country: 'KR', lastUpdated: '3분 전' },
  { id: '3', rank: 3, keyword: '단백질 쉐이크 레시피', score: 89, change: 'up', category: 'Health', platform: 'TikTok', country: 'KR', lastUpdated: '3분 전' },
  { id: '4', rank: 4, keyword: '일본 온천 여행 브이로그', score: 85, change: 'down', category: 'Travel', platform: 'YouTube', country: 'KR', lastUpdated: '3분 전' },
  { id: '5', rank: 5, keyword: '재테크 챌린지', score: 82, change: 'up', category: 'Finance', platform: 'Both', country: 'KR', lastUpdated: '3분 전' },
];

const Trends: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'KR' | 'US' | 'JP'>('KR');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              <Clock size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">Last updated: 3 mins ago</span>
            </div>
            <h1 className="text-4xl font-black">실시간 트렌드 리더보드</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 glass rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/5">
              <Filter size={16} /> 필터링
            </button>
            <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-black hover:bg-zinc-200">
              맞춤 리포트 생성
            </button>
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input 
                  type="text" 
                  placeholder="트렌드 키워드 검색..." 
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white/20 transition-all text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex glass p-1 rounded-xl">
                {(['KR', 'US', 'JP'] as const).map((country) => (
                  <button
                    key={country}
                    onClick={() => setActiveTab(country)}
                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === country ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white'}`}
                  >
                    {country === 'KR' ? '한국' : country === 'US' ? '미국' : '일본'}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="glass p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-emerald-500" />
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-black">분석된 총 트렌드</p>
                <p className="font-bold">12,847</p>
              </div>
            </div>
            <div className="text-xs text-emerald-500 font-bold">+12%</div>
          </div>
        </div>

        {/* Trends List */}
        <div className="glass rounded-3xl overflow-hidden mb-12">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-8 py-5 text-xs font-black text-zinc-500 uppercase tracking-widest">Rank</th>
                <th className="px-8 py-5 text-xs font-black text-zinc-500 uppercase tracking-widest">Keyword</th>
                <th className="px-8 py-5 text-xs font-black text-zinc-500 uppercase tracking-widest">Platform</th>
                <th className="px-8 py-5 text-xs font-black text-zinc-500 uppercase tracking-widest">Vibe Score</th>
                <th className="px-8 py-5 text-xs font-black text-zinc-500 uppercase tracking-widest text-right">AI Insights</th>
              </tr>
            </thead>
            <tbody>
              {mockTrends.map((trend) => (
                <tr key={trend.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-black italic text-zinc-600 group-hover:text-white transition-colors">{trend.rank}</span>
                      {trend.change === 'up' && <TrendingUp size={14} className="text-emerald-500" />}
                      {trend.change === 'down' && <TrendingDown size={14} className="text-red-500" />}
                      {trend.change === 'new' && <div className="px-1.5 py-0.5 bg-blue-500 text-[10px] font-black rounded text-white">NEW</div>}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-bold text-lg mb-0.5">{trend.keyword}</p>
                      <p className="text-xs text-zinc-500">Category: {trend.category}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold ${trend.platform === 'YouTube' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : trend.platform === 'TikTok' ? 'bg-white/10 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                        {trend.platform}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${trend.score}%` }} />
                      </div>
                      <span className="text-sm font-bold mono">{trend.score}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    {trend.rank <= 2 ? (
                      <button className="px-4 py-2 bg-white text-black text-xs font-black rounded-lg hover:scale-105 transition-all">
                        인사이트 보기
                      </button>
                    ) : (
                      <div className="flex items-center justify-end gap-2 text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        <Lock size={12} />
                        <span className="text-xs font-bold">Pro 전용</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upgrade Prompt */}
        <div className="glass p-12 rounded-[40px] text-center relative overflow-hidden glow-blue">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] pointer-events-none" />
          <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4">모든 트렌드의 숨은 기회를 발견하세요</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">
            Pro 플랜으로 업그레이드하면 100위까지의 모든 트렌드와<br className="hidden md:block" /> AI가 분석한 세부 전략 리포트를 실시간으로 받아보실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-white text-black font-black rounded-full shadow-2xl hover:bg-zinc-200 transition-all">
              14일 무료 체험 시작
            </button>
            <button className="px-10 py-4 glass text-white font-bold rounded-full hover:bg-white/5 transition-all">
              요금제 더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
