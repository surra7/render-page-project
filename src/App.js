import "./App.css";
import MainSlide from "./components/MainSlide";
import Timeline from "./components/Timeline";
import Info1 from "./components/Info1";
import Footer from "./components/Footer";
import Info2 from "./components/Info2";
import Map from "./components/Map";
import Notice from "./components/Notice";
import FAQ from "./components/FAQ";
import useMoveScroll from "./hooks/useMoveScroll";

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
    animationDelay = `${(Math.random() * 24).toFixed(2) + 10}s`;
    width = `${Math.floor(Math.random() * 30) + 50}px`;
    const style = {
      animationDelay,
      width,
      transform: `translateY(-50px)`,
    };
    return <Snowflake key={i} style={style} />;
  });
};

function App() {
  const navigationTabs = {
    0: useMoveScroll("행사 일정"),
    1: useMoveScroll("마켓 신청"),
    2: useMoveScroll("공지사항"),
    length: 3,
  };

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

  // Execution heading

  return (
    <main>
      <div className="snow-container">{makeSnowFlakes()}</div>
      <div className="absolute flex justify-end items-end z-[1000] select-auto cursor-pointer w-full right-[12vmax] top-6">
        <div
          onClick={navigationTabs[0].onMoveToElement}
          className="mx-5 hover:text-[#fa88aa] font-bold text-[#333333]"
        >
          행사 일정
        </div>
        <div
          onClick={navigationTabs[1].onMoveToElement}
          className="mx-5 hover:text-[#fa88aa] font-bold text-[#333333]"
        >
          마켓 신청
        </div>
        <div
          onClick={navigationTabs[2].onMoveToElement}
          className="mx-5 hover:text-[#fa88aa] font-bold text-[#333333]"
        >
          공지사항
        </div>
      </div>
      <div className="inner">
        <section>
          <MainSlide />
        </section>
        <section ref={navigationTabs[0].element}>
          <Timeline />
        </section>
        <section>
          <Info1 />
        </section>
        <section ref={navigationTabs[1].element}>
          <Info2 />
        </section>
        <section>
          <FAQ />
        </section>
        <section ref={navigationTabs[2].element}>
          <Notice />
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
