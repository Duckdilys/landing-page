import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const usePagination = (data, pageLimit) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(router.query.page || 1);

  useEffect(() => {
    const page = router.query.page || 1;
    setCurrentPage(+page);
  }, [router.query.page]);
  const goToNextPage = () => {
      router.push(`?page=${currentPage + 1}`);
  }
  const goToPrevPage = () => {
      router.push(`?page=${currentPage - 1}`);
  }
  const getDataRender = () => {
      const startIndex = currentPage * pageLimit - pageLimit;
      const endIndex = startIndex + pageLimit;
      return data.slice(startIndex, endIndex);
  }
  const getPaginationRender = () => {
      const pageNumbers = [];
      for(let i = 1; i <= Math.ceil((data.length / pageLimit)); i++){
          pageNumbers.push(i);
      }
    //   let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    //   return new Array(pageLimit).fill().map((_, index) => start + index + 1);
      let setFirstCurrentPage = currentPage - pageLimit;
      if(setFirstCurrentPage <= 0){
        setFirstCurrentPage = 0;
      }
      let setLastPagePagination = currentPage + pageLimit;
      if(setLastPagePagination > data.length){
          setLastPagePagination = data.length - 1;
      }
      return pageNumbers.slice(setFirstCurrentPage, setLastPagePagination);
  }
  const goToPage = (page) => {
      router.push(`?page=${page}`);
  }
  return {
      goToNextPage,
      goToPrevPage,
      getDataRender,
      getPaginationRender,
      currentPage,
      goToPage,
      totalDocuments: Math.round(data.length / pageLimit)
  }
};

export default usePagination
