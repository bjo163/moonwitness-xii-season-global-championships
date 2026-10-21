import {defineConfig,devices} from '@playwright/test';
export default defineConfig({
 testDir:'./tests/browser',timeout:30000,
 reporter:process.env.CI?'github':'list',
 use:{baseURL:'http://127.0.0.1:4179',trace:'retain-on-failure'},
 projects:[
  {name:'desktop-chromium',use:{...devices['Desktop Chrome']}},
  {name:'mobile-chromium',use:{...devices['Pixel 7']}}
 ],
 webServer:{command:'npm run dev -- --host 127.0.0.1 --port 4179 --strictPort',url:'http://127.0.0.1:4179',reuseExistingServer:false,timeout:120000}
});
