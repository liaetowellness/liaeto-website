export const center = {
 name:'리애토 웰니스 센터', english:'Liaeto Wellness Center', founder:'황명재', phone:'010-9567-6024',
 address:'부산시 해운대구 양운로 42번길 스타프라자 빌딩 902호',
 blog:'https://blog.naver.com/liaetowellness', instagram:'https://www.instagram.com/liaeto_official/', youtube:'https://www.youtube.com/@liaeto_official',
 map:'https://map.naver.com/p/search/'+encodeURIComponent('부산시 해운대구 양운로 42번길 스타프라자 빌딩 902호'),
 hero:'/images/color-pilates-supplied-v7.webp', homeHero:'/images/hero-liaeto-integrated-v6.webp', logo:'/images/liaeto-official-logo.jpg', founderPhoto:'/images/founder-original.webp', digitalImage:'/images/digital-classroom-v2.webp', aiTeachingImage:'/images/ai-mobile-monitor-v4.webp',
};
export const services = [
 {id:'color-therapy',name:'컬러테라피 상담',short:'컬러테라피',desc:'색을 통해 마음을 들여다보는 시간',image:'/images/program-color-therapy.webp',target:'지금의 마음과 감정을 차분히 살펴보고 싶은 분',learn:'마음에 머무는 색을 선택하고, 색에 담긴 개인적인 느낌을 대화로 풀어봅니다.',steps:['현재 마음 나누기','색 선택과 탐색','일상에서 나를 돌보는 방법 정리']},
 {id:'aroma',name:'색채심리조향',short:'색채심리조향',desc:'향기로 만나는 나만의 감정과 취향',image:'/images/program-aroma.webp',target:'색과 향으로 나의 취향을 발견하고 싶은 분',learn:'색의 느낌과 좋아하는 향을 연결하고 나를 표현하는 향을 탐색합니다.',steps:['색과 향의 취향 이야기','향 탐색과 조합 경험','느낌 나누기']},
 {id:'pilates',name:'1:1 필라테스',short:'필라테스',desc:'바른 움직임으로 몸의 균형을 찾는 시간',image:'/images/pilates-supplied-v4.webp',target:'내 몸에 맞는 움직임을 차근차근 배우고 싶은 분',learn:'현재 컨디션을 확인하고 호흡과 기본 움직임을 자신의 속도로 경험합니다.',steps:['컨디션과 목표 확인','호흡과 움직임 실습','일상 실천 안내']},
 {id:'personal-color',name:'퍼스널컬러',short:'퍼스널컬러',desc:'나에게 어울리는 컬러로 빛나는 나',image:'/images/personal-color-supplied-v2.webp',target:'나에게 어울리는 색과 활용법이 궁금한 분',learn:'컬러에 따른 인상 변화를 살펴보고 의상과 일상에서의 활용 방향을 함께 정리합니다.',steps:['취향과 목표 나누기','컬러에 따른 인상 탐색','생활 속 컬러 활용']},
 {id:'image',name:'이미지컨설팅',short:'이미지컨설팅',desc:'나다운 매력을 완성하는 이미지 스타일링',image:'/images/program-personal-color.webp',target:'내 모습과 표현에 자신감을 더하고 싶은 분',learn:'원하는 이미지와 생활 환경을 바탕으로 색, 스타일, 자기표현의 방향을 찾습니다.',steps:['현재 이미지와 목표 확인','스타일과 표현 탐색','실천 방향 정리']},
 {id:'color-pilates',name:'컬러힐링 필라테스',short:'컬러힐링 필라테스',desc:'색과 움직임을 함께 경험하는 리애토의 대표 수업',image:center.hero,target:'마음과 몸을 함께 돌보는 시간을 원하는 분',learn:'색으로 지금의 마음을 살피고 호흡과 움직임으로 몸의 감각에 집중합니다.',steps:['오늘의 색과 마음 확인','호흡과 움직임 경험','변화와 느낌 나누기']},
];
export const firstVisits = [
 {id:'first-color',name:'나의 컬러 발견',desc:'지금 내 마음에 머무는 색을 만나보세요.',service:'color-therapy'},
 {id:'first-aroma',name:'나의 향 발견',desc:'좋아하는 향으로 나의 취향을 알아보세요.',service:'aroma'},
 {id:'first-pilates',name:'컬러힐링 필라테스 첫 만남',desc:'색과 움직임으로 나를 돌보는 시간을 경험하세요.',service:'color-pilates'},
];
export const courses = [
 {id:'digital',name:'리애토 디지털 첫걸음',desc:'일상을 더 편리하고 풍요롭게',items:['컴퓨터 4회 + 스마트폰 4회, 총 8회 실습형 과정','파일·사진·카카오톡·문서·인터넷 등 기초 활용']},
 {id:'ai',name:'AI 활용 교육',desc:'AI와 함께 열어가는 새로운 가능성',items:['일상에서 AI 활용하기','글쓰기와 생각 정리','이미지·콘텐츠 제작 실습']},
 {id:'color',name:'컬러테라피·색채심리 교육',desc:'색을 통해 이해하는 마음과 감정',items:['색의 느낌과 개인적인 경험 탐색','색채심리와 대화의 기초']},
 {id:'fragrance',name:'색채심리조향 교육',desc:'색과 향을 연결하는 새로운 배움',items:['색과 향의 관계 알아보기','향의 취향 탐색과 조합 실습']},
 {id:'professional',name:'전문가 과정',desc:'관심을 더 깊은 배움으로',items:['관심 분야와 학습 목표 상담','세부 교육 구성은 확인 후 안내합니다. 자격증·발급기관·취득 효력은 확정되지 않았습니다.']},
];
export const expertise=['컬러테라피스트','이미지컨설턴트','필라테스 강사','한국감성색채협회 이사','AI·디지털 활용 강사'];
export const philosophy='색으로 마음을 이해하고, 움직임으로 몸을 깨우며, 나다운 빛과 자신감을 찾아가도록 도와드립니다.';









