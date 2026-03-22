(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,946447,e=>{"use strict";var t,i,s=e.i(843476),a=e.i(271645),n=e.i(618566),r=e.i(86610),o=e.i(640170),l=e.i(627430),d=e.i(323216),c=e.i(610313),u=e.i(780370),h=e.i(926696),m=e.i(609867),f=e.i(742214),p=e.i(24878),g=e.i(367907),x=e.i(869889),y=e.i(727612),b=e.i(174886),w=e.i(643531),j=e.i(431343),v=e.i(752044);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=Array(t);i<t;i++)s[i]=e[i];return s}function S(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,s)}return i}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?S(Object(i),!0).forEach(function(t){var s;s=i[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function N(e){return function t(){for(var i=this,s=arguments.length,a=Array(s),n=0;n<s;n++)a[n]=arguments[n];return a.length>=e.length?e.apply(this,a):function(){for(var e=arguments.length,s=Array(e),n=0;n<e;n++)s[n]=arguments[n];return t.apply(i,[].concat(a,s))}}}function k(e){return({}).toString.call(e).includes("Object")}function A(e){return"function"==typeof e}var C=N(function(e,t){throw Error(e[t]||e.default)})({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),T=function(e,t){return k(t)||C("changeType"),Object.keys(t).some(function(t){return!Object.prototype.hasOwnProperty.call(e,t)})&&C("changeField"),t},B=function(e){A(e)||C("selectorType")},P=function(e){A(e)||k(e)||C("handlerType"),k(e)&&Object.values(e).some(function(e){return!A(e)})&&C("handlersType")},E=function(e){e||C("initialIsRequired"),k(e)||C("initialType"),Object.keys(e).length||C("initialContent")};function L(e,t){return A(t)?t(e.current):t}function R(e,t){return e.current=M(M({},e.current),t),t}function O(e,t,i){return A(t)?t(e.current):Object.keys(i).forEach(function(i){var s;return null==(s=t[i])?void 0:s.call(t,e.current[i])}),i}var _={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},W=(t=function(e,t){throw Error(e[t]||e.default)},function e(){for(var i=this,s=arguments.length,a=Array(s),n=0;n<s;n++)a[n]=arguments[n];return a.length>=t.length?t.apply(this,a):function(){for(var t=arguments.length,s=Array(t),n=0;n<t;n++)s[n]=arguments[n];return e.apply(i,[].concat(a,s))}})(_),F=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},D={type:"cancelation",msg:"operation is manually canceled"};function z(e){var t=!1,i=new Promise(function(i,s){e.then(function(e){return t?s(D):i(e)}),e.catch(s)});return i.cancel=function(){return t=!0},i}var q=function(e){if(Array.isArray(e))return e}(i=({create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};E(e),P(t);var i={current:e},s=N(O)(i,t),a=N(R)(i),n=N(T)(e),r=N(L)(i);return[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return B(e),e(i.current)},function(e){(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}})(s,a,n,r)(e)}]}}).create({config:{paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}},isInitialized:!1,resolve:null,reject:null,monaco:null}))||function(e,t){var i=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s,a,n,r,o=[],l=!0,d=!1;try{n=(i=i.call(e)).next,!1;for(;!(l=(s=n.call(i)).done)&&(o.push(s.value),2!==o.length);l=!0);}catch(e){d=!0,a=e}finally{try{if(!l&&null!=i.return&&(r=i.return(),Object(r)!==r))return}finally{if(d)throw a}}return o}}(i,2)||function(e,t){if(e){if("string"==typeof e)return I(e,2);var i=({}).toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?I(e,2):void 0}}(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),H=q[0],U=q[1];function V(e){return document.body.appendChild(e)}function G(e){var t,i,s=H(function(e){return{config:e.config,reject:e.reject}}),a=(t="".concat(s.config.paths.vs,"/loader.js"),i=document.createElement("script"),t&&(i.src=t),i);return a.onload=function(){return e()},a.onerror=s.reject,a}function K(){var e=H(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(t){var i=t.m||t;J(i),e.resolve(i)},function(t){e.reject(t)})}function J(e){H().monaco||U({monaco:e})}var $=new Promise(function(e,t){return U({resolve:e,reject:t})}),Y=function(){var e=H(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(U({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),z($);if(window.monaco&&window.monaco.editor)return J(window.monaco),e.resolve(window.monaco),z($);F(V,G)(K)}return z($)},X={display:"flex",position:"relative",textAlign:"initial"},Z={width:"100%"},Q={display:"none"},ee={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},et=function({children:e}){return a.default.createElement("div",{style:ee},e)},ei=(0,a.memo)(function({width:e,height:t,isEditorReady:i,loading:s,_ref:n,className:r,wrapperProps:o}){return a.default.createElement("section",{style:{...X,width:e,height:t},...o},!i&&a.default.createElement(et,null,s),a.default.createElement("div",{ref:n,style:{...Z,...!i&&Q},className:r}))}),es=function(e){(0,a.useEffect)(e,[])},ea=function(e,t,i=!0){let s=(0,a.useRef)(!0);(0,a.useEffect)(s.current||!i?()=>{s.current=!1}:e,t)};function en(){}function er(e,t,i,s){var a,n,r,o,l,d;return a=e,n=s,a.editor.getModel(eo(a,n))||(r=e,o=t,l=i,d=s,r.editor.createModel(o,l,d?eo(r,d):void 0))}function eo(e,t){return e.Uri.parse(t)}(0,a.memo)(function({original:e,modified:t,language:i,originalLanguage:s,modifiedLanguage:n,originalModelPath:r,modifiedModelPath:o,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:d=!1,theme:c="light",loading:u="Loading...",options:h={},height:m="100%",width:f="100%",className:p,wrapperProps:g={},beforeMount:x=en,onMount:y=en}){let[b,w]=(0,a.useState)(!1),[j,v]=(0,a.useState)(!0),I=(0,a.useRef)(null),S=(0,a.useRef)(null),M=(0,a.useRef)(null),N=(0,a.useRef)(y),k=(0,a.useRef)(x),A=(0,a.useRef)(!1);es(()=>{let e=Y();return e.then(e=>(S.current=e)&&v(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>{let t;return I.current?(t=I.current?.getModel(),void(l||t?.original?.dispose(),d||t?.modified?.dispose(),I.current?.dispose())):e.cancel()}}),ea(()=>{if(I.current&&S.current){let t=I.current.getOriginalEditor(),a=er(S.current,e||"",s||i||"text",r||"");a!==t.getModel()&&t.setModel(a)}},[r],b),ea(()=>{if(I.current&&S.current){let e=I.current.getModifiedEditor(),s=er(S.current,t||"",n||i||"text",o||"");s!==e.getModel()&&e.setModel(s)}},[o],b),ea(()=>{let e=I.current.getModifiedEditor();e.getOption(S.current.editor.EditorOption.readOnly)?e.setValue(t||""):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),e.pushUndoStop())},[t],b),ea(()=>{I.current?.getModel()?.original.setValue(e||"")},[e],b),ea(()=>{let{original:e,modified:t}=I.current.getModel();S.current.editor.setModelLanguage(e,s||i||"text"),S.current.editor.setModelLanguage(t,n||i||"text")},[i,s,n],b),ea(()=>{S.current?.editor.setTheme(c)},[c],b),ea(()=>{I.current?.updateOptions(h)},[h],b);let C=(0,a.useCallback)(()=>{if(!S.current)return;k.current(S.current);let a=er(S.current,e||"",s||i||"text",r||""),l=er(S.current,t||"",n||i||"text",o||"");I.current?.setModel({original:a,modified:l})},[i,t,n,e,s,r,o]),T=(0,a.useCallback)(()=>{!A.current&&M.current&&(I.current=S.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...h}),C(),S.current?.editor.setTheme(c),w(!0),A.current=!0)},[h,c,C]);return(0,a.useEffect)(()=>{b&&N.current(I.current,S.current)},[b]),(0,a.useEffect)(()=>{j||b||T()},[j,b,T]),a.default.createElement(ei,{width:f,height:m,isEditorReady:b,loading:u,_ref:M,className:p,wrapperProps:g})});var el=function(e){let t=(0,a.useRef)();return(0,a.useEffect)(()=>{t.current=e},[e]),t.current},ed=new Map,ec=(0,a.memo)(function({defaultValue:e,defaultLanguage:t,defaultPath:i,value:s,language:n,path:r,theme:o="light",line:l,loading:d="Loading...",options:c={},overrideServices:u={},saveViewState:h=!0,keepCurrentModel:m=!1,width:f="100%",height:p="100%",className:g,wrapperProps:x={},beforeMount:y=en,onMount:b=en,onChange:w,onValidate:j=en}){let[v,I]=(0,a.useState)(!1),[S,M]=(0,a.useState)(!0),N=(0,a.useRef)(null),k=(0,a.useRef)(null),A=(0,a.useRef)(null),C=(0,a.useRef)(b),T=(0,a.useRef)(y),B=(0,a.useRef)(),P=(0,a.useRef)(s),E=el(r),L=(0,a.useRef)(!1),R=(0,a.useRef)(!1);es(()=>{let e=Y();return e.then(e=>(N.current=e)&&M(!1)).catch(e=>e?.type!=="cancelation"&&console.error("Monaco initialization: error:",e)),()=>k.current?void(B.current?.dispose(),m?h&&ed.set(r,k.current.saveViewState()):k.current.getModel()?.dispose(),k.current.dispose()):e.cancel()}),ea(()=>{let a=er(N.current,e||s||"",t||n||"",r||i||"");a!==k.current?.getModel()&&(h&&ed.set(E,k.current?.saveViewState()),k.current?.setModel(a),h&&k.current?.restoreViewState(ed.get(r)))},[r],v),ea(()=>{k.current?.updateOptions(c)},[c],v),ea(()=>{k.current&&void 0!==s&&(k.current.getOption(N.current.editor.EditorOption.readOnly)?k.current.setValue(s):s!==k.current.getValue()&&(R.current=!0,k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:s,forceMoveMarkers:!0}]),k.current.pushUndoStop(),R.current=!1))},[s],v),ea(()=>{let e=k.current?.getModel();e&&n&&N.current?.editor.setModelLanguage(e,n)},[n],v),ea(()=>{void 0!==l&&k.current?.revealLine(l)},[l],v),ea(()=>{N.current?.editor.setTheme(o)},[o],v);let O=(0,a.useCallback)(()=>{if(!(!A.current||!N.current)&&!L.current){T.current(N.current);let a=r||i,d=er(N.current,s||e||"",t||n||"",a||"");k.current=N.current?.editor.create(A.current,{model:d,automaticLayout:!0,...c},u),h&&k.current.restoreViewState(ed.get(a)),N.current.editor.setTheme(o),void 0!==l&&k.current.revealLine(l),I(!0),L.current=!0}},[e,t,i,s,n,r,c,u,h,o,l]);return(0,a.useEffect)(()=>{v&&C.current(k.current,N.current)},[v]),(0,a.useEffect)(()=>{S||v||O()},[S,v,O]),P.current=s,(0,a.useEffect)(()=>{v&&w&&(B.current?.dispose(),B.current=k.current?.onDidChangeModelContent(e=>{R.current||w(k.current.getValue(),e)}))},[v,w]),(0,a.useEffect)(()=>{if(v){let e=N.current.editor.onDidChangeMarkers(e=>{let t=k.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=N.current.editor.getModelMarkers({resource:t});j?.(e)}});return()=>{e?.dispose()}}return()=>{}},[v,j]),a.default.createElement(ei,{width:f,height:p,isEditorReady:v,loading:d,_ref:A,className:g,wrapperProps:x})});let eu=[{id:"baseline-random",name:"BT",code:`// Random Pairing + Bradley-Terry MLE with confidence intervals
// A proper baseline that uses random uniform sampling but fits an actual BT model.

function init() {
  return {};
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase } = systemState;
  const batchSize = Math.min(500, remainingInPhase);

  const pairs = [];
  for (let i = 0; i < batchSize; i++) {
    const a = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
    let b = a;
    while (b === a) {
      b = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
    }
    pairs.push({ modelA: a, modelB: b });
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;
  
  // Edge case: no history yet - return wide priors
  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) {
      out[id] = { strength: 0, lower: -3, upper: 3 };
    }
    return out;
  }

  // Build model ID -> index mapping
  const idToIdx = {};
  for (let i = 0; i < n; i++) {
    idToIdx[availableModelIds[i]] = i;
  }

  // Aggregate wins: wins[i][j] = # times model i beat model j
  const wins = [];
  for (let i = 0; i < n; i++) {
    wins.push(new Array(n).fill(0));
  }
  
  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) {
      wins[iA][iB]++;
    } else {
      wins[iB][iA]++;
    }
  }

  // Total matches per pair
  const nij = [];
  for (let i = 0; i < n; i++) {
    nij.push(new Array(n).fill(0));
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      nij[i][j] = wins[i][j] + wins[j][i];
    }
  }

  // --- Bradley-Terry MLE via MM algorithm ---
  // This is numerically stable and converges quickly.
  // We parameterize as p_i (positive strengths), then convert to log-odds at the end.
  
  const maxIter = 200;
  const tol = 1e-8;
  
  // Initialize p uniformly
  let p = new Array(n).fill(1.0);
  
  // Precompute total wins for each model
  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      totalWins[i] += wins[i][j];
    }
  }
  
  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;
    
    for (let i = 0; i < n; i++) {
      // MM update: p_i = W_i / sum_j(n_ij / (p_i + p_j))
      // But we use old p values in denominator for simplicity
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }
      
      if (denom < 1e-10 || totalWins[i] === 0) {
        // No information about this model yet
        pNew[i] = p[i];
      } else {
        pNew[i] = totalWins[i] / denom;
      }
      
      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }
    
    // Normalize so geometric mean = 1 (for numerical stability)
    let logSum = 0;
    for (let i = 0; i < n; i++) {
      logSum += Math.log(Math.max(pNew[i], 1e-10));
    }
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) {
      pNew[i] /= geoMean;
    }
    
    p = pNew;
    
    if (maxChange < tol) break;
  }

  // Convert to log-odds scale: theta_i = log(p_i)
  // We'll center so mean = 0
  const theta = new Array(n);
  for (let i = 0; i < n; i++) {
    theta[i] = Math.log(Math.max(p[i], 1e-10));
  }
  
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  // --- Compute Fisher Information and standard errors ---
  // The Fisher info for BT is: I_ii = sum_j n_ij * p_i * p_j / (p_i + p_j)^2
  //                            I_ij = -n_ij * p_i * p_j / (p_i + p_j)^2  (for i != j)
  // 
  // For marginal variance of a single theta_i, we need (I^{-1})_ii.
  // Computing exact inverse is expensive. We'll use a diagonal approximation:
  // Var(theta_i) ≈ 1 / I_ii
  
  const fisherDiag = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const denom = (pi + pj) * (pi + pj);
      fisherDiag[i] += nij[i][j] * pi * pj / denom;
    }
  }

  // Standard errors (with some regularization for models with little data)
  const se = new Array(n);
  for (let i = 0; i < n; i++) {
    if (fisherDiag[i] < 1e-6) {
      // Very uncertain - use a wide interval
      se[i] = 2.0;
    } else {
      se[i] = 1.0 / Math.sqrt(fisherDiag[i]);
    }
  }

  // 95% CI: z = 1.96
  const z = 1.96;

  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const halfWidth = z * se[i];
    out[id] = {
      strength: theta[i],
      lower: theta[i] - halfWidth,
      upper: theta[i] + halfWidth
    };
  }
  
  return out;
}
`},{id:"baseline-random-glicko",name:"Glicko",code:`// Random Pairing + Glicko-style rating with confidence intervals
// Works directly in log-odds scale (no 1500-centered conversion needed).
// This is a simplified Glicko-1 style (no volatility σ) for validation.

function init() {
  return {};
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase } = systemState;
  const batchSize = Math.min(500, remainingInPhase);

  const pairs = [];
  for (let i = 0; i < batchSize; i++) {
    const a = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
    let b = a;
    while (b === a) {
      b = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
    }
    pairs.push({ modelA: a, modelB: b });
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  const { availableModelIds, history, modelIntroPhase } = systemState;
  
  // Initialize ratings for all available models
  // μ = 0 (prior mean in log-odds), RD = 2.0 (prior uncertainty)
  const ratings = {};
  for (const id of availableModelIds) {
    ratings[id] = { mu: 0, rd: 2.0, introPhase: modelIntroPhase[id] };
  }
  
  // Edge case: no history yet - return wide priors
  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) {
      const r = ratings[id];
      out[id] = { 
        strength: r.mu, 
        lower: r.mu - 1.96 * r.rd, 
        upper: r.mu + 1.96 * r.rd 
      };
    }
    return out;
  }

  // Glicko g-function: scales based on opponent's uncertainty
  // g(φ) = 1 / sqrt(1 + 3*φ\xb2/π\xb2)
  const g = (rd) => 1 / Math.sqrt(1 + 3 * rd * rd / (Math.PI * Math.PI));
  
  // Expected score (win probability)
  // E = 1 / (1 + exp(-g(φ_opp) * (μ - μ_opp)))
  const expectedScore = (mu, muOpp, rdOpp) => {
    const gOpp = g(rdOpp);
    return 1 / (1 + Math.exp(-gOpp * (mu - muOpp)));
  };
  
  // Track which models have been updated (for dynamic prior)
  const hasBeenUpdated = {};
  for (const id of availableModelIds) {
    hasBeenUpdated[id] = false;
  }
  
  // Helper to get current population mean of established models
  const getEstablishedMean = () => {
    let sum = 0, count = 0;
    for (const id of availableModelIds) {
      if (hasBeenUpdated[id]) {
        sum += ratings[id].mu;
        count++;
      }
    }
    return count > 0 ? sum / count : 0;
  };

  // Process each match sequentially
  // Unlike BT (batch MLE), Glicko updates incrementally
  for (const match of history) {
    const { modelA, modelB, winner } = match;
    
    // Skip if models not in current available set
    if (!ratings[modelA] || !ratings[modelB]) continue;
    
    // Dynamic prior: new models (intro phase > 1) start at population mean
    // when they first appear in a match
    for (const id of [modelA, modelB]) {
      if (!hasBeenUpdated[id] && ratings[id].introPhase > 1) {
        ratings[id].mu = getEstablishedMean();
      }
    }
    
    const rA = ratings[modelA];
    const rB = ratings[modelB];
    
    // Compute g values for each player's RD
    const gA = g(rA.rd);
    const gB = g(rB.rd);
    
    // Expected scores from each player's perspective
    const eA = expectedScore(rA.mu, rB.mu, rB.rd);
    const eB = expectedScore(rB.mu, rA.mu, rA.rd);
    
    // Actual outcomes (1 for win, 0 for loss)
    const sA = winner === modelA ? 1 : 0;
    const sB = 1 - sA;
    
    // Variance contribution for each player
    // v = 1 / (g\xb2 * E * (1-E))
    const vA = 1 / (gB * gB * eA * (1 - eA) + 1e-10);
    const vB = 1 / (gA * gA * eB * (1 - eB) + 1e-10);
    
    // Update RD: RD_new = 1 / sqrt(1/RD\xb2 + 1/v)
    const rdNewA = 1 / Math.sqrt(1 / (rA.rd * rA.rd) + 1 / vA);
    const rdNewB = 1 / Math.sqrt(1 / (rB.rd * rB.rd) + 1 / vB);
    
    // Update μ: μ_new = μ + RD_new\xb2 * g * (outcome - E)
    const muNewA = rA.mu + rdNewA * rdNewA * gB * (sA - eA);
    const muNewB = rB.mu + rdNewB * rdNewB * gA * (sB - eB);
    
    // Apply updates and mark as updated
    ratings[modelA] = { mu: muNewA, rd: rdNewA, introPhase: rA.introPhase };
    ratings[modelB] = { mu: muNewB, rd: rdNewB, introPhase: rB.introPhase };
    hasBeenUpdated[modelA] = true;
    hasBeenUpdated[modelB] = true;
  }

  // Center ratings so mean = 0 (for consistency with BT baseline)
  let meanMu = 0;
  for (const id of availableModelIds) {
    meanMu += ratings[id].mu;
  }
  meanMu /= availableModelIds.length;
  
  for (const id of availableModelIds) {
    ratings[id].mu -= meanMu;
  }

  // Build output with 95% confidence intervals
  const z = 1.96;
  const out = {};
  for (const id of availableModelIds) {
    const r = ratings[id];
    out[id] = {
      strength: r.mu,
      lower: r.mu - z * r.rd,
      upper: r.mu + z * r.rd
    };
  }
  
  return out;
}
`},{id:"baseline-uwan",name:"UWAN",code:`// ===============================
// UWAN (Uncertainty-Weighted Anchor + Neighbor Pairing)
// Pair selection: focus on high-uncertainty / newly introduced models,
// then compare vs anchors + neighbors (close-in-strength) for max info.
// Estimation: Bradley-Terry MLE + diag Fisher CIs.
// ===============================

function init() {
  return {
    processed: 0,
    elo: {},      // log-odds-ish running rating used ONLY for pairing
    matches: {},  // match counts used to approximate uncertainty for pairing
  };
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, history, currentPhase, modelIntroPhase } = systemState;

  // --- params you can tweak ---
  const BATCH = Math.min(350, remainingInPhase); // 250-500 is usually fine
  const NEW_FOCUS_PROB = 0.70;                   // how hard we focus on newly introduced models
  const NEW_MIN_MATCHES = 450;                   // try to get each new model at least this many quickly
  const RECENT_PHASE_WINDOW = 2;                 // treat models introduced in last N phases as "recent"
  const ANCHOR_MIN_MATCHES = 250;                // anchors should be well-established
  const NEIGHBOR_WINDOW = 8;                     // +/- around rank

  // ensure state exists
  userState = userState || init();

  // update pairing state incrementally from new matches
  syncEloState(systemState, userState);

  // Precompute lists
  const newIds = availableModelIds.filter((id) => modelIntroPhase[id] === currentPhase);
  const anchors = pickAnchors(availableModelIds, userState, ANCHOR_MIN_MATCHES);

  // Rank models by current elo for neighbor lookup
  const ranked = availableModelIds
    .slice()
    .sort((a, b) => (userState.elo[a] || 0) - (userState.elo[b] || 0));
  const rankIndex = {};
  for (let i = 0; i < ranked.length; i++) rankIndex[ranked[i]] = i;

  const pairs = [];
  for (let k = 0; k < BATCH; k++) {
    // 1) pick focus model
    let focusId;

    // If there are new models still under-sampled, bias strongly toward them
    const underSampledNew = newIds.filter((id) => (userState.matches[id] || 0) < NEW_MIN_MATCHES);

    if (underSampledNew.length > 0 && Math.random() < NEW_FOCUS_PROB) {
      focusId = weightedPick(underSampledNew, (id) => uncertaintyWeight(id, systemState, userState, RECENT_PHASE_WINDOW));
    } else {
      focusId = weightedPick(availableModelIds, (id) => uncertaintyWeight(id, systemState, userState, RECENT_PHASE_WINDOW));
    }

    // 2) pick opponent: anchor vs neighbor vs random
    const m = userState.matches[focusId] || 0;

    let oppId;
    const r = Math.random();

    if (m < 60) {
      // extremely new: mostly anchors to place it on the global scale
      if (anchors.length >= 2 && r < 0.65) {
        oppId = anchors[Math.floor(Math.random() * anchors.length)];
      } else if (r < 0.90) {
        oppId = pickNeighbor(focusId, ranked, rankIndex, NEIGHBOR_WINDOW);
      } else {
        oppId = pickRandomOther(focusId, availableModelIds);
      }
    } else {
      // more established: mostly neighbors for maximum Fisher info
      if (r < 0.70) {
        oppId = pickNeighbor(focusId, ranked, rankIndex, NEIGHBOR_WINDOW);
      } else if (anchors.length >= 2 && r < 0.90) {
        oppId = anchors[Math.floor(Math.random() * anchors.length)];
      } else {
        oppId = pickRandomOther(focusId, availableModelIds);
      }
    }

    if (!oppId || oppId === focusId) oppId = pickRandomOther(focusId, availableModelIds);

    pairs.push({ modelA: focusId, modelB: oppId });
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  // === BT MLE + diag Fisher CI baseline ===
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  // Edge case: no history yet - return wide priors
  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  // Build model ID -> index mapping
  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  // Aggregate wins: wins[i][j] = # times model i beat model j
  const wins = [];
  for (let i = 0; i < n; i++) wins.push(new Array(n).fill(0));

  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) wins[iA][iB]++; else wins[iB][iA]++;
  }

  // Total matches per pair
  const nij = [];
  for (let i = 0; i < n; i++) nij.push(new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) nij[i][j] = wins[i][j] + wins[j][i];
  }

  // --- Bradley-Terry MLE via MM algorithm ---
  const maxIter = 200;
  const tol = 1e-8;

  // Initialize p uniformly
  let p = new Array(n).fill(1.0);

  // Precompute total wins for each model
  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) totalWins[i] += wins[i][j];

  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;

    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }

      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;

      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }

    // Normalize so geometric mean = 1
    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-10));
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geoMean;

    p = pNew;
    if (maxChange < tol) break;
  }

  // Convert to log-odds theta = log(p), center mean=0
  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-10));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  // Fisher diagonal approximation
  const fisherDiag = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const denom = (pi + pj) * (pi + pj);
      fisherDiag[i] += nij[i][j] * pi * pj / denom;
    }
  }

  const se = new Array(n);
  for (let i = 0; i < n; i++) se[i] = fisherDiag[i] < 1e-6 ? 2.0 : 1.0 / Math.sqrt(fisherDiag[i]);

  const z = 1.96;
  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const halfWidth = z * se[i];
    out[id] = { strength: theta[i], lower: theta[i] - halfWidth, upper: theta[i] + halfWidth };
  }
  return out;
}

// ---------------- helpers ----------------

function sigmoid(x) {
  if (x > 20) return 1;
  if (x < -20) return 0;
  return 1 / (1 + Math.exp(-x));
}

function syncEloState(systemState, userState) {
  const { availableModelIds, history, modelIntroPhase } = systemState;

  // init any missing keys
  const meanKnown = (() => {
    let sum = 0, cnt = 0;
    for (const id of availableModelIds) {
      if (userState.elo[id] !== undefined && (userState.matches[id] || 0) > 0) {
        sum += userState.elo[id];
        cnt++;
      }
    }
    return cnt > 0 ? sum / cnt : 0;
  })();

  for (const id of availableModelIds) {
    if (userState.elo[id] === undefined) {
      // new models start near population mean
      userState.elo[id] = meanKnown;
    }
    if (userState.matches[id] === undefined) userState.matches[id] = 0;
  }

  const start = userState.processed || 0;
  const end = history.length;

  // Elo-like updates in log-odds space
  for (let k = start; k < end; k++) {
    const m = history[k];
    const a = m.modelA, b = m.modelB;
    if (userState.elo[a] === undefined || userState.elo[b] === undefined) continue;

    const muA = userState.elo[a];
    const muB = userState.elo[b];
    const pA = sigmoid(muA - muB);
    const sA = m.winner === a ? 1 : 0;
    const err = sA - pA;

    // K decays with experience; new models learn faster
    const mA = userState.matches[a] || 0;
    const mB = userState.matches[b] || 0;
    const baseK = 0.35;
    const kA = baseK / Math.sqrt(1 + 0.02 * mA);
    const kB = baseK / Math.sqrt(1 + 0.02 * mB);

    userState.elo[a] = muA + kA * err;
    userState.elo[b] = muB - kB * err;

    userState.matches[a] = mA + 1;
    userState.matches[b] = mB + 1;
  }

  userState.processed = end;

  // re-center to mean 0 to avoid drift
  let sum = 0;
  for (const id of availableModelIds) sum += userState.elo[id] || 0;
  const mean = sum / availableModelIds.length;
  for (const id of availableModelIds) userState.elo[id] = (userState.elo[id] || 0) - mean;
}

function approxSE(id, userState) {
  const m = userState.matches[id] || 0;
  const seMax = 2.0;
  const seMin = 0.18;
  const se = seMax / Math.sqrt(m + 1);
  return Math.max(seMin, Math.min(seMax, se));
}

function uncertaintyWeight(id, systemState, userState, recentWindow) {
  const { currentPhase, modelIntroPhase } = systemState;
  const se = approxSE(id, userState);
  const intro = modelIntroPhase[id] || 1;

  let boost = 1.0;
  if (intro === currentPhase) boost = 6.0;
  else if (currentPhase - intro <= recentWindow) boost = 2.25;

  return (se * se) * boost;
}

function weightedPick(ids, weightFn) {
  let total = 0;
  const w = new Array(ids.length);
  for (let i = 0; i < ids.length; i++) {
    const wi = Math.max(1e-12, weightFn(ids[i]));
    w[i] = wi;
    total += wi;
  }
  let r = Math.random() * total;
  for (let i = 0; i < ids.length; i++) {
    r -= w[i];
    if (r <= 0) return ids[i];
  }
  return ids[ids.length - 1];
}

function pickRandomOther(id, ids) {
  if (ids.length < 2) return id;
  let other = id;
  for (let t = 0; t < 20 && other === id; t++) {
    other = ids[Math.floor(Math.random() * ids.length)];
  }
  if (other === id) {
    for (const x of ids) if (x !== id) return x;
  }
  return other;
}

function pickNeighbor(id, ranked, rankIndex, window) {
  const idx = rankIndex[id];
  if (idx === undefined) return ranked[Math.floor(Math.random() * ranked.length)];

  const lo = Math.max(0, idx - window);
  const hi = Math.min(ranked.length - 1, idx + window);

  // sample within [lo,hi] excluding self
  for (let t = 0; t < 20; t++) {
    const j = lo + Math.floor(Math.random() * (hi - lo + 1));
    const cand = ranked[j];
    if (cand !== id) return cand;
  }

  // fallback: nearest non-self
  if (idx > 0) return ranked[idx - 1];
  return ranked[Math.min(ranked.length - 1, idx + 1)];
}

function pickAnchors(ids, userState, minMatches) {
  const established = ids
    .filter((id) => (userState.matches[id] || 0) >= minMatches)
    .sort((a, b) => (userState.elo[a] || 0) - (userState.elo[b] || 0));

  if (established.length < 5) {
    // fallback: just pick some random-ish ids
    return ids.slice(0, Math.min(7, ids.length));
  }

  const qs = [0.10, 0.30, 0.50, 0.70, 0.90];
  const anchors = [];
  for (const q of qs) {
    const idx = Math.min(established.length - 1, Math.floor(q * (established.length - 1)));
    anchors.push(established[idx]);
  }
  // unique
  return Array.from(new Set(anchors));
}
`},{id:"baseline-infogain",name:"InfoGain",code:`// ===============================
// INFOGAIN (Creative / Riskier)
// Pair selection: greedy maximize p(1-p)*(se_i^2+se_j^2) with new-model bias.
// Estimation: Bradley-Terry MLE + diag Fisher CIs (same as baseline).
// ===============================

function init() {
  return {
    processed: 0,
    elo: {},
    matches: {},
  };
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, currentPhase, modelIntroPhase } = systemState;

  const BATCH = Math.min(350, remainingInPhase);
  const ANCHOR_MIN_MATCHES = 250;
  const NEIGHBOR_WINDOW = 12;
  const RANDOM_CANDIDATES = 10;

  userState = userState || init();
  syncEloState(systemState, userState);

  const anchors = pickAnchors(availableModelIds, userState, ANCHOR_MIN_MATCHES);

  // rank for neighbor candidate set
  const ranked = availableModelIds
    .slice()
    .sort((a, b) => (userState.elo[a] || 0) - (userState.elo[b] || 0));
  const rankIndex = {};
  for (let i = 0; i < ranked.length; i++) rankIndex[ranked[i]] = i;

  const pairs = [];

  for (let k = 0; k < BATCH; k++) {
    // Focus heavily on uncertain models, with extra weight for newly introduced
    const focusId = weightedPick(availableModelIds, (id) => {
      const se = approxSE(id, userState);
      const intro = modelIntroPhase[id] || 1;
      let boost = 1.0;
      if (intro === currentPhase) boost = 7.0;
      else if (currentPhase - intro <= 2) boost = 2.0;
      return (se * se) * boost;
    });

    // Build opponent candidate set: neighbors + anchors + a few randoms
    const candidates = new Set();

    // neighbors
    const idx = rankIndex[focusId];
    if (idx !== undefined) {
      const lo = Math.max(0, idx - NEIGHBOR_WINDOW);
      const hi = Math.min(ranked.length - 1, idx + NEIGHBOR_WINDOW);
      for (let j = lo; j <= hi; j++) {
        const cand = ranked[j];
        if (cand !== focusId) candidates.add(cand);
      }
    }

    // anchors
    for (const a of anchors) if (a !== focusId) candidates.add(a);

    // random exploration
    for (let t = 0; t < RANDOM_CANDIDATES; t++) {
      const r = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
      if (r !== focusId) candidates.add(r);
    }

    let bestOpp = null;
    let bestScore = -Infinity;

    const muI = userState.elo[focusId] || 0;
    const seI = approxSE(focusId, userState);
    const introI = modelIntroPhase[focusId] || 1;
    const newBoostI = (introI === currentPhase) ? 1.5 : 1.0;

    for (const oppId of candidates) {
      const muJ = userState.elo[oppId] || 0;
      const seJ = approxSE(oppId, userState);
      const introJ = modelIntroPhase[oppId] || 1;
      const newBoostJ = (introJ === currentPhase) ? 1.25 : 1.0;

      const p = sigmoid(muI - muJ);
      const info = p * (1 - p); // peaks near 0.5
      const unc = (seI * seI + seJ * seJ);
      const score = info * unc * newBoostI * newBoostJ;

      if (score > bestScore) {
        bestScore = score;
        bestOpp = oppId;
      }
    }

    if (!bestOpp || bestOpp === focusId) bestOpp = pickRandomOther(focusId, availableModelIds);

    pairs.push({ modelA: focusId, modelB: bestOpp });
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  // === same BT MLE + diag Fisher CI baseline ===
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  const wins = [];
  for (let i = 0; i < n; i++) wins.push(new Array(n).fill(0));

  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) wins[iA][iB]++; else wins[iB][iA]++;
  }

  const nij = [];
  for (let i = 0; i < n; i++) nij.push(new Array(n).fill(0));
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) nij[i][j] = wins[i][j] + wins[j][i];

  const maxIter = 200;
  const tol = 1e-8;
  let p = new Array(n).fill(1.0);

  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) totalWins[i] += wins[i][j];

  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;

    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }
      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;
      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }

    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-10));
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geoMean;

    p = pNew;
    if (maxChange < tol) break;
  }

  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-10));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  const fisherDiag = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const denom = (pi + pj) * (pi + pj);
      fisherDiag[i] += nij[i][j] * pi * pj / denom;
    }
  }

  const se = new Array(n);
  for (let i = 0; i < n; i++) se[i] = fisherDiag[i] < 1e-6 ? 2.0 : 1.0 / Math.sqrt(fisherDiag[i]);

  const z = 1.96;
  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const halfWidth = z * se[i];
    out[id] = { strength: theta[i], lower: theta[i] - halfWidth, upper: theta[i] + halfWidth };
  }
  return out;
}

// ---------- helpers (same as UWAN) ----------

function sigmoid(x) {
  if (x > 20) return 1;
  if (x < -20) return 0;
  return 1 / (1 + Math.exp(-x));
}

function syncEloState(systemState, userState) {
  const { availableModelIds, history } = systemState;

  const meanKnown = (() => {
    let sum = 0, cnt = 0;
    for (const id of availableModelIds) {
      if (userState.elo[id] !== undefined && (userState.matches[id] || 0) > 0) {
        sum += userState.elo[id];
        cnt++;
      }
    }
    return cnt > 0 ? sum / cnt : 0;
  })();

  for (const id of availableModelIds) {
    if (userState.elo[id] === undefined) userState.elo[id] = meanKnown;
    if (userState.matches[id] === undefined) userState.matches[id] = 0;
  }

  const start = userState.processed || 0;
  const end = history.length;

  for (let k = start; k < end; k++) {
    const m = history[k];
    const a = m.modelA, b = m.modelB;
    if (userState.elo[a] === undefined || userState.elo[b] === undefined) continue;

    const muA = userState.elo[a];
    const muB = userState.elo[b];
    const pA = sigmoid(muA - muB);
    const sA = m.winner === a ? 1 : 0;
    const err = sA - pA;

    const mA = userState.matches[a] || 0;
    const mB = userState.matches[b] || 0;
    const baseK = 0.35;
    const kA = baseK / Math.sqrt(1 + 0.02 * mA);
    const kB = baseK / Math.sqrt(1 + 0.02 * mB);

    userState.elo[a] = muA + kA * err;
    userState.elo[b] = muB - kB * err;

    userState.matches[a] = mA + 1;
    userState.matches[b] = mB + 1;
  }

  userState.processed = end;

  let sum = 0;
  for (const id of availableModelIds) sum += userState.elo[id] || 0;
  const mean = sum / availableModelIds.length;
  for (const id of availableModelIds) userState.elo[id] = (userState.elo[id] || 0) - mean;
}

function approxSE(id, userState) {
  const m = userState.matches[id] || 0;
  const seMax = 2.0;
  const seMin = 0.18;
  const se = seMax / Math.sqrt(m + 1);
  return Math.max(seMin, Math.min(seMax, se));
}

function weightedPick(ids, weightFn) {
  let total = 0;
  const w = new Array(ids.length);
  for (let i = 0; i < ids.length; i++) {
    const wi = Math.max(1e-12, weightFn(ids[i]));
    w[i] = wi;
    total += wi;
  }
  let r = Math.random() * total;
  for (let i = 0; i < ids.length; i++) {
    r -= w[i];
    if (r <= 0) return ids[i];
  }
  return ids[ids.length - 1];
}

function pickRandomOther(id, ids) {
  let other = id;
  for (let t = 0; t < 20 && other === id; t++) {
    other = ids[Math.floor(Math.random() * ids.length)];
  }
  if (other === id) {
    for (const x of ids) if (x !== id) return x;
  }
  return other;
}

function pickAnchors(ids, userState, minMatches) {
  const established = ids
    .filter((id) => (userState.matches[id] || 0) >= minMatches)
    .sort((a, b) => (userState.elo[a] || 0) - (userState.elo[b] || 0));

  if (established.length < 5) return ids.slice(0, Math.min(7, ids.length));

  const qs = [0.10, 0.30, 0.50, 0.70, 0.90];
  const anchors = [];
  for (const q of qs) {
    const idx = Math.min(established.length - 1, Math.floor(q * (established.length - 1)));
    anchors.push(established[idx]);
  }
  return Array.from(new Set(anchors));
}
`},{id:"baseline-infogain-full-fisher",name:"InfoGain + Full Fisher",code:`// ===============================
// INFOGAIN + FULL FISHER INVERSE
// Pair selection: greedy maximize p(1-p)*(var_i+var_j) with new-model bias.
//   - Evaluates ALL opponents for each focus (O(n) per selection)
//   - Higher exploration rate for graph connectivity
// Estimation: Bradley-Terry MLE + FULL Fisher inverse CIs (with ridge prior).
//   - Builds the BT Laplacian, adds small ridge, inverts in reduced coords
//   - se[i] = sqrt((L^{-1})_{ii}) instead of 1/sqrt(L_{ii})
// ===============================

function init() {
  return {
    processed: 0,
    elo: {},
    matches: {},
    // Cache the last computed variances from full Fisher for pair selection
    lastVars: {},
    lastCov: null,
    lastCovIds: null,
    // Cache BT theta (log-strengths) aligned with lastCovIds, for computing p and w=p(1-p)
    lastTheta: null,
    lastThetaIds: null,
    lastVarUpdate: 0,
    lastPhase: 0,
    gamesThisPhase: {},
    // For new models: track which anchors we've already used
    anchorSeen: {},
  };
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, currentPhase, modelIntroPhase, history } = systemState;

  // Tunable parameters
  const BATCH = Math.min(400, remainingInPhase);
  const EXPLORATION_RATE = 0.10;   // keep some mixing for connectivity
  const UNDERPLAYED_ALPHA = 0.80;  // anti-starvation strength (higher => more uniform matches)
  const ANCHOR_MIN_MATCHES = 250;
  // Bootstrapping: variance-triggered, with an explicit cap on anchor matches per new model per phase.
  const BOOTSTRAP_MAX_ANCHOR = 80;
  const COV_AWARE_RATE = 0.85;     // how often we use covariance-aware scoring (vs classic InfoGain)

  userState = userState || init();

  // Reset phase-local counters
  if (userState.lastPhase !== currentPhase) {
    userState.lastPhase = currentPhase;
    userState.gamesThisPhase = {};
    userState.anchorSeen = {};
  }

  syncEloState(systemState, userState);

  // Periodically recompute variances from full Fisher (every ~2000 matches or start of phase)
  // This gives us better uncertainty estimates for pair selection
  const shouldRefreshVars = (
    Object.keys(userState.lastVars).length === 0 ||
    history.length - (userState.lastVarUpdate || 0) > 2000 ||
    !userState.lastCov ||
    !userState.lastCovIds ||
    userState.lastCovIds.length !== availableModelIds.length
  );
  
  if (shouldRefreshVars && history.length > 0) {
    const covRes = computePosteriorCovariance(availableModelIds, history);
    userState.lastVars = covRes.vars;
    userState.lastCov = covRes.cov;
    userState.lastCovIds = availableModelIds.slice();
    userState.lastTheta = covRes.thetaById || null;
    userState.lastThetaIds = availableModelIds.slice();
    userState.lastVarUpdate = history.length;
  }

  const anchors = pickAnchors(availableModelIds, userState, ANCHOR_MIN_MATCHES);

  // Covariance lookup map (only valid if lastCovIds matches availableModelIds order)
  const covIdToIdx = {};
  if (userState.lastCov && userState.lastCovIds && userState.lastCovIds.length === availableModelIds.length) {
    for (let i = 0; i < userState.lastCovIds.length; i++) covIdToIdx[userState.lastCovIds[i]] = i;
  }

  // Theta lookup map (aligned if lastThetaIds matches availableModelIds order)
  const thetaById = (userState.lastTheta && userState.lastThetaIds && userState.lastThetaIds.length === availableModelIds.length)
    ? userState.lastTheta
    : null;

  // Choose a bootstrap variance threshold based on "established" models (non-new if possible).
  // This avoids wasting anchor matches after posterior uncertainty has already collapsed.
  const vTarget = (() => {
    const vals = [];
    for (const id of availableModelIds) {
      const intro = modelIntroPhase[id] || 1;
      if (intro === currentPhase) continue;
      const v = userState.lastVars[id];
      if (v !== undefined && isFinite(v)) vals.push(v);
    }
    if (vals.length === 0) {
      for (const id of availableModelIds) {
        const v = userState.lastVars[id];
        if (v !== undefined && isFinite(v)) vals.push(v);
      }
    }
    const med = median(vals);
    // If we cannot compute a stable median yet, fall back to a mild threshold.
    return isFinite(med) && med > 0 ? med : 0.12;
  })();

  const pairs = [];

  for (let k = 0; k < BATCH; k++) {
    // Focus on uncertain models, with extra weight for newly introduced
    const focusId = weightedPick(availableModelIds, (id) => {
      // Use full Fisher variance if available, else fall back to match-based approx
      const varI = userState.lastVars[id] !== undefined 
        ? userState.lastVars[id] 
        : approxVar(id, userState);
      const intro = modelIntroPhase[id] || 1;
      let boost = 1.0;
      if (intro === currentPhase) boost = 6.0;
      else if (currentPhase - intro <= 2) boost = 2.0;
      const played = userState.gamesThisPhase[id] || 0;
      const under = 1 / Math.sqrt(1 + UNDERPLAYED_ALPHA * played);
      return varI * boost * under;
    });

    let bestOpp = null;
    let bestScore = -Infinity;

    const muI = userState.elo[focusId] || 0;
    const varI = userState.lastVars[focusId] !== undefined 
      ? userState.lastVars[focusId] 
      : approxVar(focusId, userState);
    const introI = modelIntroPhase[focusId] || 1;
    const newBoostI = (introI === currentPhase) ? 1.4 : 1.0;

    // Exploration: occasionally pick random opponent
    if (Math.random() < EXPLORATION_RATE) {
      bestOpp = pickRandomOther(focusId, availableModelIds);
    } else {
      const playedI = userState.gamesThisPhase[focusId] || 0;

      // Variance-triggered bootstrapping:
      // only while the new model is still meaningfully uncertain, and with a hard cap.
      const shouldBootstrap = (
        introI === currentPhase &&
        anchors.length > 0 &&
        varI > vTarget &&
        playedI < BOOTSTRAP_MAX_ANCHOR
      );

      if (shouldBootstrap && userState.lastCov) {
        const i = covIdToIdx[focusId];
        const seen = userState.anchorSeen[focusId] || {};

        for (const a of anchors) {
          if (a === focusId) continue;
          const j = covIdToIdx[a];
          if (i === undefined || j === undefined) continue;

          // Leverage along direction u = e_i - e_j: u^T C u = Cii + Cjj - 2Cij
          const C = userState.lastCov;
          const leverage = Math.max(1e-12, C[i][i] + C[j][j] - 2 * C[i][j]);

          // Prefer anchors we haven't used yet for this new model (direction diversity)
          const novelty = seen[a] ? 0.9 : 1.1;

          // Also prefer anchors that are not extreme p~0/1 under current mu (need actual info)
          const p = (() => {
            if (thetaById && thetaById[focusId] !== undefined && thetaById[a] !== undefined) {
              return sigmoid(thetaById[focusId] - thetaById[a]);
            }
            return sigmoid(muI - (userState.elo[a] || 0));
          })();
          const w = p * (1 - p);

          // Soft anti-hub penalty for anchors too (prevents global overuse)
          const playedA = userState.gamesThisPhase[a] || 0;
          const anchorUnder = 1 / Math.sqrt(1 + UNDERPLAYED_ALPHA * playedA);

          const score = leverage * w * novelty * anchorUnder;
          if (score > bestScore) {
            bestScore = score;
            bestOpp = a;
          }
        }
      } else {
        const useCovAware = !!userState.lastCov && Math.random() < COV_AWARE_RATE;

        // Evaluate ALL opponents (O(n) per selection - fine for n~120)
        for (const oppId of availableModelIds) {
          if (oppId === focusId) continue;

          const muJ = userState.elo[oppId] || 0;
          const varJ = userState.lastVars[oppId] !== undefined 
            ? userState.lastVars[oppId] 
            : approxVar(oppId, userState);
          const introJ = modelIntroPhase[oppId] || 1;
          const newBoostJ = (introJ === currentPhase) ? 1.2 : 1.0;

          const playedJ = userState.gamesThisPhase[oppId] || 0;
          const oppUnder = 1 / Math.sqrt(1 + UNDERPLAYED_ALPHA * playedJ);

          const p = (() => {
            if (thetaById && thetaById[focusId] !== undefined && thetaById[oppId] !== undefined) {
              return sigmoid(thetaById[focusId] - thetaById[oppId]);
            }
            return sigmoid(muI - muJ);
          })();
          const w = p * (1 - p); // Fisher weight for this pair (max at 0.25)

          let score;
          if (useCovAware) {
            // Covariance-aware objective (A-optimal): maximize expected reduction in tr(C),
            // which directly tracks sum of marginal variances and thus CI-width score.
            //
            // With u = e_i - e_j and Fisher increment w u u^T:
            //   Δ_trace = tr(C - C_new) = (w ||C u||^2) / (1 + w u^T C u)
            const i = covIdToIdx[focusId];
            const j = covIdToIdx[oppId];
            if (i !== undefined && j !== undefined) {
              const C = userState.lastCov;
              const s = Math.max(1e-12, C[i][i] + C[j][j] - 2 * C[i][j]);
              let norm2 = 0;
              for (let t = 0; t < C.length; t++) {
                const diff = C[t][i] - C[t][j];
                norm2 += diff * diff;
              }
              const deltaTrace = (w * norm2) / (1 + w * s);
              score = deltaTrace * newBoostI * newBoostJ * oppUnder;
            } else {
              // fallback if covariance indices missing
              const unc = varI + varJ;
              score = w * unc * newBoostI * newBoostJ * oppUnder;
            }
          } else {
            // Classic InfoGain-style score: w * (var_i + var_j)
            const unc = varI + varJ;
            score = w * unc * newBoostI * newBoostJ * oppUnder;
          }

          if (score > bestScore) {
            bestScore = score;
            bestOpp = oppId;
          }
        }
      }
    }

    if (!bestOpp || bestOpp === focusId) {
      bestOpp = pickRandomOther(focusId, availableModelIds);
    }

    pairs.push({ modelA: focusId, modelB: bestOpp });

    // Track per-phase planned match counts (anti-starvation signal)
    userState.gamesThisPhase[focusId] = (userState.gamesThisPhase[focusId] || 0) + 1;
    userState.gamesThisPhase[bestOpp] = (userState.gamesThisPhase[bestOpp] || 0) + 1;

    // Track anchor diversity for bootstrapping
    if (introI === currentPhase && anchors.length > 0) {
      userState.anchorSeen[focusId] = userState.anchorSeen[focusId] || {};
      userState.anchorSeen[focusId][bestOpp] = (userState.anchorSeen[focusId][bestOpp] || 0) + 1;
    }
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  // Build win matrix
  const wins = [];
  for (let i = 0; i < n; i++) wins.push(new Array(n).fill(0));

  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) wins[iA][iB]++; else wins[iB][iA]++;
  }

  // Total matches per pair
  const nij = [];
  for (let i = 0; i < n; i++) nij.push(new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      nij[i][j] = wins[i][j] + wins[j][i];
    }
  }

  // --- Bradley-Terry MLE via MM algorithm ---
  const maxIter = 200;
  const tol = 1e-8;
  let p = new Array(n).fill(1.0);

  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      totalWins[i] += wins[i][j];
    }
  }

  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;

    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }
      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;
      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }

    // Normalize geometric mean = 1
    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-10));
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geoMean;

    p = pNew;
    if (maxChange < tol) break;
  }

  // Convert to log-odds theta = log(p), center mean=0
  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-10));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  // --- Build FULL Fisher Information matrix (Laplacian) ---
  // L_ii = sum_j n_ij * w_ij where w_ij = p_i*p_j / (p_i+p_j)^2
  // L_ij = -n_ij * w_ij for i != j
  // This is the negative Hessian of the BT log-likelihood

  const L = [];
  for (let i = 0; i < n; i++) L.push(new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const w = (pi * pj) / ((pi + pj) * (pi + pj));
      const contrib = nij[i][j] * w;
      L[i][i] += contrib;
      L[i][j] = -contrib;
    }
  }

  // --- Compute Moore–Penrose pseudoinverse in sum-to-zero gauge ---
  // BT Fisher is singular with nullspace span{1}. We want the gauge-invariant covariance for
  // identifiable differences, not a ridge/MAP prior. Use:
  //
  //   I^+ = (I + (1/n) 11^T)^{-1} - (1/n) 11^T
  //
  // which is PSD and corresponds to the pseudoinverse under the sum-to-zero constraint.
  const Cov = fisherPseudoinverseSumToZero(L);

  // Extract standard errors from diagonal of covariance
  const se = new Array(n);
  for (let i = 0; i < n; i++) {
    se[i] = Math.sqrt(Math.max(1e-10, Cov[i][i]));
  }

  // CI level: tune z to target pooled coverage >= 0.94.
  // Two-sided 94% Normal corresponds to z ≈ 1.88; we use a slightly conservative default.
  const z = 1.90;
  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const halfWidth = z * se[i];
    out[id] = {
      strength: theta[i],
      lower: theta[i] - halfWidth,
      upper: theta[i] + halfWidth
    };
  }
  return out;
}

// --- Helper: compute posterior covariance from full Fisher for pair selection ---
function computePosteriorCovariance(availableModelIds, history) {
  const n = availableModelIds.length;
  if (n === 0) return { vars: {}, cov: [] };

  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  const wins = [];
  for (let i = 0; i < n; i++) wins.push(new Array(n).fill(0));

  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) wins[iA][iB]++; else wins[iB][iA]++;
  }

  const nij = [];
  for (let i = 0; i < n; i++) nij.push(new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      nij[i][j] = wins[i][j] + wins[j][i];
    }
  }

  // Quick BT MLE (fewer iterations for speed)
  let p = new Array(n).fill(1.0);
  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) totalWins[i] += wins[i][j];
  }

  for (let iter = 0; iter < 50; iter++) {
    const pNew = new Array(n);
    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }
      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;
    }
    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-10));
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geoMean;
    p = pNew;
  }

  // Build Laplacian
  const L = [];
  for (let i = 0; i < n; i++) L.push(new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const w = (pi * pj) / ((pi + pj) * (pi + pj));
      const contrib = nij[i][j] * w;
      L[i][i] += contrib;
      L[i][j] = -contrib;
    }
  }

  const Cov = fisherPseudoinverseSumToZero(L);

  const vars = {};
  for (let i = 0; i < n; i++) {
    vars[availableModelIds[i]] = Math.max(1e-10, Cov[i][i]);
  }

  // Also return a centered BT theta estimate aligned with ids, for pairing p and w=p(1-p).
  const thetaById = {};
  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-10));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) thetaById[availableModelIds[i]] = theta[i] - meanTheta;

  return { vars, cov: Cov, thetaById };
}

// --- Fisher pseudoinverse in sum-to-zero gauge ---
function fisherPseudoinverseSumToZero(I) {
  const n = I.length;
  if (n === 0) return [];

  // A = I + (1/n) 11^T
  // (1/n)11^T is rank-1, makes Laplacian strictly SPD.
  const A = [];
  const invN = 1 / n;
  for (let i = 0; i < n; i++) {
    A.push(new Array(n).fill(0));
    for (let j = 0; j < n; j++) {
      A[i][j] = I[i][j] + invN;
    }
  }

  const Ainv = invertSpdMatrixCholesky(A);

  // Cov = A^{-1} - (1/n)11^T
  const Cov = [];
  for (let i = 0; i < n; i++) {
    Cov.push(new Array(n).fill(0));
    for (let j = 0; j < n; j++) {
      Cov[i][j] = Ainv[i][j] - invN;
    }
  }

  return Cov;
}

// --- SPD inversion via Cholesky (stable for SPD matrices) ---
function invertSpdMatrixCholesky(A) {
  const n = A.length;
  const L = choleskyDecompose(A);
  const inv = [];
  for (let i = 0; i < n; i++) inv.push(new Array(n).fill(0));

  // Solve A X = I column-by-column
  for (let col = 0; col < n; col++) {
    const e = new Array(n).fill(0);
    e[col] = 1;
    const x = choleskySolve(L, e);
    for (let row = 0; row < n; row++) {
      inv[row][col] = x[row];
    }
  }

  return inv;
}

function choleskyDecompose(A) {
  const n = A.length;
  const L = [];
  for (let i = 0; i < n; i++) L.push(new Array(n).fill(0));

  const EPS = 1e-12;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = A[i][j];
      for (let k = 0; k < j; k++) sum -= L[i][k] * L[j][k];

      if (i === j) {
        // Clamp to keep SPD under minor numerical error
        if (sum < EPS) sum = EPS;
        L[i][j] = Math.sqrt(sum);
      } else {
        L[i][j] = sum / L[j][j];
      }
    }
  }

  return L;
}

function choleskySolve(L, b) {
  const n = L.length;
  const y = new Array(n).fill(0);

  // Forward solve: L y = b
  for (let i = 0; i < n; i++) {
    let sum = b[i];
    for (let k = 0; k < i; k++) sum -= L[i][k] * y[k];
    y[i] = sum / L[i][i];
  }

  // Backward solve: L^T x = y
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = y[i];
    for (let k = i + 1; k < n; k++) sum -= L[k][i] * x[k];
    x[i] = sum / L[i][i];
  }

  return x;
}

// --- Standard helpers ---

function sigmoid(x) {
  if (x > 20) return 1;
  if (x < -20) return 0;
  return 1 / (1 + Math.exp(-x));
}

function syncEloState(systemState, userState) {
  const { availableModelIds, history } = systemState;

  const meanKnown = (() => {
    let sum = 0, cnt = 0;
    for (const id of availableModelIds) {
      if (userState.elo[id] !== undefined && (userState.matches[id] || 0) > 0) {
        sum += userState.elo[id];
        cnt++;
      }
    }
    return cnt > 0 ? sum / cnt : 0;
  })();

  for (const id of availableModelIds) {
    if (userState.elo[id] === undefined) userState.elo[id] = meanKnown;
    if (userState.matches[id] === undefined) userState.matches[id] = 0;
  }

  const start = userState.processed || 0;
  const end = history.length;

  for (let k = start; k < end; k++) {
    const m = history[k];
    const a = m.modelA, b = m.modelB;
    if (userState.elo[a] === undefined || userState.elo[b] === undefined) continue;

    const muA = userState.elo[a];
    const muB = userState.elo[b];
    const pA = sigmoid(muA - muB);
    const sA = m.winner === a ? 1 : 0;
    const err = sA - pA;

    const mA = userState.matches[a] || 0;
    const mB = userState.matches[b] || 0;
    const baseK = 0.35;
    const kA = baseK / Math.sqrt(1 + 0.02 * mA);
    const kB = baseK / Math.sqrt(1 + 0.02 * mB);

    userState.elo[a] = muA + kA * err;
    userState.elo[b] = muB - kB * err;

    userState.matches[a] = mA + 1;
    userState.matches[b] = mB + 1;
  }

  userState.processed = end;

  let sum = 0;
  for (const id of availableModelIds) sum += userState.elo[id] || 0;
  const mean = sum / availableModelIds.length;
  for (const id of availableModelIds) userState.elo[id] = (userState.elo[id] || 0) - mean;
}

function approxVar(id, userState) {
  const m = userState.matches[id] || 0;
  const varMax = 4.0;  // se_max^2 = 2^2
  const varMin = 0.03; // se_min^2 = 0.18^2 ≈ 0.03
  const variance = varMax / (m + 1);
  return Math.max(varMin, Math.min(varMax, variance));
}

function weightedPick(ids, weightFn) {
  let total = 0;
  const w = new Array(ids.length);
  for (let i = 0; i < ids.length; i++) {
    const wi = Math.max(1e-12, weightFn(ids[i]));
    w[i] = wi;
    total += wi;
  }
  let r = Math.random() * total;
  for (let i = 0; i < ids.length; i++) {
    r -= w[i];
    if (r <= 0) return ids[i];
  }
  return ids[ids.length - 1];
}

function median(arr) {
  if (!arr || arr.length === 0) return NaN;
  const a = arr.slice().sort((x, y) => x - y);
  const m = Math.floor(a.length / 2);
  if (a.length % 2 === 1) return a[m];
  return 0.5 * (a[m - 1] + a[m]);
}

function pickRandomOther(id, ids) {
  let other = id;
  for (let t = 0; t < 20 && other === id; t++) {
    other = ids[Math.floor(Math.random() * ids.length)];
  }
  if (other === id) {
    for (const x of ids) if (x !== id) return x;
  }
  return other;
}

function pickAnchors(ids, userState, minMatches) {
  const established = ids
    .filter((id) => (userState.matches[id] || 0) >= minMatches)
    .sort((a, b) => (userState.elo[a] || 0) - (userState.elo[b] || 0));

  if (established.length < 5) return ids.slice(0, Math.min(7, ids.length));

  const qs = [0.10, 0.30, 0.50, 0.70, 0.90];
  const anchors = [];
  for (const q of qs) {
    const idx = Math.min(established.length - 1, Math.floor(q * (established.length - 1)));
    anchors.push(established[idx]);
  }
  return Array.from(new Set(anchors));
}
`},{id:"baseline-swiss-neighbor",name:"Swiss",code:`// ===============================
// SWISS NEIGHBOR (Conservative)
// Pair selection: Uncertainty-weighted "Swiss + near-neighbor" pairing
// - Heavily favor underplayed/new models (attacks Jensen inequality problem)
// - Choose opponents with similar strength (maximizes Fisher info per match)
// - Bootstrap new models against anchor set at strength quantiles
// - Small exploration rate for graph connectivity
// Estimation: Bradley-Terry MLE + diag Fisher CIs (same as baseline).
// ===============================

function init() {
  return {
    processed: 0,
    mu: {},              // running strength estimates (Elo-style)
    gamesTotal: {},      // cumulative games played
    gamesThisPhase: {},  // games played in current phase
    lastPhase: 0,        // track phase changes to reset gamesThisPhase
    bootstrapCount: {},  // how many anchor matches each new model has had
  };
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, currentPhase, modelIntroPhase } = systemState;

  // Hyperparameters
  const BATCH = Math.min(350, remainingInPhase);
  const BOOTSTRAP_MATCHES = 5;        // matches against anchors for new models
  const NUM_ANCHORS = 5;              // anchor models at strength quantiles
  const EXPLORATION_RATE = 0.08;      // 8% random opponent selection
  const NEIGHBOR_CANDIDATES = 8;      // how many near-neighbors to consider
  const ALPHA = 0.7;                  // weight for underplayed vs new priority

  userState = userState || init();
  
  // Reset phase-specific counters if phase changed
  if (currentPhase !== userState.lastPhase) {
    userState.gamesThisPhase = {};
    userState.lastPhase = currentPhase;
  }

  // Sync state with history
  syncState(systemState, userState);

  // Initialize any new models
  for (const id of availableModelIds) {
    if (userState.mu[id] === undefined) userState.mu[id] = getMeanStrength(userState, availableModelIds);
    if (userState.gamesTotal[id] === undefined) userState.gamesTotal[id] = 0;
    if (userState.gamesThisPhase[id] === undefined) userState.gamesThisPhase[id] = 0;
    if (userState.bootstrapCount[id] === undefined) userState.bootstrapCount[id] = 0;
  }

  // Identify anchors: models at strength quantiles with enough games
  const anchors = pickAnchors(availableModelIds, userState, NUM_ANCHORS);

  // Sort models by strength for neighbor lookup
  const ranked = availableModelIds
    .slice()
    .sort((a, b) => (userState.mu[a] || 0) - (userState.mu[b] || 0));
  const rankIndex = {};
  for (let i = 0; i < ranked.length; i++) rankIndex[ranked[i]] = i;

  // Identify new models that need bootstrapping
  const newModels = availableModelIds.filter(id => {
    const intro = modelIntroPhase[id] || 1;
    return intro === currentPhase && userState.bootstrapCount[id] < BOOTSTRAP_MATCHES;
  });

  const pairs = [];

  for (let k = 0; k < BATCH; k++) {
    let focusId, oppId;

    // Priority 1: Bootstrap new models against anchors
    if (newModels.length > 0) {
      // Pick the new model with fewest bootstrap matches
      newModels.sort((a, b) => (userState.bootstrapCount[a] || 0) - (userState.bootstrapCount[b] || 0));
      const candidate = newModels[0];
      
      if (userState.bootstrapCount[candidate] < BOOTSTRAP_MATCHES && anchors.length > 0) {
        focusId = candidate;
        // Pick anchor we've played least against (or random if all equal)
        const anchorIdx = userState.bootstrapCount[candidate] % anchors.length;
        oppId = anchors[anchorIdx];
        userState.bootstrapCount[candidate]++;
        
        // Remove from newModels if fully bootstrapped
        if (userState.bootstrapCount[candidate] >= BOOTSTRAP_MATCHES) {
          newModels.shift();
        }
      }
    }

    // Priority 2: Normal uncertainty-weighted selection
    if (!focusId) {
      // Sample focus model with priority for underplayed/new models
      focusId = weightedPick(availableModelIds, (id) => {
        const gamesPhase = userState.gamesThisPhase[id] || 0;
        const intro = modelIntroPhase[id] || 1;
        const isNew = (intro === currentPhase) ? 1.0 : 0.0;
        
        // Priority: favor underplayed models + boost for new ones
        const underplayedScore = 1.0 / Math.sqrt(1 + gamesPhase);
        const priority = ALPHA * underplayedScore + (1 - ALPHA) * isNew * 2.0;
        
        return Math.max(0.01, priority);
      });
    }

    // Select opponent if not already set (bootstrap case)
    if (!oppId) {
      // Exploration: random opponent with small probability
      if (Math.random() < EXPLORATION_RATE) {
        oppId = pickRandomOther(focusId, availableModelIds);
      } else {
        // Near-neighbor selection: find models with similar strength
        oppId = pickNearNeighbor(focusId, ranked, rankIndex, userState, NEIGHBOR_CANDIDATES);
      }
    }

    // Fallback
    if (!oppId || oppId === focusId) {
      oppId = pickRandomOther(focusId, availableModelIds);
    }

    pairs.push({ modelA: focusId, modelB: oppId });
    
    // Update local counters for this batch (so we don't over-select same model)
    userState.gamesThisPhase[focusId] = (userState.gamesThisPhase[focusId] || 0) + 1;
    userState.gamesThisPhase[oppId] = (userState.gamesThisPhase[oppId] || 0) + 1;
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  // === Same BT MLE + diag Fisher CI as baseline ===
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  const wins = [];
  for (let i = 0; i < n; i++) wins.push(new Array(n).fill(0));

  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) wins[iA][iB]++; else wins[iB][iA]++;
  }

  const nij = [];
  for (let i = 0; i < n; i++) nij.push(new Array(n).fill(0));
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) nij[i][j] = wins[i][j] + wins[j][i];

  const maxIter = 200;
  const tol = 1e-8;
  let p = new Array(n).fill(1.0);

  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) totalWins[i] += wins[i][j];

  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;

    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }
      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;
      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }

    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-10));
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geoMean;

    p = pNew;
    if (maxChange < tol) break;
  }

  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-10));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  const fisherDiag = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const denom = (pi + pj) * (pi + pj);
      fisherDiag[i] += nij[i][j] * pi * pj / denom;
    }
  }

  const se = new Array(n);
  for (let i = 0; i < n; i++) se[i] = fisherDiag[i] < 1e-6 ? 2.0 : 1.0 / Math.sqrt(fisherDiag[i]);

  const z = 1.96;
  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const halfWidth = z * se[i];
    out[id] = { strength: theta[i], lower: theta[i] - halfWidth, upper: theta[i] + halfWidth };
  }
  return out;
}

// ---------- Helpers ----------

function sigmoid(x) {
  if (x > 20) return 1;
  if (x < -20) return 0;
  return 1 / (1 + Math.exp(-x));
}

function getMeanStrength(userState, ids) {
  let sum = 0, cnt = 0;
  for (const id of ids) {
    if (userState.mu[id] !== undefined && (userState.gamesTotal[id] || 0) > 0) {
      sum += userState.mu[id];
      cnt++;
    }
  }
  return cnt > 0 ? sum / cnt : 0;
}

function syncState(systemState, userState) {
  const { availableModelIds, history } = systemState;

  // Initialize missing models
  const meanMu = getMeanStrength(userState, availableModelIds);
  for (const id of availableModelIds) {
    if (userState.mu[id] === undefined) userState.mu[id] = meanMu;
    if (userState.gamesTotal[id] === undefined) userState.gamesTotal[id] = 0;
  }

  // Process new matches with Elo-style updates
  const start = userState.processed || 0;
  const end = history.length;

  for (let k = start; k < end; k++) {
    const m = history[k];
    const a = m.modelA, b = m.modelB;
    if (userState.mu[a] === undefined || userState.mu[b] === undefined) continue;

    const muA = userState.mu[a];
    const muB = userState.mu[b];
    const pA = sigmoid(muA - muB);
    const sA = m.winner === a ? 1 : 0;
    const err = sA - pA;

    // Adaptive K-factor: higher for models with fewer games
    const gA = userState.gamesTotal[a] || 0;
    const gB = userState.gamesTotal[b] || 0;
    const baseK = 0.4;
    const kA = baseK / Math.sqrt(1 + 0.015 * gA);
    const kB = baseK / Math.sqrt(1 + 0.015 * gB);

    userState.mu[a] = muA + kA * err;
    userState.mu[b] = muB - kB * err;

    userState.gamesTotal[a] = gA + 1;
    userState.gamesTotal[b] = gB + 1;
  }

  userState.processed = end;

  // Center mu estimates
  let sum = 0;
  for (const id of availableModelIds) sum += userState.mu[id] || 0;
  const mean = sum / availableModelIds.length;
  for (const id of availableModelIds) userState.mu[id] = (userState.mu[id] || 0) - mean;
}

function pickAnchors(ids, userState, numAnchors) {
  // Pick models at strength quantiles that have some games
  const established = ids
    .filter(id => (userState.gamesTotal[id] || 0) >= 10)
    .sort((a, b) => (userState.mu[a] || 0) - (userState.mu[b] || 0));

  if (established.length < numAnchors) {
    // Not enough established models, use what we have
    return ids.slice(0, Math.min(numAnchors, ids.length));
  }

  // Pick at quantiles: 0.1, 0.3, 0.5, 0.7, 0.9
  const quantiles = [0.1, 0.3, 0.5, 0.7, 0.9];
  const anchors = [];
  for (const q of quantiles) {
    const idx = Math.min(established.length - 1, Math.floor(q * (established.length - 1)));
    anchors.push(established[idx]);
  }
  return Array.from(new Set(anchors));
}

function pickNearNeighbor(focusId, ranked, rankIndex, userState, numCandidates) {
  const idx = rankIndex[focusId];
  if (idx === undefined) return null;

  // Gather neighbors within window
  const halfWindow = Math.ceil(numCandidates / 2);
  const lo = Math.max(0, idx - halfWindow);
  const hi = Math.min(ranked.length - 1, idx + halfWindow);

  const candidates = [];
  for (let j = lo; j <= hi; j++) {
    if (ranked[j] !== focusId) {
      candidates.push(ranked[j]);
    }
  }

  if (candidates.length === 0) return null;

  // Weight by inverse games played (prefer less-played opponents)
  // and proximity (prefer closer strength)
  const focusMu = userState.mu[focusId] || 0;
  
  return weightedPick(candidates, (id) => {
    const games = userState.gamesTotal[id] || 0;
    const mu = userState.mu[id] || 0;
    const strengthDiff = Math.abs(mu - focusMu);
    
    // Prefer: fewer games, closer strength
    const gameWeight = 1.0 / Math.sqrt(1 + games * 0.01);
    const strengthWeight = 1.0 / (1 + strengthDiff * 0.5);
    
    return gameWeight * strengthWeight;
  });
}

function weightedPick(ids, weightFn) {
  let total = 0;
  const w = new Array(ids.length);
  for (let i = 0; i < ids.length; i++) {
    const wi = Math.max(1e-12, weightFn(ids[i]));
    w[i] = wi;
    total += wi;
  }
  let r = Math.random() * total;
  for (let i = 0; i < ids.length; i++) {
    r -= w[i];
    if (r <= 0) return ids[i];
  }
  return ids[ids.length - 1];
}

function pickRandomOther(id, ids) {
  let other = id;
  for (let t = 0; t < 20 && other === id; t++) {
    other = ids[Math.floor(Math.random() * ids.length)];
  }
  if (other === id) {
    for (const x of ids) if (x !== id) return x;
  }
  return other;
}
`},{id:"baseline-a-optimal-woodbury",name:"A-Opt",code:`// ============================================================
// A-OPT (Woodbury) + Robust Candidates
// - Pair selection: greedy A-optimal proxy Δ = w||Cu||^2/(1+w u^T C u)
//   with Woodbury covariance updates for the first DESIGN_PAIRS per batch.
// - No drift assumptions (does NOT use μ_phase or mixture params).
// - Uses anchors + near-neighbors + small exploration for robustness.
// - Estimates/CIs: Bradley–Terry MM MLE + diagonal Fisher (safe baseline).
//
// Notes:
// - Covariance C is for *design / selection* (expected Fisher), not for CIs.
// - Uses a fixed reference model for identifiability in C (relative skills).
// ============================================================

function init() {
  return {
    processed: 0,

    // pairing-only online skill (log-odds-ish)
    mu: {},

    // match counts (for learning rate + "underplayed" weighting)
    matches: {},

    // per-phase planned/seen counts (helps avoid starving new models this phase)
    currentPhase: null,
    phaseBudget: 0,
    matchesThisPhase: {},

    // covariance on reduced coordinates (excluding refId)
    refId: null,
    localIds: [],        // ids excluding refId, defines coordinates
    idToLocal: {},       // id -> local index
    C: [],               // m x m covariance
  };
}

function selectBatch(systemState, userState) {
  const {
    availableModelIds,
    remainingInPhase,
    history,
    currentPhase,
    modelIntroPhase,
  } = systemState;

  userState = userState || init();

  // --- core knobs (not "tuned to drift"; mostly compute/safety) ---
  const MAX_BATCH = 500;                 // fewer calls, cheaper overhead
  const DESIGN_PAIRS = 140;              // how many per batch get full A-opt + Woodbury
  const NEIGHBOR_K = 8;                  // candidate neighbors by mu-rank
  const RANDOM_CANDS = 4;                // extra random candidates for each focus
  const EXPLORE_RATE = 0.08;             // keep graph mixed

  // Prior on new model relative skill in log-odds scale (sd ~ 2 => wide but realistic)
  const PRIOR_SD = 2.0;
  const PRIOR_VAR = PRIOR_SD * PRIOR_SD;

  // Pairing mu online learning rate (pairing-only; doesn't affect scoring directly)
  const ETA0 = 0.35;

  // --------------------------------------------

  const batchSize = Math.min(MAX_BATCH, remainingInPhase);

  // Phase transition: reset per-phase counters (do NOT reset mu/C)
  if (userState.currentPhase !== currentPhase) {
    userState.currentPhase = currentPhase;
    userState.phaseBudget = remainingInPhase; // at phase start this is full budget
    userState.matchesThisPhase = {};
  }

  // Ensure state structures cover all available models
  ensureState(availableModelIds, userState, modelIntroPhase, PRIOR_VAR);

  // Update mu + counts from any newly appended history (cheap O(#new matches))
  syncMuFromHistory(systemState, userState, ETA0);

  // Build mu-sorted list for neighbor candidates
  const ranked = availableModelIds
    .slice()
    .sort((a, b) => (userState.mu[a] || 0) - (userState.mu[b] || 0));
  const rankIndex = {};
  for (let i = 0; i < ranked.length; i++) rankIndex[ranked[i]] = i;

  // Anchors: quantiles of established pool (not new this phase, enough matches)
  const newIds = availableModelIds.filter((id) => modelIntroPhase[id] === currentPhase);
  const anchors = pickAnchors(ranked, userState, newIds);

  // Bootstrap target for *new models this phase* (adaptive to budget & count)
  const bootstrapTarget = (() => {
    if (newIds.length === 0) return 0;
    const raw = Math.floor(0.10 * userState.phaseBudget / Math.max(1, newIds.length));
    return clamp(raw, 40, 200);
  })();

  // Focus pool: new models + most-uncertain by Var (diag(C))
  const focusPool = buildFocusPool(availableModelIds, userState, newIds, 40);

  const pairs = [];

  // -------- Stage A: A-opt design on the first chunk (Woodbury updates) --------
  const designCount = Math.min(DESIGN_PAIRS, batchSize);
  for (let t = 0; t < designCount; t++) {
    const focusId = weightedPick(focusPool, (id) => focusWeight(id, userState, modelIntroPhase, currentPhase));

    const candidates = buildOpponentCandidates(
      focusId,
      availableModelIds,
      ranked,
      rankIndex,
      anchors,
      NEIGHBOR_K,
      RANDOM_CANDS,
      EXPLORE_RATE
    );

    // If focus is brand-new *and* still under bootstrapTarget, bias candidates to anchors
    const isNew = modelIntroPhase[focusId] === currentPhase;
    const mtp = userState.matchesThisPhase[focusId] || 0;
    const preferAnchors = isNew && mtp < bootstrapTarget && anchors.length > 0;

    let bestOpp = null;
    let bestDelta = -Infinity;
    let bestCu = null;
    let bestS = 0;
    let bestW = 0;

    for (const oppId of candidates) {
      if (!oppId || oppId === focusId) continue;

      // Optional anchor bias during bootstrapping
      const anchorBonus = preferAnchors && anchorsSetHas(anchors, oppId) ? 1.12 : 1.0;

      const res = deltaForPair(focusId, oppId, userState);
      if (!res) continue;

      // mild anti-starvation: prefer opponents that are also underplayed this phase
      const oppUnder = 1 / Math.sqrt(1 + (userState.matchesThisPhase[oppId] || 0));

      const score = res.delta * anchorBonus * oppUnder;
      if (score > bestDelta) {
        bestDelta = score;
        bestOpp = oppId;
        bestCu = res.Cu;
        bestS = res.s;
        bestW = res.w;
      }
    }

    if (!bestOpp) bestOpp = pickRandomOther(focusId, availableModelIds);

    pairs.push({ modelA: focusId, modelB: bestOpp });

    // record *planned* matches in this phase (prevents repeatedly hammering one model)
    userState.matchesThisPhase[focusId] = (userState.matchesThisPhase[focusId] || 0) + 1;
    userState.matchesThisPhase[bestOpp] = (userState.matchesThisPhase[bestOpp] || 0) + 1;

    // Woodbury update covariance for planned comparison (expected Fisher; outcomes irrelevant)
    if (bestCu) {
      woodburyUpdate(userState, bestCu, bestS, bestW);
    }
  }

  // -------- Stage B: fill remainder cheaply (neighbor/anchor/random) ----------
  for (let t = designCount; t < batchSize; t++) {
    const focusId = weightedPick(availableModelIds.filter((id) => id !== userState.refId), (id) =>
      focusWeight(id, userState, modelIntroPhase, currentPhase)
    );

    const isNew = modelIntroPhase[focusId] === currentPhase;
    const mtp = userState.matchesThisPhase[focusId] || 0;

    let oppId;
    const r = Math.random();

    if (r < EXPLORE_RATE) {
      oppId = pickRandomOther(focusId, availableModelIds);
    } else if (isNew && mtp < bootstrapTarget && anchors.length > 0) {
      oppId = anchors[Math.floor(Math.random() * anchors.length)];
      if (oppId === focusId) oppId = pickRandomOther(focusId, availableModelIds);
    } else {
      oppId = pickNeighbor(focusId, ranked, rankIndex, NEIGHBOR_K);
    }

    if (!oppId || oppId === focusId) oppId = pickRandomOther(focusId, availableModelIds);

    pairs.push({ modelA: focusId, modelB: oppId });

    userState.matchesThisPhase[focusId] = (userState.matchesThisPhase[focusId] || 0) + 1;
    userState.matchesThisPhase[oppId] = (userState.matchesThisPhase[oppId] || 0) + 1;
  }

  // Must not return empty
  if (pairs.length === 0) {
    const a = availableModelIds[0];
    const b = availableModelIds.length > 1 ? availableModelIds[1] : a;
    return { pairs: [{ modelA: a, modelB: b }], userState };
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  // Safe baseline: BT MM MLE + diagonal Fisher CIs
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  // id -> idx
  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  // wins matrix
  const wins = [];
  for (let i = 0; i < n; i++) wins.push(new Array(n).fill(0));

  for (const m of history) {
    const iA = idToIdx[m.modelA];
    const iB = idToIdx[m.modelB];
    if (iA === undefined || iB === undefined) continue;
    if (m.winner === m.modelA) wins[iA][iB]++; else wins[iB][iA]++;
  }

  // nij
  const nij = [];
  for (let i = 0; i < n; i++) nij.push(new Array(n).fill(0));
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) nij[i][j] = wins[i][j] + wins[j][i];

  // MM MLE in p-space
  const maxIter = 200;
  const tol = 1e-8;
  let p = new Array(n).fill(1.0);

  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) totalWins[i] += wins[i][j];

  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;

    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j || nij[i][j] === 0) continue;
        denom += nij[i][j] / (p[i] + p[j]);
      }
      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;
      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }

    // normalize geometric mean
    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-10));
    const geoMean = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geoMean;

    p = pNew;
    if (maxChange < tol) break;
  }

  // theta = log(p), centered
  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-10));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  // diag Fisher
  const fisherDiag = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || nij[i][j] === 0) continue;
      const pi = p[i], pj = p[j];
      const denom = (pi + pj) * (pi + pj);
      fisherDiag[i] += nij[i][j] * pi * pj / denom;
    }
  }

  const se = new Array(n);
  for (let i = 0; i < n; i++) se[i] = fisherDiag[i] < 1e-6 ? 2.0 : 1.0 / Math.sqrt(fisherDiag[i]);

  const z = 1.96;
  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const half = z * se[i];
    out[id] = { strength: theta[i], lower: theta[i] - half, upper: theta[i] + half };
  }
  return out;
}

// ======================= Helpers =======================

function ensureState(availableIds, st, modelIntroPhase, priorVar) {
  // choose a fixed reference model once (first ever seen)
  if (!st.refId) st.refId = availableIds[0];

  // init mu/matches for all, and add new dims into C
  for (const id of availableIds) {
    if (st.mu[id] === undefined) {
      // initialize new model at median of established mus (robust, no drift assumption)
      st.mu[id] = medianOfEstablishedMu(st);
    }
    if (st.matches[id] === undefined) st.matches[id] = 0;
    if (st.matchesThisPhase[id] === undefined) st.matchesThisPhase[id] = 0;

    if (id !== st.refId && st.idToLocal[id] === undefined) {
      const idx = st.localIds.length;
      st.localIds.push(id);
      st.idToLocal[id] = idx;
      expandCovariance(st, priorVar);
    }
  }

  // keep reference mu pinned at 0 (for stability)
  const shift = st.mu[st.refId] || 0;
  if (Math.abs(shift) > 1e-12) {
    for (const id of availableIds) st.mu[id] = (st.mu[id] || 0) - shift;
    st.mu[st.refId] = 0;
  }
}

function syncMuFromHistory(systemState, st, eta0) {
  const { history, availableModelIds } = systemState;
  const start = st.processed || 0;
  const end = history.length;

  for (let k = start; k < end; k++) {
    const m = history[k];
    const a = m.modelA;
    const b = m.modelB;

    // skip if somehow unknown
    if (st.mu[a] === undefined || st.mu[b] === undefined) continue;

    // update per-phase observed counts (these are real matches now)
    if (m.phase === st.currentPhase) {
      st.matchesThisPhase[a] = (st.matchesThisPhase[a] || 0) + 1;
      st.matchesThisPhase[b] = (st.matchesThisPhase[b] || 0) + 1;
    }

    const muA = st.mu[a];
    const muB = st.mu[b];
    const pA = sigmoid(muA - muB);
    const yA = m.winner === a ? 1 : 0;
    const err = yA - pA;

    const mA = st.matches[a] || 0;
    const mB = st.matches[b] || 0;
    const eta = eta0 / Math.sqrt(1 + 0.02 * (mA + mB));

    st.mu[a] = muA + eta * err;
    st.mu[b] = muB - eta * err;

    st.matches[a] = mA + 1;
    st.matches[b] = mB + 1;

    // pin reference at 0 (cheap recenter)
    const shift = st.mu[st.refId] || 0;
    if (Math.abs(shift) > 1e-9) {
      for (const id of availableModelIds) st.mu[id] = (st.mu[id] || 0) - shift;
      st.mu[st.refId] = 0;
    }
  }

  st.processed = end;
}

function expandCovariance(st, priorVar) {
  const m = st.localIds.length; // new size
  if (m === 1) {
    st.C = [[priorVar]];
    return;
  }
  // add a new column to existing rows
  for (let i = 0; i < m - 1; i++) st.C[i].push(0);
  // add new row
  const row = new Array(m).fill(0);
  row[m - 1] = priorVar;
  st.C.push(row);
}

function buildFocusPool(availableIds, st, newIds, topK) {
  const pool = new Set();
  for (const id of newIds) if (id !== st.refId) pool.add(id);

  // add most-uncertain by diag(C)
  const scored = [];
  for (const id of availableIds) {
    if (id === st.refId) continue;
    scored.push([id, varianceOf(id, st)]);
  }
  scored.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < Math.min(topK, scored.length); i++) pool.add(scored[i][0]);

  return Array.from(pool);
}

function focusWeight(id, st, modelIntroPhase, currentPhase) {
  const varI = varianceOf(id, st);

  // underplayed this phase gets priority (convex penalty avoidance)
  const mtp = st.matchesThisPhase[id] || 0;
  const under = 1 / Math.sqrt(1 + mtp);

  // new model boost (generic "we know less about new entrants")
  const isNew = modelIntroPhase[id] === currentPhase;
  const newBoost = isNew ? 2.4 : 1.0;

  // small epsilon to avoid zero
  return (varI + 1e-8) * under * newBoost;
}

function varianceOf(id, st) {
  if (id === st.refId) {
    // reference has no coordinate; treat as low variance for focus selection
    return 0.0;
  }
  const idx = st.idToLocal[id];
  if (idx === undefined) return 0.0;
  return Math.max(1e-10, st.C[idx][idx]);
}

function pickAnchors(ranked, st, newIds) {
  const newSet = new Set(newIds);
  const established = ranked.filter((id) => id !== st.refId && !newSet.has(id) && (st.matches[id] || 0) >= 200);

  if (established.length < 5) {
    // fallback: just take a few from ranked
    return ranked.filter((id) => id !== st.refId).slice(0, Math.min(7, ranked.length));
  }

  const qs = [0.10, 0.30, 0.50, 0.70, 0.90];
  const out = [];
  for (const q of qs) {
    const idx = Math.min(established.length - 1, Math.floor(q * (established.length - 1)));
    out.push(established[idx]);
  }
  return Array.from(new Set(out));
}

function anchorsSetHas(anchors, id) {
  // anchors length is tiny, linear is fine
  for (const a of anchors) if (a === id) return true;
  return false;
}

function buildOpponentCandidates(focusId, availableIds, ranked, rankIndex, anchors, neighborK, randomCands, exploreRate) {
  const set = new Set();

  // neighbors by rank (small window around focus)
  const idx = rankIndex[focusId];
  if (idx !== undefined) {
    const lo = Math.max(0, idx - neighborK);
    const hi = Math.min(ranked.length - 1, idx + neighborK);
    for (let j = lo; j <= hi; j++) {
      const cand = ranked[j];
      if (cand && cand !== focusId) set.add(cand);
    }
  }

  // anchors
  for (const a of anchors) if (a && a !== focusId) set.add(a);

  // random candidates
  for (let t = 0; t < randomCands; t++) {
    const r = availableIds[Math.floor(Math.random() * availableIds.length)];
    if (r && r !== focusId) set.add(r);
  }

  // if exploring, sprinkle one more random to avoid degeneracy
  if (Math.random() < exploreRate) {
    const r = availableIds[Math.floor(Math.random() * availableIds.length)];
    if (r && r !== focusId) set.add(r);
  }

  return Array.from(set);
}

function deltaForPair(idA, idB, st) {
  if (idA === idB) return null;

  const muA = st.mu[idA] || 0;
  const muB = st.mu[idB] || 0;

  const p = sigmoid(muA - muB);
  let w = p * (1 - p);
  if (w < 1e-6) w = 1e-6; // avoid 0

  // u = e_i - e_j in reduced coordinates (excluding ref)
  const iRef = idA === st.refId;
  const jRef = idB === st.refId;
  if (iRef && jRef) return null;

  const i = iRef ? -1 : st.idToLocal[idA];
  const j = jRef ? -1 : st.idToLocal[idB];
  const C = st.C;
  const m = C.length;

  // s = u^T C u
  let s = 0;
  if (i >= 0 && j >= 0) {
    s = C[i][i] + C[j][j] - 2 * C[i][j];
  } else if (i >= 0 && j === -1) {
    s = C[i][i];
  } else if (i === -1 && j >= 0) {
    s = C[j][j];
  }

  if (s < 0) s = 0; // numerical guard

  // Cu = C u (u has at most two nonzeros)
  const Cu = new Array(m).fill(0);
  if (i >= 0 && j >= 0) {
    for (let k = 0; k < m; k++) Cu[k] = C[k][i] - C[k][j];
  } else if (i >= 0 && j === -1) {
    for (let k = 0; k < m; k++) Cu[k] = C[k][i];
  } else if (i === -1 && j >= 0) {
    for (let k = 0; k < m; k++) Cu[k] = -C[k][j];
  }

  // ||Cu||^2
  let norm2 = 0;
  for (let k = 0; k < m; k++) norm2 += Cu[k] * Cu[k];

  const denom = 1 + w * s;
  const delta = denom > 1e-12 ? (w * norm2) / denom : 0;

  return { delta, Cu, s, w };
}

function woodburyUpdate(st, Cu, s, w) {
  const C = st.C;
  const m = C.length;
  const denom = 1 + w * s;
  if (denom <= 1e-12) return;

  const factor = w / denom;

  // C <- C - factor * (Cu Cu^T)
  for (let a = 0; a < m; a++) {
    const rowA = C[a];
    const cua = Cu[a];
    for (let b = 0; b <= a; b++) {
      const v = rowA[b] - factor * cua * Cu[b];
      rowA[b] = v;
      if (b !== a) C[b][a] = v;
    }
  }

  // keep diagonals non-negative-ish
  for (let i = 0; i < m; i++) {
    if (C[i][i] < 1e-10) C[i][i] = 1e-10;
  }
}

function pickNeighbor(id, ranked, rankIndex, window) {
  const idx = rankIndex[id];
  if (idx === undefined) return ranked[Math.floor(Math.random() * ranked.length)];

  const lo = Math.max(0, idx - window);
  const hi = Math.min(ranked.length - 1, idx + window);

  for (let t = 0; t < 20; t++) {
    const j = lo + Math.floor(Math.random() * (hi - lo + 1));
    const cand = ranked[j];
    if (cand && cand !== id) return cand;
  }
  if (idx > 0) return ranked[idx - 1];
  return ranked[Math.min(ranked.length - 1, idx + 1)];
}

function pickRandomOther(id, ids) {
  let other = id;
  for (let t = 0; t < 25 && other === id; t++) {
    other = ids[Math.floor(Math.random() * ids.length)];
  }
  if (other === id) {
    for (const x of ids) if (x !== id) return x;
  }
  return other;
}

function weightedPick(ids, weightFn) {
  let total = 0;
  const w = new Array(ids.length);
  for (let i = 0; i < ids.length; i++) {
    const wi = Math.max(1e-14, weightFn(ids[i]));
    w[i] = wi;
    total += wi;
  }
  let r = Math.random() * total;
  for (let i = 0; i < ids.length; i++) {
    r -= w[i];
    if (r <= 0) return ids[i];
  }
  return ids[ids.length - 1];
}

function medianOfEstablishedMu(st) {
  const vals = [];
  for (const id in st.mu) {
    if ((st.matches[id] || 0) > 0) vals.push(st.mu[id] || 0);
  }
  if (vals.length === 0) return 0;
  vals.sort((a, b) => a - b);
  return vals[Math.floor(vals.length / 2)];
}

function sigmoid(x) {
  if (x > 20) return 1;
  if (x < -20) return 0;
  return 1 / (1 + Math.exp(-x));
}

function clamp(x, lo, hi) {
  return Math.max(lo, Math.min(hi, x));
}
`},{id:"baseline-a-opt-weighted",name:"A-Opt Weighted",code:`// A-Optimal Active Learning with Urgency Weighting
//
// Strategy:
// 1. Maintain the full inverse Fisher Information matrix (Covariance C).
// 2. Select batches by greedily maximizing the reduction in Trace(C) (A-Optimality).
// 3. Weight selection probability by model "Urgency" (New models > High Variance models > others).
// 4. Update C virtually during batch selection using Woodbury identity to diversify the batch.
// 5. Report CIs using full covariance to ensure valid coverage under active sampling.

function init() {
  return {
    processed: 0,
    mu: {},      // Online Elo ratings for computing 'p' matching weights
    matches: {}, // Match counts
  };
}

// --------------------------------------------------------------------------
// PAIR SELECTION (Visualized A-Opt)
// --------------------------------------------------------------------------

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, currentPhase, modelIntroPhase, history } = systemState;

  // Sync approximate ratings (mu) for pairing math
  syncState(systemState, userState);

  // 1. Compute current Covariance Matrix (Baseline)
  const n = availableModelIds.length;
  let C, idToIdx;

  if (history.length < 5) {
    // Prior: Identity matrix if practically no history
    C = new Array(n);
    idToIdx = {};
    for (let i = 0; i < n; i++) {
      idToIdx[availableModelIds[i]] = i;
      C[i] = new Array(n).fill(0);
      C[i][i] = 1.0;
    }
  } else {
    // Current Fisher Inverse from MLE
    const mleMap = computeMLE(availableModelIds, history);
    idToIdx = mleMap.idToIdx;
    const L = computeLaplacian(n, mleMap.p, mleMap.nij);
    // Add small ridge for numerical stability during design planning
    for (let i = 0; i < n; i++) L[i][i] += 1e-5;
    C = computeCovariance(L);
  }

  // 2. Setup Batch Urgency Weights
  // Heavily prioritize models introduced this phase to crush their initial variance
  const urgency = new Array(n).fill(1.0);
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const intro = modelIntroPhase[id];
    if (intro === currentPhase) urgency[i] = 20.0;     // Critical priority
    else if (intro === currentPhase - 1) urgency[i] = 3.0; // High priority
  }

  const batchSize = Math.min(300, remainingInPhase);
  const pairs = [];

  // Temporary vectors for Woodbury updates
  const vVec = new Array(n);

  // 3. Greedy Selection Loop
  for (let b = 0; b < batchSize; b++) {

    // A. Pick 'Focus' model i based on Prob ~ (Variance * Urgency)^2
    // This randomly selects high-impact models to fixate on.
    let sumW = 0;
    const weights = new Array(n);
    for (let i = 0; i < n; i++) {
      const v = C[i][i];
      // Squared weight accentuates the "worst offenders"
      const w = (v * v) * urgency[i];
      weights[i] = w;
      sumW += w;
    }

    let iIdx = -1;
    let r = Math.random() * sumW;
    for (let i = 0; i < n; i++) {
      r -= weights[i];
      if (r <= 0) { iIdx = i; break; }
    }
    if (iIdx === -1) iIdx = n - 1; // Fallback

    // B. Pick Opponent j to maximize A-Opt Gain
    // Measures reduction in Trace(C) if we pair (i, j)
    const idI = availableModelIds[iIdx];
    const muI = userState.mu[idI] || 0;

    let bestJ = -1;
    let bestScore = -1;
    let bestTerm = 0; // u^T C u
    let bestW = 0;    // p(1-p)

    // Scan all opponents (O(N) per step, N <= 120, very fast)
    for (let j = 0; j < n; j++) {
      if (iIdx === j) continue;

      const idJ = availableModelIds[j];
      const muJ = userState.mu[idJ] || 0;

      // Predicted Fisher Information weight w = p(1-p)
      const prob = 1.0 / (1.0 + Math.exp(-(muI - muJ)));
      const w = prob * (1.0 - prob);

      // Variance of the difference: u^T C u = Cii + Cjj - 2Cij
      const term = Math.max(1e-12, C[iIdx][iIdx] + C[j][j] - 2 * C[iIdx][j]);

      // A-Optimal Gain = (w * term^2) / (1 + w * term)
      const gain = (w * term * term) / (1.0 + w * term);

      if (gain > bestScore) {
        bestScore = gain;
        bestJ = j;
        bestTerm = term;
        bestW = w;
      }
    }

    // Fallback if matrix is degenerate (shouldn't happen with ridge)
    if (bestJ === -1) {
       do { bestJ = Math.floor(Math.random() * n); } while(bestJ === iIdx);
       // fake terms for update
       bestTerm = C[iIdx][iIdx] + C[bestJ][bestJ] - 2 * C[iIdx][bestJ];
       bestW = 0.25;
    }

    pairs.push({ modelA: availableModelIds[iIdx], modelB: availableModelIds[bestJ] });

    // C. Virtual Update of C via Woodbury
    // Prevents selecting the exact same pair repeatedly in one batch.
    // C_new = C - alpha * (v)(v)^T, where v = C(e_i - e_j)

    const denom = 1.0 + bestW * bestTerm;
    const alpha = bestW / denom;

    // Compute v = Col(i) - Col(j)
    for (let k = 0; k < n; k++) {
      vVec[k] = C[k][iIdx] - C[k][bestJ];
    }

    // Rank-1 update
    for (let r = 0; r < n; r++) {
      const vr = vVec[r];
      // Symmetric update, only need tri loop
      for (let c = r; c < n; c++) {
        const delta = alpha * vr * vVec[c];
        C[r][c] -= delta;
        if (r !== c) C[c][r] = C[r][c]; // Mirror
      }
    }
  }

  return { pairs, userState };
}

// --------------------------------------------------------------------------
// ESTIMATION & REPORTING
// --------------------------------------------------------------------------

function getEstimates(systemState, userState) {
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds)
      out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  // 1. Standard BT MLE
  const { p, nij } = computeMLE(availableModelIds, history);

  // 2. Full Laplacian (Fisher Matrix)
  const L = computeLaplacian(n, p, nij);

  // 3. True Covariance (Pseudoinverse)
  // Essential for valid CIs in non-random/active graphs
  const C = computeCovariance(L);

  // 4. Report
  // z=1.96 for valid 95% coverage
  const z = 1.96;

  // Log-odds centering
  const theta = new Array(n);
  let meanTheta = 0;
  for (let i = 0; i < n; i++) {
    theta[i] = Math.log(Math.max(1e-12, p[i]));
    meanTheta += theta[i];
  }
  meanTheta /= n;

  const out = {};
  for (let i = 0; i < n; i++) {
    const id = availableModelIds[i];
    const val = theta[i] - meanTheta;
    const se = Math.sqrt(Math.max(0, C[i][i]));
    out[id] = {
      strength: val,
      lower: val - z * se,
      upper: val + z * se
    };
  }

  return out;
}

// --------------------------------------------------------------------------
// HELPERS / ALGORITHMS
// --------------------------------------------------------------------------

function syncState(systemState, userState) {
  const { availableModelIds, history } = systemState;
  // Initialize missing
  for (const id of availableModelIds) {
    if (userState.mu[id] === undefined) userState.mu[id] = 0;
    if (userState.matches[id] === undefined) userState.matches[id] = 0;
  }

  // Fast online Elo approximation for pairing weights
  // (Actual reporting uses full MLE, this is just for O(1) loop lookups)
  const start = userState.processed || 0;
  for (let k = start; k < history.length; k++) {
    const m = history[k];
    const muA = userState.mu[m.modelA];
    const muB = userState.mu[m.modelB];
    if (muA === undefined || muB === undefined) continue;

    const probA = 1.0 / (1.0 + Math.exp(muB - muA));
    const scoreA = (m.winner === m.modelA) ? 1.0 : 0.0;

    // Constant K for pairing intuition
    const K = 0.4;
    const diff = K * (scoreA - probA);
    userState.mu[m.modelA] += diff;
    userState.mu[m.modelB] -= diff;
  }
  userState.processed = history.length;
}

function computeMLE(ids, history) {
  const n = ids.length;
  const idToIdx = {};
  for(let i=0; i<n; i++) idToIdx[ids[i]] = i;

  const wins = new Array(n).fill(0).map(() => 0); // aggregated wins per model
  const nij = new Array(n); // adjacency matrix
  for(let i=0; i<n; i++) nij[i] = new Array(n).fill(0);

  for(const m of history) {
    const i = idToIdx[m.modelA];
    const j = idToIdx[m.modelB];
    if (i !== undefined && j !== undefined) {
      if (m.winner === m.modelA) wins[i]++; else wins[j]++;
      nij[i][j]++; nij[j][i]++;
    }
  }

  // MM Algorithm for BT MLE
  let p = new Array(n).fill(1.0);
  for(let iter=0; iter<100; iter++) {
    const pNew = new Array(n);
    let maxDiff = 0;
    for(let i=0; i<n; i++) {
        let denom = 0;
        for(let j=0; j<n; j++) {
            if (i !== j && nij[i][j] > 0) {
               denom += nij[i][j] / (p[i] + p[j]);
            }
        }
        if (denom === 0) pNew[i] = p[i];
        else pNew[i] = wins[i] / denom;
        maxDiff = Math.max(maxDiff, Math.abs(pNew[i] - p[i]));
    }

    // Normalize geometric mean
    let logSum = 0;
    for(let k=0; k<n; k++) logSum += Math.log(Math.max(1e-12, pNew[k]));
    const gm = Math.exp(logSum / n);
    for(let k=0; k<n; k++) pNew[k] /= gm;

    p = pNew;
    if (maxDiff < 1e-5) break;
  }

  return { p, nij, idToIdx };
}

function computeLaplacian(n, p, nij) {
  const L = new Array(n);
  for (let i = 0; i < n; i++) L[i] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nij[i][j] === 0) continue;
      // Fisher Info = n * p_i * p_j / (p_i + p_j)^2
      const w = (nij[i][j] * p[i] * p[j]) / Math.pow(p[i] + p[j], 2);
      L[i][i] += w;
      L[j][j] += w;
      L[i][j] -= w;
      L[j][i] -= w;
    }
  }
  return L;
}

function computeCovariance(L) {
  const n = L.length;
  // Compute Pseudoinverse of Laplacian assuming sum(theta)=0 constraint
  // Cov = (L + 1/n J)^-1 - 1/n J

  // 1. A = L + 1/n
  const A = new Array(n);
  const invN = 1.0 / n;
  for (let i = 0; i < n; i++) {
    A[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      A[i][j] = L[i][j] + invN;
    }
  }

  // 2. Invert A (Cholesky is safe as A is SPD)
  const Ainv = invertSPD(A);

  // 3. Shift back
  const C = new Array(n);
  for (let i = 0; i < n; i++) {
    C[i] = new Array(n);
    for (let j = 0; j < n; j++) {
       C[i][j] = Ainv[i][j] - invN;
    }
  }
  return C;
}

function invertSPD(M) {
  // Cholesky Decomposition & Inversion
  const n = M.length;
  const L = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = M[i][j];
      for (let k = 0; k < j; k++) sum -= L[i][k] * L[j][k];
      if (i === j) L[i][j] = Math.sqrt(Math.max(1e-12, sum));
      else L[i][j] = sum / L[j][j];
    }
  }

  const Linv = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    Linv[i][i] = 1.0 / L[i][i];
    for (let j = 0; j < i; j++) {
      let sum = 0;
      for (let k = j; k < i; k++) sum -= L[i][k] * Linv[k][j];
      Linv[i][j] = sum / L[i][i];
    }
  }

  // M^-1 = Linv^T * Linv
  const Inv = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = j; k < n; k++) sum += Linv[k][i] * Linv[k][j];
      Inv[i][j] = sum;
      Inv[j][i] = sum;
    }
  }
  return Inv;
}
`},{id:"baseline-fisher-greedy",name:"Fisher Greedy",code:`/*
   Fisher-Greedy Active Learning
   -----------------------------
   A pure implementation of A-Optimal design for Bradley-Terry models.

   1. Estimates CIs using the Laplacian pseudoinverse (valid coverage).
   2. Selects pairs by greedily maximizing the reduction in Trace(Covariance).
   3. Simulates outcomes using Woodbury matrix updates for O(N^2) speed.
*/

function init() {
  return {
    // Only need online history tracking for pairing weights
    mu: {},
    processed: 0
  };
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, history } = systemState;

  // 1. Update online Elo ratings (used for pairing probabilities w_ij)
  syncOnlineRatings(systemState, userState);

  // 2. Build the current Covariance Matrix
  //    This represents our uncertainty about the world *before* this batch.
  const N = availableModelIds.length;

  // MLE estimates for p (win probs)
  const p = getVirtualP(availableModelIds, userState.mu);

  // Fisher Information (Laplacian)
  const L = buildLaplacian(availableModelIds, history, p);

  // Covariance = Inverse(Fisher).
  // We use a regularized Cholesky inversion to handle disconnected graphs/new models safely.
  const C = invertFisher(L, N);

  // 3. Greedy Batch Composition
  //    We simulate choosing matches and updating C without observing results yet.
  const batchSize = Math.min(remainingInPhase, 300); // stable batch size
  const pairs = [];

  // Pre-allocated buffers for Woodbury updates
  const vDiff = new Array(N);

  for (let b = 0; b < batchSize; b++) {

    // Step A: Pick a "Focus" model.
    // Heuristic: Sample proportional to squared variance (C_ii^2).
    // This focuses heavily on the most uncertain models (e.g. new ones)
    // but maintains some diversity vs. purely deterministic max().
    const focusIdx = sampleFocusModel(C, N);

    // Step B: Find the single best opponent.
    // We scan all candidates to find j that maximizes Trace Reduction.
    // Delta_Trace ~ (w * ||C_i - C_j||^2) / (1 + w * Var_Diff)

    let bestIdx = -1;
    let bestGain = -1;
    let bestMatchW = 0;
    let bestMatchVar = 0;

    for (let j = 0; j < N; j++) {
      if (focusIdx === j) continue;

      // Predicted match weight w = p(1-p) based on current ratings
      const prob = 1.0 / (1.0 + Math.exp(userState.mu[availableModelIds[j]] - userState.mu[availableModelIds[focusIdx]]));
      const w = Math.max(0.1, prob * (1.0 - prob)); // floor to encourage exploration

      // Variance of the difference pairwise: s = u^T C u = Cii + Cjj - 2Cij
      const varDiff = C[focusIdx][focusIdx] + C[j][j] - 2 * C[focusIdx][j];

      // Squared Norm of C(e_i - e_j)
      // Since C is symmetric, this is sum((Col_i - Col_j)^2)
      let normSq = 0;
      for (let k = 0; k < N; k++) {
        const d = C[k][focusIdx] - C[k][j];
        normSq += d * d;
      }

      // Woodbury Gain Formula for A-Optimality (Trace reduction)
      const gain = (w * normSq) / (1 + w * varDiff);

      if (gain > bestGain) {
        bestGain = gain;
        bestIdx = j;
        bestMatchW = w;
        bestMatchVar = varDiff;
      }
    }

    // Fallback for safety
    if (bestIdx === -1) {
       do { bestIdx = Math.floor(Math.random() * N); } while(bestIdx === focusIdx);
    }

    pairs.push({ modelA: availableModelIds[focusIdx], modelB: availableModelIds[bestIdx] });

    // Step C: Virtual Update of Covariance
    // We update C in-place to reflect that we "know" this match is happening.
    // This prevents the algorithm from picking the same optimal pair 50 times.
    applyWoodburyUpdate(C, focusIdx, bestIdx, bestMatchW, bestMatchVar, N, vDiff);
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  const { availableModelIds, history } = systemState;
  const N = availableModelIds.length;

  // Edge case: no history
  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -2, upper: 2 };
    return out;
  }

  // 1. Compute Standard BT MLE
  const { p, nij, idToIdx } = computeMLE(availableModelIds, history);

  // 2. Build Laplacian
  //    This time using the exact MLE p for precision
  const L = new Array(N).fill(0).map(() => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nij[i][j] === 0) continue;
      const w = (nij[i][j] * p[i] * p[j]) / Math.pow(p[i] + p[j], 2);
      L[i][i] += w;
      L[j][j] += w;
      L[i][j] -= w;
      L[j][i] -= w;
    }
  }

  // 3. Compute Covariance via Pseudoinverse
  const C = invertFisher(L, N);

  // 4. Output Results
  // Centering Latent Strengths (theta)
  const theta = new Array(N);
  let meanTheta = 0;
  for (let i = 0; i < N; i++) {
    theta[i] = Math.log(Math.max(1e-9, p[i]));
    meanTheta += theta[i];
  }
  meanTheta /= N;

  const out = {};
  // Z score 1.96 for 95% Confidence
  const Z = 1.96;

  for (let i = 0; i < N; i++) {
    const val = theta[i] - meanTheta;
    // Standard Error is sqrt of diagonal of Inverse Fisher
    const se = Math.sqrt(Math.max(1e-9, C[i][i]));

    out[availableModelIds[i]] = {
      strength: val,
      lower: val - Z * se,
      upper: val + Z * se
    };
  }

  return out;
}

// -----------------------------------------------------------------------
// Helper: Matrix Math & Updates
// -----------------------------------------------------------------------

function invertFisher(L, N) {
  // To verify connectedness and ensure valid inversion, we add:
  // 1. A small diagonal ridge (epsilon) for isolated nodes.
  // 2. The rank-1 adjustment J/N to handle the sum=0 constraint of BT.
  //    Inv = (L + eps*I + J/N)^-1 - J/N

  const eps = 0.05; // Mild regularization for unconnected nodes
  const invN = 1.0 / N;

  const A = new Array(N);
  for(let i=0; i<N; i++) {
    A[i] = new Array(N);
    for(let j=0; j<N; j++) A[i][j] = L[i][j] + invN;
    A[i][i] += eps;
  }

  // Cholesky Inversion of symmetric positive-definite A
  const Ainv = choleskyInverse(A, N);

  // Shift back to zero-sum gauge
  const C = new Array(N);
  for(let i=0; i<N; i++) {
    C[i] = new Array(N);
    for(let j=0; j<N; j++) C[i][j] = Ainv[i][j] - invN;
  }
  return C;
}

function applyWoodburyUpdate(C, i, j, w, varDiff, N, buffer) {
  // Woodbury Identity: C' = C - (C u)(C u)^T * Alpha
  // where u = e_i - e_j
  // Alpha = w / (1 + w * u^T C u)

  const alpha = w / (1 + w * varDiff);

  // Compute vector v = C u = Col_i - Col_j
  for(let k=0; k<N; k++) {
    buffer[k] = C[k][i] - C[k][j];
  }

  // Rank-1 Update
  for(let r=0; r<N; r++) {
    const vr = buffer[r];
    // Optimize symmetric update
    for(let c=r; c<N; c++) {
      const delta = alpha * vr * buffer[c];
      C[r][c] -= delta;
      if (r !== c) C[c][r] = C[r][c];
    }
  }
}

function buildLaplacian(ids, history, p) {
  const N = ids.length;
  // Map IDs
  const idToIdx = {};
  for(let i=0; i<N; i++) idToIdx[ids[i]] = i;

  // Aggregate matches for speed
  const nij = new Array(N).fill(0).map(() => new Array(N).fill(0));
  for(const m of history) {
    const u = idToIdx[m.modelA];
    const v = idToIdx[m.modelB];
    if (u<0 || v<0) continue; // safety
    nij[u][v]++;
    nij[v][u]++;
  }

  const L = new Array(N).fill(0).map(() => new Array(N).fill(0));

  for(let i=0; i<N; i++) {
    for(let j=i+1; j<N; j++) {
      const n = nij[i][j];
      // Add a tiny 'phantom' weight to graph to ensure
      // strict connectivity for math stability (ridge equivalent)
      const w_obs = (n * p[i] * p[j]) / Math.pow(p[i] + p[j], 2);
      const w_prior = 1e-4;
      const w = w_obs + w_prior;

      L[i][i] += w; L[j][j] += w;
      L[i][j] -= w; L[j][i] -= w;
    }
  }
  return L;
}

// -----------------------------------------------------------------------
// Helper: Selection Heuristics
// -----------------------------------------------------------------------

function sampleFocusModel(C, N) {
  // Sample proportional to variance squared (C_ii^2).
  // This naturally targets new/uncertain models without explicit 'intro' tracking.
  const weights = new Array(N);
  let totalW = 0;
  for(let i=0; i<N; i++) {
    const v = C[i][i];
    const w = v * v; // squaring sharpens the focus on high-variance models
    weights[i] = w;
    totalW += w;
  }

  let r = Math.random() * totalW;
  for(let i=0; i<N; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return N-1;
}

function syncOnlineRatings(systemState, userState) {
  const { availableModelIds, history } = systemState;
  // Initialize
  for(const id of availableModelIds) if(userState.mu[id] === undefined) userState.mu[id] = 0;

  // Process only new history
  const start = userState.processed || 0;
  for(let k=start; k<history.length; k++) {
    const m = history[k];
    const a = m.modelA; const b = m.modelB;
    // Simple SGD update (Elo-like)
    const probA = 1.0 / (1.0 + Math.exp(userState.mu[b] - userState.mu[a]));
    const actual = (m.winner === a) ? 1.0 : 0.0;
    const step = 0.2; // Fast learning rate for approx weights
    const delta = step * (actual - probA);
    userState.mu[a] += delta;
    userState.mu[b] -= delta;
  }
  userState.processed = history.length;
}

function getVirtualP(ids, mu) {
  // Returns p vector based on current Elo ratings
  // Used for planning the next batch
  const N = ids.length;
  const p = new Array(N);
  for(let i=0; i<N; i++) p[i] = Math.exp(mu[ids[i]]);
  // Check bounds
  for(let i=0; i<N; i++) if(!isFinite(p[i])) p[i] = 1.0;
  return p;
}

// -----------------------------------------------------------------------
// Helper: Math Essentials (MLE & Cholesky)
// -----------------------------------------------------------------------

function computeMLE(ids, history) {
  const N = ids.length;
  const idToIdx = {};
  for(let i=0; i<N; i++) idToIdx[ids[i]] = i;

  const nij = new Array(N).fill(0).map(()=>new Array(N).fill(0));
  const wins = new Array(N).fill(0);

  for(const m of history) {
    const u = idToIdx[m.modelA];
    const v = idToIdx[m.modelB];
    if(u===undefined || v===undefined) continue;
    nij[u][v]++; nij[v][u]++;
    if(m.winner === m.modelA) wins[u]++; else wins[v]++;
  }

  // MM Algorithm
  let p = new Array(N).fill(1.0);
  for(let iter=0; iter<60; iter++) {
    const pNext = new Array(N);
    let maxDiff = 0;
    for(let i=0; i<N; i++) {
        let denom = 0;
        for(let j=0; j<N; j++) {
            if(i!==j && nij[i][j]>0) denom += nij[i][j]/(p[i]+p[j]);
        }
        pNext[i] = (denom === 0) ? p[i] : (wins[i] / denom);
        maxDiff = Math.max(maxDiff, Math.abs(pNext[i] - p[i]));
    }
    // GeoMean normalization
    let logSum=0; for(let k=0; k<N; k++) logSum += Math.log(Math.max(1e-12, pNext[k]));
    const gm = Math.exp(logSum/N);
    for(let k=0; k<N; k++) pNext[k] /= gm;

    p = pNext;
    if(maxDiff < 1e-4) break;
  }
  return { p, nij, idToIdx };
}

function choleskyInverse(A, n) {
  const L = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // Decompose
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = A[i][j];
      for (let k = 0; k < j; k++) sum -= L[i][k] * L[j][k];
      if (i === j) L[i][j] = Math.sqrt(Math.max(1e-12, sum));
      else L[i][j] = sum / L[j][j];
    }
  }

  // Invert L
  const Li = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    Li[i][i] = 1.0 / L[i][i];
    for (let j = 0; j < i; j++) {
      let sum = 0;
      for (let k = j; k < i; k++) sum -= L[i][k] * Li[k][j];
      Li[i][j] = sum / L[i][i];
    }
  }

  // Form Inv = Li^T * Li
  const Inv = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = j; k < n; k++) sum += Li[k][i] * Li[k][j];
      Inv[i][j] = sum;
      Inv[j][i] = sum;
    }
  }
  return Inv;
}
`},{id:"baseline-fisher-greedy-mle",name:"Fisher-Greedy MLE",code:`// ============================================================================
// FISHER-GREEDY A-OPTIMAL ACTIVE LEARNING (MLE)
//
// 1. Objective: Minimize Sum of Squared CI Widths (Trace of Covariance).
// 2. Selection: Greedily pick pairs maximizing Trace Reduction (A-Optimality).
// 3. Inference: Standard BT MLE + Full Laplacian Pseudoinverse for valid CIs.
//
// This approach replaces "heuristics" (urgency, anchors, starvation) with
// pure linear algebra. The Covariance matrix naturally screams "I know nothing
// about this node" (High Variance), automatically driving selection to
// new models and valid opponents without manual rules.
// ============================================================================

/*
  Implementation notes vs "Fisher Greedy":
  - Uses incremental sufficient stats + quick BT MLE for planning weights.
  - Avoids Elo-based w-weights.
*/

function init() {
  return {
    processed: 0,
    wins: {}, // { [id]: number }
    matches: {} // { [idA]: { [idB]: number } }
  };
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase } = systemState;
  userState = userState || init();

  // 1) Incrementally update sufficient statistics from history
  updateStats(systemState, userState);

  const N = availableModelIds.length;
  if (N < 2) {
    const a = availableModelIds[0] || "a";
    return { pairs: [{ modelA: a, modelB: a }], userState };
  }

  // Map IDs -> 0..N-1 for matrix math
  const idToIdx = {};
  for (let i = 0; i < N; i++) idToIdx[availableModelIds[i]] = i;

  // 2) Quick MLE for planning weights
  const p = fitBradleyTerry(availableModelIds, userState, 20);

  // 3) Current covariance C = Fisher^+ (approx via regularized inversion)
  const L = buildLaplacian(availableModelIds, userState.matches, p, idToIdx);
  const C = invertFisher(L, N);

  // 4) Greedy A-optimal batch selection with Woodbury updates
  const batchSize = Math.min(remainingInPhase, 300);
  const pairs = [];
  const vBuffer = new Array(N);

  for (let b = 0; b < batchSize; b++) {
    // Choose focus model proportional to variance^2
    const idxA = sampleHighVarianceNode(C, N);

    let bestIdxB = -1;
    let bestGain = -1;
    let bestW = 0;
    let bestVarTerm = 0;

    for (let idxB = 0; idxB < N; idxB++) {
      if (idxA === idxB) continue;

      // w = p(1-p) for this (i,j)
      const prob = p[idxA] / (p[idxA] + p[idxB]);
      const w = Math.max(0.01, prob * (1.0 - prob));

      // u^T C u where u = e_i - e_j
      const varDiff = C[idxA][idxA] + C[idxB][idxB] - 2 * C[idxA][idxB];

      // ||C u||^2 = ||Col_i - Col_j||^2 (C symmetric)
      let normSq = 0;
      for (let k = 0; k < N; k++) {
        const diff = C[k][idxA] - C[k][idxB];
        normSq += diff * diff;
      }

      const gain = (w * normSq) / (1.0 + w * varDiff);

      if (gain > bestGain) {
        bestGain = gain;
        bestIdxB = idxB;
        bestW = w;
        bestVarTerm = varDiff;
      }
    }

    // Safety fallback
    if (bestIdxB === -1) {
      do {
        bestIdxB = Math.floor(Math.random() * N);
      } while (bestIdxB === idxA);
      bestW = 0.25;
      bestVarTerm = C[idxA][idxA] + C[bestIdxB][bestIdxB] - 2 * C[idxA][bestIdxB];
    }

    pairs.push({ modelA: availableModelIds[idxA], modelB: availableModelIds[bestIdxB] });

    // Virtual update of covariance for batch diversity
    applyVirtualUpdate(C, idxA, bestIdxB, bestW, bestVarTerm, N, vBuffer);
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  const { availableModelIds, history } = systemState;
  userState = userState || init();

  const N = availableModelIds.length;

  if (history.length === 0) {
    const out0 = {};
    for (const id of availableModelIds) out0[id] = { strength: 0, lower: -3, upper: 3 };
    return out0;
  }

  // Keep sufficient stats up to date
  updateStats(systemState, userState);

  // 1) Higher-precision MLE for reporting
  const p = fitBradleyTerry(availableModelIds, userState, 100);

  // 2) Full covariance from Fisher pseudoinverse
  const idToIdx = {};
  for (let i = 0; i < N; i++) idToIdx[availableModelIds[i]] = i;
  const L = buildLaplacian(availableModelIds, userState.matches, p, idToIdx);
  const C = invertFisher(L, N);

  // 3) Output log-strengths + Wald CIs
  const theta = new Array(N);
  let sumTheta = 0;
  for (let i = 0; i < N; i++) {
    theta[i] = Math.log(Math.max(1e-12, p[i]));
    sumTheta += theta[i];
  }
  const meanTheta = sumTheta / N;

  const out = {};
  const Z = 1.96;

  for (let i = 0; i < N; i++) {
    const val = theta[i] - meanTheta;
    const se = Math.sqrt(Math.max(1e-12, C[i][i]));
    out[availableModelIds[i]] = {
      strength: val,
      lower: val - Z * se,
      upper: val + Z * se
    };
  }

  return out;
}

// ---------------------------------------------------------------------------
// Core math
// ---------------------------------------------------------------------------

function fitBradleyTerry(ids, userState, iterations) {
  const N = ids.length;

  const idToIdx = {};
  for (let i = 0; i < N; i++) idToIdx[ids[i]] = i;

  // Dense wins per node
  const wins = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    const idA = ids[i];
    wins[i] = userState.wins[idA] || 0;
  }

  // Dense adjacency from sparse matches
  const nij = new Array(N);
  for (let i = 0; i < N; i++) nij[i] = new Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    const idA = ids[i];
    const opp = userState.matches[idA];
    if (!opp) continue;
    for (const idB in opp) {
      const j = idToIdx[idB];
      if (j !== undefined) nij[i][j] = opp[idB];
    }
  }

  // MM algorithm on p-space
  let p = new Array(N).fill(1.0);
  for (let iter = 0; iter < iterations; iter++) {
    const pNext = new Array(N);
    let maxDiff = 0;

    for (let i = 0; i < N; i++) {
      let denom = 0;
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        const t = nij[i][j];
        if (t > 0) denom += t / (p[i] + p[j]);
      }

      if (denom === 0) pNext[i] = p[i];
      else pNext[i] = wins[i] / denom;

      maxDiff = Math.max(maxDiff, Math.abs(pNext[i] - p[i]));
    }

    // Normalize geometric mean to 1 (fixes scale)
    let logSum = 0;
    for (let k = 0; k < N; k++) logSum += Math.log(Math.max(1e-12, pNext[k]));
    const gm = Math.exp(logSum / N);
    for (let k = 0; k < N; k++) pNext[k] /= gm;

    p = pNext;
    if (maxDiff < 1e-5) break;
  }

  // ensure finite
  for (let i = 0; i < N; i++) {
    if (!isFinite(p[i]) || p[i] <= 0) p[i] = 1.0;
  }

  return p;
}

function buildLaplacian(ids, matches, p, idToIdx) {
  const N = ids.length;
  const L = new Array(N);
  for (let i = 0; i < N; i++) L[i] = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    const idA = ids[i];
    const opp = matches[idA];
    if (!opp) continue;

    for (const idB in opp) {
      const j = idToIdx[idB];
      if (j === undefined || j <= i) continue;

      const n_ij = opp[idB];
      const denom = p[i] + p[j];
      const w = (n_ij * p[i] * p[j]) / (denom * denom);

      L[i][i] += w;
      L[j][j] += w;
      L[i][j] -= w;
      L[j][i] -= w;
    }
  }

  return L;
}

function invertFisher(L, N) {
  // Pseudoinverse in sum-to-zero gauge with mild ridge for numerical stability:
  // C = (L + J/N + eps*I)^-1 - J/N

  const invN = 1.0 / N;
  const eps = 1e-4;

  const A = new Array(N);
  for (let i = 0; i < N; i++) {
    A[i] = new Array(N);
    for (let j = 0; j < N; j++) A[i][j] = L[i][j] + invN;
    A[i][i] += eps;
  }

  const Ainv = choleskyInverse(A, N);

  const C = new Array(N);
  for (let i = 0; i < N; i++) {
    C[i] = new Array(N);
    for (let j = 0; j < N; j++) C[i][j] = Ainv[i][j] - invN;
  }

  return C;
}

function applyVirtualUpdate(C, i, j, w, varDiff, N, buffer) {
  const alpha = w / (1.0 + w * varDiff);

  // v = C(e_i-e_j) = Col_i - Col_j
  for (let k = 0; k < N; k++) buffer[k] = C[k][i] - C[k][j];

  // C <- C - alpha * v v^T
  for (let r = 0; r < N; r++) {
    const vr = buffer[r];
    for (let c = r; c < N; c++) {
      const delta = alpha * vr * buffer[c];
      C[r][c] -= delta;
      if (r !== c) C[c][r] = C[r][c];
    }
  }
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function updateStats(systemState, userState) {
  const { history } = systemState;
  const start = userState.processed || 0;

  for (let k = start; k < history.length; k++) {
    const m = history[k];
    const a = m.modelA;
    const b = m.modelB;
    if (!a || !b || a === b) continue;

    // wins
    userState.wins[a] = (userState.wins[a] || 0) + (m.winner === a ? 1 : 0);
    userState.wins[b] = (userState.wins[b] || 0) + (m.winner === b ? 1 : 0);

    // matches adjacency
    if (!userState.matches[a]) userState.matches[a] = {};
    if (!userState.matches[b]) userState.matches[b] = {};
    userState.matches[a][b] = (userState.matches[a][b] || 0) + 1;
    userState.matches[b][a] = (userState.matches[b][a] || 0) + 1;
  }

  userState.processed = history.length;
}

function sampleHighVarianceNode(C, N) {
  let sum = 0;
  const w = new Array(N);
  for (let i = 0; i < N; i++) {
    const v = C[i][i];
    const wi = v * v;
    w[i] = wi;
    sum += wi;
  }

  if (!(sum > 0)) return Math.floor(Math.random() * N);

  let r = Math.random() * sum;
  for (let i = 0; i < N; i++) {
    r -= w[i];
    if (r <= 0) return i;
  }

  return N - 1;
}

function choleskyInverse(M, n) {
  // 1. Decompose M = L L^T
  const L = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = M[i][j];
      for (let k = 0; k < j; k++) sum -= L[i][k] * L[j][k];
      if (i === j) L[i][j] = Math.sqrt(Math.max(1e-12, sum));
      else L[i][j] = sum / L[j][j];
    }
  }

  // 2. Invert L
  const Li = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    Li[i][i] = 1.0 / L[i][i];
    for (let j = 0; j < i; j++) {
      let sum = 0;
      for (let k = j; k < i; k++) sum -= L[i][k] * Li[k][j];
      Li[i][j] = sum / L[i][i];
    }
  }

  // 3. Inv = Li^T Li
  const Inv = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = j; k < n; k++) sum += Li[k][i] * Li[k][j];
      Inv[i][j] = sum;
      Inv[j][i] = sum;
    }
  }

  return Inv;
}
`},{id:"baseline-lmarena-ur",name:"LM Arena",code:`// Chatbot Arena (as described in https://arxiv.org/pdf/2403.04132) baseline:
// - Adaptive sampling: Eq. (9)-style "uncertainty reduction" over *unordered* model pairs a={i,j}:
//     P_t(a) ∝ sqrt( Σ_hat[a,a] / n_a  -  Σ_hat[a,a] / (n_a+1) )
//   implemented with a small pseudocount so n_a=0 is well-defined, and a uniform exploration floor.
// - Validity mechanism: track/record the actual sampling probability P_t(a) for each issued match,
//   then use inverse-propensity weighting (IPW) 1/P_t(a) for estimation under a uniform target.
// - Estimation: IPW Bradley–Terry MLE (MM algorithm) + sandwich (robust) standard errors.
//
// Notes about this sandbox:
// - The simulator always returns a strict winner (no ties). We still code tie-safe logic.
// - selectBatch returns a *batch* of pairs. We approximate the paper's per-step adaptation by
//   updating only n_a as we build the batch (outcomes are unknown until later).

function init() {
  return {
    processed: 0,            // history index we've already consumed
    T: 0,                    // total processed comparisons (for win-matrix variance estimates)
    currentPhase: null,
    // Per unordered pair stats keyed by "u|v" with u < v (lex).
    // - For Eq(9): keep IPW win-matrix moments (sumX, sumX2) for X_t(a)=H_t * 1(A_t=a)/P_t(a)
    // - For BT: keep weighted and squared-weighted wins for the lexicographically-first model.
    pair: {},                // { [key]: { n, sumX, sumX2, sumW, sumWY, sumW2, sumW2Y } }
    // Queue of propensities for issued-but-not-yet-observed matches (batching support).
    pending: [],             // Array<{ key: string, p: number }>
    pendingHead: 0,
    lastK: 0,                // last number of unordered pairs (for fallback)
    lastGamma: 0.1           // last exploration mixture weight
  };
}

// ---------- small helpers ----------
function keyFor(a, b) {
  return a < b ? a + "|" + b : b + "|" + a;
}
function firstOfKey(key) {
  const k = key.indexOf("|");
  return key.slice(0, k);
}
function secondOfKey(key) {
  const k = key.indexOf("|");
  return key.slice(k + 1);
}
function randInt(n) {
  return Math.floor(Math.random() * n);
}
function weightedChoiceIndex(weights) {
  let s = 0;
  for (let i = 0; i < weights.length; i++) s += weights[i];
  if (!(s > 0)) return randInt(weights.length);
  let r = Math.random() * s;
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i];
    if (r <= 0) return i;
  }
  return weights.length - 1;
}

function ensurePairStats(userState, key) {
  let st = userState.pair[key];
  if (!st) {
    st = userState.pair[key] = {
      n: 0,
      sumX: 0,
      sumX2: 0,
      sumW: 0,
      sumWY: 0,
      sumW2: 0,
      sumW2Y: 0
    };
  }
  return st;
}

function pendingShift(userState) {
  const h = userState.pendingHead || 0;
  if (h >= userState.pending.length) return null;
  const item = userState.pending[h];
  userState.pendingHead = h + 1;
  // Occasionally compact.
  if (userState.pendingHead > 1024 && userState.pendingHead * 2 > userState.pending.length) {
    userState.pending = userState.pending.slice(userState.pendingHead);
    userState.pendingHead = 0;
  }
  return item;
}

function updateFromHistory(systemState, userState) {
  const { history } = systemState;
  let k = userState.processed || 0;
  if (k < 0) k = 0;
  if (k > history.length) k = history.length;

  for (; k < history.length; k++) {
    const m = history[k];
    const a = m.modelA;
    const b = m.modelB;
    if (!a || !b || a === b) continue;

    const key = keyFor(a, b);
    const u = firstOfKey(key);
    const v = secondOfKey(key);

    // Recover the sampling probability used when this match was issued.
    // Under batching, we record {key,p} for each issued pair in order.
    const pend = pendingShift(userState);
    let p = null;
    if (pend && pend.key === key && typeof pend.p === "number") {
      p = pend.p;
    } else {
      // Fallback: assume uniform over unordered pairs from the last selectBatch call.
      const K = userState.lastK || 0;
      p = K > 0 ? 1 / K : 1;
    }
    if (!(p > 0)) p = 1;

    // Outcome encoding for the paper's win-matrix estimator:
    // H=1 iff the lexicographically-second model (v) wins.
    let H;
    if (m.winner === v) H = 1;
    else if (m.winner === u) H = 0;
    else H = 0.5; // tie/unknown

    const w = 1 / p;
    const x = H * w; // X_t(a) nonzero only when A_t=a

    const st = ensurePairStats(userState, key);
    st.n += 1;
    st.sumX += x;
    st.sumX2 += x * x;

    // For BT: define y=1 iff lex-first model u wins.
    let yU;
    if (m.winner === u) yU = 1;
    else if (m.winner === v) yU = 0;
    else yU = 0.5;

    st.sumW += w;
    st.sumWY += w * yU;
    st.sumW2 += w * w;
    st.sumW2Y += (w * w) * yU;

    userState.T = (userState.T || 0) + 1;
  }

  userState.processed = history.length;
}

function listUnorderedPairs(ids) {
  const keys = [];
  const aIds = [];
  const bIds = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const a = ids[i];
      const b = ids[j];
      const key = keyFor(a, b);
      keys.push(key);
      aIds.push(firstOfKey(key));
      bIds.push(secondOfKey(key));
    }
  }
  return { keys, aIds, bIds };
}

function sigmaDiagForPair(userState, key) {
  // Diagonal of Σ_hat for the paper's IPW win-matrix estimator.
  // We use a small prior until the pair has been observed a few times.
  const PRIOR = 0.25; // Bernoulli variance upper bound
  const st = userState.pair[key];
  const T = userState.T || 0;
  if (!st || st.n < 2 || T <= 0) return PRIOR;
  const mean = st.sumX / T;
  const v = st.sumX2 / T - mean * mean;
  if (!(v > 0)) return PRIOR;
  return v;
}

function eq9Gain(userState, key, plannedExtraN) {
  const st = userState.pair[key];
  const nObs = (st ? st.n : 0) + (plannedExtraN[key] || 0);
  // Paper uses n_a = |{t: A_t=a}| which can be 0 early; add a 1-count pseudocount so Eq(9) is defined.
  const nEff = nObs + 1;
  const sigma = sigmaDiagForPair(userState, key);
  // Σ/n - Σ/(n+1) = Σ/(n(n+1))
  const delta = sigma * (1 / nEff - 1 / (nEff + 1));
  if (!(delta > 0)) return 0;
  return Math.sqrt(delta);
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase, currentPhase } = systemState;
  const n = availableModelIds.length;

  // Phase boundary: reset any phase-local bookkeeping.
  if (userState.currentPhase !== currentPhase) {
    userState.currentPhase = currentPhase;
    userState.pending = [];
    userState.pendingHead = 0;
  }

  // Pull in any new results (consumes pending propensities).
  updateFromHistory(systemState, userState);

  const batchSize = Math.min(200, remainingInPhase);
  if (batchSize <= 0 || n < 2) {
    // Shouldn't happen, but keep the worker contract.
    const a = availableModelIds[0] || "a";
    const b = availableModelIds[1] || (availableModelIds[0] || "b");
    return { pairs: [{ modelA: a, modelB: b }], userState };
  }

  // Exploration floor: P_t(a) = (1-gamma) q_t(a) + gamma/K, ensuring P_t(a) > 0 for all pairs.
  const gamma = 0.10;

  const { keys, aIds, bIds } = listUnorderedPairs(availableModelIds);
  const K = keys.length;
  userState.lastK = K;
  userState.lastGamma = gamma;

  // Plan the batch sequentially, updating only n_a as we go (outcomes unknown until later).
  const plannedExtraN = {}; // { [key]: number }
  const pairs = [];
  const gains = new Array(K);
  const probs = new Array(K);

  for (let t = 0; t < batchSize; t++) {
    // Compute Eq(9) gains for all pairs under current (n_a + plannedExtraN).
    let sumG = 0;
    for (let i = 0; i < K; i++) {
      const g = eq9Gain(userState, keys[i], plannedExtraN);
      gains[i] = g;
      sumG += g;
    }

    // Convert to probabilities with uniform mixture floor.
    const uni = 1 / K;
    if (!(sumG > 0)) {
      // Degenerate early case: fall back to uniform (still has floor).
      for (let i = 0; i < K; i++) probs[i] = uni;
    } else {
      for (let i = 0; i < K; i++) {
        const q = gains[i] / sumG;
        probs[i] = (1 - gamma) * q + gamma * uni;
      }
    }

    const idx = weightedChoiceIndex(probs);
    const key = keys[idx];
    const p = probs[idx];

    // Record propensity for IPW later (consumed when history is updated).
    userState.pending.push({ key, p });

    plannedExtraN[key] = (plannedExtraN[key] || 0) + 1;

    // Emit the unordered pair in a stable orientation (lex-first, lex-second).
    pairs.push({ modelA: aIds[idx], modelB: bIds[idx] });
  }

  return { pairs, userState };
}

// ---------- BT MLE + robust covariance ----------

function invertMatrix(A) {
  const n = A.length;
  const M = new Array(n);
  for (let i = 0; i < n; i++) {
    M[i] = new Array(2 * n).fill(0);
    for (let j = 0; j < n; j++) M[i][j] = A[i][j];
    M[i][n + i] = 1;
  }

  for (let col = 0; col < n; col++) {
    // pivot
    let pivotRow = col;
    let best = Math.abs(M[col][col]);
    for (let r = col + 1; r < n; r++) {
      const v = Math.abs(M[r][col]);
      if (v > best) { best = v; pivotRow = r; }
    }
    if (best < 1e-12) return null;

    if (pivotRow !== col) {
      const tmp = M[col];
      M[col] = M[pivotRow];
      M[pivotRow] = tmp;
    }

    const pivot = M[col][col];
    for (let j = 0; j < 2 * n; j++) M[col][j] /= pivot;

    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = M[r][col];
      if (Math.abs(f) < 1e-18) continue;
      for (let j = 0; j < 2 * n; j++) M[r][j] -= f * M[col][j];
    }
  }

  const inv = new Array(n);
  for (let i = 0; i < n; i++) {
    inv[i] = M[i].slice(n);
  }
  return inv;
}

function matMul(A, B) {
  const n = A.length;
  const k = B.length;
  const m = B[0].length;
  const out = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let t = 0; t < k; t++) {
      const a = A[i][t];
      if (a === 0) continue;
      const Bt = B[t];
      for (let j = 0; j < m; j++) out[i][j] += a * Bt[j];
    }
  }
  return out;
}

function sigmoid(x) {
  if (x > 20) return 1;
  if (x < -20) return 0;
  return 1 / (1 + Math.exp(-x));
}

function getEstimates(systemState, userState) {
  const { availableModelIds, history } = systemState;
  const n = availableModelIds.length;

  // Consume any remaining history (important: after the final selectBatch of a phase,
  // the simulator appends results and then calls getEstimates without another selectBatch).
  updateFromHistory(systemState, userState);

  // No data yet => wide priors
  if (history.length === 0) {
    const out = {};
    for (const id of availableModelIds) out[id] = { strength: 0, lower: -3, upper: 3 };
    return out;
  }

  // Build model ID -> index mapping
  const idToIdx = {};
  for (let i = 0; i < n; i++) idToIdx[availableModelIds[i]] = i;

  // Build weighted pair aggregates from userState (IPW weights 1/P_t(a)).
  // wins[i][j] = weighted wins for i over j   (fractional due to weights)
  const wins = Array.from({ length: n }, () => new Array(n).fill(0));
  const nij = Array.from({ length: n }, () => new Array(n).fill(0)); // weighted totals

  // Also keep squared-weight moments for sandwich meat:
  // w2[i][j] = sum w_t^2 over matches between i and j (unordered)
  // w2y[i][j] = sum w_t^2 * y_t where y_t=1 iff i wins (for the i,j ordering used below)
  const w2 = Array.from({ length: n }, () => new Array(n).fill(0));
  const w2y = Array.from({ length: n }, () => new Array(n).fill(0));

  for (const key in userState.pair) {
    const st = userState.pair[key];
    if (!st || !(st.sumW > 0)) continue;
    const u = firstOfKey(key);
    const v = secondOfKey(key);
    const iu = idToIdx[u];
    const iv = idToIdx[v];
    if (iu === undefined || iv === undefined) continue;

    const tW = st.sumW;
    const wWinU = st.sumWY;
    const wWinV = tW - wWinU;

    wins[iu][iv] += wWinU;
    wins[iv][iu] += wWinV;
    nij[iu][iv] += tW;
    nij[iv][iu] += tW;

    const tW2 = st.sumW2;
    const w2WinU = st.sumW2Y;
    const w2WinV = tW2 - w2WinU;
    w2[iu][iv] += tW2;
    w2[iv][iu] += tW2;
    w2y[iu][iv] += w2WinU;
    w2y[iv][iu] += w2WinV;
  }

  // --- IPW BT MLE via MM on p_i (positive), then theta_i = log p_i ---
  const maxIter = 200;
  const tol = 1e-8;
  let p = new Array(n).fill(1.0);

  const totalWins = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = 0; j < n; j++) s += wins[i][j];
    totalWins[i] = s;
  }

  for (let iter = 0; iter < maxIter; iter++) {
    const pNew = new Array(n);
    let maxChange = 0;

    for (let i = 0; i < n; i++) {
      let denom = 0;
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        const t = nij[i][j];
        if (t === 0) continue;
        denom += t / (p[i] + p[j]);
      }
      if (denom < 1e-10 || totalWins[i] === 0) pNew[i] = p[i];
      else pNew[i] = totalWins[i] / denom;

      maxChange = Math.max(maxChange, Math.abs(pNew[i] - p[i]));
    }

    // normalize (geometric mean = 1) for stability
    let logSum = 0;
    for (let i = 0; i < n; i++) logSum += Math.log(Math.max(pNew[i], 1e-12));
    const geo = Math.exp(logSum / n);
    for (let i = 0; i < n; i++) pNew[i] /= geo;

    p = pNew;
    if (maxChange < tol) break;
  }

  // theta = log(p), then center mean = 0
  const theta = new Array(n);
  for (let i = 0; i < n; i++) theta[i] = Math.log(Math.max(p[i], 1e-12));
  let meanTheta = 0;
  for (let i = 0; i < n; i++) meanTheta += theta[i];
  meanTheta /= n;
  for (let i = 0; i < n; i++) theta[i] -= meanTheta;

  // Build Fisher I and "meat" S (sandwich) for theta
  const I = Array.from({ length: n }, () => new Array(n).fill(0));
  const S = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const t = nij[i][j];
      if (t === 0) continue;

      const pi = p[i], pj = p[j];
      const denom = pi + pj;
      const probI = pi / denom;               // P(i beats j) under BT
      const w = t * probI * (1 - probI);      // Fisher weight (with t = sum weights)

      // Fisher contributions: w * (e_i - e_j)(e_i - e_j)^T
      I[i][i] += w; I[j][j] += w;
      I[i][j] -= w; I[j][i] -= w;

      // Sandwich meat uses sum over observations of (score_t)(score_t)^T.
      // With per-match weight w_t=1/P_t and y_t in {0,1} indicating i wins:
      //   score_t = w_t (y_t - probI) (e_i - e_j)
      // So scalar meat for this pair is: sum_t w_t^2 (y_t - probI)^2.
      const sumW2 = w2[i][j];
      const sumW2Y = w2y[i][j]; // sum w_t^2 * y_t
      const ss = (1 - 2 * probI) * sumW2Y + (probI * probI) * sumW2;

      // Meat contributions: ss * (e_i - e_j)(e_i - e_j)^T
      S[i][i] += ss; S[j][j] += ss;
      S[i][j] -= ss; S[j][i] -= ss;
    }
  }

  // Reduce by fixing a reference index, then propagate covariance back to centered theta
  const ref = n - 1;
  const d = n - 1;

  // index maps
  const idxToBeta = new Array(n).fill(-1);
  const betaToIdx = new Array(d);
  {
    let k = 0;
    for (let i = 0; i < n; i++) {
      if (i === ref) continue;
      idxToBeta[i] = k;
      betaToIdx[k] = i;
      k++;
    }
  }

  const Ired = Array.from({ length: d }, () => new Array(d).fill(0));
  const Sred = Array.from({ length: d }, () => new Array(d).fill(0));
  for (let i = 0; i < n; i++) {
    if (i === ref) continue;
    for (let j = 0; j < n; j++) {
      if (j === ref) continue;
      const bi = idxToBeta[i];
      const bj = idxToBeta[j];
      Ired[bi][bj] = I[i][j];
      Sred[bi][bj] = S[i][j];
    }
  }

  // small ridge for invert stability
  const ridge = 1e-8;
  for (let i = 0; i < d; i++) Ired[i][i] += ridge;

  const Iinv = invertMatrix(Ired);

  // Fallback if inversion fails
  let varTheta = new Array(n).fill(4.0); // conservative fallback
  if (Iinv) {
    const tmp = matMul(Iinv, Sred);
    const CovBeta = matMul(tmp, Iinv);

    // For centered theta, var_i = r_i^T CovBeta r_i with r derived from centering transform.
    // r for i != ref: r = e_{beta(i)} - (1/n) * 1
    // r for ref:      r = -(1/n) * 1
    for (let i = 0; i < n; i++) {
      // build r
      const r = new Array(d).fill(-1 / n);
      if (i !== ref) {
        const bi = idxToBeta[i];
        if (bi >= 0) r[bi] += 1; // now (1 - 1/n) at bi
      }

      // var = r^T CovBeta r
      let v = 0;
      for (let a = 0; a < d; a++) {
        const ra = r[a];
        if (ra === 0) continue;
        const row = CovBeta[a];
        let s = 0;
        for (let b = 0; b < d; b++) s += row[b] * r[b];
        v += ra * s;
      }
      varTheta[i] = Math.max(v, 1e-12);
    }
  }

  // CIs: Wald-style using sandwich SEs (Normal approximation).
  const z = 1.96;

  const out = {};
  for (let i = 0; i < n; i++) {
    const se = Math.sqrt(varTheta[i]);
    const half = z * se;
    out[availableModelIds[i]] = {
      strength: theta[i],
      lower: theta[i] - half,
      upper: theta[i] + half
    };
  }

  return out;
}
`}],eh="arena-algorithm-";function em(){}function ef(e){return`${eh}${e}`}function ep(){em();let e=[];for(let t=0;t<window.localStorage.length;t++){let i=window.localStorage.key(t);if(!i||!i.startsWith(eh))continue;let s=window.localStorage.getItem(i);if(s)try{let t=JSON.parse(s);t&&"string"==typeof t.name&&"string"==typeof t.code&&e.push(t)}catch{}}return e.sort((e,t)=>e.name.localeCompare(t.name)),e}function eg(e){em();let t=window.localStorage.getItem(ef(e));if(!t)return null;try{let e=JSON.parse(t);if(!e||"string"!=typeof e.name||"string"!=typeof e.code)return null;return e}catch{return null}}function ex(e){em();let t=new Date().toISOString(),i=eg(e.name),s={name:e.name,code:e.code,createdAt:i?.createdAt??t,updatedAt:t};return window.localStorage.setItem(ef(e.name),JSON.stringify(s)),s}let ey=`// Arena Sandbox Algorithm Template

function init() {
  return {};
}

function selectBatch(systemState, userState) {
  const { availableModelIds, remainingInPhase } = systemState;
  const batchSize = Math.min(200, remainingInPhase);

  const pairs = [];
  for (let i = 0; i < batchSize; i++) {
    const a = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
    let b = a;
    while (b === a) {
      b = availableModelIds[Math.floor(Math.random() * availableModelIds.length)];
    }
    pairs.push({ modelA: a, modelB: b });
  }

  return { pairs, userState };
}

function getEstimates(systemState, userState) {
  const out = {};
  for (const id of systemState.availableModelIds) {
    out[id] = { strength: 0, lower: -1, upper: 1 };
  }
  return out;
}
`;function eb(){}function ew(e){return`arena-results-${e}`}async function ej(e){let t=window.crypto;if(!t?.subtle)return`na-${e.length}`;let i=new TextEncoder().encode(e);return Array.from(new Uint8Array(await t.subtle.digest("SHA-256",i))).map(e=>e.toString(16).padStart(2,"0")).join("")}function ev(e){eb(),window.localStorage.removeItem(ew(e))}function eI(){let e=new Blob([`
(() => {
  'use strict';

  // Best-effort: disable common network entry points.
  // This is NOT a security boundary; it just prevents accidental network usage.
  try { self.fetch = undefined; } catch {}
  try { self.XMLHttpRequest = undefined; } catch {}
  try { self.WebSocket = undefined; } catch {}
  try { self.importScripts = undefined; } catch {}

  /** @type {any} */
  let userState = null;

  /** @type {null | Function} */
  let initFn = null;
  /** @type {null | Function} */
  let selectBatchFn = null;
  /** @type {null | Function} */
  let getEstimatesFn = null;

  function isFiniteNumber(x) {
    return typeof x === 'number' && Number.isFinite(x);
  }

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }

  function assertLoaded() {
    assert(typeof initFn === 'function', 'Algorithm not loaded: missing init()');
    assert(typeof selectBatchFn === 'function', 'Algorithm not loaded: missing selectBatch()');
    assert(typeof getEstimatesFn === 'function', 'Algorithm not loaded: missing getEstimates()');
  }

  function assertInitialized() {
    assertLoaded();
    // userState can be anything including null/undefined if user wants,
    // but init() must have been called at least once.
    assert(hasInitialized === true, 'Algorithm not initialized: call init() first');
  }

  /** @type {boolean} */
  let hasInitialized = false;

  function assertPairsValid(pairs, systemState) {
    assert(Array.isArray(pairs), 'selectBatch must return { pairs: Array, userState }');
    assert(pairs.length > 0, 'selectBatch returned empty pairs array');
    assert(
      typeof systemState?.remainingInPhase === 'number' && Number.isFinite(systemState.remainingInPhase),
      'systemState.remainingInPhase must be a finite number'
    );
    assert(
      pairs.length <= systemState.remainingInPhase,
      'selectBatch returned more pairs than remainingInPhase'
    );

    const ids = systemState?.availableModelIds;
    assert(Array.isArray(ids), 'systemState.availableModelIds must be an array');
    const idSet = new Set(ids);

    for (let i = 0; i < pairs.length; i++) {
      const p = pairs[i];
      assert(p && typeof p === 'object', 'Each pair must be an object');
      const a = p.modelA;
      const b = p.modelB;
      assert(typeof a === 'string' && a.length > 0, 'Each pair must include modelA (string)');
      assert(typeof b === 'string' && b.length > 0, 'Each pair must include modelB (string)');
      assert(a !== b, 'selectBatch produced a self-pair (modelA === modelB)');
      assert(idSet.has(a), 'selectBatch produced invalid modelA (not in availableModelIds)');
      assert(idSet.has(b), 'selectBatch produced invalid modelB (not in availableModelIds)');
    }
  }

  function assertEstimatesValid(estimates, systemState) {
    assert(estimates && typeof estimates === 'object', 'getEstimates must return an object mapping modelId -> {strength, lower, upper}');

    const ids = systemState?.availableModelIds;
    assert(Array.isArray(ids), 'systemState.availableModelIds must be an array');

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const e = estimates[id];
      assert(e && typeof e === 'object', 'Missing estimate for model: ' + id);
      assert(isFiniteNumber(e.strength), 'Estimate.strength must be a finite number for model: ' + id);
      assert(isFiniteNumber(e.lower), 'Estimate.lower must be a finite number for model: ' + id);
      assert(isFiniteNumber(e.upper), 'Estimate.upper must be a finite number for model: ' + id);
      assert(e.lower <= e.upper, 'Estimate has lower > upper for model: ' + id);
    }
  }

  async function handleLoad(requestId, code) {
    assert(typeof code === 'string', 'load requires code: string');

    console.log('[Worker] handleLoad called, code length:', code.length);
    console.log('[Worker] First 200 chars:', code.slice(0, 200));

    // Normalize a few problematic characters that can appear when copying code from
    // rich text sources and can break Function() parsing in some browsers.
    // - U+2028 / U+2029 are valid in JS strings but not always in Function bodies.
    // - U+FEFF is a BOM that can show up at the start.
    // Note: We use String.fromCharCode to avoid issues with template literal escaping.
    const BOM = String.fromCharCode(0xFEFF);
    const LINE_SEP = String.fromCharCode(0x2028);
    const PARA_SEP = String.fromCharCode(0x2029);
    const CR = String.fromCharCode(0x0D);
    const LF = String.fromCharCode(0x0A);
    let normalizedCode = String(code)
      .split(BOM).join('')
      .split(LINE_SEP).join(LF)
      .split(PARA_SEP).join(LF);
    // Normalize CRLF and CR to LF
    normalizedCode = normalizedCode.split(CR + LF).join(LF).split(CR).join(LF);

    console.log('[Worker] After normalization, code length:', normalizedCode.length);

    // Build a factory that returns the three required functions.
    // Use typeof guards so missing identifiers don't throw ReferenceError.
    const factorySource = "'use strict';" + LF +
      normalizedCode +
      LF + "; return {" + LF +
      "  init: (typeof init !== 'undefined') ? init : undefined," + LF +
      "  selectBatch: (typeof selectBatch !== 'undefined') ? selectBatch : undefined," + LF +
      "  getEstimates: (typeof getEstimates !== 'undefined') ? getEstimates : undefined" + LF +
      "};";
    
    console.log('[Worker] Factory source length:', factorySource.length);
    console.log('[Worker] Attempting new Function()...');
    
    let factory;
    try {
      factory = new Function(factorySource);
      console.log('[Worker] new Function() succeeded');
    } catch (parseErr) {
      console.error('[Worker] new Function() FAILED:', parseErr);
      console.error('[Worker] Full factory source:', factorySource);
      throw parseErr;
    }

    const api = factory();

    assert(api && typeof api === 'object', 'Failed to load algorithm: factory did not return an object');
    assert(typeof api.init === 'function', 'User code must define function init()');
    assert(typeof api.selectBatch === 'function', 'User code must define function selectBatch(systemState, userState)');
    assert(typeof api.getEstimates === 'function', 'User code must define function getEstimates(systemState, userState)');

    initFn = api.init;
    selectBatchFn = api.selectBatch;
    getEstimatesFn = api.getEstimates;

    userState = null;
    hasInitialized = false;

    self.postMessage({ requestId, type: 'loaded' });
  }

  async function handleInit(requestId) {
    assertLoaded();
    userState = await initFn();
    hasInitialized = true;
    self.postMessage({ requestId, type: 'initialized' });
  }

  async function handleSelectBatch(requestId, systemState) {
    assertInitialized();

    const result = await selectBatchFn(systemState, userState);
    assert(result && typeof result === 'object', 'selectBatch must return an object: { pairs, userState }');
    assert('pairs' in result, 'selectBatch must return { pairs, userState }');
    assert('userState' in result, 'selectBatch must return { pairs, userState }');

    const pairs = result.pairs;
    assertPairsValid(pairs, systemState);

    userState = result.userState;

    self.postMessage({ requestId, type: 'batch', pairs });
  }

  async function handleGetEstimates(requestId, systemState) {
    assertInitialized();

    const data = await getEstimatesFn(systemState, userState);
    assertEstimatesValid(data, systemState);

    self.postMessage({ requestId, type: 'estimates', data });
  }

  self.addEventListener('message', async (event) => {
    const msg = event?.data;

    // Basic shape validation.
    const requestId = msg?.requestId;
    const type = msg?.type;

    if (!Number.isFinite(requestId) || typeof type !== 'string') {
      // Can't correlate; emit a best-effort error.
      try {
        self.postMessage({ requestId: -1, type: 'error', message: 'Invalid worker message: missing requestId/type' });
      } catch {}
      return;
    }

    try {
      if (type === 'load') {
        await handleLoad(requestId, msg.code);
        return;
      }
      if (type === 'init') {
        await handleInit(requestId);
        return;
      }
      if (type === 'selectBatch') {
        await handleSelectBatch(requestId, msg.systemState);
        return;
      }
      if (type === 'getEstimates') {
        await handleGetEstimates(requestId, msg.systemState);
        return;
      }

      throw new Error('Unknown message type: ' + String(type));
    } catch (err) {
      const e = /** @type {any} */ (err);
      const message = e && typeof e.message === 'string' ? e.message : String(e);
      const stack = e && typeof e.stack === 'string' ? e.stack : undefined;
      self.postMessage({ requestId, type: 'error', message, stack });
    }
  });
})();
`],{type:"application/javascript"}),t=URL.createObjectURL(e),i=new Worker(t),s=i.terminate.bind(i);return i.terminate=()=>{try{URL.revokeObjectURL(t)}catch{}s()},i}class eS{worker;requestId=1;inflight=new Map;defaultTimeoutMs;loaded=!1;initialized=!1;constructor(e){this.defaultTimeoutMs=e?.timeoutMs??3e4,this.worker=eI(),this.worker.onmessage=e=>{let t=e.data,i=t?.requestId;if(!Number.isFinite(i))return;let s=this.inflight.get(i);if(s){if(clearTimeout(s.timeoutId),this.inflight.delete(i),"error"===t.type){let e=Error(t.message);t.stack&&(e.stack=t.stack),s.reject(e);return}s.resolve(t)}},this.worker.onerror=e=>{let t=Error(e.message||"Worker error");this.failAllInflight(t),this.recreateWorker()}}terminate(){this.failAllInflight(Error("Worker terminated")),this.worker.terminate(),this.loaded=!1,this.initialized=!1}failAllInflight(e){for(let[t,i]of this.inflight.entries())clearTimeout(i.timeoutId),i.reject(e),this.inflight.delete(t)}recreateWorker(){try{this.worker.terminate()}catch{}this.worker=eI(),this.worker.onmessage=e=>{let t=e.data,i=t?.requestId;if(!Number.isFinite(i))return;let s=this.inflight.get(i);if(s){if(clearTimeout(s.timeoutId),this.inflight.delete(i),"error"===t.type){let e=Error(t.message);t.stack&&(e.stack=t.stack),s.reject(e);return}s.resolve(t)}},this.worker.onerror=e=>{let t=Error(e.message||"Worker error");this.failAllInflight(t),this.recreateWorker()},this.loaded=!1,this.initialized=!1}call(e,t){let i=this.requestId++,s=t??this.defaultTimeoutMs;return new Promise((t,a)=>{let n=setTimeout(()=>{this.inflight.delete(i),this.recreateWorker(),a(Error(`Algorithm worker timed out during ${e.type}. Worker was reset.`))},s);this.inflight.set(i,{resolve:e=>t(e),reject:a,timeoutId:n});let r={...e,requestId:i};this.worker.postMessage(r)})}async load(e,t){if("loaded"!==(await this.call({type:"load",code:e},t)).type)throw Error("Unexpected response to load()");this.loaded=!0,this.initialized=!1}async init(e){if(!this.loaded)throw Error("Call load() before init()");if("initialized"!==(await this.call({type:"init"},e)).type)throw Error("Unexpected response to init()");this.initialized=!0}async selectBatch(e,t){if(!this.initialized)throw Error("Call init() before selectBatch()");let i=await this.call({type:"selectBatch",systemState:e},t);if("batch"!==i.type)throw Error("Unexpected response to selectBatch()");return i.pairs}async getEstimates(e,t){if(!this.initialized)throw Error("Call init() before getEstimates()");let i=await this.call({type:"getEstimates",systemState:e},t);if("estimates"!==i.type)throw Error("Unexpected response to getEstimates()");return i.data}}let eM=[{phase:1,newModels:40,comparisons:16e3},{phase:2,newModels:8,comparisons:12e3},{phase:3,newModels:15,comparisons:2e4},{phase:4,newModels:5,comparisons:8e3},{phase:5,newModels:12,comparisons:16e3},{phase:6,newModels:3,comparisons:1e4},{phase:7,newModels:10,comparisons:14e3},{phase:8,newModels:7,comparisons:12e3},{phase:9,newModels:4,comparisons:1e4},{phase:10,newModels:8,comparisons:16e3},{phase:11,newModels:6,comparisons:12e3},{phase:12,newModels:2,comparisons:14e3}];function eN(e,t){if(!e)throw Error(t)}function ek(e){if(e?.aborted){let e=Error("Simulation aborted");throw e.name="AbortError",e}}class eA{state;constructor(e){this.state=e>>>0}next(){let e=this.state+=0x6d2b79f5;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function eC(e,t,i){let s=0,a=0;for(;0===s;)s=e.next();for(;0===a;)a=e.next();return t+Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*a)*i}async function eT(e){eN(!0,"runSimulation can only run in a browser environment"),eN("string"==typeof e.code,"opts.code must be a string");let t=e.trialCount??10;eN(Number.isFinite(t)&&t>0,"trialCount must be a positive number");let i=Number.isFinite(e.seed)?e.seed:Date.now(),s=e.timeoutMs,a=e.signal,n=performance.now(),r=[];for(let n=0;n<t;n++){ek(a);let t=i+1000003*n>>>0;r.push(await eB({code:e.code,seed:t,timeoutMs:s,trialIndex:n,signal:a,onProgress:t=>e.onProgress?.(t)}))}let o=performance.now()-n,l=Array(eM.length).fill(0),d=0,c=0,u=0;for(let e of r){d+=e.totalScore;for(let t=0;t<e.phaseScores.length;t++)l[t]+=e.phaseScores[t];for(let t of e.phaseDiagnostics)c+=t.coverageHits,u+=t.coverageTotal}for(let e=0;e<l.length;e++)l[e]/=r.length;d/=r.length;let h=0===u?0:c/u;return{trialCount:t,coverage:h,totalScore:d,phaseScores:l,isValid:h>=.94,runDurationMs:o,trials:r}}async function eB(e){eN(!0,"runSingleTrial can only run in a browser environment");let t=e.trialIndex??0,i=new eA(e.seed>>>0),s=performance.now(),a=new eS({timeoutMs:e.timeoutMs});try{ek(e.signal),await a.load(e.code,e.timeoutMs),await a.init(e.timeoutMs);let r={},o={},l={},d=[],c=[],u=0,h=0,m=[],f=[],p=0,g=0;for(let s of eM){ek(e.signal);let x=s.phase;for(let e=0;e<s.newModels;e++){var n;let e,t=`model-${h++}`;if(1===x)e=eC(i,0,1);else if(.7>i.next())eN(d.length>0,"No existing models to improve from"),e=r[d[Math.floor(i.next()*d.length)]]+eC(i,.15,.25);else{let t=.08*(x-1);e=eC(i,t,1)}n=e,r[t]=n,o[t]=x,l[t]=0,d.push(t)}let y=s.comparisons,b=s.comparisons;for(;y>0;){ek(e.signal);let s={availableModelIds:d,modelIntroPhase:o,history:c,currentPhase:x,remainingInPhase:y},n=await a.selectBatch(s,e.timeoutMs);!function(e,t){eN(Array.isArray(e),"selectBatch returned invalid pairs (not an array)"),eN(e.length>0,"selectBatch returned empty pairs array"),eN(e.length<=t.remainingInPhase,"selectBatch returned more pairs than remainingInPhase");let i=new Set(t.availableModelIds);for(let t of e)eN(t&&"object"==typeof t,"Each pair must be an object"),eN("string"==typeof t.modelA&&t.modelA.length>0,"Each pair must include modelA (string)"),eN("string"==typeof t.modelB&&t.modelB.length>0,"Each pair must include modelB (string)"),eN(t.modelA!==t.modelB,"selectBatch produced a self-pair (modelA === modelB)"),eN(i.has(t.modelA),"selectBatch produced invalid modelA (not in availableModelIds)"),eN(i.has(t.modelB),"selectBatch produced invalid modelB (not in availableModelIds)")}(n,s);let h=0;for(let t of n){h++>=1e3&&(h=0,ek(e.signal));let s=r[t.modelA],a=r[t.modelB];eN(Number.isFinite(s),`Missing ground truth theta for ${t.modelA}`),eN(Number.isFinite(a),`Missing ground truth theta for ${t.modelB}`);let n=function(e){if(e>=0)return 1/(1+Math.exp(-e));let t=Math.exp(e);return t/(1+t)}(s-a),o=i.next()<n?t.modelA:t.modelB;l[t.modelA]++,l[t.modelB]++,c.push({modelA:t.modelA,modelB:t.modelB,winner:o,phase:x,matchIndex:u++})}y-=n.length,e.onProgress?.({trialIndex:t,phase:x,completedComparisonsInPhase:b-y,totalComparisonsInPhase:b})}let w={availableModelIds:d,modelIntroPhase:o,history:c,currentPhase:x,remainingInPhase:0},j=await a.getEstimates(w,e.timeoutMs),v=w.availableModelIds,I=v.map(e=>j[e]?.strength),S=v.map(e=>r[e]);for(let e=0;e<v.length;e++){let t=v[e],i=j[t];eN(i&&"object"==typeof i,`Missing estimate object for model: ${t}`),eN(Number.isFinite(i.strength),`Estimate.strength must be finite for model: ${t}`),eN(Number.isFinite(i.lower),`Estimate.lower must be finite for model: ${t}`),eN(Number.isFinite(i.upper),`Estimate.upper must be finite for model: ${t}`),eN(i.lower<=i.upper,`Estimate has lower > upper for model: ${t}`)}let{a:M,b:N}=function(e,t){eN(e.length===t.length&&e.length>1,"Need at least 2 points to fit affine transform");let i=e.length,s=0,a=0;for(let n=0;n<i;n++)s+=e[n],a+=t[n];s/=i,a/=i;let n=0,r=0;for(let o=0;o<i;o++){let i=e[o]-s,l=t[o]-a;n+=i*i,r+=i*l}if(0===n)return{a:1,b:a-s};let o=r/n,l=a-o*s;return{a:o,b:l}}(I,S);eN(Number.isFinite(M)&&Number.isFinite(N),`Affine transform failed (a=${String(M)}, b=${String(N)})`),eN(M>0,`Affine transform slope a <= 0 (a=${M}). Estimates are not positively correlated with truth.`);let k=0,A=0,C=v.length,T=[];for(let e of v){let t=r[e],i=j[e],s=M*i.strength+N,a=M*i.lower+N,n=M*i.upper+N,o=n-a,d=t>=a&&t<=n;k+=o*o,d&&(A+=1),T.push({id:e,trueStrength:t,estimatedStrength:s,lower:a,upper:n,inBounds:d,matchCount:l[e]})}p+=A,g+=C,m.push(k),f.push({phase:x,affine:{a:M,b:N},score:k,coverageHits:A,coverageTotal:C,modelResults:T})}let x=function(e){let t=0;for(let i of e)t+=i;return t}(m),y=0===g?0:p/g,b=performance.now()-s;return{phaseScores:m,phaseDiagnostics:f,totalScore:x,coverage:y,isValid:y>=.94,runDurationMs:b}}finally{a.terminate()}}var eP=e.i(621417),eE=e.i(607232),eL=e.i(785183),eR=e.i(93230),eO=e.i(872526),e_=e.i(234239),eW=e.i(559559),eF=e.i(734251),eD=e.i(731195),ez=e.i(398361);function eq(e,t){let i=new Map([...e].sort((e,t)=>t.trueStrength-e.trueStrength).map((e,t)=>[e.id,t+1])),s=new Map([...e].sort((e,t)=>t.estimatedStrength-e.estimatedStrength).map((e,t)=>[e.id,t+1]));return e.map(e=>({id:e.id,trueRank:i.get(e.id),estimatedRank:s.get(e.id),displayRank:"trueRank"===t?i.get(e.id):s.get(e.id),trueStrength:e.trueStrength,estimatedStrength:e.estimatedStrength,lower:e.lower,upper:e.upper,inBounds:e.inBounds,errorY:[e.estimatedStrength-e.lower,e.upper-e.estimatedStrength]})).sort((e,t)=>e.displayRank-t.displayRank)}function eH({modelResults:e}){let t=(0,a.useMemo)(()=>eq(e,"trueRank"),[e]);return(0,s.jsx)(eD.ResponsiveContainer,{width:"100%",height:120,children:(0,s.jsxs)(eP.ComposedChart,{data:t,margin:{top:5,right:5,left:-20,bottom:5},children:[(0,s.jsx)(eO.CartesianGrid,{strokeDasharray:"3 3",opacity:.3}),(0,s.jsx)(eL.XAxis,{dataKey:"displayRank",type:"number",domain:[1,e.length],tick:{fontSize:10},tickCount:5}),(0,s.jsx)(eR.YAxis,{tick:{fontSize:10}}),(0,s.jsx)(eE.Scatter,{name:"Estimated",dataKey:"estimatedStrength",fill:"#8884d8",line:{stroke:"#8884d8",strokeWidth:1},children:(0,s.jsx)(eF.ErrorBar,{dataKey:"errorY",width:2,strokeWidth:1,stroke:"#8884d8",direction:"y"})}),(0,s.jsx)(eE.Scatter,{name:"True",dataKey:"trueStrength",fill:"#ff7300",shape:"triangle"})]})})}function eU({modelResults:e,sortBy:t}){let i=(0,a.useMemo)(()=>eq(e,t),[e,t]);return(0,s.jsx)(eD.ResponsiveContainer,{width:"100%",height:400,children:(0,s.jsxs)(eP.ComposedChart,{data:i,margin:{top:20,right:30,left:20,bottom:50},children:[(0,s.jsx)(eO.CartesianGrid,{strokeDasharray:"3 3"}),(0,s.jsx)(eL.XAxis,{dataKey:"displayRank",type:"number",domain:[1,e.length],label:{value:`${"estimatedRank"===t?"Estimated":"True"} Rank (better →)`,position:"bottom",dy:20}}),(0,s.jsx)(eR.YAxis,{label:{value:"Strength (θ)",angle:-90,position:"insideLeft"}}),(0,s.jsx)(e_.Tooltip,{formatter:(e,t)=>"estimatedStrength"===t?[Number(e).toFixed(3),"Estimated θ"]:"trueStrength"===t?[Number(e).toFixed(3),"True θ"]:[e,t],labelFormatter:e=>`Rank: ${e}`,content:({active:e,payload:t})=>{if(!e||!t||0===t.length)return null;let i=t[0]?.payload;return i?(0,s.jsxs)("div",{className:"rounded border border-gray-200 bg-white p-2 text-xs shadow dark:border-gray-700 dark:bg-gray-800",children:[(0,s.jsx)("div",{className:"font-semibold",children:i.id}),(0,s.jsxs)("div",{children:["True Rank: ",i.trueRank]}),(0,s.jsxs)("div",{children:["Est. Rank: ",i.estimatedRank]}),(0,s.jsxs)("div",{children:["True θ: ",i.trueStrength.toFixed(3)]}),(0,s.jsxs)("div",{children:["Est. θ: ",i.estimatedStrength.toFixed(3)]}),(0,s.jsxs)("div",{children:["CI: [",i.lower.toFixed(3),", ",i.upper.toFixed(3),"]"]}),(0,s.jsx)("div",{className:i.inBounds?"text-green-600":"text-red-600",children:i.inBounds?"✓ In bounds":"✗ Out of bounds"})]}):null}}),(0,s.jsx)(eW.Legend,{verticalAlign:"top",height:36}),(0,s.jsx)(eE.Scatter,{name:"Estimated θ",dataKey:"estimatedStrength",fill:"#8884d8",line:{stroke:"#8884d8",strokeWidth:1},children:(0,s.jsx)(eF.ErrorBar,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"#8884d8",direction:"y"})}),(0,s.jsx)(eE.Scatter,{name:"True θ",dataKey:"trueStrength",fill:"#ff7300",shape:"triangle"})]})})}function eV({modelResults:e}){let t=(0,a.useMemo)(()=>eq(e,"trueRank"),[e]);return(0,s.jsx)("div",{className:"max-h-[300px] overflow-auto",children:(0,s.jsxs)("table",{className:"w-full text-xs",children:[(0,s.jsx)("thead",{className:"sticky top-0 bg-gray-100 dark:bg-gray-800",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{className:"px-2 py-1 text-left",children:"Model"}),(0,s.jsx)("th",{className:"px-2 py-1 text-right",children:"True Rank"}),(0,s.jsx)("th",{className:"px-2 py-1 text-right",children:"Est. Rank"}),(0,s.jsx)("th",{className:"px-2 py-1 text-right",children:"True θ"}),(0,s.jsx)("th",{className:"px-2 py-1 text-right",children:"Est. θ"}),(0,s.jsx)("th",{className:"px-2 py-1 text-right",children:"Lower"}),(0,s.jsx)("th",{className:"px-2 py-1 text-right",children:"Upper"}),(0,s.jsx)("th",{className:"px-2 py-1 text-center",children:"In CI?"})]})}),(0,s.jsx)("tbody",{children:t.map(e=>(0,s.jsxs)("tr",{className:`border-t border-gray-200 dark:border-gray-700 ${!e.inBounds?"bg-red-50 dark:bg-red-900/20":""}`,children:[(0,s.jsx)("td",{className:"px-2 py-1 font-mono",children:e.id}),(0,s.jsx)("td",{className:"px-2 py-1 text-right",children:e.trueRank}),(0,s.jsx)("td",{className:"px-2 py-1 text-right",children:e.estimatedRank}),(0,s.jsx)("td",{className:"px-2 py-1 text-right font-mono",children:e.trueStrength.toFixed(3)}),(0,s.jsx)("td",{className:"px-2 py-1 text-right font-mono",children:e.estimatedStrength.toFixed(3)}),(0,s.jsx)("td",{className:"px-2 py-1 text-right font-mono",children:e.lower.toFixed(3)}),(0,s.jsx)("td",{className:"px-2 py-1 text-right font-mono",children:e.upper.toFixed(3)}),(0,s.jsx)("td",{className:"px-2 py-1 text-center",children:e.inBounds?(0,s.jsx)("span",{className:"text-green-600",children:"✓"}):(0,s.jsx)("span",{className:"text-red-600",children:"✗"})})]},e.id))})]})})}function eG({results:e,trialIndex:t=0}){let[i,n]=(0,a.useState)(!1),[o,l]=(0,a.useState)(t),[d,u]=(0,a.useState)("trueRank"),h=(0,a.useMemo)(()=>{if(!e.trials||0===e.trials.length)return[];let t=e.trials[o];return t&&t.phaseDiagnostics&&0!==t.phaseDiagnostics.length&&t.phaseDiagnostics[t.phaseDiagnostics.length-1].modelResults||[]},[e,o]),x=(0,a.useMemo)(()=>{let e=h.filter(e=>e.inBounds).length;return{inBounds:e,total:h.length,percentage:h.length>0?(e/h.length*100).toFixed(1):"0"}},[h]);return 0===h.length?null:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("div",{className:"text-xs font-medium text-gray-600 dark:text-gray-400",children:"Model Rankings (Phase 12)"}),(0,s.jsx)(c.Tooltip,{content:"Expand to full view",children:(0,s.jsx)(r.Button,{size:"sm",variant:"light",isIconOnly:!0,onPress:()=>n(!0),className:"h-6 w-6 min-w-0",children:(0,s.jsx)(ez.Maximize2,{className:"h-3 w-3"})})})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 text-xs",children:[(0,s.jsx)("span",{className:"text-gray-500",children:"Coverage:"}),(0,s.jsxs)("span",{className:x.inBounds===x.total?"text-green-600":"",children:[x.inBounds,"/",x.total," (",x.percentage,"%)"]})]}),(0,s.jsx)("div",{className:"rounded border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800",children:(0,s.jsx)(eH,{modelResults:h})}),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-3 text-[10px] text-gray-500",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"inline-block h-2 w-2 rounded-full bg-[#8884d8]"})," Estimated"]}),(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)("span",{className:"inline-block h-0 w-0",style:{borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderBottom:"6px solid #ff7300"}})," ","True"]})]}),(0,s.jsx)(m.Modal,{isOpen:i,onClose:()=>n(!1),size:"4xl",scrollBehavior:"inside",classNames:{base:"bg-white dark:bg-gray-900",header:"border-b border-gray-200 dark:border-gray-700",body:"p-4"},children:(0,s.jsxs)(f.ModalContent,{children:[(0,s.jsxs)(p.ModalHeader,{className:"flex items-center justify-between",children:[(0,s.jsxs)("span",{children:["Model Rankings - Trial ",o+1," of ",e.trialCount]}),e.trialCount>1&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(r.Button,{size:"sm",variant:"flat",isDisabled:0===o,onPress:()=>l(e=>Math.max(0,e-1)),children:"← Prev"}),(0,s.jsx)(r.Button,{size:"sm",variant:"flat",isDisabled:o>=e.trialCount-1,onPress:()=>l(t=>Math.min(e.trialCount-1,t+1)),children:"Next →"})]})]}),(0,s.jsxs)(g.ModalBody,{children:[(0,s.jsxs)("div",{className:"mb-4 flex justify-center gap-2",children:[(0,s.jsx)(r.Button,{size:"sm",color:"trueRank"===d?"primary":"default",variant:"trueRank"===d?"solid":"flat",onPress:()=>u("trueRank"),children:"Sort by True Rank"}),(0,s.jsx)(r.Button,{size:"sm",color:"estimatedRank"===d?"primary":"default",variant:"estimatedRank"===d?"solid":"flat",onPress:()=>u("estimatedRank"),children:"Sort by Estimated Rank"})]}),(0,s.jsx)("div",{className:"rounded border border-gray-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-800",children:(0,s.jsx)(eU,{modelResults:h,sortBy:d})}),(0,s.jsxs)("div",{className:"mt-4 flex items-center gap-4 text-sm",children:[(0,s.jsx)("span",{className:"font-medium",children:"Phase 12 Coverage:"}),(0,s.jsxs)("span",{className:`font-bold ${parseFloat(x.percentage)>=94?"text-green-600":"text-red-600"}`,children:[x.inBounds,"/",x.total," models in CI (",x.percentage,"%)"]})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsx)("div",{className:"mb-2 text-sm font-medium",children:"Detailed Rankings"}),(0,s.jsx)(eV,{modelResults:h})]})]})]})})]})}var eK=e.i(995424),eJ=e.i(612010),e$=e.i(516263),eY=e.i(822126),eX=e.i(20727),eZ=e.i(714060),eQ=e.i(194983),e0=e.i(263488);function e1(){return(0,s.jsxs)("div",{className:"container mx-auto max-w-5xl px-4 py-8",children:[(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h1",{className:"mb-2 text-3xl font-bold tracking-tight",children:"Pax Arena Methodology"}),(0,s.jsx)("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"How we rank AI models through blind pairwise comparisons"})]}),(0,s.jsx)(e$.Card,{className:"border-primary/30 bg-primary/5 mb-8",children:(0,s.jsxs)(eY.CardBody,{className:"gap-3",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold",children:"Questions or concerns about our methodology?"}),(0,s.jsx)("p",{className:"leading-relaxed text-gray-700 dark:text-gray-300",children:"We welcome scrutiny of our ranking approach. If you believe there is an issue with how models are evaluated, ranked, or compared, or if you have suggestions for improvement, please reach out."}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,s.jsxs)("a",{href:"https://discord.gg/paxhistoria",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,s.jsx)(eQ.MessageCircle,{className:"h-4 w-4"}),"Ping @development on Discord"]}),(0,s.jsxs)("a",{href:"mailto:eli@paxhistoria.co",className:"inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,s.jsx)(e0.Mail,{className:"h-4 w-4"}),"eli@paxhistoria.co"]})]})]})}),(0,s.jsxs)(e$.Card,{className:"mb-8",children:[(0,s.jsx)(eX.CardHeader,{className:"flex-col items-start gap-1 pb-0",children:(0,s.jsx)("h2",{className:"text-xl font-semibold",children:"Overview"})}),(0,s.jsxs)(eY.CardBody,{className:"gap-4",children:[(0,s.jsxs)("p",{className:"leading-relaxed text-gray-700 dark:text-gray-300",children:["Pax Arena rankings are calculated using"," ",(0,s.jsx)("strong",{children:"Bradley-Terry Maximum Likelihood Estimation"})," with"," ",(0,s.jsx)("strong",{children:"Fisher Information-based confidence intervals"}),". When you play a game on Pax Historia, the AI models that generated the content are compared through blind A/B evaluations — you see the outputs side by side without knowing which model produced which, and your preference is recorded as a vote."]}),(0,s.jsxs)("p",{className:"leading-relaxed text-gray-700 dark:text-gray-300",children:["Rather than comparing models randomly, our system uses"," ",(0,s.jsx)("strong",{children:"A-optimal active learning"})," (Fisher-Greedy selection) to choose which pairs to compare next. This prioritizes comparisons that most efficiently reduce overall uncertainty — particularly targeting newly introduced models and close matchups where the ranking is still uncertain."]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800 dark:text-gray-200",children:"Vote Filtering"}),(0,s.jsxs)("p",{className:"leading-relaxed text-gray-700 dark:text-gray-300",children:["Not all votes are counted toward rankings. If either model's response is blank, contains invalid JSON, or produces zero events, that comparison is excluded. This means the leaderboard measures model ",(0,s.jsx)("strong",{children:"quality"}),", not model"," ",(0,s.jsx)("strong",{children:"reliability"})," — a model that crashes 50% of the time but produces excellent output the other 50% will still rank well here. Reliability is tracked separately and is a key factor in which models we promote to production."]})]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800 dark:text-gray-200",children:"Score Display"}),(0,s.jsxs)("p",{className:"leading-relaxed text-gray-700 dark:text-gray-300",children:["Scores shown on the leaderboard are log-odds values anchored to a reference model (currently Grok 4 Fast, which is fixed at 0). A positive score means a model performs better than the reference; negative means worse. The key thing to look at is the"," ",(0,s.jsx)("strong",{children:"relative difference"})," between models — a 1-unit gap corresponds to roughly a 73% win probability in a head-to-head comparison. The 95% confidence intervals indicate how certain we are about each model's position."]})]})]})]}),(0,s.jsx)(eK.Accordion,{variant:"bordered",className:"mb-8",children:(0,s.jsx)(eJ.AccordionItem,{"aria-label":"The Problem — Full Specification",title:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-lg font-semibold",children:"The Problem"}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"Sample-efficient uncertainty reduction in dynamic pairwise ranking — a formal description for algorithm development"})]}),children:(0,s.jsxs)("div",{className:"space-y-6 pb-4",children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800",children:"The Setting"}),(0,s.jsxs)("p",{className:"leading-relaxed text-gray-700",children:["You have a collection of ",(0,s.jsx)("strong",{children:"models"})," (such as AI language models), each with an unknown ",(0,s.jsx)("strong",{children:"true strength"}),". The only way to learn about these strengths is through ",(0,s.jsx)("strong",{children:"pairwise comparisons"}),"—you pick two models, give them the same task, and observe which one performs better. Each comparison has a cost (time, money, human evaluator effort), so you want to learn as much as possible with as few comparisons as possible."]})]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800",children:"What You Observe"}),(0,s.jsx)("p",{className:"mb-3 leading-relaxed text-gray-700",children:"When you compare model A against model B:"}),(0,s.jsxs)("ul",{className:"mb-3 ml-4 list-inside list-disc space-y-1 text-gray-700",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"If model A is much stronger than B:"})," A wins almost every time"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"If they're similar in strength:"})," The winner is nearly a coin flip"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Noise exists:"})," Even a weaker model sometimes beats a stronger one by chance"]})]}),(0,s.jsx)("p",{className:"leading-relaxed text-gray-700",children:"From these pairwise outcomes, you must produce for each model:"}),(0,s.jsxs)("ol",{className:"mt-2 ml-4 list-inside list-decimal space-y-1 text-gray-700",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Point estimate"})," — your best guess of each model's strength"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"95% confidence interval"})," — lower and upper bounds (can be asymmetric)"]})]}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-gray-600",children:["Method is flexible (MLE, Bayesian, Glicko-2, etc.), but estimates must be on the"," ",(0,s.jsx)("strong",{children:"log-odds scale"})," (see Formal Specification). Intervals are evaluated on ",(0,s.jsx)("strong",{children:"frequentist coverage"}),"."]})]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800",children:"The Complication: Dynamic Model Introduction"}),(0,s.jsxs)("p",{className:"mb-3 leading-relaxed text-gray-700",children:["Models are ",(0,s.jsx)("strong",{children:"not all available at the start"}),". New models arrive in batches over time, and your comparison budget is also allocated in batches. This models real-world constraints: evaluation resources are limited per time period, and you must provide useful rankings continuously—not just at the end."]}),(0,s.jsxs)("div",{className:"mb-3 rounded-lg border border-gray-200 bg-gray-50 p-4",children:[(0,s.jsxs)("p",{className:"mb-2 text-sm font-medium text-gray-700",children:["The schedule is irregular—batch sizes and comparison budgets vary by phase to test algorithm robustness. See the ",(0,s.jsx)("strong",{children:"Formal Specification"})," below for exact numbers."]}),(0,s.jsxs)("p",{className:"text-sm text-gray-600",children:["Total: ",(0,s.jsx)("strong",{children:"120 models"}),", ",(0,s.jsx)("strong",{children:"160,000 comparisons"})," across"," ",(0,s.jsx)("strong",{children:"12 phases"})]})]}),(0,s.jsxs)("p",{className:"leading-relaxed text-gray-700",children:["Newly introduced models start with ",(0,s.jsx)("strong",{children:"high uncertainty"})," (you know nothing about them), while older models have been compared many times and have"," ",(0,s.jsx)("strong",{children:"lower uncertainty"}),". A good algorithm should efficiently integrate new models while maintaining accuracy on existing ones—and crucially, provide good rankings ",(0,s.jsx)("strong",{children:"at every phase"}),", not just the final one."]})]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800",children:"The Objective"}),(0,s.jsxs)("p",{className:"mb-3 leading-relaxed text-gray-700",children:[(0,s.jsx)("strong",{children:"Goal:"})," Minimize the sum of squared confidence interval widths across all models and all phases, while maintaining valid (calibrated) intervals."]}),(0,s.jsxs)("div",{className:"mb-3 rounded-lg border border-blue-200 bg-blue-50 p-4",children:[(0,s.jsx)("p",{className:"mb-2 text-sm font-medium text-blue-800",children:"Formally:"}),(0,s.jsxs)("div",{className:"font-mono text-blue-900",children:[(0,s.jsxs)("div",{className:"mb-2",children:["Score = Σₚ W(p)"," ",(0,s.jsxs)("span",{className:"text-blue-600",children:["//"," sum over all phases"]})]}),(0,s.jsxs)("div",{className:"mb-1",children:["where W(p) = Σᵢ (upperᵢ − lowerᵢ)²"," ",(0,s.jsxs)("span",{className:"text-blue-600",children:["//"," after affine transform"]})]})]}),(0,s.jsx)("p",{className:"mt-2 text-sm text-blue-700",children:"Final score = mean across all trials."})]}),(0,s.jsxs)("p",{className:"mb-3 leading-relaxed text-gray-700",children:["Uncertainty at ",(0,s.jsx)("em",{children:"every"})," phase counts. An algorithm that defers work until late phases will accumulate penalty from all the early wide-interval checkpoints."]})]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("section",{children:[(0,s.jsxs)("h3",{className:"mb-2 font-semibold text-gray-800",children:["Formal Specification"," ",(0,s.jsx)("span",{className:"font-normal text-gray-500",children:"(the exact rules)"})]}),(0,s.jsx)("p",{className:"mb-4 text-sm text-gray-600",children:"This section pins down exactly how algorithms are evaluated. No ambiguity."}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-gray-800",children:"Algorithm Interface"}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-gray-600",children:["Your algorithm must implement three functions in JavaScript. State is explicit: you receive"," ",(0,s.jsx)("code",{className:"rounded bg-gray-100 px-1 font-mono text-xs",children:"userState"})," and return updated state."]}),(0,s.jsxs)("div",{className:"rounded bg-gray-800 p-3 font-mono text-sm text-gray-100",children:[(0,s.jsx)("div",{className:"text-green-400",children:"// Called once at simulation start"}),(0,s.jsx)("div",{children:"function init() {"}),(0,s.jsx)("div",{children:"  return { /* your initial state */ };"}),(0,s.jsx)("div",{children:"}"}),(0,s.jsx)("div",{className:"mt-3 text-green-400",children:"// Called to get a BATCH of pairs"}),(0,s.jsx)("div",{children:"function selectBatch(systemState, userState) {"}),(0,s.jsx)("div",{children:"  const {"}),(0,s.jsxs)("div",{children:["    availableModelIds,"," ",(0,s.jsx)("span",{className:"text-gray-500",children:"// string[] - models to compare"})]}),(0,s.jsxs)("div",{children:["    modelIntroPhase,"," ",(0,s.jsx)("span",{className:"text-gray-500",children:"// { [id]: phase } - when introduced"})]}),(0,s.jsxs)("div",{children:["    history,"," ",(0,s.jsx)("span",{className:"text-gray-500",children:"// { modelA, modelB, winner, phase, matchIndex }[]"})]}),(0,s.jsxs)("div",{children:["    currentPhase,"," ",(0,s.jsx)("span",{className:"text-gray-500",children:"// number (1-12)"})]}),(0,s.jsxs)("div",{children:["    remainingInPhase"," ",(0,s.jsx)("span",{className:"text-gray-500",children:"// comparisons left in phase"})]}),(0,s.jsx)("div",{children:"  } = systemState;"}),(0,s.jsx)("div",{className:"mt-2",children:"  const pairs = []; // up to remainingInPhase pairs"}),(0,s.jsx)("div",{children:"  // ... your selection logic ..."}),(0,s.jsx)("div",{className:"mt-2",children:"  return {"}),(0,s.jsx)("div",{children:"    pairs, // [{ modelA, modelB }, ...]"}),(0,s.jsx)("div",{children:"    userState: { ...userState, /* updates */ }"}),(0,s.jsx)("div",{children:"  };"}),(0,s.jsx)("div",{children:"}"}),(0,s.jsx)("div",{className:"mt-3 text-green-400",children:"// Called at end of each phase"}),(0,s.jsx)("div",{children:"function getEstimates(systemState, userState) {"}),(0,s.jsx)("div",{children:"  return {"}),(0,s.jsx)("div",{children:'    "model-0": { strength: 0.0, lower: -0.3, upper: 0.3 },'}),(0,s.jsx)("div",{children:"    // ... must include ALL availableModelIds"}),(0,s.jsx)("div",{children:"  };"}),(0,s.jsx)("div",{children:"}"})]}),(0,s.jsx)("p",{className:"mt-2 text-sm text-gray-600",children:"You have full freedom in how you compute estimates and confidence intervals. They can be asymmetric. Use any method: Bradley-Terry, Bayesian inference, Glicko-2, or something novel."})]}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-gray-800",children:"Batching Trade-off"}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-gray-600",children:["You control how many pairs to return from"," ",(0,s.jsx)("code",{className:"rounded bg-gray-100 px-1 font-mono text-xs",children:"selectBatch"}),". This is a key design decision:"]}),(0,s.jsxs)("ul",{className:"ml-4 list-inside list-disc space-y-1 text-sm text-gray-600",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Return 1 pair:"})," Fully adaptive—can react to every result, but slower"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Return 500 pairs:"})," Faster execution, but can only adapt every 500 comparisons"]})]}),(0,s.jsx)("p",{className:"mt-2 text-sm text-gray-600",children:"Choose based on how adaptive your algorithm needs to be. Most algorithms work well with batches of 100–500."})]}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-gray-200 bg-gray-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-gray-800",children:"Simulation Environment"}),(0,s.jsx)("div",{className:"mb-3 overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-sm",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-gray-300 text-left",children:[(0,s.jsx)("th",{className:"py-1.5 pr-3 font-medium text-gray-700",children:"Phase"}),(0,s.jsx)("th",{className:"py-1.5 pr-3 font-medium text-gray-700",children:"New Models"}),(0,s.jsx)("th",{className:"py-1.5 pr-3 font-medium text-gray-700",children:"Total Models"}),(0,s.jsx)("th",{className:"py-1.5 font-medium text-gray-700",children:"Comparisons"})]})}),(0,s.jsxs)("tbody",{className:"text-gray-600",children:[(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"1"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"40"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"40"}),(0,s.jsx)("td",{className:"py-1",children:"16,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"2"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"8"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"48"}),(0,s.jsx)("td",{className:"py-1",children:"12,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"3"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"15"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"63"}),(0,s.jsx)("td",{className:"py-1",children:"20,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"4"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"5"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"68"}),(0,s.jsx)("td",{className:"py-1",children:"8,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"5"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"12"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"80"}),(0,s.jsx)("td",{className:"py-1",children:"16,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"6"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"3"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"83"}),(0,s.jsx)("td",{className:"py-1",children:"10,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"7"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"10"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"93"}),(0,s.jsx)("td",{className:"py-1",children:"14,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"8"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"7"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"100"}),(0,s.jsx)("td",{className:"py-1",children:"12,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"9"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"4"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"104"}),(0,s.jsx)("td",{className:"py-1",children:"10,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"10"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"8"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"112"}),(0,s.jsx)("td",{className:"py-1",children:"16,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"11"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"6"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"118"}),(0,s.jsx)("td",{className:"py-1",children:"12,000"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-200",children:[(0,s.jsx)("td",{className:"py-1 pr-3",children:"12"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"2"}),(0,s.jsx)("td",{className:"py-1 pr-3",children:"120"}),(0,s.jsx)("td",{className:"py-1",children:"14,000"})]}),(0,s.jsxs)("tr",{className:"font-medium text-gray-700",children:[(0,s.jsx)("td",{className:"py-1.5 pr-3",children:"Total"}),(0,s.jsx)("td",{className:"py-1.5 pr-3",children:"120"}),(0,s.jsx)("td",{className:"py-1.5 pr-3",children:"—"}),(0,s.jsx)("td",{className:"py-1.5",children:"160,000"})]})]})]})}),(0,s.jsxs)("div",{className:"space-y-1 text-sm text-gray-600",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Comparison outcome:"})," ",(0,s.jsx)("code",{className:"rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs",children:"P(A wins) = σ(θ_A − θ_B) = 1/(1 + e^(−(θ_A − θ_B)))"})]}),(0,s.jsx)("div",{className:"text-gray-500",children:"No ties. Higher θ = stronger model."}),(0,s.jsx)("div",{className:"text-gray-500",children:"The same pair can be compared multiple times (each comparison is an independent draw)."})]})]}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-blue-800",children:"Model Strength Generation (Mixture with Drift)"}),(0,s.jsxs)("p",{className:"mb-3 text-sm text-blue-700",children:["New models are generated using a mixture model that reflects reality: some are improvements on existing models, others are new approaches. Model strengths are"," ",(0,s.jsx)("strong",{children:"constant"})," once assigned—they do not change over time."]}),(0,s.jsxs)("div",{className:"space-y-2 text-sm text-blue-800",children:[(0,s.jsxs)("div",{className:"rounded bg-blue-100 p-2 font-mono",children:[(0,s.jsx)("div",{className:"text-blue-600",children:"// Phase 1: Initial models"}),(0,s.jsx)("div",{children:"θᵢ ~ Normal(0, 1) for i = 1..40"})]}),(0,s.jsxs)("div",{className:"rounded bg-blue-100 p-2 font-mono",children:[(0,s.jsx)("div",{className:"text-blue-600",children:"// Phases 2–12: New models (mixture)"}),(0,s.jsx)("div",{children:"For each new model:"}),(0,s.jsx)("div",{className:"ml-2",children:"With probability 0.7 (improvement):"}),(0,s.jsx)("div",{className:"ml-4",children:"Pick random existing model θ_parent"}),(0,s.jsx)("div",{className:"ml-4",children:"θ_new = θ_parent + Normal(0.15, 0.25)"}),(0,s.jsx)("div",{className:"ml-2",children:"With probability 0.3 (novel approach):"}),(0,s.jsx)("div",{className:"ml-4",children:"θ_new ~ Normal(μ_phase, 1)"}),(0,s.jsx)("div",{className:"ml-4",children:"where μ_phase = 0.08 × (phase − 1)"})]})]}),(0,s.jsxs)("p",{className:"mt-3 text-sm text-blue-700",children:["This creates realistic dynamics: new models ",(0,s.jsx)("em",{children:"tend"})," to be slightly stronger on average, but not reliably so—the improvement noise has significant variance, and novel approaches can land anywhere. Algorithms should be robust to this drift but should not assume or exploit it."]})]}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-purple-200 bg-purple-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-purple-800",children:"Required Scale (Log-Odds)"}),(0,s.jsx)("p",{className:"mb-2 text-sm text-purple-700",children:"Estimates must be on the canonical Bradley-Terry log-odds scale:"}),(0,s.jsx)("div",{className:"mb-3 rounded bg-purple-100 p-2 font-mono text-sm text-purple-800",children:"P(A beats B) = 1 / (1 + exp(−(θ_A − θ_B)))"}),(0,s.jsx)("p",{className:"mb-3 text-sm text-purple-700",children:"One unit difference ≈ 73% win rate. This is the scale used to generate true strengths. Your CIs must achieve frequentist coverage on this scale."}),(0,s.jsxs)("p",{className:"text-sm text-purple-700",children:[(0,s.jsx)("strong",{children:"Affine diagnostic:"})," We fit (a, b) via OLS between your estimates and ground truth each phase. If you're on the correct scale, a ≈ 1 and b ≈ 0. Large deviations indicate scale mismatch. CIs are transformed before scoring—this corrects minor calibration drift but won't save a fundamentally misaligned algorithm."]}),(0,s.jsxs)("p",{className:"mt-3 text-sm text-purple-700",children:[(0,s.jsx)("strong",{children:"Transform details:"})," We regress θ_true = a · θ̂ + b (truth as response, estimates as predictor). Transformed values: θ_corrected = a · θ̂ + b, and CI_corrected = [a · lower + b, a · upper + b]."]}),(0,s.jsxs)("p",{className:"mt-3 text-sm text-purple-700",children:[(0,s.jsx)("strong",{children:"Failure condition:"})," If a ≤ 0, the simulation"," ",(0,s.jsx)("strong",{children:"crashes with an error"}),". A non-positive slope means your estimates are negatively correlated (or uncorrelated) with true strengths—the algorithm has failed to learn the ranking direction. This is not correctable by rescaling; it indicates a fundamental bug."]}),(0,s.jsxs)("p",{className:"mt-3 text-sm text-purple-700",children:[(0,s.jsx)("strong",{children:"Note on identifiability:"})," Bradley-Terry strengths are only determined up to an additive constant (adding c to all θ values leaves all probabilities unchanged). Your algorithm may use any internally consistent anchoring—reference model, sum-to-zero, Bayesian prior, etc. The OLS affine transform (a, b) applied during scoring aligns your estimates to the ground-truth scale. Coverage is assessed on the transformed intervals."]})]}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-green-200 bg-green-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-green-800",children:"Scoring Procedure (per phase)"}),(0,s.jsxs)("ol",{className:"ml-4 list-inside list-decimal space-y-2 text-sm text-green-700",children:[(0,s.jsxs)("li",{children:["Call"," ",(0,s.jsx)("code",{className:"rounded bg-green-100 px-1 font-mono text-xs",children:"getEstimates()"})," ","to get strength estimates and CIs"]}),(0,s.jsx)("li",{children:"Apply affine transform (fitted via OLS) to estimates and CIs"}),(0,s.jsx)("li",{children:"Compute CI width for each model: wᵢ = upperᵢ − lowerᵢ"}),(0,s.jsx)("li",{children:"Record W(p) = Σᵢ wᵢ² (sum of squared CI widths)"})]}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-green-700",children:["Final score = Σₚ W(p) across all 12 phases. ",(0,s.jsx)("strong",{children:"Lower = better."})]}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-green-600",children:[(0,s.jsx)("strong",{children:"Why squared widths?"})," This deliberately creates"," ",(0,s.jsx)("em",{children:"disproportionate"})," penalty for high-uncertainty models: one model with width 2 costs as much as ",(0,s.jsx)("em",{children:"four"})," models with width 1. This incentivizes algorithms to rapidly reduce uncertainty on newly introduced models rather than letting them linger with wide intervals while polishing already-precise estimates."]})]}),(0,s.jsxs)("div",{className:"mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-amber-800",children:"Validity Check (Frequentist Coverage)"}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-amber-700",children:["Run 10 trials with different random seeds. Pool all coverage checks across (model, phase, trial). Coverage is measured in the ",(0,s.jsx)("strong",{children:"frequentist"})," sense: does the true θ fall within [lower, upper] after the affine transform?"]}),(0,s.jsx)("div",{className:"rounded bg-amber-100 p-2 text-sm font-medium text-amber-800",children:"Requirement: pooled coverage ≥ 0.94"}),(0,s.jsxs)("p",{className:"mt-3 text-sm text-amber-700",children:[(0,s.jsx)("strong",{children:"Why 94% instead of 95%?"})," Even perfectly calibrated 95% intervals have sampling variance in empirical coverage. With ~14,000 coverage samples, the standard error is ~0.18%, so 94% provides reasonable slack while still ensuring valid intervals."]}),(0,s.jsxs)("p",{className:"mt-2 text-sm text-amber-700",children:["Over-conservative intervals (coverage ",">"," 95%) aren't rejected—they just get penalized by the scoring function for being unnecessarily wide."]})]}),(0,s.jsxs)("div",{className:"rounded-lg border border-red-200 bg-red-50 p-4",children:[(0,s.jsx)("h4",{className:"mb-2 font-medium text-red-800",children:"Error Behavior"}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-red-700",children:["If your code returns invalid data, the simulation"," ",(0,s.jsx)("strong",{children:"crashes with an error"}),". The following will cause a crash:"]}),(0,s.jsxs)("ul",{className:"ml-4 list-inside list-disc space-y-1 text-sm text-red-700",children:[(0,s.jsxs)("li",{children:["Invalid model IDs (not in"," ",(0,s.jsx)("code",{className:"rounded bg-red-100 px-1 font-mono text-xs",children:"availableModelIds"}),")"]}),(0,s.jsx)("li",{children:"Same model paired with itself"}),(0,s.jsxs)("li",{children:["More pairs than"," ",(0,s.jsx)("code",{className:"rounded bg-red-100 px-1 font-mono text-xs",children:"remainingInPhase"})]}),(0,s.jsx)("li",{children:"Empty pairs array"}),(0,s.jsxs)("li",{children:["Missing estimates for any available model in"," ",(0,s.jsx)("code",{className:"rounded bg-red-100 px-1 font-mono text-xs",children:"getEstimates"})]}),(0,s.jsx)("li",{children:"Affine transform slope a ≤ 0 (estimates negatively correlated or uncorrelated with truth—algorithm failed to learn ranking direction)"})]}),(0,s.jsx)("p",{className:"mt-2 text-sm text-red-600",children:"No fallbacks—errors mean your algorithm needs fixing."})]})]}),(0,s.jsx)(eZ.Divider,{}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h3",{className:"mb-2 font-semibold text-gray-800",children:"Baselines"}),(0,s.jsxs)("p",{className:"mb-4 text-gray-700",children:[(0,s.jsx)("strong",{children:"Fisher-Greedy MLE"})," is the baseline to beat. It achieves a score of 36.29 with valid 95% coverage using A-optimal active learning with Bradley-Terry MLE. Below are reference algorithms we've tested:"]}),(0,s.jsx)("div",{className:"mb-4 overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-sm",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-gray-300 text-left",children:[(0,s.jsx)("th",{className:"py-2 pr-3 font-medium text-gray-700",children:"Strategy"}),(0,s.jsx)("th",{className:"py-2 pr-3 font-medium text-gray-700",children:"Description"}),(0,s.jsx)("th",{className:"py-2 pr-3 font-medium text-gray-700",children:"Coverage"}),(0,s.jsx)("th",{className:"py-2 font-medium text-gray-700",children:"Score"})]})}),(0,s.jsxs)("tbody",{className:"text-gray-600",children:[(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"Random BT"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"Random uniform sampling + Bradley-Terry MLE"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-green-600",children:"95.0% ✓"}),(0,s.jsx)("td",{className:"py-2",children:"75.78"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"Random Glicko"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"Random uniform sampling + Glicko-1 incremental"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-green-600",children:"94.5% ✓"}),(0,s.jsx)("td",{className:"py-2",children:"75.94"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"A-OPT"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"A-optimal design with Woodbury covariance updates"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-green-600",children:"95.1% ✓"}),(0,s.jsx)("td",{className:"py-2",children:"40.79"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"UWAN"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"Uncertainty-weighted anchor + neighbor pairing"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-green-600",children:"95.4% ✓"}),(0,s.jsx)("td",{className:"py-2",children:"40.86"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-200 bg-blue-50",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-semibold text-blue-800",children:"Fisher-Greedy MLE"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-blue-700",children:"A-optimal greedy selection + BT MLE + Fisher pseudoinverse CIs"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-green-600",children:"95.0% ✓"}),(0,s.jsx)("td",{className:"py-2 font-semibold text-blue-800",children:"36.29"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"INFOGAIN"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"Greedy max p(1−p)·(σᵢ²+σⱼ²) with new-model bias"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-red-600",children:"91.1% ✗"}),(0,s.jsx)("td",{className:"py-2 text-gray-400",children:"34.47"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"SWISS"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"Swiss-style near-neighbor with anchor bootstrapping"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-red-600",children:"93.8% ✗"}),(0,s.jsx)("td",{className:"py-2 text-gray-400",children:"36.29"})]}),(0,s.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,s.jsx)("td",{className:"py-2 pr-3 font-medium",children:"LM Arena"}),(0,s.jsx)("td",{className:"py-2 pr-3",children:"Chatbot Arena paper-faithful: IPW adaptive sampling + sandwich SEs"}),(0,s.jsx)("td",{className:"py-2 pr-3 text-red-600",children:"93.9% ✗"}),(0,s.jsx)("td",{className:"py-2 text-gray-400",children:"200.10"})]})]})]})}),(0,s.jsxs)("p",{className:"mb-2 text-sm text-gray-600",children:[(0,s.jsx)("strong",{children:"Note:"})," Strategies marked ✗ failed the 94% coverage requirement and their scores are shown in gray."]}),(0,s.jsx)("p",{className:"mt-3 text-sm text-gray-600",children:"Select an algorithm tab above to view or edit its code, then run trials to see score + coverage."})]})]})},"problem-statement")})]})}let e2="info:problem-statement";function e3(e){return`${e.kind}:${e.id}`}function e4(e){return Number.isFinite(e)?e<1e3?`${Math.round(e)}ms`:`${(e/1e3).toFixed(1)}s`:"—"}let e5=[0,16e3,28e3,48e3,56e3,72e3,82e3,96e3,108e3,118e3,134e3,146e3];function e8(){let e=(0,n.useSearchParams)(),t=(0,n.useRouter)(),[i,I]=(0,a.useState)(()=>[{id:e2,name:"Problem Statement",kind:"info"},...eu.map(e=>({id:e3({kind:"baseline",id:e.id}),name:e.name,kind:"baseline"}))]),[S,M]=(0,a.useState)(e2);(0,a.useEffect)(()=>{let t=ep().map(e=>({id:e3({kind:"user",id:e.name}),name:e.name,kind:"user"}));I([{id:e2,name:"Problem Statement",kind:"info"},...eu.map(e=>({id:e3({kind:"baseline",id:e.id}),name:e.name,kind:"baseline"})),...t]);let i=e.get("algo");if(i){if(i===e2)M(i);else if(i.startsWith("baseline:")){let e=i.slice(9);eu.some(t=>t.id===e)&&M(i)}else if(i.startsWith("user:")){let e=i.slice(5);ep().some(t=>t.name===e)&&M(i)}}},[e]);let N=(0,a.useCallback)(i=>{let s=new URLSearchParams(e.toString());s.set("algo",i),t.replace(`?${s.toString()}`,{scroll:!1})},[e,t]),k=(0,a.useCallback)(e=>{M(e),N(e)},[N]),[A,C]=(0,a.useState)("Random Pairing"),[T,B]=(0,a.useState)(eu[0].code),[P,E]=(0,a.useState)(!0),[L,R]=(0,a.useState)(10),[O,_]=(0,a.useState)(!1),W=(0,a.useRef)(null),[F,D]=(0,a.useState)(null),[z,q]=(0,a.useState)(null),[H,U]=(0,a.useState)(null),[V,G]=(0,a.useState)(null),[K,J]=(0,a.useState)(!1),[$,Y]=(0,a.useState)(!1),X=(0,a.useMemo)(()=>S.startsWith("info:")?{kind:"info",id:S.slice(5)}:S.startsWith("baseline:")?{kind:"baseline",id:S.slice(9)}:{kind:"user",id:S.slice(5)},[S]),Z=(0,a.useMemo)(()=>"info"===X.kind?null:(X.kind,X.id),[X]),Q=()=>{let e=ep().map(e=>({id:e3({kind:"user",id:e.name}),name:e.name,kind:"user"}));I([{id:e2,name:"Problem Statement",kind:"info"},...eu.map(e=>({id:e3({kind:"baseline",id:e.id}),name:e.name,kind:"baseline"})),...e])};(0,a.useEffect)(()=>{Q()},[]),(0,a.useEffect)(()=>{if("info"===X.kind)return;if(U(null),"baseline"===X.kind){let e=eu.find(e=>e.id===X.id);if(!e)return;C(e.name),B(e.code),E(!0);return}let e=eg(X.id);e?(C(e.name),B(e.code),E(!1)):k(e3({kind:"baseline",id:eu[0].id}))},[X,k]),(0,a.useEffect)(()=>{if(!Z){G(null),q(null);return}let e=!1;return(async()=>{try{let t=function(e){eb();let t=window.localStorage.getItem(ew(e));if(!t)return null;try{let e=JSON.parse(t);if(!e||"string"!=typeof e.codeHash||"string"!=typeof e.timestamp||!e.results)return null;return e}catch{return null}}(Z);if(!t){e||(G(null),q(null));return}let i=await ej(T),s=t.codeHash===i;e||(G({isFresh:s,timestamp:t.timestamp}),s?q(t.results):q(null))}catch{}})(),()=>{e=!0}},[Z,T]);let ee=()=>{let e=window.prompt("New algorithm name?");e&&(ex({name:e,code:ey}),Q(),k(e3({kind:"user",id:e})))},et=(0,a.useCallback)(()=>{if(!z)return;let e=(e,t)=>{let i=e.length;if(i<2)return 0;let s=0,a=0,n=0,r=0,o=0;for(let l=0;l<i;l++)s+=e[l],a+=t[l],n+=e[l]*t[l],r+=e[l]*e[l],o+=t[l]*t[l];let l=i*n-s*a,d=Math.sqrt((i*r-s*s)*(i*o-a*a));return 0===d?0:l/d},t=z.phaseScores.map((t,i)=>{let s=0,a=0,n=0,r=0,o=0,l=0,d=0,c=0,u=1/0,h=0,m=0;for(let t of z.trials){let f=t.phaseDiagnostics[i];if(!f)continue;l+=f.affine.a,d+=f.affine.b;let p=[],g=[];for(let e of f.modelResults){r++,o+=e.upper-e.lower,p.push(e.trueStrength),g.push(e.estimatedStrength);let t=e.matchCount??0;m+=t,u=Math.min(u,t),h=Math.max(h,t),e.inBounds?n++:e.estimatedStrength>e.trueStrength?s++:a++}c+=e(p,g)}let f=z.trials.length,p=f>0?r/f:0;return{phase:i+1,avgOver:f>0?s/f:0,avgUnder:f>0?a/f:0,avgInBounds:f>0?n/f:0,avgModels:p,avgWidth:p>0?o/r:0,avgA:f>0?l/f:1,avgB:f>0?d/f:0,avgCorr:f>0?c/f:0,avgMatchCount:r>0?m/r:0,minMatchCount:u===1/0?0:u,maxMatchCount:h}}),i=[`## ${A} - Simulation Results`,"",`**Date:** ${V?.timestamp?new Date(V.timestamp).toLocaleString():new Date().toLocaleString()}`,`**Trials:** ${z.trialCount}`,`**Valid:** ${z.isValid?"Yes ✓":"No ✗"} (coverage ${(100*z.coverage).toFixed(1)}%)`,"","### Summary","","| Metric | Value |","| --- | --- |",`| Total Score | ${z.totalScore.toFixed(2)} |`,`| Coverage | ${(100*z.coverage).toFixed(1)}% |`,`| Runtime | ${e4(z.runDurationMs)} |`,"","### Phase Scores","","| Phase | Score |","| --- | --- |",...z.phaseScores.map((e,t)=>`| P${t+1} | ${e.toFixed(2)} |`),"","### Phase Diagnostics (averaged across trials)","","| Phase | Models | In Bounds | Overest. | Underest. |","| --- | --- | --- | --- | --- |",...t.map(e=>`| P${e.phase} | ${e.avgModels.toFixed(0)} | ${e.avgInBounds.toFixed(1)} | ${e.avgOver.toFixed(1)} | ${e.avgUnder.toFixed(1)} |`),"","### Scale & Accuracy Diagnostics (averaged across trials)","",`| Phase | Affine a | Affine b | Correlation ρ | Mean CI Width |`,"| --- | --- | --- | --- | --- |",...t.map(e=>`| P${e.phase} | ${e.avgA.toFixed(3)} | ${e.avgB.toFixed(3)} | ${e.avgCorr.toFixed(3)} | ${e.avgWidth.toFixed(3)} |`),"","### Match Distribution (per model, cumulative)","","| Phase | Avg Matches | Min | Max |","| --- | --- | --- | --- |",...t.map(e=>`| P${e.phase} | ${e.avgMatchCount.toFixed(0)} | ${e.minMatchCount} | ${e.maxMatchCount} |`)].join("\n");navigator.clipboard.writeText(i).then(()=>{Y(!0),setTimeout(()=>Y(!1),2e3)})},[z,A,V]),ei=async()=>{U(null),q(null),D(null),W.current?.abort(),W.current=new AbortController,_(!0),console.log("🚀 Running simulation with code length:",T.length);try{let t=await eT({code:T,trialCount:L,signal:W.current.signal,onProgress:e=>D(e)});if(q(t),Z){var e;e={codeHash:await ej(T),results:t,timestamp:new Date().toISOString()},eb(),window.localStorage.setItem(ew(Z),JSON.stringify(e))}G({isFresh:!0,timestamp:new Date().toISOString()})}catch(e){e?.name==="AbortError"?U("Stopped."):U(e?.message||String(e))}finally{_(!1),W.current=null}},es=(0,a.useMemo)(()=>{if(!F)return 0;let e=16e4*L;return Math.round((16e4*F.trialIndex+(e5[F.phase-1]||0)+F.completedComparisonsInPhase)/e*100)},[F,L]);return"info"===X.kind?(0,s.jsx)("div",{className:"flex h-screen flex-col pt-16",children:(0,s.jsx)("div",{className:"flex min-h-0 flex-1",children:(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-2 dark:border-gray-700 dark:bg-gray-900",children:[(0,s.jsx)(u.Tabs,{"aria-label":"Arena tabs",selectedKey:S,onSelectionChange:e=>{e&&"string"==typeof e&&k(e)},variant:"underlined",size:"sm",classNames:{tabList:"gap-0",tab:"px-3 py-2",cursor:"bg-primary"},children:i.map(e=>(0,s.jsx)(h.Tab,{title:e.name},e.id))}),(0,s.jsx)(r.Button,{size:"sm",variant:"light",onPress:ee,className:"ml-auto shrink-0",isIconOnly:!0,children:"+"})]}),(0,s.jsx)("div",{className:"min-h-0 flex-1 overflow-y-auto",children:(0,s.jsx)(e1,{})})]})})}):(0,s.jsxs)("div",{className:"flex h-screen flex-col pt-16",children:[(0,s.jsxs)("div",{className:"flex min-h-0 flex-1",children:[(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 flex-col border-r border-gray-200 dark:border-gray-700",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-2 dark:border-gray-700 dark:bg-gray-900",children:[(0,s.jsx)(u.Tabs,{"aria-label":"Arena tabs",selectedKey:S,onSelectionChange:e=>{e&&"string"==typeof e&&k(e)},variant:"underlined",size:"sm",classNames:{tabList:"gap-0",tab:"px-3 py-2",cursor:"bg-primary"},children:i.map(e=>(0,s.jsx)(h.Tab,{title:e.name},e.id))}),(0,s.jsx)(r.Button,{size:"sm",variant:"light",onPress:ee,className:"ml-auto shrink-0",isIconOnly:!0,children:"+"}),!P&&(0,s.jsx)(r.Button,{size:"sm",color:"primary",variant:"flat",onPress:()=>{if("user"!==X.kind)return;let e=X.id,t=A.trim();t?(t!==e&&(!function(e,t){em();let i=eg(e);if(!i)throw Error(`Algorithm not found: ${e}`);let s=new Date().toISOString(),a={...i,name:t,updatedAt:s};window.localStorage.setItem(ef(t),JSON.stringify(a)),window.localStorage.removeItem(ef(e))}(e,t),ev(e),k(e3({kind:"user",id:t}))),ex({name:t,code:T}),Q()):U("Name cannot be empty.")},isDisabled:O,className:"shrink-0",children:"Save"})]}),(0,s.jsx)("div",{className:"min-h-0 flex-1",children:(0,s.jsx)(ec,{height:"100%",defaultLanguage:"javascript",value:T,onChange:e=>B(e||""),options:{readOnly:P,minimap:{enabled:!1},fontSize:13,lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12,bottom:12}},theme:"vs-dark"})})]}),(0,s.jsxs)("div",{className:"flex w-80 shrink-0 flex-col overflow-y-auto bg-gray-50 dark:bg-gray-900",children:["user"===X.kind&&(0,s.jsxs)("div",{className:"border-b border-gray-200 p-4 dark:border-gray-700",children:[(0,s.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,s.jsx)("span",{className:"text-xs font-semibold tracking-wide text-gray-500 uppercase",children:"Algorithm"}),(0,s.jsx)(c.Tooltip,{content:"Delete algorithm",children:(0,s.jsx)(r.Button,{size:"sm",color:"danger",variant:"light",isIconOnly:!0,onPress:()=>J(!0),isDisabled:O,className:"h-6 w-6 min-w-0",children:(0,s.jsx)(y.Trash2,{className:"h-3.5 w-3.5"})})})]}),(0,s.jsx)(o.Input,{size:"sm",label:"Name",value:A,onValueChange:C})]}),(0,s.jsxs)("div",{className:"border-b border-gray-200 p-4 dark:border-gray-700",children:[(0,s.jsx)("div",{className:"mb-3 text-xs font-semibold tracking-wide text-gray-500 uppercase",children:"Run Simulation"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(o.Input,{size:"sm",type:"number",label:"Trials",value:String(L),onValueChange:e=>{R(Math.max(1,Math.min(200,Number(e)||1)))},isDisabled:O,className:"w-20"}),(0,s.jsx)(r.Button,{color:"primary",onPress:ei,isDisabled:O,className:"flex-1",size:"sm",startContent:O?(0,s.jsx)(d.Spinner,{size:"sm",color:"white"}):(0,s.jsx)(j.Play,{className:"h-4 w-4"}),children:"Run"}),(0,s.jsx)(r.Button,{color:"danger",variant:"flat",onPress:()=>{W.current?.abort()},isDisabled:!O,size:"sm",startContent:(0,s.jsx)(v.Square,{className:"h-4 w-4"}),children:"Stop"})]}),F&&(0,s.jsxs)("div",{className:"mt-3 space-y-1",children:[(0,s.jsxs)("div",{className:"text-xs text-gray-600 dark:text-gray-400",children:["Trial ",F.trialIndex+1,"/",L," · Phase ",F.phase,"/12 ·"," ",es,"%"]}),(0,s.jsx)(l.Progress,{value:es,size:"sm",color:"primary"})]}),H&&(0,s.jsx)("div",{className:"mt-3 rounded border border-red-200 bg-red-50 p-2 text-xs text-red-800 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300",children:H})]}),(0,s.jsxs)("div",{className:"flex-1 p-4",children:[(0,s.jsxs)("div",{className:"mb-3 flex items-center gap-2",children:[(0,s.jsx)("span",{className:"text-xs font-semibold tracking-wide text-gray-500 uppercase",children:"Results"}),z&&V?.timestamp&&(0,s.jsxs)("span",{className:"text-xs text-gray-400",children:["· ",new Date(V.timestamp).toLocaleDateString()]}),z&&(0,s.jsx)(c.Tooltip,{content:z.isValid?"Valid (coverage ≥ 94%)":"Invalid (coverage < 94%)",placement:"top",children:(0,s.jsx)("span",{className:"cursor-help",children:z.isValid?(0,s.jsx)("span",{className:"text-green-500",children:"✓"}):(0,s.jsx)("span",{className:"text-red-500",children:"✗"})})}),z&&(0,s.jsx)(c.Tooltip,{content:$?"Copied!":"Copy results as markdown",placement:"top",children:(0,s.jsx)("button",{onClick:et,className:"ml-auto p-1 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300",children:$?(0,s.jsx)(w.Check,{className:"h-4 w-4 text-green-500"}):(0,s.jsx)(b.Copy,{className:"h-4 w-4"})})})]}),!z&&!O&&(0,s.jsx)("div",{className:"text-sm text-gray-500",children:"No results yet. Run a simulation to see scores."}),z&&(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"rounded-lg border border-gray-200 p-3 dark:border-gray-700",children:[(0,s.jsx)("div",{className:"text-xs text-gray-500",children:"Total Score"}),(0,s.jsx)("div",{className:"text-xl font-bold",children:z.totalScore.toFixed(2)}),(0,s.jsx)("div",{className:"text-xs text-gray-400",children:"lower is better"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,s.jsxs)("div",{className:"rounded-lg border border-gray-200 p-2 dark:border-gray-700",children:[(0,s.jsx)("div",{className:"text-xs text-gray-500",children:"Coverage"}),(0,s.jsxs)("div",{className:"text-lg font-semibold",children:[(100*z.coverage).toFixed(1),"%"]})]}),(0,s.jsxs)("div",{className:"rounded-lg border border-gray-200 p-2 dark:border-gray-700",children:[(0,s.jsx)("div",{className:"text-xs text-gray-500",children:"Runtime"}),(0,s.jsx)("div",{className:"text-lg font-semibold",children:e4(z.runDurationMs)})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-2 text-xs font-medium text-gray-600 dark:text-gray-400",children:"Phase Scores"}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-1",children:z.phaseScores.map((e,t)=>(0,s.jsxs)("div",{className:"flex items-center justify-between rounded border border-gray-200 px-2 py-1 dark:border-gray-700",children:[(0,s.jsxs)("span",{className:"text-xs text-gray-500",children:["P",t+1]}),(0,s.jsx)("span",{className:"font-mono text-xs",children:e.toFixed(2)})]},t))})]}),(0,s.jsx)(eG,{results:z})]})]})]})]}),(0,s.jsx)(m.Modal,{isOpen:K,onClose:()=>J(!1),size:"sm",classNames:{base:"bg-white dark:bg-gray-800",header:"border-b border-gray-200 dark:border-gray-700",footer:"border-t border-gray-200 dark:border-gray-700"},children:(0,s.jsxs)(f.ModalContent,{children:[(0,s.jsx)(p.ModalHeader,{children:"Delete Algorithm"}),(0,s.jsx)(g.ModalBody,{children:(0,s.jsxs)("p",{className:"text-sm text-gray-700 dark:text-gray-300",children:["Are you sure you want to delete ",(0,s.jsx)("span",{className:"font-semibold",children:A}),"? This action cannot be undone."]})}),(0,s.jsxs)(x.ModalFooter,{children:[(0,s.jsx)(r.Button,{variant:"light",onPress:()=>J(!1),children:"Cancel"}),(0,s.jsx)(r.Button,{color:"danger",onPress:()=>{if("user"===X.kind){var e;e=X.id,em(),window.localStorage.removeItem(ef(e)),ev(X.id),Q(),k(e3({kind:"baseline",id:eu[0].id})),J(!1)}},children:"Delete"})]})]})})]})}function e6(){return(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)("div",{className:"flex h-screen items-center justify-center pt-16",children:"Loading..."}),children:(0,s.jsx)(e8,{})})}e.s(["default",()=>e6],946447)}]);