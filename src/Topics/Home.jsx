import { Link } from "react-router-dom";

const Home = () => {
  const sections = [
    {
      title: "🔹 React Props",
      items: [
        { label: "PropsParent", to: "/props-parent" },
        { label: "PropsDrillingparent", to: "/props-drilling" },
      ],
    },
    {
      title: "useState",
      items: [
        { label: "IntUState", to: "/int-us" },
        { label: "StringUState", to: "/string-us" },
        { label: "ArrayUState", to: "/array-us" },
        { label: "ObjectUState", to: "/object-us" },
        { label: "FormUState", to: "/form-us" },
      ],
    },
    {
      title: "useEffect",
      items: [
        { label: "SetInterval", to: "/set-interval" },
        { label: "StateChangeUE", to: "/state-change-ue" },
        { label: "ConditionalUE", to: "/conditional-ue" },
        { label: "FetchAPIUE", to: "/fetch-api-ue" },
      ],
    },
    {
      title: "useRef",
      items: [
        { label: "IntUR", to: "/int-ur" },
        { label: "DomUR", to: "/dom-ur" },
        { label: "InputUR", to: "/input-ur" },
        { label: "DropDownUR", to: "/dropdown-ur" },
        { label: "RadioUR", to: "/radio-ur" },
        { label: "CheckBoxUR", to: "/checkbox-ur" },
      ],
    },
    {
      title: "useReducer",
      items: [
        { label: "ObjectUR", to: "/object-ur" },
        { label: "UseReducer", to: "/use-reducer" },
      ],
    },
    {
      title: "useMemo & useCallback",
      items: [
        { label: "UseMemo", to: "/use-memo" },
        { label: "UseCallback", to: "/use-callback" },
        { label: "ParentCallBack", to: "/parent-callback" },
      ],
    },
    {
      title: "Custom Hooks",
      items: [
        { label: "UseFetchParent", to: "/use-fetch-parent" },
        { label: "UseIntervalParent", to: "/use-interval-parent" },
      ],
    },
    {
      title: "UseContext & UseNavigation",
      items: [
        { label: "UseContext", to: "/use-context" },
        { label: "UseNavigation", to: "/use-navigation" },
      ],
    },
    {
      title: "🔹 React API",
      items: [
        { label: "CAPIGrandParent", to: "/capigrandparent" },
        { label: "ApiFetch", to: "/api-fetch" },
        { label: "InputSearch", to: "/input-search" },
        { label: "DropDownSearch", to: "/dropdown-search" },
      ],
    },
    {
      title: "🔹 Redux Toolkit",
      items: [
        { label: "Todo List", to: "/todos" },
        { label: "Counter", to: "/counter" },
      ],
    },
  ];

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      {sections.map((section, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2 border-blue-200">
            {section.title}
          </h2>
          <div className="flex flex-wrap gap-4">
            {section.items.map((item, idx) => (
              <Link key={idx} to={item.to}>
                <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-700 hover:to-blue-600 transition duration-300 shadow-sm hover:shadow-lg">
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
