import blogTemplateHtml from "./blog_template4.html?raw";

const template = {
  title: "반발심리: 왜 사람은 통제받을수록 거부하고 싶을까?",
  slug: "반발심리-원인-극복방법",
  metaDescription:
    "반발심리는 타인의 통제나 압력에 저항하려는 심리적 반응입니다. 이 글에서는 반발심리의 원인, 예시, 극복 방법까지 심리학적으로 자세히 풀어봅니다.",
  html: blogTemplateHtml,
  tags: ["심리학", "반발심리", "심리이론", "인간관계", "설득기술"],
  readTimeMinutes: 6,
  threadSummary: `💕 연애 성공하고 싶다면 꼭 알아야 할 현실 팁 7가지!
💬 첫인상은 단 7초 안에 결정된다
🎧 듣는 태도가 매력을 만든다
🌿 나를 잃지 않는 자기관리의 힘
🔥 갈등을 피하지 말고 현명하게 푸는 법
🤝 신뢰는 매일 쌓는 습관에서 시작
💡 완벽함보다 진심이 통한다
💞 지금 바로 그 사람에게 따뜻한 말 한마디 전해봐요! `,
};

export default template;

export const templateAsText = JSON.stringify(template, null, 2);
