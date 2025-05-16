import type { Curve } from "three";

export type BoxGeometryArgs = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number
]

export type SphereGeometryArgs = [
    radius?: number,
    widthSegments?: number,
    heightSegments?: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number,
]

export type TubeGeometryArgs = [
    path: Curve<any>,
    tubularSegments?: number,
    radius?: number,
    radialSegments?: number,
    closed?: boolean,
]

export type ConeGeometryArgs = [
    radius?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
];

export type CylinderGeometryArgs = [
    radiusTop?: number,
    radiusBottom?: number,
    height?: number,
    radialSegments?: number,
    heightSegments?: number,
    openEnded?: boolean,
    thetaStart?: number,
    thetaLength?: number
];

export type RingGeometryArgs = [
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number
];

export type TorusGeometryArgs = [
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number
];


export type DefaultGeometry = {
    color?:string,
    metalness?:number,
    roughness?:number
}

