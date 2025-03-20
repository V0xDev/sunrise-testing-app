import ButtonBasket from "@/components/ButtonBasket/ButtonBasket";
import style from "./content.module.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { CounterProvider } from "@/components/Providers/CounterProvider";
import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";
import { useProductApi } from "@/hooks/useProductApi";
import { useSort } from "@/components/Providers/SortingProvider";
import { ColumnVisibility } from "@/components/Content/content.types";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Название товара",
    width: 300,

    renderCell: (params) => {
      const generateLink = `/product/${params.row.id}`;

      return (
        <Link className={style.productLink} href={generateLink}>
          {params.row.name}
        </Link>
      );
    },
  },
  {
    field: "price",
    headerName: "Цена",
    width: 150,
    sortable: true,
  },
  {
    field: "brand",
    headerName: "Бренд",
    sortable: true,
    filterable: false,
  },
  {
    field: "isNew",
    sortable: true,
  },
  {
    field: "action",
    headerName: "Действие",
    flex: 1,
    align: "right",
    headerAlign: "right",
    width: 100,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <CounterProvider id={params.row.id} product={params.row}>
        <ButtonBasket />
      </CounterProvider>
    ),
  },
];

const hiddenColumns: ColumnVisibility = {
  isNew: false,
};

const ContentProductTable = () => {
  const { listProducts } = useProductApi();
  const { isLoading, data, fetcher } = useFetch([]);

  const { sortModel, setSortModel } = useSort();

  useEffect(() => {
    fetcher(listProducts, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortModel, listProducts]);

  return (
    <div className={style.contentBlock}>
      <DataGrid
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        loading={isLoading}
        rows={data}
        columns={columns}
        columnVisibilityModel={hiddenColumns}
        disableRowSelectionOnClick
      />
    </div>
  );
};
export default ContentProductTable;
