import React from "react";

interface Props {
  params: idUser;
}
interface idUser {
  idUser: string;
}
export default function idUser(props: Props) {
  const { params } = props;
  return (
    <div>
      <b>User Id:{params.idUser}</b>
    </div>
  );
}
