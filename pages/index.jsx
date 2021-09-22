import Head from "next/head";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import BannerNav from "../components/BannerNav";
import CustomerFb from "../components/CustomerFb";
import Donors from "../components/Donors";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurProfessional from "../components/OurProfessional";
import PopularDishe from "../components/PopularDishe";
import PopularMenu from "../components/PopularMenu";
import RecentArticle from "../components/RecentArticle";
import SpecialKombo from "../components/SpecialKombo";
import SpecialOffer from "../components/SpecialOffer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Foodbaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Components */}
      <Header />
      <BannerImg />
      <Banner />
      <BannerNav />
      <PopularMenu />
      <SpecialOffer />
      <PopularDishe />
      <SpecialKombo />
      <DownloadApp />
      <OurProfessional />
      <CustomerFb />
      <RecentArticle />
      <Donors />
      <Footer />
    </div>
  );
}
