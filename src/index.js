//By Gtd232

import template from './template.html';

export default {
  async fetch(request, env) {
    let value = {}
    const keys = await env.STATUS_INFO.list();
    for (const key of keys) {
      value[key] = await env.STATUS_INFO.get(key);
    }

    return new Response(template.replace("$DATA", JSON.stringify(value)), {
        headers: { 'Content-Type': 'text/html' }
    });
  }
};

