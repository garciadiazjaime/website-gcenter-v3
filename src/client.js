import * as sapper from '@sapper/app';
import { googleAnalytics } from './support/googleAnalytics'

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	googleAnalytics('UA-26633604-1')
});
