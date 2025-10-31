import { Route, Routes } from "react-router-dom";
import Home from "./Topics/Home.jsx";

//Props
import PropsDrillingparent from "./Topics/Props/PropsDrilling/PropsDrillingparent.jsx";
import PropsParent from "./Topics/Props/PropsParent";

// useState hooks
import ArrayUState from "./Topics/Hooks/UseState/ArrayUState.jsx";
import BooleanUstate from "./Topics/Hooks/UseState/BooleanUstate.jsx";
import FormUState from "./Topics/Hooks/UseState/FormUState";
import IntUState from "./Topics/Hooks/UseState/IntUState";
import ObjectUState from "./Topics/Hooks/UseState/ObjectUState";
import StringUState from "./Topics/Hooks/UseState/StringUState";

// useEffect hooks
import ConditionalUE from "./Topics/Hooks/UseEffect/ConditionalUE.jsx";
import FetchAPIUE from "./Topics/Hooks/UseEffect/FetchAPIUE";
import SetInterval from "./Topics/Hooks/UseEffect/SetInterval";
import StateChangeUE from "./Topics/Hooks/UseEffect/StateChangeUE";

// useRef hooks
import CheckBoxUR from "./Topics/Hooks/UseRef/CheckBoxUR";
import DomUR from "./Topics/Hooks/UseRef/DomUR";
import DropDownUR from "./Topics/Hooks/UseRef/DropDownUR";
import InputUR from "./Topics/Hooks/UseRef/InputUR";
import IntUR from "./Topics/Hooks/UseRef/IntUR";
import RadioUR from "./Topics/Hooks/UseRef/RadioUR";

// useReducer
import ObjectUR from "./Topics/Hooks/UseReducer/ObjectUR";
import UseReducer from "./Topics/Hooks/UseReducer/UseReducer";

// useMemo & useCallback
import ParentCallBack from "./Topics/Hooks/UseCallback/ParentChild/ParentCallBack.jsx";
import UseCallback from "./Topics/Hooks/UseCallback/UseCallback";
import UseMemo from "./Topics/Hooks/UseMemo/UseMemo";

// Custom Hooks
import UseFetchParent from "./Topics/Hooks/CustomHooks/FetchData/UseFetchParent.jsx";
import UseIntervalParent from "./Topics/Hooks/CustomHooks/UseInterval/UseIntervalParent.jsx";

// Other Hooks
import UseContext from "./Topics/Hooks/UseContext/UseContext.jsx";
import UseNavigation from "./Topics/Hooks/UseNavigation.jsx";

// React API
import ApiFetch from "./Topics/API/ApiFetch.jsx";
import CAPIGrandParent from "./Topics/API/ContextAPI/CAPIGrandParent.jsx";
import DropDownSearch from "./Topics/API/DropDrownSearch.jsx";
import InputSearch from "./Topics/API/InputSearch.jsx";

//Redux Toolkit
import SotingApiData from "./Topics/API/SotingApiData.jsx";
import Counter from "./Topics/Redux/Components/Counter/Counter.jsx";
import Todos from "./Topics/Redux/Components/TodoList/Todos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* React Props */}
        <Route path="/props-parent" element={<PropsParent />} />
        <Route path="/props-drilling" element={<PropsDrillingparent />} />

        {/* useState */}
        <Route path="/int-us" element={<IntUState />} />
        <Route path="/string-us" element={<StringUState />} />
        <Route path="/array-us" element={<ArrayUState />} />
        <Route path="/object-us" element={<ObjectUState />} />
        <Route path="/form-us" element={<FormUState />} />
        <Route path="/boolen-us" element={<BooleanUstate />} />

        {/* useEffect */}
        <Route path="/set-interval" element={<SetInterval />} />
        <Route path="/state-change-ue" element={<StateChangeUE />} />
        <Route path="/conditional-ue" element={<ConditionalUE />} />
        <Route path="/fetch-api-ue" element={<FetchAPIUE />} />

        {/* useRef */}
        <Route path="/int-ur" element={<IntUR />} />
        <Route path="/dom-ur" element={<DomUR />} />
        <Route path="/input-ur" element={<InputUR />} />
        <Route path="/dropdown-ur" element={<DropDownUR />} />
        <Route path="/radio-ur" element={<RadioUR />} />
        <Route path="/checkbox-ur" element={<CheckBoxUR />} />

        {/* useReducer */}
        <Route path="/object-ur" element={<ObjectUR />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/int-ur" element={<IntUR />} />

        {/* useMemo & useCallback */}
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/parent-callback" element={<ParentCallBack />} />

        {/* Custom Hooks */}
        <Route path="/use-fetch-parent" element={<UseFetchParent />} />
        <Route path="/use-interval-parent" element={<UseIntervalParent />} />

        {/* Other Hooks */}
        <Route path="/use-context" element={<UseContext />} />
        <Route path="/use-navigation" element={<UseNavigation />} />

        {/* React API */}
        <Route path="/capigrandparent" element={<CAPIGrandParent />} />
        <Route path="/api-fetch" element={<ApiFetch />} />
        <Route path="/input-search" element={<InputSearch />} />
        <Route path="/dropdown-search" element={<DropDownSearch />} />
        <Route path="/sorting-data" element={<SotingApiData />} />

        {/* Redux Toolkit */}
        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;