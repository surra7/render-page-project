import "./App.css";
import MainSlide from "./components/MainSlide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Timeline from "./components/Timeline";
import Info1 from "./components/Info1";
import Footer from "./components/Footer";
import Info2 from "./components/Info2";
import Map from "./components/Map";

gsap.registerPlugin(ScrollTrigger);

const Snowflake = ({ style }) => {
  let imgOption = Math.floor(Math.random() * 2) + 1;
  return (
    <div className="snow-flake" style={style}>
      {imgOption === 1 ? (
        <img alt="flower-1" src="images/subject-3.png" />
      ) : (
        <img alt="flower-2" src="images/subject-4.png" />
      )}
    </div>
  );
};

const makeSnowFlakes = () => {
  let animationDelay = "0s"; // 기본 값은 0초이다.
  let width = "30px";
  const arr = Array.from("1234567");

  // arr의 length 만큼의 <SnowFlake />를 반환한다.
  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 24).toFixed(2) + 10}s`; // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자
    width = `${Math.floor(Math.random() * 30) + 50}px`; // 10~20 사이의 정수
    const style = {
      animationDelay,
      width,
      transform: `translateY(-50px)`,
    };
    return <Snowflake key={i} style={style} />;
  });
};

function App() {
  // const outerDivRef = useRef();
  // const [currentPage, setCurrentPage] = useState(1);
  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     // e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

  //     if (deltaY > 10) {
  //       // 스크롤 내릴 때
  //       if (scrollTop >= 0 && scrollTop < pageHeight) {
  //         //현재 1페이지
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setCurrentPage(2);
  //       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //         //현재 2페이지
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setCurrentPage(3);
  //       } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
  //         // 현재 3페이지
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 3,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //         setCurrentPage(4);
  //       } else {
  //         // 현재 4페이지
  //         outerDivRef.current.scrollTo({
  //           top: pageHeight * 4,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   };
  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);

  useGSAP(() => {
    gsap.to("#h1", {
      scrollTrigger: {
        trigger: "#header",
        start: "top",
        end: "bottom",
        scrub: true,
      },
      yPercent: 50,
      scale: 3,
      opacity: 0,
    });
    // Section 1 H2
    gsap.from("#h2", {
      scrollTrigger: {
        trigger: "#h2",
        // start: `top bottom`,
        // end: `top 400px`,
        start: `top bottom`,
        end: "bottom center",
        markers: true,
        // scrub: 1,
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 1,
    });
    // Execution heading
    gsap.from("#h3", {
      scrollTrigger: {
        trigger: "#h3",
        start: "top bottom+=100px",
        end: "bottom center",
        // scrub: true,
        markers: true,
        toggleActions: "play complete none reset",
      },
      xPercent: 100,
      opacity: 0.5,
      duration: 1,
    });
    gsap.from("#h4", {
      scrollTrigger: {
        trigger: "#h4",
        start: "top bottom",
        end: "bottom center",
        // scrub: true,
        markers: true,
        toggleActions: "play complete none reset",
      },
      yPercent: 100,
      opacity: 0.5,
      duration: 1,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    // <div>
    //   <div className="snow-container">{makeSnowFlakes()}</div>
    //   <div ref={outerDivRef} className="outer">
    //     <Dots currentPage={currentPage} />
    //     <div className="inner">
    //       <MainSlide />
    //     </div>
    //     <div className="inner bg-blue">2</div>
    //     <div className="inner bg-pink">3</div>
    //     <div className="inner bg-white">4</div>
    //   </div>
    // </div>
    <main>
      <div className="snow-container">{makeSnowFlakes()}</div>
      <div className="inner">
        <section>
          <MainSlide />
        </section>
        <section>
          <Timeline />
        </section>
        <section>
          <Info1 />
        </section>
        <section>
          <Info2 />
        </section>
        <section>
          <Map />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;
