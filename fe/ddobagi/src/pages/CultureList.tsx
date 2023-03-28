import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import cultureimg from '../assets/korean_culture.jpg'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/RootReducer";
import BreadCrumbs from "../components/BreadCrumbs";
import styles from "./CategoryList.module.scss";
// import CultureDetail from '../components/Culture/CultureDetail';
// import VideoScroll from "../components/VideoScroll";
import SwiperList from "../components/Swiper/SwiperList";

// API에서 받아온 데이터의 타입을 선언합니다.
interface ApiData {
  categoryName: Category[];
  cultureList: Culture[];
}

interface CultureContent {
  cultureId: number;
  lang: string;
  title: string;
  description: string;
}

interface Culture {
  cultureId: number;
  url: string;
  cultureContentQueryDtoList: CultureContent[];
  completed: boolean;
}

interface Category {
  categoryId: number;
  lang: string;
  categoryName: string;
}

// interface ApiData {
//   data: Data;
// }

function CultureList() {
  // const navigate = useNavigate();
  // const moveCulture = () => {
  //   navigate("/cultureitem");
  // }
  //언어 변수
  const language = useSelector(
    (state: RootState) => state.languageChange.language
  );
  //

  // 카테고리명을 변수화 ( 모달에 넘겨주기 위함 )
  const category1 =
    language === "CN" ? "朝鲜纪念日" : language === "VI" ? "ngày kỷ niệm của Hàn Quốc" : "한국의 기념일";
  const category2 =
    language === "CN" ? "朝鲜传统" : language === "VI" ? "truyền thống của Hàn Quốc" : "한국의 전통";
  const category3 =
    language === "CN"
      ? "朝鲜文化艺术"
      : language === "VI"
      ? "văn hóa nghệ thuật của Hàn Quốc"
      : "한국의 문화예술";
  const category4 =
    language === "CN"
      ? "朝鲜饮食"
      : language === "VI"
      ? "món ăn Hàn Quốc"
      : "한국의 음식";
  //
  // axios통신으로 리스트를 받아와야 하는 부분 - 카테고리별 분류 1, 2, 3, 4 //
  const [apiData1, setApiData1] = useState<ApiData | null>(null);
  const [apiData2, setApiData2] = useState<ApiData | null>(null);
  const [apiData3, setApiData3] = useState<ApiData | null>(null);
  const [apiData4, setApiData4] = useState<ApiData | null>(null);
  // 가져온 리스트의 타입을 캐스팅

  // axios (아직 하나만 - 2023.03.24)
  useEffect(() => {
    // API 호출
    axios
      .get('http://j8a608.p.ssafy.io:8080/api/cultures/1?common=ANNIVERSARY')
      .then((res) => {
        setApiData1(res.data);
        console.log(apiData1)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // API 호출
    axios
      .get('http://j8a608.p.ssafy.io:8080/api/cultures/1?common=TRADITION')
      .then((res) => {
        setApiData2(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // API 호출
    axios
      .get('http://j8a608.p.ssafy.io:8080/api/cultures/1?common=ART')
      .then((res) => {
        setApiData3(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // API 호출
    axios
      .get('http://j8a608.p.ssafy.io:8080/api/cultures/1?common=FOOD')
      .then((res) => {
        setApiData4(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return(
    <div>
      <Box
        sx={{
          width:"100%",
          height:"280px",
          display:"flex",
          justifyContent :"center",
          backgroundColor: "primary.dark",
        }}>
        <Typography sx={{
          display:"flex",
          fontSize: "50px",
          alignItems:"center",
          fontFamily: "CookieRun-Regular",
        }}>
          한국 문화 학습
        </Typography>
      </Box>
      <div className={styles.BreadCrum}>
        <BreadCrumbs />
      </div>
      <Box>
        {/* <Typography>
          한국의 예술 문화
        </Typography> */}
        <div className={styles.CategoryName}>{category1}</div>
        <Box sx={{ height:"50px"}} />
          {/* @ts-ignore */}
          <SwiperList dataProp={apiData1} boxColor="red" />
        <Box sx={{ height:"50px"}} />
        <hr />
        <Box sx={{ height:"50px"}} />
      <div className={styles.CategoryName}>{category2}</div>
        <Box sx={{ height:"50px"}} />
        {/* @ts-ignore */}
          <SwiperList dataProp={apiData2} boxColor="blue" />
        <Box sx={{ height:"50px"}} />
        <hr />
        <Box sx={{ height:"50px"}} />
      <div className={styles.CategoryName}>{category3}</div>
        <Box sx={{ height:"50px"}} />
        {/* @ts-ignore */}
          <SwiperList dataProp={apiData3} boxColor="green" />
        <Box sx={{ height:"50px"}} />
        <hr />
        <Box sx={{ height:"50px"}} />
      <div className={styles.CategoryName}>{category4}</div>
        <Box sx={{ height:"50px"}} />
        {/* @ts-ignore */}
          <SwiperList dataProp={apiData4} boxColor="yellow" />
        </Box>
      <Box sx={{ height:"50px"}} />
    </div>
  )
}

export default CultureList;