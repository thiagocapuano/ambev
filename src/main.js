//Não funciona
//const { transfer, broadcast, waitForTx } = require('@waves/waves-transactions');

import App from './App.svelte';


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;