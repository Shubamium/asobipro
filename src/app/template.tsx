import React from "react";
import PageTransitionWrapper from "./components/PageTransitionWrapper/PageTransitionWrapper";

type Props = {};

export default function Template({ children }: any) {
  return <PageTransitionWrapper>{children} </PageTransitionWrapper>;
}
