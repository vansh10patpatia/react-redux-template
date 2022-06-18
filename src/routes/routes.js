import Home from '../pages'
import Second from '../pages/second'

export const routes = [
    {
        path : '/',
        exact : true,
        Component : Home
    },
    {
        path:'/second',
        exact:true,
        Component: Second
    }
]