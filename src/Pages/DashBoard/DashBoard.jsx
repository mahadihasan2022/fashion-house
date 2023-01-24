import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import Navbar from '../../Header/NavBar/Navbar';

const DashBoard = () => {

    const data = [
        {
          month: "Jun 21",
          investment: 11.5,
          amount: 2.5,
        },
        {
          month: "Feb 21",
          investment: 11,
          amount: 5,
        },
        {
          month: "March 21",
          investment: 22.5,
          amount: 7.5,
        },
        {
          month: "april 21",
          investment: 17,
          amount: 10,
        },
        {
          month: "may 21",
          investment: 13,
          amount: 12.5,
        },
        {
          month: "Jun 21",
          investment: 18,
          amount: 15,
        },
        {
          month: "Jul 21",
          investment: 2.5,
          amount: 17.5,
        },
        {
          month: "Aug 21",
          investment: 7.5,
          amount: 20,
        },
        {
          month: "Sep 21",
          investment: 15,
          amount: 22.5,
        },
        {
          month: "Oct 21",
          investment: 23,
          amount: 25,

        },
        {
          month: "Nov 21",
          investment: 23.5,
          amount: 27.5,

        },
        {
          month: "Dec 21",
          investment: 16,
          amount: 30,

        },
        {
          month: "Jan 21",
          investment: 15,
          amount: 32.5,

        },
      ];
      const menCollections = [
        { name: 'Easy', value: 2261 },
        { name: 'Supreme', value: 1136 },
        { name: 'Arong', value: 1846 },
        { name: 'RichMan', value: 2846 },
        { name: 'Raymond', value: 1406 },
        { name: 'Armani', value: 1260 },
        { name: 'Darjibarii', value: 1060 },
      ];
      const womenCollections = [
        { name: 'Zara', value: 2020 },
        { name: 'Yellow', value: 3291 },
        { name: 'Umbrella', value: 1846 },
        { name: 'Supreme', value: 1036 },
        { name: 'Armani', value: 1060 },
        { name: 'Brady', value: 1830 },
        { name: 'Others', value: 446 },
      ];
      const COLORS = ['#0088FE', '#4338ca', '#FFBB28', '#FF8042', '#e11d48', '#6d28d9', '#db2777'];
     
      

    return (
 <div>
    <Navbar/>
        <div style={{backgroundColor:'#737373'}}>
            <h1 style={{textAlign:'center',fontWeight:'bold', margin:'0', fontStyle:'italic'}}>Our Website DashBoard</h1>
         <div>
<BarChart width={1200} height={550} data={data}>
    <XAxis dataKey="month" stroke="black" />
    <YAxis dataKey="amount" stroke="black" />
    <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#94a3b8', border: '2px solid black', borderRadius: 3, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="investment" fill="#064e3b" barSize={60} />
  </BarChart>

      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)', gap:'10px'}}>
        <div>
        <h1 style={{textAlign:'center',paddingBottom:'25px', fontWeight:'bold', fontStyle:'italic', fontSize:'30px'}}>Men Collections</h1>

        <PieChart width={600} height={400}>
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 25, right: 20, backgroundColor: '#14b8a6', border: '2px solid black', borderRadius: 3, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Pie
            data={menCollections}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>
        <div>
        <h1 style={{textAlign:'center',paddingBottom:'25px', fontWeight:'bold', fontStyle:'italic', fontSize:'30px'}}>Women collections</h1>

        <PieChart width={600} height={400}>
        <Tooltip wrapperStyle={{ width: 150, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 25, right: 20, backgroundColor: '#94a3b8', border: '2px solid black', borderRadius: 3, lineHeight: '30px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Pie
            data={womenCollections}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </div>

      </div>
     </div>
 </div>
    );
};

export default DashBoard;