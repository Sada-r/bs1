// // src/WeatherPlugin.tsx
// import React from 'react';
// import { Content, Header, Page, pageTheme } from '@backstage/core';
// import WeatherWidget from './components/WeatherWidget';

// const WeatherPluginPage = () => {
//   return (
//     <Page theme={pageTheme.tool}>
//       <Header title="Weather Forecast" />
//       <Content>
//         <WeatherWidget location="New York" />
//       </Content>
//     </Page>
//   );
// };

// export default WeatherPluginPage;

// src/WeatherPlugin.tsx

// src/WeatherPlugin.tsx
import React from 'react';
import { Content, Header, Page } from '@backstage/core'; 
import WeatherWidget from './components/WeatherWidget';

const WeatherPluginPage = () => {
  return (
    <Page themeId="home"> {/* Add themeId prop */}
      <Header title="Weather Forecast" />
      <Content>
        <WeatherWidget location="New York" />
      </Content>
    </Page>
  );
};

export default WeatherPluginPage;

