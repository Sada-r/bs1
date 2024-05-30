// import {
//   createPlugin,
//   createRoutableExtension,
// } from '@backstage/core-plugin-api';

// import { rootRouteRef } from './routes';

// export const weatherPluginPlugin = createPlugin({
//   id: 'weather-plugin',
//   routes: {
//     root: rootRouteRef,
//   },
// });

// export const WeatherPluginPage = weatherPluginPlugin.provide(
//   createRoutableExtension({
//     name: 'WeatherPluginPage',
//     component: () =>
//       import('./components/ExampleComponent').then(m => m.ExampleComponent),
//     mountPoint: rootRouteRef,
//   }),
// );

// src/plugin.ts
// import { createPlugin } from '@backstage/core';
// import WeatherPluginPage from './WeatherPlugin';

// export const plugin = createPlugin({
//   id: 'weather-plugin',
//   register: ({ router }) => {
//     router.registerRoute('/weather', WeatherPluginPage);
//   },
// });

// src/plugin.ts
// import { createPlugin } from '@backstage/core';
// import WeatherPluginPage from './WeatherPlugin';

// export const plugin = createPlugin({
//   id: 'weather-plugin',
//   register({ router }) {
//     const weatherRoute = router.path('/weather');
//     weatherRoute.registerPage(WeatherPluginPage);
//   },
// });


// import { createPlugin } from '@backstage/core';
// import WeatherPluginPage from './WeatherPlugin';

// export const plugin = createPlugin({
//   id: 'weather-plugin',
//   register({ router }) {
//     router.navigate('/weather', WeatherPluginPage);
//   },
// });

// // src/plugin.ts
// // src/plugin.ts
// import { createPlugin } from '@backstage/core';
// import { EntityPage } from '@backstage/plugin-catalog-react';
// import WeatherPluginPage from './WeatherPlugin';

// export const plugin = createPlugin({
//   id: 'weather-plugin',
//   register({ router }) {
//     const WeatherPage = () => (
//       <EntityPage entity={{ kind: 'weather' }} title="Weather">
//         <WeatherPluginPage />
//       </EntityPage>
//     );

//     router.registerRoute('/weather', WeatherPage);
//   },
// });

// src/plugin.ts
// import { createPlugin } from '@backstage/core';
// import { EntityPage } from '@backstage/plugin-catalog-react';
// import WeatherPluginPage from './WeatherPlugin';

// export const plugin = createPlugin({
//   id: 'weather-plugin',
//   register({ router }) {
//     const WeatherPage = () => (
//       <EntityPage entity={{ kind: 'weather' }} title="Weather">
//         <WeatherPluginPage />
//       </EntityPage>
//     );

//     router.registerRoute('/weather', WeatherPage);
//   },
// });

import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const ex1PluginPlugin = createPlugin({
  id: 'weather-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const Ex1PluginPage = ex1PluginPlugin.provide(
  createRoutableExtension({
    name: 'Ex1PluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);





