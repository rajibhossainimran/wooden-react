import Banner from "../../component/Banner";
import ConnectWithArchitect from "../../component/ConnectWithArchitect";
import OurProjects from "../../component/OurProjects";
import Resort from "../../component/Resort";
import Review from "../../component/Review";
import Welcome from "../../component/Welcome";
import WhyChooseUs from "../../component/WhyChooseUs";

const Home = () => {
  return (
    <div className="relative w-[94%] h-full mx-auto">
      <Banner></Banner>
      <Welcome></Welcome>
      <OurProjects></OurProjects>
      <ConnectWithArchitect></ConnectWithArchitect>
      <Review></Review>
      <Resort></Resort>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
