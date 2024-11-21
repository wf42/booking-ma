import basket_icon from './basket_icon.png'
import logo from './logo.png'
import logo2 from './logo2.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'

import trips from './trips.png'
import course from './course.png'
import endru from './endru.png'


import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import instagram_icon from './instagram_icon.png'
import whatsapp_icon from './whatsapp_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    instagram_icon,
    whatsapp_icon,
    twitter_icon,
    logo2,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Beach trips",
        menu_image: menu_1
    },
    {
        menu_name: "full course",
        menu_image: menu_2
    },
    {
        menu_name: "endurance",
        menu_image: menu_3
    }]

export const service_list = [
    {
        _id: "1",
        name: "Beach trips",
        image: trips,
        price: 15,
        description: "sunrise beach trips with professional trainer",
        category: "Beach trips"
    },
    {
        _id: "2",
        name: "trainig sessions",
        image: course,
        price: 80 ,
        description: "get training sessions with professional coach for 1 month ",
        category: "full course"
    }, 
    {
        _id: "3",
        name: "endurance race ride",
        image: endru,
        price: 120,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "endurance"
    }

]
