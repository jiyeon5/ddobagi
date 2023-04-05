# 🎞또바기



### 프로젝트 진행 기간

2023.02.20(월) ~ 2023.04.07(금)



## 👓등장 배경

나도 모르게 드라마나 영화의 명장면을 따라해 보신적 있으신가요?

동아리, 동호회 등의 커뮤니티에 가입해 활동하기는 진입장벽이 너무 높다고 생각하시나요?

예술성을 키우고 나만의 작품을 만들어 보고 싶다고 생각하신 적이 있으신가요?

#### "당신이 만들, 당신이 만든, 당신의 작품 Etjude입니다"



## 개요

에쮸드(Etude)란 `연습교본` 이라는 뜻으로 그 자체로 하나의 작품을 뜻합니다.

연기연습을 해보고 싶은 일반인, 배우를 지망하는 배우지망생 모두에게

언제 어디에서나 인터넷만 있다면 쉽고 편리하게 연기연습을 도와줄 수 있는 서비스입니다.

궁극적으로 나의 생각과 감정을 표현하며 창조적 사고와 상상력을 키우며 새로운 가치를 창조해낼 수 있게 도와드립니다.



## Usage

````
git clone https://lab.ssafy.com/s08-bigdata-dist-sub2/S08P22A608.git

이후 exec폴더의 포팅메뉴얼을 따라 진행
````



### 개발환경

![개발환경](./assets/개발환경.PNG)



## 서비스 아키텍처

![아키텍처](./assets/아키텍처.png)



### 📂디렉토리 구조

<details>
  <summary>
  백엔드 디렉토리 구조
  </summary>

      ddobagi
      ┣ api
      ┃ ┣ controller
      ┃ ┣ dto
          ┣ request
          ┗ response
      ┃ ┣ service
      ┣ common
      ┣ config
      ┣ db
      ┃ ┣ entity
      ┃ ┣ ┗ information
      ┃ ┗ repository
      ┗ UnnamedApplication.java
 </details>





<details>
  <summary>
  프론트엔드 디렉토리 구조
  </summary>

    FE
    ┣ public
    ┃ ┣ data
    ┃ ┣ img
    ┃ ┗ index.html
    ┣ src
    ┃ ┣ @ap.cx
    ┃ ┣ assets
    ┃ ┣ components
    ┃ ┃ ┣ animations
    ┃ ┃ ┣ Charts
    ┃ ┃ ┣ Culture
    ┃ ┃ ┣ Fullpage
    ┃ ┃ ┣ learning
    ┃ ┃ ┣ Map
    ┃ ┃ ┣ modal
    ┃ ┃ ┣ ParentPage
    ┃ ┃ ┣ Swiper
    ┃ ┃ ┗ Word
    ┃ ┣ container
    ┃ ┣ pages
    ┗ ┗ redux

</details>




## 주요기능 및 화면

#### 랜딩페이지

![랜딩페이지.gif](/uploads/b9dc582dc434697c773940e29f99067b/landing.gif)

#### 로그인 & 로그아웃(jwt)

- 우측 상단에 로그인 버튼을 통해 로그인을 진행할 수 있습니다
- 로그인을 한 사용자만 서비스를 이용하기 위한 스튜디오를 생성할 수 있습니다.

![로그인.gif](/uploads/6eb08bfaf4915b0145dceca4b1159ce2/login.gif)



#### 한국어 연습 (GIF에서 각각 번역 보여주기)

- 한국어 연습 탭에 들어가면 카테고리 별 영상을 볼 수 있습니다.
- 영상을 선택하면 해당 영상을 통해 한국어 학습을 진행할 수 있습니다.

![한국어연습.gif](/uploads/a77a302b217a00a215c9729a95db0864/learning.gif)



#### 한국어 연습 - 대화 연습

- 사용자가 선택한 영상을 통해 대화 연습을 할 수 있습니다.
- 전체 스크립트를 표시해 모든 대사를 볼 수 있고 스크립트 아래의 재생 버튼을 클릭하면 해당 부분의 영상이 재생됩니다.
- 녹음 버튼을 통해 녹음을 하면 발음 평가 점수 API를 통해 반환된 점수를 출력합니다.
- 확성기 버튼을 클릭하면 자신의 녹음을 다시 들을 수 있습니다.

![대화연습.gif](/uploads/0de8737bb4f9d7290797e865d3843782/conv.gif)



#### 한국어 연습 - 단어 연습

- 사용자가 선택한 영상을 바탕으로 단어 연습을 진행할 수 있습니다.
- 재생 버튼을 클릭하면 해당 부분의 음성을 들어볼 수 있습니다.
- 빈칸에 알맞은 정답을 고르고 정답을 확인할 수 있습니다.

![단어연습.gif](/uploads/f7e75f723c836c8081e83ab53c09fe77/word.gif)



#### 한국 문화 학습

- 기념일, 전통, 문화예술, 음식 등의 카테고리를 통해 한국의 문화를 학습할 수 있습니다.
- 영상을 선택해서 들어가면 영상과 함께 설명을 확인할 수 있습니다.

![한국문화학습.gif](/uploads/b23d366bd25e3c6f8f65b09ecc85cce6/culture.gif)



#### 마이페이지

- 사용자의 활동 내역을 확인할 수 있습니다.
- 사용자의 학습 진행도를 확인할 수 있습니다.
- 틀렸던 문제만 모아서 다시 풀 수 있습니다.

![마이페이지.gif](/uploads/ae0e92f6149f45163d0d06eccb3e8301/mypage.gif)



#### 보호자 페이지 - 자녀 학습 기록

- 아이의 학습 통계와 다른 사용자들과의 비교 통계를 확인할 수 있습니다.

![자녀학습기록.gif](./assets/자녀학습기록.gif)



#### 보호자 페이지 - 다문화 센터 위치

- 전국의 다문화 센터 위치와 정보를 볼 수 있습니다.

![다문화센터위치.gif](./assets/다문화센터위치.gif)



#### 보호자 페이지 - 다문화 뉴스

- '다문화'가 제목이나 내용에 포함된 뉴스를 볼 수 있습니다.
- 클릭 시 해당 뉴스 페이지로 이동됩니다.

![다문화뉴스.gif](./assets/다문화뉴스.gif)



#### 보호자 페이지 - 다문화 지원 소식

- 다문화 가족에게 필요한 소식을 제공합니다.

![다문화소식.gif](./assets/다문화소식.gif)



## Team Members

<div align="left">
  <table>
    <tr>
        <td align="center">
        <a href="">
          <img src="/uploads/b4b53f04a565d5c31904758a3077e490/cjy.png" alt="최지연 프로필" width=120 height=120 />
        </a>
      </td>
      <td align="center">
        <a href="">
          <img src="/uploads/488d8b1bffbeb6fff1f74b88497887af/kcb.png" alt="김찬빈 프로필" width=120 height=120 />
        </a>
      </td>
      <td align="center">
        <a href="">
          <img src="/uploads/e47b69515d5e712cae733b7387c1b359/lhj.png" alt="이혜지 프로필" width=120 height=120 />
        </a>
      </td>
      <td align="center">
        <a href="">
          <img src="/uploads/5f0d1b4d20e64dc2f07cb6890726034e/lsj.png" alt="임성준 프로필" width=120 height=120 />
        </a>
      </td>
      <td align="center">
        <a href="">
          <img src="/uploads/9334d71c7a1dac1818fbe0e407b08718/jhj.png" alt="정희주 프로필" width=120 height=120 />
        </a>
      </td>
      <td align="center">
        <a href="">
          <img src="/uploads/09b184e26c8790fc3040b28dcd79606c/hsj.png" alt="황수정 프로필" width=120 height=120 />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/jiyeon5">
          최지연
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Rlack97">
          김찬빈
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/leehyeji319">
          이혜지
        </a>
      </td>
      <td align="center">
        <a href="">
          임성준
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/heeheejj">
          정희주
        </a>
      </td>
        <td align="center">
        <a href="https://github.com/sujunghwang">
          황수정
        </a>
      </td>
    </tr>
  </table>
</div>
