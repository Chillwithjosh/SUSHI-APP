export enum SelectedPage {
    Home = "home",
    Menu = "menu",
    AboutUs = "aboutus",
    Services = "services",
    Offers = "Offres",
    footer = "footer"
}

export interface Icon {
    icon: JSX.Element
}

export interface PopularCategoryType {
    image: string
    title: string
    description: string
}

export interface ServiceType {
    image: string
    title: string
    description: string
}

export interface BestDishType {
    image: string
    title: string
    description: string
    cost: string
    rating: string
}