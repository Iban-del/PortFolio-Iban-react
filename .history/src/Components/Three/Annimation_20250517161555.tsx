import type { Mesh } from "three"
import gsap from gsap

interface Annimationinterface {
    mesh:Mesh
}

const topDown = ({
    mesh
}:Annimationinterface) =>{
    gsap.to(position)
}