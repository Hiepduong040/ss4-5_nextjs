import React from "react";
interface Props {
  params: idUser;
}
interface idUser {
  idUser: string;
}
export default function Posts(props: Props) {
  const { params } = props;
  return (
    <div>
      List bài viết của User Id: <b>{params.idUser}</b>
    </div>
  );
}
