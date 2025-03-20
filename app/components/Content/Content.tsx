"use client";

import style from "./content.module.scss";
import ContentProductForm from "@/components/Content/ContentProductForm";
import ContentProductTable from "@/components/Content/ContentProductTable";

const Content = () => {
  return (
    <main className={style.content}>
      <ContentProductForm />
      <ContentProductTable />
    </main>
  );
};
export default Content;
