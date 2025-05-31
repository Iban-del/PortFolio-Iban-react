import type { Mesh } from "three"
import gsap from 'gsap'

interface Annimationinterface {
    mesh:Mesh,
    delta?:number
}

const topDown = ({
    mesh
}:Annimationinterface) =>{
    gsap.to(mesh.position,{

    })
}