import React from "react";
import Form from "next/form";
import SearchFormReset from "./SeachFormReset";
import { Search } from "lucide-react";

const SeachBar = ({ query }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      ></input>

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search />
        </button>
      </div>
    </Form>
  );
};

export default SeachBar;
