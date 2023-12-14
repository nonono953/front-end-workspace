```js
document.addEventListener("DOMContentLoaded");
```

## 문서 객체 조작하기

### textContent, InnerHTML

- textContent : 문서 객체 내에 문자 그대로 넣는다.
- innerHTML : 문서 객체 내에 HTML 형식으로 넣는다.

```js
문서객체.textContent; // 경수. textContent;  앞자리 문자는 소문자 중간단어는 대문자?
문서객체.innerHTML;
```

### setAttribute, getAtrribute

```js
문서객체.setAttribute(속성이름, 값); 문서 객체의 속성을 추가하거나 수정할 때
문서객체.getAttribute(속성이름); 문서 객체의 속성을 가져올 때
```

###classList
문서객체.classList.add("클래스명");
문서객체.classList.remove("클래스명");
문서객체.classList.contains("클래스명");
toggle
