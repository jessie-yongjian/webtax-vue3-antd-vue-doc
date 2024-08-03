import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DL2Kc5F_.js";const u=JSON.parse('{"title":"介绍","description":"","frontmatter":{"title":"介绍","author":"ya2glu","time":"Feb 27, 2024"},"headers":[],"relativePath":"packages/vbenComponent/introduction.md","filePath":"packages/vbenComponent/introduction.md","lastUpdated":1709085296000}'),e={name:"packages/vbenComponent/introduction.md"},t=n(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>Vben3使用 <code>透传Attributes</code> 方式对第三方组件进行集成封装，开发者可以按需引入注册。</p><p>自定义业务组件存放在 <code>packages/components/</code> 目录下。</p><h2 id="组件注册" tabindex="-1">组件注册 <a class="header-anchor" href="#组件注册" aria-label="Permalink to &quot;组件注册&quot;">​</a></h2><ul><li><p>公共组件</p><p>公共组件在项目 <code>apps</code> 的模块下创建 <code>init-components.ts</code> 文件，按需导入并注册所需的组件。</p></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-MAbh9" id="tab-XWCeXX8" checked><label for="tab-XWCeXX8">init-components.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 按需引入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {NButton} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;naive-ui&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {initVbenComponent, setNotice, setMessage, setDialog} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@vben/vbencomponents&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件注册</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> registerComponents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initVbenComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(app, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    AButton: NButton</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(useMessage);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setNotice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(useNotification);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setDialog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(useDialog);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></div></div><ul><li><p>自定义组件</p><p>自定义组件使用ES6模块的import\\export语法直接导入导出使用即可。</p></li></ul>`,7),p=[t];function l(h,r,o,k,c,d){return i(),a("div",null,p)}const E=s(e,[["render",l]]);export{u as __pageData,E as default};
