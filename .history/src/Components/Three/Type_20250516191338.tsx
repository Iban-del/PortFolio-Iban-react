import type { RootState, ThreeEvent } from "@react-three/fiber";
import type { JSX } from "react";
import type { Curve, Mesh, Object3D } from "three";

export type MeshEventHandlers  = {
    onClick?: (e: ThreeEvent<MouseEvent>) => void;
    onContextMenu?: (e: ThreeEvent<MouseEvent>) => void;
    onDoubleClick?: (e: ThreeEvent<MouseEvent>) => void;
    onWheel?: (e: ThreeEvent<WheelEvent>) => void;
    onPointerUp?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerDown?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerOver?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerOut?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerEnter?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerLeave?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerMove?: (e: ThreeEvent<PointerEvent>) => void;
    onPointerMissed?: (e: MouseEvent) => void;
    onUpdate?: (self: Object3D) => void;
}

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


type Mesh = JSX.IntrinsicElements['group'];

export type MeshArgs ext= {
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    beforeRender?:(mesh:Mesh) => void,
}

export type DefaultGeometry = {
    position?:[x: number, y: number, z: number]
    color?:string,
    metalness?:number,
    roughness?:number
}

