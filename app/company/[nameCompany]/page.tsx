"use client";
import React from "react";

interface nameCompany {
  nameCompany: string;
}
interface Props {
  params: nameCompany;
}
export default function nameCompany(props: Props) {
  const { params } = props;
  return (
    <div>
      <h3>Ex04:</h3>
      <b>Company name: {params.nameCompany}</b>
    </div>
  );
}
