import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Card from "@/components/ReviewCard";

export default function Page(){
  return (
    <>
      <Layout>
        <Hero />
        <GetStarted />
        <Card />
      </Layout>
      <Footer />
    </>
  );
}