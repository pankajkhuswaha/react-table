// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-inner-declarations */
/* eslint-disable react/prop-types */
// /* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useMemo, useState } from "react";
import view from "../../assets/view.svg";
import Pagination from "./Pagination/Pagination";
import useViewModal from "./ViewModal/useViewModel";
import ViewModal from "./ViewModal/viewModel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./datatable.scss";
const Datatable = ({
  data,
  cols,
  title,
  subTitle,
  actionButtons,
  selection,
  tableheadstyle,
  tablerowstyle,
  pagination,
  keysToExcludeFromView,
  searchAble,
}) => {
  let columns = [...cols];
  const [rows, setrows] = useState([...data]);
  useEffect(() => {
    setrows([...data]);
  }, [data]);
  console.log(searchAble);
  //* ----------- selection function --------
  const [selecteddata, setselecteddata] = useState([]);
  const handleSelectionChange = (data) => {
    const isSlected = selecteddata.find((item) => item.id == data.id);
    if (isSlected) {
      const newSelection = selecteddata.filter((item) => item.id !== data.id);
      setselecteddata(newSelection);
    } else {
      const newSelection = [...selecteddata, data];
      setselecteddata(newSelection);
    }
  };
  //* ---------- Pagination code ------------
  const [PageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return rows.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, searchVal, rows]);
  //*------------ search fuction --------------
  function searchObjects(searchTerm) {
    const searchTermLower = searchTerm.toLowerCase();
    const results = rows.filter((obj) => {
      return Object.values(obj).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTermLower)
      );
    });
    return results;
  }
  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    const searchResults = searchObjects(e.target.value);
    setCurrentPage(1);
    setrows(searchResults);
  };
  useEffect(() => {
    if (searchVal == "") {
      setrows([...data]);
    }
  }, [searchVal]);
  //* ------------- view model functions --------------
  const { showModal, selectedData, openModal, closeModal } = useViewModal();
  return (
    <div className="main" id="X_RT454566KJKJSDFKJhjd6546546">
      <div className="X_RT454566KJKJSDFKJhjd6546546 table-container">
        <div className=" X_RT454566KJKJSDFKJhjd6546546 mb-2">
          <h2>{title ? title : "Please give an title"}</h2>
          <small className=" X_RT454566KJKJSDFKJhjd6546546 text-secondary">
            {subTitle}
          </small>
          {searchAble == undefined && (
            <div className=" X_RT454566KJKJSDFKJhjd6546546 my-2 mb-4 d-flex flex-wrap gap-2 gap-md-0 justify-content-between align-items-center">
              <div className=" X_RT454566KJKJSDFKJhjd6546546 pageContainer d-flex align-items-center gap-2">
                show
                <select
                  value={PageSize}
                  className=" X_RT454566KJKJSDFKJhjd6546546 form-select"
                  onChange={(e) => setPageSize(parseInt(e.target.value))}
                >
                  <option>05</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                enteries
              </div>
              <div className=" X_RT454566KJKJSDFKJhjd6546546 InputContainer">
                <input
                  type="search"
                  name="text"
                  className=" X_RT454566KJKJSDFKJhjd6546546 input"
                  id="input"
                  placeholder="Search"
                  value={searchVal}
                  onChange={(e) => handleSearch(e)}
                />
                <label className=" X_RT454566KJKJSDFKJhjd6546546 labelforsearch">
                  <svg
                    viewBox="0 0 512 512"
                    className=" X_RT454566KJKJSDFKJhjd6546546 searchIcon"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                  </svg>
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="table-responsive">
          <table id="mytable" className="table align-middle mb-0">
            <thead style={tableheadstyle}>
              <tr className=" X_RT454566KJKJSDFKJhjd6546546 header-row">
                {selection && (
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                )}
                <th>#</th>
                {columns.map((col, i) => (
                  <th key={i}>{col.headerName}</th>
                ))}
                {actionButtons && <th className="text-center">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {rows &&
                (pagination ? currentTableData : rows).map((data, i) => {
                  return (
                    <tr
                      key={i}
                      style={tablerowstyle}
                      onClick={() => {
                        if (selection) {
                          handleSelectionChange(data);
                        }
                      }}
                      className={
                        selecteddata.find((item) => item.id == data.id) &&
                        "activeRow"
                      }
                    >
                      {selection && (
                        <td>
                          <input
                            type="checkbox"
                            checked={
                              selecteddata.find((item) => item.id == data.id)
                                ? true
                                : false
                            }
                            onChange={() => handleSelectionChange(data)}
                          />
                        </td>
                      )}
                      <td>{rows.indexOf(data) + 1}</td>
                      {columns.map((col, i) => {
                        return (
                          <React.Fragment key={i}>
                            {!col.renderCell && (
                              <td style={col.style} key={i}>
                                {data[col.field]}
                              </td>
                            )}
                            {col.renderCell && (
                              <td style={col.style} key={i}>
                                {col.renderCell(data)}
                              </td>
                            )}
                          </React.Fragment>
                        );
                      })}
                      {actionButtons && (
                        <td>
                          <div className="d-flex justify-content-center align-items-center gap-3">
                            {actionButtons?.viewButton == undefined && (
                              <p
                                onClick={() => openModal(data)}
                                className="mb-0"
                                style={{ cursor: "pointer" }}
                              >
                                <img width={"25.5rem"} src={view} alt="" />
                              </p>
                            )}
                            {actionButtons?.viewButton && (
                              <>{actionButtons.viewButton(data)}</>
                            )}
                            {actionButtons?.editButton && (
                              <>{actionButtons.editButton(data)}</>
                            )}
                            {actionButtons?.deleteButton && (
                              <>{actionButtons.deleteButton(data)}</>
                            )}
                            {actionButtons.onEditBtnClick && (
                              <p
                                onClick={() =>
                                  actionButtons.onEditBtnCLick(data)
                                }
                                className="text-primary mb-0"
                                style={{ cursor: "pointer" }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  width={"1.5rem"}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                  />
                                </svg>
                              </p>
                            )}
                            {actionButtons.onDeleteBtnCLick && (
                              <p
                                onClick={() =>
                                  actionButtons.onDeleteBtnCLick(data)
                                }
                                className="text-danger mb-0"
                                style={{ cursor: "pointer" }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  width={"1.5rem"}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </p>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {(pagination ? currentTableData : rows).length == 0 &&
            searchVal !== "" &&
            data?.length !== 0 && (
              <p className="text-center w-full pt-4 pb-1 mb-0">
                No search result found
              </p>
            )}
          {data?.length == 0 && (
            <p className="text-center w-full pt-4 pb-1 mb-0">
              No data Available in table
            </p>
          )}
        </div>

        <nav className="mt-2 d-flex flex-wrap align-items-center justify-content-between overflow-x-auto">
          {pagination && searchVal == "" && (
            <p className="col-12 col-md-6">
              Showing {PageSize * currentPage - PageSize} to{" "}
              {PageSize * currentPage} of {data.length} entries
            </p>
          )}
          {!pagination && (
            <p className="col-12 col-md-6">
              Showing {data.length} of {data.length} entries
            </p>
          )}
          {searchVal !== "" && (
            <p className="col-12 col-md-6">
              Showing {rows.length} of {data.length} entries
            </p>
          )}
          {pagination && (
            <Pagination
              className=" X_RT454566KJKJSDFKJhjd6546546 pagination-bar"
              currentPage={currentPage}
              totalCount={rows.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </nav>
      </div>
      <ViewModal
        show={showModal}
        onHide={closeModal}
        data={selectedData}
        keysToHide={keysToExcludeFromView}
      />
    </div>
  );
};
export default Datatable;
