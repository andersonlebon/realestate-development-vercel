import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import style from "./header.module.scss";

interface SearchButtonProps {
  searchFormOpener: boolean;
  setSearchFormOpener: (open: boolean) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ searchFormOpener, setSearchFormOpener }) => {
  const router = useRouter();

  return (
    <div className="header-search-wrap">
      <div className={`header-search-1 ${searchFormOpener ? "search-open" : ""}`}>
        <div className="search-icon">
          <span onClick={() => router.push("/search")}>
            <div className="for-search-show">
              <Button icon={<SearchOutlined className={style.search_icon} />} className={style.search_btn} type="primary" htmlType="submit">
                Advanced search
              </Button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchButton;
