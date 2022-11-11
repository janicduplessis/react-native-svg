import { ReactNode } from 'react';
import { NumberProp, TransformProps, Units } from '../lib/extract/types';
import Shape from './Shape';
export interface PatternProps extends TransformProps {
    children?: ReactNode;
    id?: string;
    x?: NumberProp;
    y?: NumberProp;
    width?: NumberProp;
    height?: NumberProp;
    patternTransform?: TransformProps['transform'];
    patternUnits?: Units;
    patternContentUnits?: Units;
    viewBox?: string;
    preserveAspectRatio?: string;
}
export default class Pattern extends Shape<PatternProps> {
    static displayName: string;
    static defaultProps: {
        x: string;
        y: string;
        width: string;
        height: string;
    };
    render(): JSX.Element;
}
