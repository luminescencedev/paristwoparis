export type Language = "fr" | "en" | "ko" | "ja";

export interface Translations {
  common: {
    search: string;
    close: string;
    seeMore: string;
    back: string;
    verified: string;
  };
  header: {
    title: string;
    tagline: string;
    subtitle: string;
    map: string;
    restaurants: string;
    about: string;
    instagram: string;
    japanese: string;
    korean: string;
  };
  restaurant: {
    myReview: string;
    story: string;
    address: string;
    phone: string;
    website: string;
    viewOnGoogleMaps: string;
    searchPlaceholder: string;
    noResults: string;
    resetFilters: string;
    all: string;
    found: string;
  };
  about: {
    mission: string;
    missionText: string;
    why: string;
    whyText1: string;
    whyText2: string;
    criteria: string;
    authenticity: string;
    authenticityDesc: string;
    traditional: string;
    traditionalDesc: string;
    ambiance: string;
    ambianceDesc: string;
    passion: string;
    passionDesc: string;
    howTo: string;
    howToStep1: string;
    howToStep2: string;
    howToStep3: string;
    howToStep4: string;
    follow: string;
    followText: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    common: {
      search: "Rechercher",
      close: "Fermer",
      seeMore: "Voir plus",
      back: "Retour",
      verified: "Vérifié",
    },
    header: {
      title: "Paris two Paris",
      tagline: "Le deuxième visage de Paris — Entre Seoul et Tokyo",
      subtitle: "Guide de restaurants authentiques 🇰🇷 & 🇯🇵",
      map: "Carte",
      restaurants: "Restaurants",
      about: "À propos",
      instagram: "Instagram",
      japanese: "Japonais",
      korean: "Coréen",
    },
    restaurant: {
      myReview: "Mon avis",
      story: "L'histoire",
      address: "Adresse",
      phone: "Téléphone",
      website: "Site web",
      viewOnGoogleMaps: "Voir sur Google Maps",
      searchPlaceholder: "Rechercher un restaurant...",
      noResults: "Aucun restaurant trouvé",
      resetFilters: "Réinitialiser les filtres",
      all: "Tous",
      found: "trouvé",
    },
    about: {
      mission: "Notre Mission",
      missionText:
        "Faire découvrir les lieux de cuisine japonaise et coréenne authentique à Paris.",
      why: "Pourquoi ce guide ?",
      whyText1:
        "Paris regorge de restaurants asiatiques, mais tous ne sont pas authentiques.",
      whyText2: "Ce site vous guide vers les véritables pépites.",
      criteria: "Nos Critères",
      authenticity: "Authenticité",
      authenticityDesc: "Restaurants tenus par des chefs japonais ou coréens",
      traditional: "Recettes traditionnelles",
      traditionalDesc: "Respect des techniques et ingrédients originaux",
      ambiance: "Ambiance",
      ambianceDesc: "Décor et atmosphère qui reflètent la culture",
      passion: "Passion",
      passionDesc: "Propriétaires passionnés avec une vraie histoire",
      howTo: "Comment utiliser ce site",
      howToStep1: "Explorez la carte interactive",
      howToStep2: "Filtrez par cuisine",
      howToStep3: "Recherchez par nom ou style",
      howToStep4: "Cliquez pour lire l'histoire",
      follow: "Suivez-nous",
      followText: "Rejoignez notre communauté !",
    },
  },
  en: {
    common: {
      search: "Search",
      close: "Close",
      seeMore: "See more",
      back: "Back",
      verified: "Verified",
    },
    header: {
      title: "Paris two Paris",
      tagline: "The second face of Paris — Between Seoul and Tokyo",
      subtitle: "Authentic restaurant guide 🇰🇷 & 🇯🇵",
      map: "Map",
      restaurants: "Restaurants",
      about: "About",
      instagram: "Instagram",
      japanese: "Japanese",
      korean: "Korean",
    },
    restaurant: {
      myReview: "My review",
      story: "The story",
      address: "Address",
      phone: "Phone",
      website: "Website",
      viewOnGoogleMaps: "View on Google Maps",
      searchPlaceholder: "Search a restaurant...",
      noResults: "No restaurants found",
      resetFilters: "Reset filters",
      all: "All",
      found: "found",
    },
    about: {
      mission: "Our Mission",
      missionText: "Discover authentic Japanese and Korean cuisine in Paris.",
      why: "Why this guide?",
      whyText1: "Paris has many Asian restaurants, but not all are authentic.",
      whyText2: "This site guides you to the real gems.",
      criteria: "Our Criteria",
      authenticity: "Authenticity",
      authenticityDesc: "Restaurants run by Japanese or Korean chefs",
      traditional: "Traditional recipes",
      traditionalDesc: "Respect for original techniques and ingredients",
      ambiance: "Ambiance",
      ambianceDesc: "Decor and atmosphere reflecting the culture",
      passion: "Passion",
      passionDesc: "Passionate owners with a real story",
      howTo: "How to use this site",
      howToStep1: "Explore the interactive map",
      howToStep2: "Filter by cuisine",
      howToStep3: "Search by name or style",
      howToStep4: "Click to read the story",
      follow: "Follow us",
      followText: "Join our community!",
    },
  },
  ko: {
    common: {
      search: "검색",
      close: "닫기",
      seeMore: "더보기",
      back: "뒤로",
      verified: "검증됨",
    },
    header: {
      title: "Paris two Paris",
      tagline: "파리의 두 번째 얼굴 — 서울과 도쿄 사이",
      subtitle: "정통 레스토랑 가이드 🇰🇷 & 🇯🇵",
      map: "지도",
      restaurants: "레스토랑",
      about: "소개",
      instagram: "인스타그램",
      japanese: "일본",
      korean: "한국",
    },
    restaurant: {
      myReview: "내 리뷰",
      story: "이야기",
      address: "주소",
      phone: "전화",
      website: "웹사이트",
      viewOnGoogleMaps: "구글 지도에서 보기",
      searchPlaceholder: "레스토랑 검색...",
      noResults: "레스토랑을 찾을 수 없습니다",
      resetFilters: "필터 초기화",
      all: "전체",
      found: "개 발견",
    },
    about: {
      mission: "우리의 사명",
      missionText: "파리에서 정통 일본 및 한국 요리를 발견하세요.",
      why: "왜 이 가이드인가?",
      whyText1: "파리에는 많은 아시아 레스토랑이 있지만 모두 정통은 아닙니다.",
      whyText2: "이 사이트는 진정한 보석을 안내합니다.",
      criteria: "우리의 기준",
      authenticity: "진정성",
      authenticityDesc: "일본 또는 한국 셰프가 운영하는 레스토랑",
      traditional: "전통 요리법",
      traditionalDesc: "원래의 기술과 재료 존중",
      ambiance: "분위기",
      ambianceDesc: "문화를 반영하는 장식과 분위기",
      passion: "열정",
      passionDesc: "진정한 이야기를 가진 열정적인 주인",
      howTo: "사이트 사용 방법",
      howToStep1: "인터랙티브 지도 탐색",
      howToStep2: "요리별 필터링",
      howToStep3: "이름 또는 스타일로 검색",
      howToStep4: "이야기를 읽으려면 클릭",
      follow: "팔로우",
      followText: "우리 커뮤니티에 가입하세요!",
    },
  },
  ja: {
    common: {
      search: "検索",
      close: "閉じる",
      seeMore: "もっと見る",
      back: "戻る",
      verified: "確認済み",
    },
    header: {
      title: "Paris two Paris",
      tagline: "パリの第二の顔 — ソウルと東京の間",
      subtitle: "本格的なレストランガイド 🇰🇷 & 🇯🇵",
      map: "地図",
      restaurants: "レストラン",
      about: "私たちについて",
      instagram: "インスタグラム",
      japanese: "日本",
      korean: "韓国",
    },
    restaurant: {
      myReview: "私のレビュー",
      story: "物語",
      address: "住所",
      phone: "電話",
      website: "ウェブサイト",
      viewOnGoogleMaps: "Googleマップで見る",
      searchPlaceholder: "レストランを検索...",
      noResults: "レストランが見つかりません",
      resetFilters: "フィルターをリセット",
      all: "すべて",
      found: "件見つかりました",
    },
    about: {
      mission: "私たちの使命",
      missionText: "パリで本格的な日本料理と韓国料理を発見してください。",
      why: "なぜこのガイド？",
      whyText1:
        "パリには多くのアジアンレストランがありますが、すべてが本格的ではありません。",
      whyText2: "このサイトは本物の宝石へと案内します。",
      criteria: "私たちの基準",
      authenticity: "本物",
      authenticityDesc: "日本人または韓国人シェフが経営するレストラン",
      traditional: "伝統的なレシピ",
      traditionalDesc: "オリジナルの技術と材料の尊重",
      ambiance: "雰囲気",
      ambianceDesc: "文化を反映した装飾と雰囲気",
      passion: "情熱",
      passionDesc: "本当の物語を持つ情熱的なオーナー",
      howTo: "サイトの使い方",
      howToStep1: "インタラクティブマップを探索",
      howToStep2: "料理でフィルタリング",
      howToStep3: "名前またはスタイルで検索",
      howToStep4: "物語を読むにはクリック",
      follow: "フォローする",
      followText: "コミュニティに参加してください！",
    },
  },
};
