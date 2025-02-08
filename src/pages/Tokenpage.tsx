import * as React from "react";
import Introductioin from "../components/tokenpage/Introduction";
import Veiltoken from "../components/tokenpage/Veiltoken";
import Breakdown from "../components/tokenpage/Breakdown";
import Nextrevenue from "../components/tokenpage/Nextrevenue";

export default function Tokenpage() {
  return (
    <div>
      <Introductioin />
      <Veiltoken />
      <Breakdown />
      <Nextrevenue />
    </div>
  );
}
