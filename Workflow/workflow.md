작업 순서는 다음과 같습니다.

### 작업 순서

1. 로컬 레포지토리에서 브랜치 생성 (기능별, 이슈별 등등 원하는대로)
    - 예: `feat/기능이름`

2. 이슈 생성

3. 위 브랜치에서 이슈 작업 후 JNU/econovation (girin-grim) 의 dev 브랜치로 PR 날리기.
    - **JNU/econovation (girin-grim): dev ←  MinjuKwak01 (girin-grim): feat/기능이름**
    - **브랜치 헷갈리지 않게 조심!!**

4. 머지하는 경로가 dev 브랜치인지 다시 한번 확인 후 머지하기

5. 다시 1번으로 돌아가 새로운 브랜치를 생성하거나 feat/기능이름 브랜치에서 계속 작업 가능
    - 새로운 브랜치는 Source를 (JNU/econovation (girin-grim): dev로 설정하기)

- JNU/econovation (girin-grim)의 main 브랜치는 최종 오류 해결 브랜치이므로 건들지 않기!
- PR 날리기 전에 `git pull upstream` 한번 더 해주기! (충돌 방지) : 상대방이 머지 될 때마다 pull을 꼭 해줘야한다.


<br>

### 커밋 컨벤션


```markdown
feat : 기존에 없던 기능 개발
fix : 이슈 수정
docs : 코드와는 상관이 없는 문서가 추가 및 수정 될 경우
style : 코드 컨벤션 등이 수정 될 경우
design : 디자인이 변경되어 해당 부분을 수정하는 코드를 짤 경우
refactor : 코드를 리팩토링 할 경우
test : 테스트 코드를 추가할 경우
chore : package.json이나 nuxt.config.js처럼 패키지 설치 및 환경 설정에 관련된 내용이 수정 될 경우
rename : 파일 혹은 폴더명을 수정하거나 옮기는 작업인 경우
remove : 파일을 삭제하는 작업만 수행한 경우
```

<br>

### 이슈 템플릿
```markdown
이슈제목
[FE]  ~~ 
[BE]  ~~ 
```

```markdown
## Issue: FEATURE

- [ ] 작업사항1

## Description

- 설명

## ETC

- 기타
```

<br>

### PR 템플릿
```markdown
[FE] ~~ (#이슈번호)
[BE] ~~ (#이슈번호)
```

```markdown
## PR 유형

- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] 코드에 영향을 주지 않는 변경사항(오타 수정, 탭 사이즈 변경, 변수명 변경)
- [ ] 코드 리팩토링
- [ ] 문서 수정
- [ ] 테스트 추가, 테스트 리팩토링
- [ ] 빌드 부분 혹은 패키지 매니저 수정
- [ ] 파일 혹은 폴더명 수정
- [ ] 파일 혹은 폴더 삭제

## PR 내용

- 기능 요약1

## 기타

- 기타 내용 (없을 시 삭제)

close #이슈번호
```
