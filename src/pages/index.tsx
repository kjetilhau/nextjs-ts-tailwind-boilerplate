import React from "react";
import Layout from "../components/Layouts/Layout";
import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  return { props: {}, revalidate: 60 };
}

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const seoTitle = "Next.js Boilerplate";
  const seoDesc = `Next.js Boilerplate description`;

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          type: "website",
          url: process.env.ABOSLUTE_URL,
          images: [{ url: `${process.env.ABOSLUTE_URL}/og.png` }],
        }}
      ></NextSeo>

      <Layout>
        <div className="container mx-auto max-w-screen-md space-y-44">
          <div className="text-center text-white">Index page</div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
