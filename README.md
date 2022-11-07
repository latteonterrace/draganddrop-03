# 링크 드래그 

드래그된 hyperlink들은 다음 두 개의 데이터 타입이 포함되어야 합니다. 
* text/url-list
* text/plain 

dragstart 핸들러에서 다음과 같이 url을 설정합니다. 

```jsx
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.clearData();
    ev.dataTransfer.setData("text/url-list", "https://www.naver.com");
    ev.dataTransfer.setData("text/plain", "https://www.naver.com");
});
```

drop 핸들러에서 "URL" 키를 사용하여 hyperlinks를 꺼낼 수 있습니다. 또는 text/url-list를 사용합니다.

```jsx
target.addEventListener("drop", (ev) => {
    console.log("Drop");
    ev.preventDefault();
    const url = ev.dataTransfer.getData("URL");
    console.log(url);
});
```


