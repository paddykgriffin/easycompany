import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="about-page pt-28">{children}</div>;
}
