import{d as p,k as u,r as s,i as f,o as d,c,h as _}from"./index--PhRNylI.js";import{u as k,_ as v}from"./workflow.vue_vue_type_style_index_0_lang-CSNo0yjz.js";import{h as g}from"./workflow-CnYlkeoT.js";import"./job-task-list-table.vue_vue_type_script_setup_true_lang-CiYHLygb.js";import"./table-DvozQPKE.js";import"./Grid-C8sbif0M.js";import"./job-Tsw2tz69.js";import"./detail-drawer-CS6ssopv.js";import"./DescriptionsItem-BzmwSMF7.js";import"./log-drawer-DaEZFcwz.js";import"./CollapseItem-BccPzD5x.js";import"./code-mirror.vue_vue_type_script_setup_true_lang-BxhWNz7f.js";import"./cron-input.vue_vue_type_style_index_0_lang-CaeUqGwF.js";import"./group-Rd_jp_gh.js";const T=p({name:"workflow_form_detail",__name:"index",setup(w){const e=k(),i=u(),t=s(!1),a=String(i.query.id),r=s({}),l=async()=>{t.value=!0;const{data:n,error:o}=await g(a);o||(r.value=n),t.value=!1};return f(()=>{e.clear(),e.setType(1),e.setId(a),l()}),(n,o)=>(d(),c(_(v),{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=m=>r.value=m),spinning:t.value,disabled:""},null,8,["modelValue","spinning"]))}});export{T as default};