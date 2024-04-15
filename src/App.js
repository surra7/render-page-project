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

const FlowerFlake = ({ style }) => {
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

const makeFlowerFlakes = () => {
  let animationDelay = "0s";
  let width = "30px";
  const arr = Array.from("1234567");

  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 24).toFixed(2) + 10}s`;
    width = `${Math.floor(Math.random() * 30) + 50}px`;
    const style = {
      animationDelay,
      width,
      transform: `translateY(-50px)`,
    };
    return <FlowerFlake key={i} style={style} />;
  });
};

function App() {
  const navigationTabs = {
    0: useMoveScroll("행사 일정"),
    1: useMoveScroll("마켓 신청"),
    2: useMoveScroll("공지사항"),
    length: 3,
  };

  return (
    <main>
      <div className="snow-container">{makeFlowerFlakes()}</div>
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
