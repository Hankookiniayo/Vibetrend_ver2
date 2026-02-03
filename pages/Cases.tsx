
import React from 'react';
import { ArrowRight, Star, TrendingUp, Users, Target, Clock } from 'lucide-react';

const CaseCard = ({ data, reversed }: any) => (
  <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 mb-32 group`}>
    <div className="lg:w-1/2 relative">
      <div className="aspect-video bg-zinc-900 rounded-[32px] overflow-hidden border border-white/5 relative group-hover:border-white/10 transition-all">
        <img src={`https://picsum.photos/seed/${data.id}/800/450`} alt={data.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex gap-4 mb-4">
            {data.metrics.map((m: any, i: number) => (
              <div key={i} className="glass px-4 py-2 rounded-xl">
                <p className="text-[10px] text-zinc-400 font-black uppercase mb-0.5">{m.label}</p>
                <p className="text-lg font-black text-emerald-500">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-1/2 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
          <img src={`https://picsum.photos/seed/user-${data.id}/100/100`} alt={data.name} />
        </div>
        <div>
          <h3 className="font-bold text-lg">{data.name}</h3>
          <p className="text-xs text-zinc-500">{data.role}, {data.subscribers}</p>
        </div>
      </div>
      <h2 className="text-3xl font-black mb-8 leading-tight">{data.solution}</h2>
      
      <div className="space-y-6 mb-10">
        <div className="flex gap-4">
          <div className="w-1 bg-red-500/30 rounded-full" />
          <div>
            <p className="text-xs text-zinc-500 font-black uppercase mb-1">Problem</p>
            <p className="text-zinc-300">"{data.problem}"</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-1 bg-emerald-500/30 rounded-full" />
          <div>
            <p className="text-xs text-zinc-500 font-black uppercase mb-1">Result</p>
            <p className="text-zinc-200 font-semibold leading-relaxed">{data.result}</p>
          </div>
        </div>
      </div>

      <blockquote className="glass p-6 rounded-2xl italic text-zinc-400 mb-8 border-l-4 border-white relative">
        <span className="absolute -top-4 -left-2 text-6xl text-white/5 font-serif">"</span>
        {data.quote}
      </blockquote>

      <button className="inline-flex items-center gap-2 text-white font-bold group">
        유튜브 분석 리포트 보기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const Cases: React.FC = () => {
  const cases = [
    {
      id: 'case1',
      name: '김OO님',
      role: '뷰티 유튜버',
      subscribers: '구독자 3만',
      problem: '신규 콘텐츠 아이디어가 고갈되고 유튜브 알고리즘 정체기에 빠졌습니다.',
      solution: 'VibeTrend AI가 포착한 조기 트렌드로 3개월 만에 구독자 73% 성장',
      result: '조회수 평균 15만에서 80만으로 5.3배 증가하였으며, 유튜브 수익은 3.6배 성장했습니다.',
      metrics: [{ label: '조회수', value: '5.3배↑' }, { label: '구독자', value: '+2.2만' }],
      quote: '유튜브 트렌드를 미리 발견하는 것이 얼마나 중요한지 깨달았습니다. Gemini AI의 키워드 추천이 결정적이었습니다.',
    },
    {
      id: 'case2',
      name: '박OO님',
      role: '게임 유튜버',
      subscribers: '구독자 1만',
      problem: 'Shorts와 본영상의 알고리즘 연결이 되지 않아 채널 성장이 불균형했습니다.',
      solution: 'Shorts 트렌드를 본영상으로 연결하는 교차 알고리즘 전략',
      result: 'Shorts에서 발생한 트렌드를 즉시 본영상 기획에 반영하여, 관련 키워드 국내 검색 1위를 차지했습니다.',
      metrics: [{ label: '검색 순위', value: '1위' }, { label: '본영상 조회수', value: '+300%' }],
      quote: 'VibeTrend의 Shorts 분석 기능 덕분에 본영상 조회수까지 동반 상승시킬 수 있었습니다. 진짜 유튜브 전문가를 위한 도구예요.',
    },
    {
      id: 'case3',
      name: 'ㅇㅇ컴퍼니',
      role: '유튜브 마케팅 에이전시',
      subscribers: '팀원 5명',
      problem: '매일 수천 개의 유튜브 영상을 모니터링하며 트렌드를 찾는 데 너무 많은 시간이 소요되었습니다.',
      solution: 'Business API 연동으로 유튜브 트렌드 분석 리서치 업무 87% 자동화',
      result: '매주 15시간 걸리던 리서치 업무를 2시간으로 단축하고, 클라이언트 유튜브 채널 성과를 평균 40% 향상시켰습니다.',
      metrics: [{ label: '업무 단축', value: '87%↓' }, { label: '채널 성과', value: '+40%' }],
      quote: '유튜브 데이터에 특화된 Business API 덕분에 에이전시의 전문성이 한 단계 업그레이드되었습니다.',
    },
  ];

  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-black mb-6">유튜브 성공은 우연이 아닙니다</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">VibeTrend와 함께 유튜브 생태계를 지배한 크리에이터들의 실제 이야기입니다.</p>
        </div>

        {cases.map((c, i) => (
          <CaseCard key={c.id} data={c} reversed={i % 2 !== 0} />
        ))}

        <div className="bg-zinc-950 p-16 rounded-[48px] text-center border border-white/5">
          <h2 className="text-4xl font-black mb-8">당신의 유튜브 성공 스토리를 만드세요</h2>
          <p className="text-zinc-500 mb-12 max-w-lg mx-auto">지금 바로 14일 무료 체험을 시작하고, 데이터가 만드는 채널의 변화를 경험하세요.</p>
          <button className="px-12 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/5">
            무료 체험 시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cases;
