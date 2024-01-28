//By Gtd232

import template from './template.html';

export default {
	async fetch(requests, env) {
		let value = {};
		const keys = await env.STATUS_INFO.list();
		//console.log(keys);
		for (const key of keys['keys']) {
      if(key.name == 'NOTICE') continue;
			value[key.name] = await env.STATUS_INFO.get(key.name);
		}
		//console.log(value);

		return new Response(template.replace('$DATA', JSON.stringify(value)).replace("$NOTICE", keys['keys'].filter(key => key.name == 'NOTICE')), {
			headers: { 'Content-Type': 'text/html' },
		});
	},
};
