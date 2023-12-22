import { SearchLayout } from "../layouts";
import { StyledSearchBar } from "../components/misc";

export default function SearchView() {
  return (
    <SearchLayout>
        <StyledSearchBar type="text" placeholder="search"/>
    </SearchLayout>
  )
}
