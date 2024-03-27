import * as React from 'react';
import type { ColorValue, MeasureInWindowOnSuccessCallback, MeasureLayoutOnSuccessCallback, MeasureOnSuccessCallback, ViewProps } from 'react-native';
import type { NumberProp } from '../lib/extract/types';
import Shape from './Shape';
import type { GProps } from './G';
export interface SvgProps extends GProps, ViewProps {
    width?: NumberProp;
    height?: NumberProp;
    viewBox?: string;
    preserveAspectRatio?: string;
    color?: ColorValue;
    title?: string;
}
export default class Svg extends Shape<SvgProps> {
    static displayName: string;
    static defaultProps: {
        preserveAspectRatio: string;
    };
    measureInWindow: (callback: MeasureInWindowOnSuccessCallback) => void;
    measure: (callback: MeasureOnSuccessCallback) => void;
    measureLayout: (relativeToNativeNode: number, onSuccess: MeasureLayoutOnSuccessCallback, onFail: () => void) => void;
    setNativeProps: (props: SvgProps & {
        bbWidth?: NumberProp;
        bbHeight?: NumberProp;
    }) => void;
    toDataURL: (callback: (base64: string) => void, options?: object) => void;
    render(): React.JSX.Element;
}
//# sourceMappingURL=Svg.d.ts.map