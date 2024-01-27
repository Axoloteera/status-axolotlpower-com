//By Gtd232

import template from './template.html';

export default {
  async fetch(request, env) {
    let value = {}
    const keys = await env.STATUS_INFO.list();
    //console.log(keys);
    for (const key of keys["keys"]) {
      value[key.name] = await env.STATUS_INFO.get(key.name);
    }
    //console.log(value);

    return new Response(template.replace("$DATA", JSON.stringify(value)), {
        headers: { 'Content-Type': 'text/html' }
    });
  }
};

