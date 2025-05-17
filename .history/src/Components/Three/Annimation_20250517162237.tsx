import type { Mesh } from "three"
import gsap from 'gsap'

interface Annimationinterface {
    mesh:Mesh,
    delta?:number
}

const topDown = ({
    mesh,
    delta = 0.5
}:Annimationinterface) =>{
    gsap.to(mesh.position,{
        y:'+='+delta
    })
}