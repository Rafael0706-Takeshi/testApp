import * as React from "react";
import RevenueIncome from "../components/Revenuepage/RevenueIncome";
import RevenueIntroductioin from "../components/Revenuepage/RevenueIntroduction";
import Nextrevenue from "../components/tokenpage/Nextrevenue";
import RevenueSharing from "../components/Revenuepage/RevenueSharing";
import MonthlyRevenue from "../components/Revenuepage/MonthlyRevenue";

export default function Faqpage() {
  return (
    <div>
      <RevenueIntroductioin />
      <Nextrevenue />
      <RevenueSharing />
      <RevenueIncome />
      <MonthlyRevenue />
    </div>
  );
}
