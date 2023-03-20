import React from 'react';
import { Navbar, Button, Alignment, Menu, MenuItem, MenuDivider, InputGroup } from '@blueprintjs/core';
import { Grid, Stack } from '@mui/material'
import { AreaChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Area, ReferenceLine, Tooltip } from 'recharts';
import '@blueprintjs/core/lib/css/blueprint.css';




function LineChart()
{

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  return (

    <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={data}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>

  )
}

function App() {

  

  return (
    <div className="App">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>DeepTS</Navbar.Heading>
            <Navbar.Divider />
            <Button className="" icon="plus" text="New Workspace" />
            <Button className="" icon="floppy-disk" text="Save" />
        </Navbar.Group>
    </Navbar>
    <Grid container spacing={1}>
      <Grid item xs={2}>
      <Menu>
        <MenuItem text="Dataset Global Metrics" icon="grid-view" intent="primary">
            <MenuItem icon="tick" text="T_M1 Histogram" />
            <MenuItem icon="tick" text="T_AGG Histogram" />
        </MenuItem>
        <MenuDivider />
        <InputGroup 
        asyncControl={true}
        leftIcon="filter"
        placeholder="Filter samples"
        />
        <MenuItem icon="circle" text="GOMP_0001" />
        <MenuItem icon="circle" text="GOMP_0002" />
        <MenuItem icon="circle" text="GOMP_0003" />
        <MenuItem icon="circle" text="GOMP_0004" />
        <MenuItem icon="circle" text="GOMP_0005" />
        <MenuItem icon="circle" text="GOMP_0006" />
        <MenuItem icon="circle" text="GOMP_0007" />
      </Menu>
      </Grid>
      <Grid item xs={10}>
        <LineChart />
        <LineChart />
        <LineChart />
        <LineChart />
        <LineChart />
      </Grid>
    </Grid>
    
    </div>
  );
}

export default App;
