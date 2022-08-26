import { render as HeaderRender } from 'app01/Header'
import { render as FooterRender } from './footer'




const el = document.querySelector("#app");
HeaderRender(el);
FooterRender(el);
