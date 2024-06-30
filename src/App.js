import { useState } from 'react';
import './App.css';

function App() {
  const all_Tabs = [
    {
      id: 1,
      title: "tab-1",
      description: "Tab-1 description",
    },
    {
      id: 2,
      title: "tab-2",
      description: "Tab-2 description",
    },
    {
      id: 3,
      title: "tab-3",
      description: "Tab-3 description",
    },
  ];
  const [tab, setTab] = useState(all_Tabs[0])

  return (
   <>
     <div className="container">
      <div className="box">
      {all_Tabs.map( (item , index)=>{
        return <div onClick={()=>setTab(item)} className={tab.id === item.id ? "title active":"title" } key={item.id} >{item.title}</div>
      } )}
      </div>

      <div className="description"> {tab?.description} </div>

     </div>
   </>
  );
}

export default App;
