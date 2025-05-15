import type { ThreeEvent } from "@react-three/fiber";
import type { Object3D } from "three";

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

export type DefaultGeometry = {

}