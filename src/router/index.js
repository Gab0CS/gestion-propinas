import Vue from 'vue';
import VueRouter from 'vue-router';
import FormularioTotalPropinas from '../components/FormularioTotalPropinas.vue';
import FormularioDividirPropinas from '../components/FormularioDividirPropinas.vue';
import FormularioMetodoPago from '../components/FormularioMetodoPago.vue';
import Recibo from '../components/Recibo.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/total-propinas', component: FormularioTotalPropinas },
  { path: '/dividir-propinas', component: FormularioDividirPropinas },
  { path: '/metodo-pago', component: FormularioMetodoPago },
  { path: '/recibo', component: Recibo },
  { path: '*', redirect: '/total-propinas' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
