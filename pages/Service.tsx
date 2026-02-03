
import React from 'react';
import { Layers, Zap, Search, ShieldCheck, Cpu, Globe2, BarChart4, ArrowRight, Youtube } from 'lucide-react';

const Service: React.FC = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h1 className="text-5xl font-black mb-8 leading-tight">유튜브 크리에이터가<br />데이터 기반으로<br />성공하는 세상</h1>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              VibeTrend는 단순한 키워드 랭킹 제공을 넘어, 인공지능과 실시간 데이터 스트리밍을 통해 
              실행 가능한(Actionable) 유튜브 전용 인사이트를 제공하는 글로벌 #1 인텔리전스 플랫폼입니다.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black mb-2">95%+</p>
                <p className="text-zinc-500 text-sm">유튜브 데이터 정확도</p>
              </div>
              <div>
                <p className="text-4xl font-black mb-2">15분</p>
                <p className="text-zinc-500 text-sm">실시간 데이터 업데이트 주기</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass rounded-[48px] p-8 flex flex-col justify-center items-center gap-8 glow-blue">
               <Youtube size={120} className="text-red-500 animate-pulse" />
               <div className="text-center">
                 <p className="text-xl font-black mb-2">Gemini 3.0 Pro 엔진</p>
                 <p className="text-zinc-500 text-sm">유튜브 생태계 최적화 분석</p>
               </div>
            </div>
          </div>
        </div>

        {/* Mechanism */}
        <div className="mb-40">
          <h2 className="text-4xl font-black mb-20 text-center">유튜브 분석 매커니즘</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                stage: 'Stage 1', 
                title: '유튜브 탐색', 
                icon: Search,
                items: ['인기 급상승 동영상 실시간 모니터링', '검색어 기반 롱테일 키워드 발굴', '유튜브 시즌성 테마 파악']
              },
              { 
                stage: 'Stage 2', 
                title: 'AI 분석 단계', 
                icon: Cpu,
                items: ['Gemini AI 기반 알고리즘 노이즈 제거', 'Shorts-Longform 상관관계 분석', '실시간 화제성 가중치 산출']
              },
              { 
                stage: 'Stage 3', 
                title: '최적화 단계', 
                icon: BarChart4,
                items: ['직관적 유튜브 랭킹 시각화', '유튜브 전용 콘텐츠 제작 가이드', '오디언스 클릭률 최적화 제안']
              }
            ].map((s, i) => (
              <div key={i} className="glass p-10 rounded-3xl group hover:bg-white/5 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                  <s.icon size={32} />
                </div>
                <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-2">{s.stage}</p>
                <h3 className="text-2xl font-black mb-8">{s.title}</h3>
                <ul className="space-y-4">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-400">
                      <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-40">
          <h2 className="text-4xl font-black mb-20 text-center">왜 VibeTrend 유튜브 분석인가?</h2>
          <div className="glass rounded-[40px] overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-10 py-8 text-zinc-500">기능</th>
                  <th className="px-10 py-8 text-zinc-500">일반 분석 도구</th>
                  <th className="px-10 py-8 text-white font-black">VibeTrend ⭐</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: '데이터 업데이트', old: '일간 업데이트 (늦은 대응)', new: '매 15분 자동 실시간 분석' },
                  { label: '인사이트 깊이', old: '단순 조회수 랭킹', new: 'AI 인사이트 + 유튜브 액션 가이드' },
                  { label: 'Shorts 특화', old: 'Shorts 데이터 부재', new: 'Shorts 전용 화제성 점수 제공' },
                  { label: '가격 효율성', old: '월 ₩80,000 이상', new: '월 ₩29,000 (Pro 기준)' },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="px-10 py-8 font-bold text-zinc-400">{row.label}</td>
                    <td className="px-10 py-8 text-zinc-600">{row.old}</td>
                    <td className="px-10 py-8 text-white font-bold">{row.new}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <h2 className="text-4xl font-black mb-20 text-center">유튜브 특화 로드맵</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/5" />
              <div className="w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center shrink-0 z-10 font-black">✓</div>
              <div className="glass p-8 rounded-2xl flex-1 border-emerald-500/20">
                <h4 className="font-black text-xl mb-4">2025 Q1 - 베이스 구축</h4>
                <p className="text-zinc-400 text-sm">YouTube 한국/미국/일본 트렌드 및 Gemini AI 분석 엔진 구축 완료</p>
              </div>
            </div>
            <div className="flex gap-8 items-start relative">
               <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/5" />
              <div className="w-10 h-10 glass text-zinc-500 rounded-full flex items-center justify-center shrink-0 z-10 font-bold">...</div>
              <div className="glass p-8 rounded-2xl flex-1 border-white/5">
                <h4 className="font-black text-xl mb-4">2025 Q2 - 유튜브 심화 분석</h4>
                <p className="text-zinc-400 text-sm mb-4">Shorts 전용 알고리즘 분석 (3월), 썸네일 A/B 테스트 예측 (4월), 유튜브 커뮤니티 트렌드 연동 (5월)</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/5 text-[10px] rounded uppercase font-bold text-zinc-500">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
