import logo from './logo.png'
import cart from './cart.png'
import banner1 from './banner1.webp'
import banner2 from './banner2.webp'
import banner3 from './banner3.webp'
//import bread1 from './bread.jpg'
import bread2 from './bread2.jpg'
import bread3 from './bread3.jpg'
import bread4 from './bread4.jpg'

import cake1 from './cake1.jpg'
import cake2 from './cake2.webp'

import drink1 from './drink1.webp'

import milkTea1 from './milktea1.png'

export const assets = {
    logo, cart, banner1, banner2, banner3,
}

export const categories = [
        {
            name: 'Bánh Gato',
            category: 'GATO',
            image: cake1
        },
        {
            name: 'Bánh Gato Cao Cấp',
            category: 'PREMIUM_GATO',
            image: cake2
        },
        {
            name: 'Bánh Mỳ Phong Cách Nhật Bản',
            category: 'JP_BREAD',
            image: bread2
        },
        {
            name: 'Bánh Mỳ Phong Cách Pháp',
            category: 'FR_BREAD',
            image: bread3
        },
        {
            name: 'Bánh Mỳ Phong Cách Nga',
            category: 'RS_BREAD',
            image: bread4
        },
        {
            name: 'Mojito Thanh Nhiệt',
            category: 'MOJITO',
            image: drink1
        },
        {
            name: 'Trà Sữa',
            category: 'MILK_TEA',
            image: milkTea1
        },
    ]