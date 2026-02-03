
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Search, Layers, Star, Play, CheckCircle2, Video } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { name: '10:00', value: 400 },
  { name: '11:00', value: 600 },
  { name: '12:00', value: 550 },
  { name: '13:00', value: 800 },
  { name: '14:00', value: 1200 },
  { name: '15:00', value: 1100 },
  { name: '16:00', value: 1500 },
];

const FeatureCard = ({ icon: Icon, title, before, after, details }: any) => (
  <div className="glass p-8 rounded-2xl group hover:border-white/10 transition-all">
    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-all group-hover:text-black">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-6">{title}</h3>
    <div className="space-y-4 mb-8">
      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
        <p className="text-xs text-red-400 font-bold uppercase mb-1">Before</p>
        <p className="text-sm text-zinc-300">"{before}"</p>
      </div>
      <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
        <p className="text-xs text-emerald-400 font-bold uppercase mb-1">After</p>
        <p className="text-sm text-zinc-200">"{after}"</p>
      </div>
    </div>
    <ul className="space-y-3 text-sm text-zinc-500">
      {details.map((item: string, i: number) => (
        <li key={i} className="flex items-center gap-2">
          <div className="w-1 h-1 bg-white rounded-full" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

const HeroSearch = () => (
  <div className="relative group w-full max-w-lg mx-auto">
    <div className="absolute inset-0 bg-red-500/10 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity rounded-full"></div>
    <div className="relative flex items-center glass rounded-full border border-white/10 focus-within:border-white/30 transition-all px-4 md:px-6 py-2.5 md:py-3.5">
      <Search className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 mr-2 md:mr-4 shrink-0" />
      <input 
        type="text" 
        placeholder="유튜브 트렌드 키워드 검색..." 
        className="bg-transparent border-none outline-none text-white w-full text-xs md:text-sm placeholder:text-zinc-600"
      />
      <button className="shrink-0 px-4 py-1.5 bg-white text-black text-[10px] md:text-xs font-black rounded-full hover:bg-zinc-200 transition-all">
        분석
      </button>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 hero-grid">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">127+ creators chose vibetrend</span>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] gradient-text max-w-5xl mx-auto">
            유튜브 트렌드 세터를 위한<br />가장 강력한 도구
          </h1>
          
          <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            매일 빠르게 변화하는 유튜브 알고리즘과 트렌드를 추적하고 분석하여,<br className="hidden md:block" /> 다음 바이럴 콘텐츠를 먼저 발견하세요.
          </p>

          {/* CTA & Search Area */}
          <div className="flex flex-col items-center gap-6 mb-24 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              {/* Button 1: 무료로 시작하기 */}
              <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/10 shrink-0">
                무료로 시작하기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Mobile Only: Search Bar (Placed between buttons) */}
              <div className="sm:hidden w-full">
                <HeroSearch />
              </div>

              {/* Button 2: 실시간 트렌드 보기 */}
              <Link to="/trends" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/5 transition-all shrink-0">
                실시간 트렌드 보기
              </Link>
            </div>

            {/* Desktop Only: Search Bar (Placed below buttons) */}
            <div className="hidden sm:block w-full">
              <HeroSearch />
            </div>
          </div>

          {/* Dashboard Preview (The Graph Section) */}
          <div className="relative max-w-5xl mx-auto glass p-1.5 md:p-2 rounded-2xl md:rounded-3xl glow-blue">
            <div className="bg-[#09090b] rounded-xl md:rounded-2xl overflow-hidden p-4 md:p-8 border border-white/5">
              {/* Dashboard Header (Window Controls) */}
              <div className="flex justify-between items-center mb-6 md:mb-10">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[10px] md:text-xs text-zinc-600 mono tracking-tighter">vibetrend.youtube.dashboard.v3</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Main Graph Area */}
                <div className="md:col-span-8 h-[250px] md:h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        stroke="#3f3f46" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        dy={10}
                      />
                      <YAxis 
                        stroke="#3f3f46" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false} 
                        dx={-10}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#09090b', 
                          border: '1px solid #27272a', 
                          borderRadius: '12px',
                          fontSize: '12px'
                        }}
                        itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ef4444" 
                        strokeWidth={4} 
                        dot={false}
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Metrics Sidebar */}
                <div className="md:col-span-4 space-y-3 md:space-y-4">
                  <div className="p-5 md:p-6 bg-white/[0.02] rounded-xl md:rounded-2xl border border-white/5 text-left group hover:bg-white/[0.04] transition-all">
                    <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">유튜브 실시간 화제성</p>
                    <p className="text-2xl md:text-4xl font-black">94.8%</p>
                  </div>
                  <div className="p-5 md:p-6 bg-white/[0.02] rounded-xl md:rounded-2xl border border-white/5 text-left group hover:bg-white/[0.04] transition-all">
                    <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">분석된 비디오</p>
                    <p className="text-2xl md:text-4xl font-black">12.8k</p>
                  </div>
                  <div className="p-5 md:p-6 bg-emerald-500/5 rounded-xl md:rounded-2xl border border-emerald-500/10 text-left group hover:bg-emerald-500/10 transition-all">
                    <p className="text-[10px] md:text-xs text-emerald-500/70 font-bold uppercase tracking-wider mb-2">예측 클릭률 증가</p>
                    <p className="text-2xl md:text-4xl font-black text-emerald-500 tracking-tight">+340%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: '누적 분석 트렌드', value: '12,847개' },
              { label: '사용자 만족도', value: '4.8/5.0' },
              { label: '평균 조회수 증가', value: '+340%' },
              { label: '재사용률', value: '92%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-zinc-500 text-xs md:text-sm mb-2">{stat.label}</p>
                <p className="text-2xl md:text-4xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">유튜브 전문 데이터로 증명하는 임팩트</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">유튜브 생태계의 모든 시그널을 하나로 연결하여 유의미한 비즈니스 기회로 전환합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={TrendingUp}
              title="실시간 트렌드 추적"
              before="어떤 콘텐츠를 만들어야 할지 막막했어요"
              after="실시간 트렌드를 보고 3일만에 조회수 100만 달성!"
              details={["국가별 유튜브 인기 급상승", "카테고리별 정밀 필터링", "유튜브 전용 화제성 점수"]}
            />
            <FeatureCard 
              icon={Zap}
              title="Gemini AI 인사이트"
              before="데이터는 많은데 뭘 봐야 할지 모르겠어요"
              after="AI가 추천한 키워드로 3개월간 구독자 5,000명 증가"
              details={["Gemini 3.0 Pro 엔진", "알고리즘 노이즈 제거", "유튜브 콘텐츠 제작 가이드"]}
            />
            <FeatureCard 
              icon={Video}
              title="Shorts & Long-form 분석"
              before="쇼츠만 잘 나가고 본영상은 반응이 없어요"
              after="쇼츠 트렌드를 본영상으로 연결해 채널 전체 성장"
              details={["Shorts 화제성 모니터링", "포맷 전환 전략 제안", "유튜브 생태계 내 교차 분석"]}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">유튜브 성공을 위한 3단계</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block" />
            {[
              { step: 'Step 1', title: '유튜브 탐색', desc: '급상승 키워드 & 시드 키워드 확장' },
              { step: 'Step 2', title: 'AI 분석', desc: 'Gemini 기반 필터링 & 화제성 산출' },
              { step: 'Step 3', title: '채널 실행', desc: '콘텐츠 제작 가이드 & 타겟 제안' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 glass p-8 md:p-10 rounded-3xl text-center hover:scale-105 transition-all">
                <div className="w-12 h-12 bg-white text-black font-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-white/20">
                  {i + 1}
                </div>
                <h4 className="text-zinc-500 font-bold mb-2 uppercase text-xs tracking-widest">{item.step}</h4>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">실제 성공한 유튜버들</h2>
              <p className="text-zinc-400">VibeTrend를 통해 정체기를 극복하고 제2의 전성기를 맞이한 유튜브 채널들입니다.</p>
            </div>
            <Link to="/cases" className="text-white font-bold flex items-center gap-2 hover:underline">
              모든 사례 보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 p-8">
                <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
              </div>
              <div className="mb-8">
                <p className="font-bold text-lg mb-1">김OO님</p>
                <p className="text-zinc-500 text-sm">뷰티 유튜버, 구독자 3만</p>
              </div>
              <p className="text-xl md:text-2xl font-bold mb-10 leading-snug">
                "유튜브 트렌드를 쫓지 않고 선도합니다. 조회수가 평균 15만에서 80만으로 5배 이상 뛰었어요."
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/5">
                <div className="flex-1">
                  <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">조회수 증가</p>
                  <p className="text-2xl md:text-3xl font-black text-emerald-500">5.3배↑</p>
                </div>
                <div className="flex-1 border-l border-white/5 pl-4">
                  <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">기간</p>
                  <p className="text-2xl md:text-3xl font-black">3개월</p>
                </div>
              </div>
            </div>
            <div className="glass p-10 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 p-8">
                <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
              </div>
              <div className="mb-8">
                <p className="font-bold text-lg mb-1">박OO님</p>
                <p className="text-zinc-500 text-sm">게임 유튜버, 구독자 1만</p>
              </div>
              <p className="text-xl md:text-2xl font-bold mb-10 leading-snug">
                "알고리즘보다 2주 빠르게 트렌드를 잡으니까 검색 결과 1위를 차지할 수 있었습니다."
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-white/5">
                <div className="flex-1">
                  <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">구독자 증가</p>
                  <p className="text-2xl md:text-3xl font-black text-emerald-500">+250%</p>
                </div>
                <div className="flex-1 border-l border-white/5 pl-4">
                  <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">성과</p>
                  <p className="text-2xl md:text-3xl font-black">국내 1위</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Area */}
      <section className="py-40 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 gradient-text">다음 바이럴 유튜브를<br />지금 발견하세요</h2>
          <p className="text-base md:text-lg text-zinc-400 mb-12">14일 무료 체험, 신용카드 불필요. 이미 127명의 크리에이터가 사용 중입니다.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="px-12 py-5 bg-white text-black font-black rounded-full text-lg shadow-2xl shadow-white/10 hover:scale-105 transition-all">
              무료로 시작하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
