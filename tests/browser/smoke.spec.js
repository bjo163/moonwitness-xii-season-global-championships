import {test,expect} from '@playwright/test';
test('Homepage and key routes render without overflow',async({page})=>{
 for(const path of ['/','/characters','/paradise','/command-center','/research','/workspace','/stories','/champions']){
  await page.goto(path);await expect(page.locator('#main-content')).toBeVisible();
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+2);
  expect(overflow,path+' has horizontal overflow').toBeFalsy();
 }
});
test('Mobile navigation is accessible',async({page,isMobile})=>{
 await page.goto('/');
 if(!isMobile)return;
 const toggle=page.getByRole('button',{name:/open navigation menu/i});
 await toggle.click();
 await expect(page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'COMMAND CENTER'})).toBeVisible();
 await page.keyboard.press('Escape');
 await expect(page.getByRole('button',{name:/open navigation menu/i})).toHaveAttribute('aria-expanded','false');
});
test('Cap selection changes the ROCKSOUL SVG',async({page})=>{
 await page.goto('/characters');
 const art=page.getByRole('img',{name:/ROCKSOUL faceless original vector portrait/i}).first();
 await page.getByRole('button',{name:/BLACK \/ RESOLVE/i}).click();
 await expect(art.locator('path[fill="#151521"]')).toHaveCount(1);
 await page.getByRole('button',{name:/GREEN \/ MERCY/i}).click();
 await expect(art.locator('path[fill="#77d95b"]')).toHaveCount(1);
});
test('One hundred levels and progress record',async({page})=>{
 await page.goto('/paradise');
 await page.getByRole('textbox',{name:'Search world levels'}).fill('Closing Reflection');
 await expect(page.getByText('Closing Reflection').first()).toBeVisible();
 await page.getByRole('button',{name:/LEVEL 100/}).click();
 await page.getByRole('button',{name:'MARK AS PRACTICED'}).click();
 await page.reload();
 await expect(page.getByText('1/100').first()).toBeVisible();
});
test('Event board and evidence desk disclose their limits',async({page})=>{
 await page.goto('/command-center');
 await page.getByRole('button',{name:'EVENT ENGINE'}).click();
 await expect(page.getByText('48 EVENT BLUEPRINTS.')).toBeVisible();
 await expect(page.getByText(/NOT SCHEDULED/).first()).toBeVisible();
 await page.goto('/research');
 await expect(page.getByText('SHOW THE RECEIPTS.')).toBeVisible();
 await expect(page.getByText('0').first()).toBeVisible();
});

test('Workspace rejects an invalid backup without touching progress',async({page})=>{
 await page.goto('/workspace');
 await page.locator('#workspace-file').setInputFiles({name:'broken.json',mimeType:'application/json',buffer:Buffer.from('{"format":"wrong"}')});
 await expect(page.getByRole('status')).toContainText('Unsupported workspace format');
 await expect(page.getByRole('button',{name:'RESTORE MY WORKSPACE'})).toHaveCount(0);
});
test('Workspace can preview and restore validated local data',async({page})=>{
 await page.goto('/workspace');
 const backup={format:'moonwitness-workspace-v1',version:1,exportedAt:'2026-10-16T00:00:00.000Z',data:{completed:[1,100,100,999],bookmarks:['EVT-001','EVT-999'],reviews:[{key:'champion:1',state:'investigating',note:'Check citation before publication',sourceUrl:'https://example.org'}]}};
 await page.locator('#workspace-file').setInputFiles({name:'valid.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(backup))});
 await expect(page.getByText(/2 completed levels/)).toBeVisible();
 await page.getByRole('checkbox',{name:/understand this will replace/i}).check();
 await page.getByRole('button',{name:'RESTORE MY WORKSPACE'}).click();
 await expect(page.getByRole('status')).toContainText('Workspace restored');
 await page.getByRole('button',{name:'SOURCE REVIEW DRAFTS'}).click();
 await expect(page.getByText('1', {exact:true}).first()).toBeVisible();
 await page.goto('/paradise');
 await expect(page.getByText('2/100').first()).toBeVisible();
});
