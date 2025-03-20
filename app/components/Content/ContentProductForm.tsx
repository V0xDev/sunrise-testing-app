import { Button } from "@mui/material";
import style from "./content.module.scss";

const ContentProductForm = () => {
  return (
    <div className={style.contentBlock}>
      <Button disabled variant="outlined" size="small">
        Добавить новый товар
      </Button>
    </div>
  );
};
export default ContentProductForm;
