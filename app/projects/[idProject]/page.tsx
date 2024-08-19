import React from "react";

interface Props {
  params: idProject;
}
interface idProject {
  idProject: string;
}
export default function idProject(props: Props) {
  const { params } = props;
  return (
    <div>
      <b>Chi tiết dự án có id: {params.idProject}</b>
    </div>
  );
}
