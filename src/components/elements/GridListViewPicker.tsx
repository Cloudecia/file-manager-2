import { LucideLayoutGrid, LucideList } from "lucide-react";

const GridListViewPicker = ({ gridView, setGridView }) => {
  return (
    <>
      <div onClick={() => setGridView((val) => !val)} className="cursor-pointer hidden">
        {gridView ? <LucideLayoutGrid /> : <LucideList />}
      </div>
    </>
  );
};

export default GridListViewPicker;
