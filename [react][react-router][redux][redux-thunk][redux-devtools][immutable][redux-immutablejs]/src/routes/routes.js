import React from 'react';
import loadable from '@loadable/component';
import {renderRoutes} from "react-router-config";
const Login = loadable(() => import('src/components/Login'));
const Layout=loadable(() => import('src/components/Layout'));
const A=loadable(() => import('src/components/A'));
const AChild=loadable(() => import('src/components/AChild'));
const AChild2=loadable(() => import('src/components/AChild2'));
const B=loadable(() => import('src/components/B'));
const Not=loadable(() => import('src/components/Not'));
const NotOut=loadable(() => import('src/components/NotOut'));
const Basic=loadable(() => import('src/components/Basic'));
const routes = [
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/',//此处可加，可不加,如果你想把404页面不放在Layout框架里，那么需要修改path，也就是加命名空间
        component: Layout,
        routes: [
            {
                path: '/',
                exact: true,//此处必须加，否则，后面的路径都会被它路由到
                component: Basic
            },
            {
                path: '/a',
                component: A,
                routes: [
                    {
                        path: '/a',
                        exact: true,//此处可加，可不加
                        component: AChild2
                    },
                    {
                        path: '/a/a-child',//由于routes数组中的子路由的path也是要写全部的路径，所以，如果没有公共部分，不建议使用routes子路由，这样也能使用不包含在框架中的404页面
                        component: AChild
                    },

                ]
            },
            {
                path: '/b',
                component: B
            },
            {
                path: '*',//如果此处，未定义*的路由，则假如访问/d的话，则会调用Layout组件，并且忽略Layout组件中的{renderRoutes(this.props.route.routes)}
                component: Not
            },

        ]
    },

    {
        path: '*',
        component: NotOut
    },

]


export default routes
