import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Index',
		component: () => import('@/views'),
		children: [{
				path: '/user',
				name: 'UserList',
				component: () => import('@/views/user')
			},
			{
				path: '/role',
				name: 'RoleList',
				component: () => import('@/views/role')
			},
			{
				path: '/roleusers',
				name: 'RoleUsers',
				component: () => import('@/views/role/users')
			},
			{
				path: '/resource',
				name: 'ResourceList',
				component: () => import('@/views/resource')
			},
			{
				path: '/roleresource',
				name: 'RoleResource',
				component: () => import('@/views/role/resource')
			},
			{
				path: '/brand',
				name: 'BrandList',
				component: () => import('@/views/brand')
			},
			{
				path: '/category',
				name: 'CategoryList',
				component: () => import('@/views/category')
			},
			{
				path: '/spu',
				name: 'SpuList',
				component: () => import('@/views/spu')
			},
			{
				path: '/sku',
				name: 'SkuList',
				component: () => import('@/views/sku')
			},
			{
				path: '/product',
				name: 'ProductList',
				component: () => import('@/views/product')
			},
			{
				path: '/information',
				name: 'InformationList',
				component: () => import('@/views/information')
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/login')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next()
		return
	}
	if (store.getters.GET_TOKEN) {
		next()
		return
	}
	next('/login')
})
export default router
