import React from 'react';
import { Navbar, Button, Alignment, Menu, MenuItem, MenuDivider, InputGroup, Tag, Card, Tabs, Tab} from '@blueprintjs/core';
import { Grid, Stack } from '@mui/material'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Area, ReferenceLine, Tooltip } from 'recharts';
import '@blueprintjs/core/lib/css/blueprint.css';




function DeepTSLineChart()
{

  const data = [
    {
      "Temperature": 20,
      "uv": 10,
      "pv": 24,
      "amt": 62
    },
    {
      "Temperature": 21,
      "uv": 40,
      "pv": 215,
      "amt": 240
    },
    {
      "Temperature": 22,
      "uv": 400,
      "pv": -3,
      "amt": -105
    },
    {
      "Temperature": 23,
      "uv": 400,
      "pv": 29,
      "amt": 29
    },
    {
      "Temperature": 24,
      "uv": 4,
      "pv": 0,
      "amt": 0
    },
  ]

  return (
    <Grid item>
      <Card className="bp4-elevation-3">

        <Grid container>
          <Grid xs={12}>
            <h1>GOMP001a_abps_0461</h1>
          </Grid>

          <Grid xs={12}>
            <Menu>
              <Tag className="bp4-interactive bp4-large bp4-round bp4-minimal bp4-intent-warning">T<sub>ONSET</sub> = 64.511 &deg;C</Tag>
              <Tag className="bp4-interactive bp4-large bp4-round bp4-minimal bp4-intent-warning">T<sub>M1</sub> = 64.511 &deg;C</Tag>
              <Tag className="bp4-interactive bp4-large bp4-round bp4-minimal bp4-intent-warning">T<sub>AGG</sub> = 64.511 &deg;C</Tag>
            </Menu>
         </Grid>
          
          <Grid xs={10}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data} margin={{ right: 25, top: 10 }} onClick={(e) => {console.log(e)}}>
                <Tooltip/>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Temperature" interval={1} />
                <YAxis interval={1} />
                
                <Line type="monotone" dataKey="pv" strokeWidth={3} stroke="#8884d8" activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="uv" strokeWidth={3} stroke="#82ca9d" activeDot={{ r: 6 }} strokeDasharray="20 10"/>

                <ReferenceLine x={21} stroke="blue" label="T_ONSET" />
                <ReferenceLine x={22} stroke="red" label="T_M1" />
                <ReferenceLine x={23} stroke="green" label="T_AGG" />
                

              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid xs={2}>
            <Menu>
              <MenuItem icon="waves" text="Signal Channels" disabled/>
              <MenuItem icon="circle" text="330nm" />
              <MenuItem icon="circle" text="350nm" />
              <MenuItem icon="circle" text="Ratio" />
              <MenuItem icon="circle" text="Scattering" />
              <MenuItem icon="circle" text="d[330nm]/dT" />
              <MenuItem icon="circle" text="d[350nm]/dT" />
              <MenuItem icon="circle" text="d[Ratio]/dT" />
              <MenuItem icon="circle" text="d[Scattering]/dT" />
            </Menu>
        </Grid>
        <Grid xs={12}>
          <Menu>
            <MenuItem icon="small-plus" text="Mark Changepoint: T_ONSET" />
            <MenuItem icon="small-plus" text="Mark Changepoint: T_M1" />
            <MenuItem icon="small-plus" text="Mark Changepoint: T_AGG" />
          </Menu>
        </Grid>

        </Grid>
      </Card>
    </Grid>
    

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
            <Navbar.Divider />
            <Button className="" icon="floppy-disk" text="Save Workspace" />
        </Navbar.Group>
    </Navbar>
    <Grid container spacing={1}>
      <Grid item xs={2}>
      <Menu>
        <MenuItem icon="align-justify" text="All Signals" disabled/>
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
      <Grid xs={10}>
      <Tabs id="TabsExample" large selectedTabId="rx">
        <Tab id="mb" title="Changepoint Workspace" panelClassName="ember-panel" />
        <Tab id="ng" title="Global Metrics" />
      </Tabs>
        <Stack spacing={2}>

          <DeepTSLineChart />
          <DeepTSLineChart />
          <DeepTSLineChart />
        </Stack>
      </Grid>
      
      
    </Grid>
    
    </div>
  );
}

export default App;
