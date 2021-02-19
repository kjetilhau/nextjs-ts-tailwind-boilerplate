import React from "react";
import Layout from "../components/Layouts/Layout";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  return { props: {}, revalidate: 60 };
}

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-md space-y-44">
        <div className="text-center text-white">Index page</div>
      </div>
    </Layout>
  );
};

export default HomePage;
