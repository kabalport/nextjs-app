## [손에 익는 Next.js] 날씨 앱 만들기

### 실행 방법

1. `.env.example` 파일을 복사해 `.env.local` 파일을 만듭니다.
2. `.env.local` 파일의 `NEXT_PUBLIC_API_KEY` 값을 채웁니다.
   - NEXT_PUBLIC_API_KEY 값을 생성하는 방법은 [핸드북](https://book.hajoeun.dev/friendly-next-js/next.js-2/api)을 참고하세요.
3. 아래의 명령어를 실행합니다.

```bash
npm install # 패키지 설치
npm run dev # 프로그램 실행
```

4. 이제 [http://localhost:3000](http://localhost:3000)로 접속해 서비스를 확인하실 수 있습니다.


### json to typescript 쉽게하는법
https://transform.tools/json-to-typescript
이 사이트에 json을 넣고 copy>그런다음 Root를 Response로 바꾸고 사용하고 있습니다.


```
<div className={styles.diaryContainer}>
                <div className={styles.resultTitle}>
                    {data.title}
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>요약</div>
                    <div className={styles.cardContent}>{data.summary}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>감성일기장</div>
                    <div className={styles.cardContent}>{data.emotional_content}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>내가 느낀 감정</div>
                    <div className={styles.cardContent}>{data.emotional_result}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>심리 분석</div>
                    <div className={styles.cardContent}>{data.analysis}</div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardTitle}>GPT 조언</div>
                    <div className={styles.cardContent}>
                        <ul className={styles.actionList}>
                            {data.action_list.map((action, index) => (
                                <li key={index} className={styles.actionListItem}>{action}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
```