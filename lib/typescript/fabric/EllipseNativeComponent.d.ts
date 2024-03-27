/// <reference types="react-native/types/modules/codegen" />
import type { ColorValue } from 'react-native';
import type { Float, Int32, WithDefault } from 'react-native/Libraries/Types/CodegenTypes';
import type { ViewProps } from './utils';
import type { UnsafeMixed } from './codegenUtils';
import { NumberProp } from '../lib/extract/types';
interface SvgNodeCommonProps {
    name?: string;
    opacity?: WithDefault<Float, 1.0>;
    matrix?: ReadonlyArray<Float>;
    mask?: string;
    markerStart?: string;
    markerMid?: string;
    markerEnd?: string;
    clipPath?: string;
    clipRule?: WithDefault<Int32, 0>;
    responsible?: boolean;
    display?: string;
    pointerEvents?: string;
}
type ColorStruct = Readonly<{
    type?: WithDefault<Int32, -1>;
    payload?: ColorValue;
    brushRef?: string;
}>;
interface SvgRenderableCommonProps {
    fill?: ColorStruct;
    fillOpacity?: WithDefault<Float, 1.0>;
    fillRule?: WithDefault<Int32, 1>;
    stroke?: ColorStruct;
    strokeOpacity?: WithDefault<Float, 1.0>;
    strokeWidth?: UnsafeMixed<NumberProp>;
    strokeLinecap?: WithDefault<Int32, 0>;
    strokeLinejoin?: WithDefault<Int32, 0>;
    strokeDasharray?: UnsafeMixed<ReadonlyArray<NumberProp> | NumberProp>;
    strokeDashoffset?: Float;
    strokeMiterlimit?: Float;
    vectorEffect?: WithDefault<Int32, 0>;
    propList?: ReadonlyArray<string>;
}
interface NativeProps extends ViewProps, SvgNodeCommonProps, SvgRenderableCommonProps {
    cx?: UnsafeMixed<NumberProp>;
    cy?: UnsafeMixed<NumberProp>;
    rx?: UnsafeMixed<NumberProp>;
    ry?: UnsafeMixed<NumberProp>;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
//# sourceMappingURL=EllipseNativeComponent.d.ts.map