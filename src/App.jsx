import { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProperties,
  selectFetchPropertiesRequest,
  selectPropertiesFiltered,
  selectTypeFilters,
  selectAvailableFilter,
  filterProperties,
  updateTypeFilters,
  updateAvailableFilter,
} from "./slices/propertiesSlice";

//Stiles
import style from "./App.module.css";
import logo from "./assets/zappyrent.png";

//Helpers
import { REQUEST_STATUS } from "./helpers/constants";

//Components
import { Spinner } from "./components/Spinner";
import { MultiSelect } from "./components/MultiSelect";
import { Checkbox } from "./components/Checkbox";
import { Divider } from "./components/Divider";
import { PropertiesList } from "./components/PropertiesList";

export default function App() {
  const dispatch = useDispatch();
  const fetchPropertiesRequest = useSelector(selectFetchPropertiesRequest);
  const propertiesFiltered = useSelector(selectPropertiesFiltered);
  const typeFilters = useSelector(selectTypeFilters);
  const availableFilter = useSelector(selectAvailableFilter);

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  useEffect(() => {
    dispatch(filterProperties());
  }, [typeFilters, availableFilter]);

  if (fetchPropertiesRequest.status !== REQUEST_STATUS.FULFILLED) {
    return (
      <div className={style.loading}>
        <img className={style.logo} src={logo} alt="logo" />
        <p>Loading</p>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={style.app}>
      <div className={style.navbar}>
        <div>
          <img className={style.logo} src={logo} alt="logo" />
        </div>
        <div className={style.filters}>
          <MultiSelect
            label="Tipologia"
            options={typeFilters}
            onChange={(newFilters) => dispatch(updateTypeFilters(newFilters))}
          />
          <Checkbox
            label="Disponibile subito"
            defaultChecked={availableFilter}
            labelPosition="left"
            onClick={(checked) =>
              dispatch(updateAvailableFilter(!availableFilter))
            }
          />
        </div>
        <Divider />
      </div>
      <PropertiesList properties={propertiesFiltered} />
    </div>
  );
}
