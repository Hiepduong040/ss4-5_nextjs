import React from "react";

export default function Tasks(props: any) {
  const { params } = props;
  return <div>List nhiệm vụ dự án có id: {params.idProject}</div>;
}
